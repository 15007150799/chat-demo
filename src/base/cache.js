
/**
 * 数据缓存（webdemo中的数据均在此封装）
 */

/**
 * 扩展对象方法
 * vue已经扩展这些方法来处理数据绑定,为了方便API统一并能迁移，特此处理
 */
if(!Object.$add){
	Object.$add = function(key,val){
		if (!this.hasOwnProperty(key)){
			this[key] = val;		
		}
	};
	Object.$set = function(key,val){
		this.$add(key,val);
		this[key] = val;
	};
	Object.$delete = function(key){
	 	if (this.hasOwnProperty(key)){
	    	delete this[key];
	 	}
	};
}
var ACCOUNT;
var Cache = function (account) {
	this.friendlist = [];
	this.personMap = {};
	this.teamlist = [];
	this.teamMap = {};
	this.msgs ={};
	this.sessionlist=[];
	this.unreadMsg = {};
	this.blacklist = [];
	this.mutelist = [];
	this.crtSession = {scene:"",to:""};
	ACCOUNT = account;
};
/*-------------------用户信息相关-------------------------*/

/**
* 根据account获取用户对象
* @param account: 用户account
* @return {Object|Boolean} 用户对象,不存在返回false
*/
Cache.prototype.getUserById = function (account) {
   if(this.personMap[account]){
   		return this.personMap[account];
   }
	return false;
};

/**
 * 添加用户信息列表
 * @param {Array} list 用户信息列表
 */
Cache.prototype.setPersonlist = function(list){
	var item;
	for (var i = list.length - 1; i >= 0; i--) {
	 	item = list[i];
	 	this.personMap.$set(item.account,item);
	}
};

/**
 * 更新用户头像
 * @param  {String} url 链接
 */
Cache.prototype.updateAvatar = function(url){
	this.personMap[ACCOUNT].$set(this.personMap[ACCOUNT].avatar, url);
};

/**
 * 更新用户信息
 * @param  {Object} list 用户信息
 */
Cache.prototype.updatePersonlist = function(list){
	if(!this.personMap[list.account]){
		this.personMap.$add(list.account,list);
	}else{
		for(var p in list){
			this.personMap[list.account].$set(p,list[p]);
		}			
	}
	
};

/**
 * 获取用户列表
 * @return {Array} 用户列表
 */
Cache.prototype.getPersonMap= function(){
	return this.personMap;
};

/*-------------------好友相关-------------------------*/

/**
 * 添加好友
 * @param {Object} list 用户信息
 */
Cache.prototype.addFriend = function(list){
	if(!this.isFriend(list)){
		this.friendlist.push(list);
	}
};

/**
 * 删除好友
 * @param {String} account 账号
 */
Cache.prototype.removeFriend = function(account){
	for (var i = this.friendlist.length-1; i >= 0; i--) {
		if(this.friendlist[i] == account){
			this.friendlist.splice(i,1);
		}
	}
};

/**
 * 获取好友列表信息
 * @return {Array} 好友列表数据
 */
Cache.prototype.getFriendlist = function(){
	return this.friendlist;
};

/**
 * 获取好友列表信息（不包括在黑名单中的）
 * @return {Array} 好友列表数据
 */
Cache.prototype.getFriendlistOnShow = function(){
	var array = [];
	for(var i =0;i<this.friendlist.length; i++){
		if(!this.inBlacklist(this.friendlist[i])){
			array.push(this.getUserById(this.friendlist[i]));
		}
	}
	return array;
};

/**
 * 是否为好友
 * @param  {String}  account 账号
 * @return {Boolean}         true/false
 */
Cache.prototype.isFriend = function(account){
	for (var i = this.friendlist.length-1 ; i >= 0; i--) {
		if(this.friendlist[i] == account){
			return true;
		}
	}
	return false;
};

/*-------------------会话列表相关-------------------------*/

/**
 * 添加到会话列表
 * @param {Array|Object} sessions 会话对象
 */
Cache.prototype.addSession = function(sessions){
	if(!Array.isArray(sessions)){
		this.sessionlist.unshift(sessions);
		return;
	}
	this.sessionlist = [];
	for (var i = 0; i <sessions.length; i++) {
		this.sessionlist.push(sessions[i]);
	}
};

/**
 * 获取当前会话
 * @return {Array} 会话集合
 */
Cache.prototype.getSessionlist = function () {
	return this.sessionlist;
};

/**
 * 标记当前会话面板
 * @param {String} value  
 */
Cache.prototype.setCrtSession = function (value) {
	this.crtSession.$set("scene",value.scene);
	this.crtSession.$set("to",value.to);
};

/**
 * 获取当前会话的账号
 * @return {String} 会话账号
 */
