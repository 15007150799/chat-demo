require('./index.less');
module.exports = {
    template: require('./index.tpl'),
    data:function(){
        return {
            text: ''
        };
    },
    methods: {
        inputing:function(e) {
            if (e.ctrlKey && e.keyCode === 13 && this.text.length) {
        		this.$dispatch('sendmsg', this.text);
        		this.text = "";
        	}
        }
    }
};