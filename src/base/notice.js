var Notice = function(cache){
	this.cache = cache;
};
var p = Notice.prototype;

/**
 * 通知消息处理
 * @param  {Object} msg 
 * @return {Void]}    
 */
p.messageHandler = function(msg) {
	var type = msg.attach.type, team = msg.attach.team;
	switch (type) {
		case 'addTeamMembers':		// 添加成员
			this.addMember(team);
			break;
		case 'removeTeamMembers':	// 移除成员
			this.removeMember(team, msg);
			break;
		case 'leaveTeam':		// 离开群
			this.leaveTeam(team, msg);
			break;
		case 'updateTeam':		// 更新群
			this.updateTeam(team, msg);
			break;
		case 'acceptInvite':	// 接受入群邀请
			this.acceptInvite(team,msg);
			break;
		case 'passApply':		// 群主/管理员 通过加群邀请
			this.passApply(team);
			break;
		default:				// 其他
			console.log("type-->" + type);
			break;
	}
};

/**
 * 添加成员
 * @param {Object} team 
 */
p.addMember = function(team) {
	if(!this.cache.hasTeam(team.teamId)){
		this.cache.addTeam(team);
	}
};

/**
 * 群主/管理员 移除成员
 * @param  {Object} team 群（普通/高级）对象
 * @param  {Object} msg  消息对象
 * @return {Void}   
 */
p.removeMember =  function(team, msg) {  
	var teamId = team.teamId,
		removeAccounts = msg.attach.accounts;
	if (removeAccounts.indexOf(userUID) != -1) { 
		this.cache.rmMsgs(teamId);
	}
};

p.leaveTeam = function(team, msg) {   
	

};

//待定
p.updateTeam = function(team, msg) {  
	this.cache.setTeamName(msg.to,teamName);
};
module.exports = Notice;