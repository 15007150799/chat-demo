var NIM = require("../../lib/NIM_Web_SDK_v1.5.0.js");
var Notice = require("./notice");
var userAccount;

var SDKBridge = function (account,cache,controller) {
    userAccount = account;
    this.cache = cache;
    this.person = {};
    this.controller = controller;
    this.notice = new Notice(cache);
	this.nim = new NIM({
		debug: true || { api: 'info', style: 'font-size:14px;color:blue;background-color:rgba(0,0,0,0.1)' },
        // appKey: 'fe416640c8e8a72734219e1847ad2547',//测试
        appKey: '45c6af3c98409b18a84451215d0bdd6e',
        account: userAccount,
        token: 'e10adc3949ba59abbe56e057f20f883e',//暂时写死
        onconnect: onConnect.bind(this),
        ondisconnect: onDisconnect.bind(this),
        onerror: onError.bind(this),
        onteams: onTeams.bind(this), 
        onroamingmsgs: onRoamingMsgs.bind(this),
        onofflinemsgs: onOfflineMsgs.bind(this),
        onsessions: onSessions.bind(this),
        onofflinesysmsgs: onOfflineSysMsgs.bind(this),
        onteammembers: onTeamMembers.bind(this),
        onsyncteammembersdone: onSyncTeamMembersDone.bind(this),
        onsyncdone: onSyncDone.bind(this),
        onmsg: onMsg.bind(this),
        onmyinfo:onMyInfo.bind(this),
        onsysmsg: onSysMsg.bind(this),
        oncustommsg: onCustomMsg.bind(this),
        oncreateteam: onCreateTeam.bind(this),
        onloginportschange:onLoginPortsChange.bind(this),
        onupdateteammember: onUpdateTeamMember.bind(this),
        onmutelist:onMutelist.bind(this),
        onblacklist: onBlacklist.bind(this),
        onfriends:onFriends.bind(this),
        onsynccreateteam:onSyncCreateteam.bind(this),
        onsyncmarkinblacklist:onSyncMarkinBlacklist.bind(this),
        onsyncmarkinmutelist:onSyncMarkinMutelist.bind(this),
        onsyncfriendaction:onSyncFriendAction.bind(this)

    });

	function onConnect() {
        // $('#j-errorNetwork').addClass('hide');
        this.teamMemberDone = false;
        this.sysMsgDone = false;
        console.log('连接成功');
    }

    function onKicked(obj) {
        this.iskicked = true;
        
    }

    function onError(error) {
        console.log('错误信息' + error);
    }

    function onDisconnect(obj) {
        var that = this;
        console.log('连接断开');
        // $('#j-errorNetwork').removeClass('hide');
        if(!!obj.kicked){
            var map={
                PC:"电脑版",
                Web:"网页版",
                Android:"手机版",
                iOS:"手机版",
                WindowsPhone:"手机版"
            };
            var str =obj.kicked.from;
            // alert("你的帐号于"+dateFormat(+new Date(),"HH:mm")+"被"+(map[obj.kicked.from]||"其他端")+"踢出下线，请确定帐号信息安全!");
            // window.location.href = '/webdemo/index.html';        
        }else{
            console.log('重连中');
            setTimeout(function(){
                that.nim.connect();
            },2000);
        }
    }

    function onLoginPortsChange(loginPorts) {
        console.log('当前登录帐号在其它端的状态发生改变了', loginPorts);
        // this.controller.loginPorts(loginPorts);
    }

    function onTeams(teams) {
        this.cache.setTeamlist(teams);    
    }

    function onFriends(obj){
        for(var i = 0;i<obj.length;i++){
            this.person[obj[i].account] = true;
            this.cache.addFriend(obj[i].account);
        }       
    }

    function onSessions(sessions){
        this.cache.addSession(sessions);
    }

    function onRoamingMsgs(msgs) {
        console.log('漫游消息', msgs);
        this.cache.addMsgs(msgs);

        for(var i = 0;i<msgs.length;i++){
            if(msgs[i].scene==="p2p"){
                this.person[msgs[i].from!==userAccount?msgs[i].from:msgs[i].to] = true;
            }
            //拿到一条数据即可记录帐号
            break;
        }
    }

    function onOfflineMsgs(msgs) {
        console.log('离线消息', msgs);
        this.cache.addOfflineMsgs(msgs);

        for(var i = 0;i<msgs.length;i++){
            if(msgs[i].scene==="p2p"){
                this.person[msgs[i].from!==userAccount?msgs[i].from:msgs[i].to] = true;
            }
        }
    }

    function onOfflineSysMsgs(msgs) {
        console.log('离线系统通知', msgs);
    }

    function onSyncDone() {
        console.log('消息同步完成');  
        var ctr = this.controller;
        this.sysMsgDone = true;
        //如果用户数据拉取完毕，UI开始呈现
        if(this.teamMemberDone){
            this.doPersonInfo.bind(this.person);
        }
    }

    function onSyncTeamMembersDone() {
        console.log('群成员同步完成');
        var ctr = this.controller;
        this.teamMemberDone = true;
        //如果用户消息等拉取完毕，UI开始呈现
        if(this.sysMsgDone){
            this.doPersonInfo(this.person);
        }
    }

    function onTeamMembers(obj) {
        var members = obj.members;
        for(var i = 0;i<members.length;i++){
            this.person[members[i].account] = true; 
        }
    }

    function onMsg(msg) {
        var that = this,
            who = msg.to === userAccount? msg.from : msg.to;
        if(/text|image|file|audio|video|geo|custom/i.test(msg.type)) {
            this.cache.addMsgs(msg); 
            if (this.cache.getCrtSession()!== who&&msg.from!==userAccount) { 
                this.cache.addUnreadMsg(msg);
            }
            var account = (msg.scene==="p2p"?who:msg.from);
            if(!this.cache.getUserById(account)){
                this.getUser(account,function(err,data){
                    if(!err){
                        that.cache.updatePersonlist(data);   
                    }
                });     
            }
        }else{ // type=notification
            if (msg.attach && msg.attach.type) {
                if(msg.from!==userAccount||msg.attach.type!=="leaveTeam"){  
                    this.notice.messageHandler(msg);
                    if(msg.attach.type==="addTeamMembers"||msg.attach.type==="removeTeamMembers"){
                        var accounts = msg.attach.accounts,
                            array=[];
                        for(var i=0;i<accounts.length;i++){
                            if(!this.cache.getUserById(accounts[i])){
                                array.push(accounts[i]);
                            }
                        }
                        if(array.length>0){
                            this.getUser(array,function(err,data){
                                for(var i = data.list.length - 1; i >= 0; i--) {
                                    that.cache.updatePersonlist(data);
                                }
                                that.cache.addMsgs(msg);
                            });
                        }else{
                            this.cache.addMsgs(msg);
                        }
                    }else{
                        this.cache.addMsgs(msg); 
                    }   
                }else{
                    this.notice.messageHandler(msg);
                }
            }    
        }
    }

    function onSysMsg(msg) {
        var type = msg.type,
            cache = this.cache;
        switch (type) {
            case 'deleteFriend':
                cache.removeFriend(msg.from);
                break;
            case 'addFriend':
                cache.addFriend(msg.from);
                if(!cache.getUserById(msg.from)){
                    this.getUser([{uid:msg.from}],function(data){
                        cache.updatePersonlist(data.list[0]);
                    });
                }
                break;
            default:
                console.log(msg);
                break;
        }
    }

    function onCustomSysMsg(msg) {
        console.log('收到一条自定义系统通知', msg);
    }

    function onCreateTeam(team) {
        console.log('你在其它端创建了一个群', team);
    }

    function onUpdateTeamMember(teamMember) {
        console.log('群成员信息更新了', teamMember);
    }

    function onCustomMsg(){

    }

    // 黑名单
    function onBlacklist(data){
        this.cache.setBlacklist(data);
        for(var i = 0;i<data.length;i++){
            this.person[data[i]] = true;
        }
    }

    //静音
    function onMutelist(data){
        this.cache.setMutelist(data);
        for(var i = 0;i<data.length;i++){
            this.person[data[i]] = true;
        }
    }

    function onMyInfo(data){
        this.cache.updatePersonlist(data);
    }

    function onSyncCreateteam(data){
        this.cache.addTeam(data);
    }
    // 多端同步好友关系
    function onSyncFriendAction(data){
        var type = data.type,
            that = this;
        switch (type) {
            case 'deleteFriend':
                this.cache.removeFriend(data.account);
                break;
            case 'addFriend':
                this.cache.addFriend(data.account);
                if(!this.cache.getUserById(data.account)){
                    this.getUser(account,function(err,data){
                        if(!err){
                            that.cache.updatePersonlist(data);    
                        }
                    });
                }
                break;
            default:
                console.log(data);
                break;
        }
    }

    function onSyncMarkinBlacklist(param){
        if(param.isAdd){
            this.cache.addToBlacklist(param.account);
        }else {
            this.cache.removeFromBlacklist(param.account);
        }
    }

    function onSyncMarkinMutelist(param){
        if(param.isAdd){
            this.cache.addToMutelist(param.account);
        }else {
            this.cache.removeFromMutelist(param.account);
        }
    }

   
};