Cache.prototype.getCrtSession = function(){
	return this.crtSession;
};

/*-------------------消息相关-------------------------*/

/**
 * 缓存消息
 * @param {Array|Object} msgs 消息
 */
Cache.prototype.addMsgs = function(msgs) {
	var item,
		user,
		i,
		j;
	if(!Array.isArray(msgs)){
		this.addMsg(msgs);
		return;
	}
	// 去重消息，防止断线重连后推送的消息跟本地存的重复
	for (i = msgs.length - 1; i >= 0; i--) {
		if(msgs[i].scene==="team"){
			user = msgs[i].to;
			if(this.msgs["team-"+user]){
				item = this.msgs["team-"+user];
				for (j = item.length - 1; j >= 0; j--) {
					if(item[j].idClient === msgs[i].idClient){
						msgs.splice(i,1);
						break;
					}
				}	
			}
		}else{
			user = (msgs[i].from === ACCOUNT?msgs[i].to:msgs[i].from);
			if(this.msgs["p2p-"+user]){
				item = this.msgs["p2p-"+user];
				for (j = item.length - 1; j >= 0; j--) {
					if(item[j].idClient === msgs[i].idClient){
						msgs.splice(i,1);
						break;
					}
				}
			}
		}	
	}
	for (i = msgs.length - 1; i >= 0; i--) {
		if(msgs[i].scene==="team"){
			user = msgs[i].to;
			if(!this.msgs["team-"+user]){
				this.msgs.$add("team-"+user,[]);
			}
			this.msgs["team-"+user].push(msgs[i]);
		}else{
			user = (msgs[i].from === ACCOUNT?msgs[i].to:msgs[i].from);
			if(!this.msgs["p2p-"+user]){
				this.msgs.$add("p2p-"+user,[]);
			}
			this.msgs["p2p-"+user].push(msgs[i]);
		}
	}
};

/**
 * 缓存消息(一条)
 * @param {Object} msg 消息
 */
Cache.prototype.addMsg = function(msg){
	var user,
		to;
	if(msg.scene==="team"){
		to =msg.to;
		user = "team-"+to;
		if(!this.msgs[user]){
			this.msgs.$add(user,[]);
		}
		this.msgs[user].push(msg);
	}else{
		to = msg.from === ACCOUNT?msg.to:msg.from;
		user = "p2p-"+to;
		if(!this.msgs[user]){
			this.msgs.$add(user,[]);
		}
		this.msgs[user].push(msg);
	}
	for(var i = 0;i<this.sessionlist.length;i++){
		if(to===this.sessionlist[i].to){
			this.sessionlist.splice(i,1);
			break;
		}
	}
	this.addSession({scene:msg.scene,to:to});
};

/**
 * 删除漫游消息/历史消息
 * @param {String} to 需移除的消息对象标识
 */
Cache.prototype.rmMsgs = function(to) {
	if(typeof(to) === "string"){
		if(!!this.msgs["p2p-"+to]){
			this.msgs.$delete("p2p-"+to);
		}
	}else{
		if(!!this.msgs["team-"+to]){
			this.msgs.$delete("team-"+to);
		}
	}
};
/**
 * 获取消息map
 * @return {Object}    
 */
Cache.prototype.getMsgsMap = function(to) {
	return this.msgs;
};

/**
 * 获取漫游/历史消息
 * @param  {String} to 消息的对象
 * @return {Array}    
 */

Cache.prototype.getMsgs = function(to) {
	if(typeof(to) === "string"){
		if(!!this.msgs["p2p-"+to]){
			return this.msgs["p2p-"+to];
		}else{
			return [];
		}
	}else{
		if(!!this.msgs["team-"+to]){
			return this.msgs["team-"+to];
		}else{
			return [];
		}
	}
};

/**
 * 根据映射名来获取消息对象集合 如"p2p-iostest"
 * @param  {String} name 名字
 * @return {Array}     
 */
Cache.prototype.getMsgsByUser = function (name) {
	return this.msgs[name]||[];
};


/**
 * 离线消息处理
 * @param {Array} msgs 
 */
Cache.prototype.addOfflineMsgs= function(msgs) {
	for (var i = msgs.length - 1; i >= 0; i--) {
		if (/text|image|file|audio|video|geo|custom|notification/i.test(msgs[i].type)) {
			this.addMsgs(msgs[i]);
		}else{
			continue;
		}
		//群通知消息不计数
		if(/text|image|file|audio|video|geo|custom/i.test(msgs[i].type)){
		 	this.addUnreadMsg(msgs[i]);
		}
	}
};

/**
 * 获取未读消息计数对象
 * @return {Object} 未读消息对象
 */
