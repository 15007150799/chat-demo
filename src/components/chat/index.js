require('./index.less');

module.exports = {
	template:require('./index.tpl'),
	props:["personmap","teammap","msgs","crtsession","account"],
	ready:function(){

	},
	components:{
		headContainer: require('./head/index'),
        chatContainer: require('./chat/index'),
        footContainer: require('./foot/index')
	}
};