var p = SDKBridge.prototype;
/**
* 发送普通文本消息
* @param scene：场景，分为：P2P点对点对话，team群对话
* @param to：消息的接收方
* @param text：发送的消息文本
* @param callback：回调
*/

p.sendTextMessage = function (scene, to, text) {
    var that = this;
    this.nim.sendText({
        scene: scene || 'p2p',
        to: to,
        text: text,
        done: function(error,msg){
            if (error) {  // 断网时，将发消息人设为自己，设置status作为标志
                msg.from = userAccount;
                msg.status = -1;
                msg.time = +new Date();
                msg.message = error;
            }
            msg.fromNick = that.cache.getUserById(msg.from).nick;
            that.cache.addMsgs(msg);
        }
    });
};

/**
* 发送自定义消息
* @param scene：场景，分为：P2P点对点对话，team群对话
* @param to：消息的接收方
* @param content：消息内容对象
* @param callback：回调
*/
p.sendCustomMessage = function (scene, to, content , callback) {
    this.nim.sendCustomMsg({
        scene: scene || 'p2p',
        to: to,
        content: JSON.stringify(content),
        done: callback
    });
};

/**
* 发送文件消息
* @param scene：场景，分为：P2P点对点对话，team群对话,callback回调
* @param to：消息的接收方
* @param text：发送的消息文本
* @param callback：回调
*/
p.sendFileMessage = function (scene, to, fileInput , callback) {
    var that = this,
        value = fileInput.value,
        ext = value.substring(value.lastIndexOf('.') + 1, value.length),
        type = /png|jpg|bmp|jpeg|gif/i.test(ext) ? 'image' : 'file';
    this.nim.sendFile({
        scene: scene,
        to: to,
        type: type,
        fileInput: fileInput,
        uploadprogress: function (data) {
            console.log(data.percentageText);
        },
        uploaderror: function () {
            console.log('上传失败');
        },
        uploaddone: function (file) {
            console.log('上传完成，服务器处理中...');
        },
        beforesend: function (msgId) {
            console.log('正在发送消息, id=' + msgId);
        },
        done: callback
    });
};

