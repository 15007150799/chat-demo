require('./index.less');
module.exports = {
    template: require('./index.tpl'),
    props:["personmap","msgs","crtsession","account"],
    filters:{
    	toSession:function(obj){
    		return obj.scene+'-'+obj.to;
    	}
    }
};