Cache.prototype.getUnreadMsg = function(){
	return this.unreadMsg;
};

/**
 * 添加未读消息计数
 * @param {Object} 消息
 */
Cache.prototype.addUnreadMsg = function(msg) {
	var who = (msg.scene==="team")?msg.to:msg.from;
	// if(this.inMutelist(who)){
	// 	return;
	// }else{
	if (this.unreadMsg.hasOwnProperty(who)) {
		this.unreadMsg.$set(who,{count: ++this.unreadMsg[who].count});		
	} else {
		this.unreadMsg.$add(who,{count: 1});
	}		
	// }
};

/**
 * 设置未读消息数（一般置空用）
 * @param {String} account 账号
 * @param {Int} count   值
 */
Cache.prototype.setUnreadMsg = function(account,count) {
	if (this.unreadMsg[account] && this.unreadMsg[account].hasOwnProperty('count')) {
		this.unreadMsg[account].$set('count',count);
	}
};

/*-------------------群相关-------------------------*/

/**
 * 初始化群列表
 * @param {array} list 
 */
Cache.prototype.setTeamlist = function(list) {
	var item;
	for (var i = list.length - 1; i >= 0; i--) {
		item = list[i];
		this.teamMap.$set(item.teamId, item);
	}
	this.teamlist = list;
};

/**
 * 增加群组
 * @param {Object} team 群组信息
 */
Cache.prototype.addTeam = function(team) {
	this.teamMap.$add(team.teamId,team);
	this.teamlist.push(team);
};

/**
 * 是否存在该群组
 * @param  {Int}  id 群组ID
 * @return {Boolean}    true/false
 */
Cache.prototype.hasTeam = function(id) {
	if(!!this.teamMap[id]){
		return true;
	}
	return false;
};

/**
 * 获取群列表（用户列表展示）
 * @return {Array} 群列表
 */
Cache.prototype.getTeamlist = function() {
    return this.teamlist;
};

/**
 * 获取群对象（用于群信息映射）
 * @return {Object} 群对象映射
 */
Cache.prototype.getTeamMap = function() {
    return this.teamMap;
};

/**
 * 获取群内容
 * @param  {String|Int} teamId 群id
 * @return {Object}        群对象
 */
Cache.prototype.getTeamById = function(teamId) {
	teamId = parseInt(teamId,10);
   	if(this.hasTeam(teamId)){
		return this.teamMap[teamId];
	}
    return null;
};

/**
 * 删除群
 * @param  {String|Int} id 群Id
 * @return {Void}    
 */
Cache.prototype.removeTeamById = function (id) {
	id = parseInt(id,10);
	this.teamMap.$delete(id);
    for (var i in this.teamlist) {
        if (this.teamlist[i].teamId === id) {
            this.teamlist.splice(i, 1);
            break;
        }
    }
};

/**
 * 设置群名
 * @param {Int} teamId 群列表
 * @param {String} name   群名
 */
Cache.prototype.setTeamName= function (teamId,name) {
   this.getTeamById(teamId).$set("name",name);
   for (var i in this.teamlist) {
        if (this.teamlist[i].teamId === teamId) {
            this.teamlist[i].$set("name",name);
            break;
        }
    }
};

/*-------------------静音名单相关-------------------------*/

Cache.prototype.setMutelist= function (data) {
   this.mutelist = data;
};

Cache.prototype.inMutelist = function(account){
	for (var i = this.mutelist.length - 1; i >= 0; i--) {
		if(this.mutelist[i] == account){
			return true;
		}
	}
	return false;
};

Cache.prototype.addToMutelist= function (data) {
   this.mutelist.push(data);
};

Cache.prototype.removeFromMutelist = function(account){
	for (var i = this.mutelist.length - 1; i >= 0; i--) {
		if(this.mutelist[i] == account){
			this.mutelist.splice(i,1);
			return true;
		}
	}
	return false;
};

/*-------------------黑名单相关-------------------------*/

Cache.prototype.setBlacklist= function (data) {
   this.blacklist = data;
};

Cache.prototype.getBlacklist= function () {
   return this.blacklist;
};

Cache.prototype.inBlacklist = function(account){
	for (var i = this.blacklist.length - 1; i >= 0; i--) {
		if(this.blacklist[i] == account){
			return true;
		}
	}
	return false;
};

Cache.prototype.addToBlacklist= function (data) {
   this.blacklist.push(data);
};

Cache.prototype.removeFromBlacklist = function(account){
	for (var i = this.blacklist.length - 1; i >= 0; i--) {
		if(this.blacklist[i] == account){
			this.blacklist.splice(i,1);
			return true;
		}
	}
	return false;
};

module.exports = Cache;