/**
 * 获取云记录消息
 * @param  {Object} param 数据对象
 * @return {void}       
 */
p.getHistoryMsgs = function(param){
    this.nim.getHistoryMsgs (param);
};

/**
 * 踢人
 * @param  {int} type  设备端
 * @return {void}     
 */
p.kick = function(type){
    var deviceIds = (type ===0?this.mobileDeviceId:this.pcDeviceId);
    this.nim.kick({
        deviceIds: [deviceIds],
        done: function(error, obj){
            alert('踢'+(type===0?'移动':'PC')+'端' + (!error?'成功':'失败'));
            console.log(error);
            console.log(obj);
        }
    });
};

p.createTeam = function(param){
    this.nim.createTeam(param);
};

p.getTeamMembers = function(param){
    this.nim.getTeamMembers(param);
};

p.updateTeam = function(param){
    this.nim.updateTeam(param);
};

p.leaveTeam = function(param){
    this.nim.leaveTeam(param);
};

p.addTeamMembers= function(param){
    this.nim.addTeamMembers(param);
};

p.removeTeamMembers = function(param){
    this.nim.removeTeamMembers(param);
};

/**
 * 加好友（不需要验证）
 * @param  {String}   uid       
 * @param  {Function} callback 
 * @return             
 */
p.addFriend = function(account,callback){
    this.nim.addFriend({
        account: account,
        done: callback
    });
};
/**
 * 删好友
 * @param  {[type]}   account  [description]
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
p.deleteFriend = function(account,callback){
    this.nim.deleteFriend({
        account: account,
        done: callback
    });
};

/**
 * 静音
 */
p.addToMutelist = function(account,callback){
    this.nim.addToMutelist({
        account: account,
        done: callback
    });
};

p.removeFromMutelist = function(account,callback){
    this.nim.removeFromMutelist({
        account: account,
        done: callback
    });
};

/**
 * 黑名单
 */
p.markInBlacklist = function(account,isAdd,callback){
    this.nim.markInBlacklist({
        account: account,
        // true表示加入黑名单，false表示从黑名单移除
        isAdd: isAdd,
        done: callback
    });
};


/**
 * 获取用户信息（如果用户信息让SDK托管）
 */
p.getUsers = function(accounts,callback){
    this.nim.getUsers({
        accounts: accounts,
        done: callback
    });
};
p.getUser = function(account,callback){
    this.nim.getUser({
        account: account,
        done: callback
    });
};

p.updateMyInfo = function(nick,gender,birth,tel,email,sign,callback){
    this.nim.updateMyInfo({
        nick:nick,
        gender:gender,
        birth:birth,
        tel:tel,
        email:email,
        sign:sign,
        done: callback
    });
};

p.updateMyAvatar = function(avatar,callback){
    this.nim.updateMyInfo({
        avatar:avatar,
        done: callback
    });
};

// p.thumbnailImage = function (options) {
//  return this.nim.thumbnailImage({
//      url:options.url,
//      mode:options.mode,
//      width:options.width,
//      height:options.height
//  })
// }

// p.cropImage = function(option){
//  return this.nim.cropImage(option);
// }

p.previewImage = function(option){
    this.nim.previewFile({
        type: 'image',
        fileInput: option.fileInput,
        uploadprogress: function(obj) {
            console.log('文件总大小: ' + obj.total + 'bytes');
            console.log('已经上传的大小: ' + obj.loaded + 'bytes');
            console.log('上传进度: ' + obj.percentage);
            console.log('上传进度文本: ' + obj.percentageText);
        },
        done: option.callback
    });
};
p.doPersonInfo = function(obj){
    var that = this;
    var array = Object.keys(obj);
    this.getUsers(array,function(error,data){
        if(!error){
            that.cache.setPersonlist(data);
            that.controller.init();
        }else{
            alert("获取用户信息失败");
        }
    }); 
};
module.exports = SDKBridge;