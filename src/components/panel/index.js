require('./index.less');
/**
 * 判断会话的对象
 * @param  {Object} msg 消息
 * @return {String} 会话的对象
 */
function switchConversationUser(account,msg){
	return msg.to === account? msg.from : msg.to;
}

module.exports = {
    template: require('./index.tpl'),
    props:["personmap","teammap","msgs","friendlist","sessionlist","teamlist","crtsession","account","setcrtsession"],
    data:function(){
    	return {
	    	crtTab: "session",
	    	tabs: ["session","friend","team"]		
    	};
    },
    filters:{
    	avatar:function(session){
    		var msgs = this.msgs[session.scene+"-"+session.to],
    			len = msgs.length,
  				msg =  msgs[len-1],
    			who = switchConversationUser(this.account,msg);
    		if(session.scene === "team"){
    			return this.teammap[who].type;
    		}else{
    			return this.personmap[who].avatar;
    		}
    	},
    	name:function(session){
    		var msgs = this.msgs[session.scene+"-"+session.to],
    			len = msgs.length,
  				msg =  msgs[len-1],
    			who = switchConversationUser(this.account,msg);
    		if(session.scene === "team"){
    			return "images/"+this.teammap[who].name;
    		}else{
    			return this.personmap[who].nick;
    		}
    	},
    	message:function(session){
    		var msgs = this.msgs[session.scene+"-"+session.to],
    			len = msgs.length,
  				msg =  msgs[len-1];
			return msg.text;
    	},
    	count:function(account){

    	},
    	msgTime:function(account){

    	}
    },
    methods: {
	    doChat:function(value){
	    	this.setcrtsession(value);
	    },
        doFriendChat:function(value){
            this.setcrtsession({scene:"p2p",to:value});
        },
        doTeamChat:function(value){
            this.setcrtsession({scene:"team",to:value});
        },
	}
};