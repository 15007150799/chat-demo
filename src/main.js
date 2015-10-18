require('./main.less');
module.exports = function(account){
	var util = require('./base/util'),
		Connect = require('./base/sdkBridge'),
		Cache = require('./base/cache'),
		cache = new Cache(account),
		mysdk,
		page  = {
			init:function(){
				if(!this.chat){
					var chat = new Vue({
						el:'#chat',
						template:require('./main.tpl'),
						data:{
							account:account,
							msgs:cache.getMsgsMap(),
							personMap:cache.getPersonMap(),
							teammap:cache.getTeamMap(),
							sessionlist:cache.getSessionlist(),
							friendlist:cache.getFriendlist(),
							teamlist:cache.getTeamlist(),
							crtSession:cache.getCrtSession(),
						},
						ready:function(){
							this.$on('sendmsg', function(msg){
					            mysdk.sendTextMessage(this.crtSession.scene,this.crtSession.to,msg);
					        });	
						},
						components: {
					        personalCenter: require('components/personalCenter/index'),
					        panel:require('components/panel/index'),
					        chat:require('components/chat/index')
					    },
						filters:{
							toImage:function(url){
								if(url ==="normal"||url==="advanced"){
									return "images/"+url+".png";
								}
								var re=/^((http|https|ftp):\/\/)?(\w(\:\w)?@)?([0-9a-z_-]+\.)*?([a-z0-9-]+\.[a-z]{2,6}(\.[a-z]{2})?(\:[0-9]{2,6})?)((\/[^?#<>\/\\*":]*)+(\?[^#]*)?(#.*)?)?$/i;
							    if(re.test(url)){
							        return url;
							    }else{
							        return "images/default-icon.png";
							    }
							}
						},
						methods:{
							setCrtSession:function(val){
								cache.setCrtSession(val);
							}
						}
					});
				}
			}
		};
	mysdk = new Connect(account,cache,page);
};


