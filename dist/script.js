(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NIMdemo"] = factory();
	else
		root["NIMdemo"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	module.exports = function(account){
		var util = __webpack_require__(6),
			Connect = __webpack_require__(8),
			Cache = __webpack_require__(11),
			cache = new Cache(account),
			mysdk,
			page  = {
				init:function(){
					if(!this.chat){
						var chat = new Vue({
							el:'#chat',
							template:__webpack_require__(12),
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
						        personalCenter: __webpack_require__(13),
						        panel:__webpack_require__(17),
						        chat:__webpack_require__(21)
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
	
	


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/autoprefixer-loader/index.js!./../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".clearfix {\n  zoom: 1;\n}\n.clearfix:after {\n  display: block;\n  clear: both;\n  visibility: hidden;\n  height: 0;\n  overflow: hidden;\n  content: \".\";\n}\n.m-chatContainer {\n  width: 900px;\n  height: 800px;\n  margin: 20px auto;\n  font-size: 14px;\n  zoom: 1;\n  /* reset */\n  /* layout */\n}\n.m-chatContainer:after {\n  display: block;\n  clear: both;\n  visibility: hidden;\n  height: 0;\n  overflow: hidden;\n  content: \".\";\n}\n.m-chatContainer h1,\n.m-chatContainer h2,\n.m-chatContainer h3,\n.m-chatContainer h4,\n.m-chatContainer h5,\n.m-chatContainer h6,\n.m-chatContainer div,\n.m-chatContainer dl,\n.m-chatContainer dt,\n.m-chatContainer dd,\n.m-chatContainer ul,\n.m-chatContainer ol,\n.m-chatContainer li,\n.m-chatContainer p,\n.m-chatContainer blockquote,\n.m-chatContainer pre,\n.m-chatContainer hr,\n.m-chatContainer figure,\n.m-chatContainer table,\n.m-chatContainer caption,\n.m-chatContainer th,\n.m-chatContainer td,\n.m-chatContainer form,\n.m-chatContainer fieldset,\n.m-chatContainer legend,\n.m-chatContainer input,\n.m-chatContainer button,\n.m-chatContainer textarea,\n.m-chatContainer menu {\n  margin: 0;\n  padding: 0;\n}\n.m-chatContainer header,\n.m-chatContainer footer,\n.m-chatContainer section,\n.m-chatContainer article,\n.m-chatContainer aside,\n.m-chatContainer nav,\n.m-chatContainer hgroup,\n.m-chatContainer address,\n.m-chatContainer figure,\n.m-chatContainer figcaption,\n.m-chatContainer menu,\n.m-chatContainer details {\n  display: block;\n}\n.m-chatContainer li {\n  list-style: none;\n}\n.m-chatContainer .g-left {\n  width: 270px;\n  height: 600px;\n  float: left;\n  background-color: #fff;\n}\n.m-chatContainer .g-right {\n  float: left;\n  margin-left: 30px;\n  width: 600px;\n  height: 600px;\n  background-color: #fff;\n}\n", ""]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {module.export = {
		
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var NIM = __webpack_require__(9);
	var Notice = __webpack_require__(10);
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports.NIM=t():e.NIM=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(3),n(4);var r=n(5),i=n(12),o=n(1);i.id=o.guid(),r.platform=i,r.io=n(24),r.xhr=n(15),r.blob=n(53),e.exports=r},function(e,t,n){"use strict";var r=n(2),i={},o=/\s/;i.guid=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+e()+e()+e()+e()+e()+e()},i.genUrlSep=function(e){e=""+e;var t=-1===e.indexOf("?")?"?imageView&":"&";return t},i.copy=function(e,t){return t=t||{},Object.keys(e).forEach(function(n){t[n]=e[n]}),t},i.merge=function(e){e=e||{};for(var t=1,n=arguments.length;n>t;t++)i.copy(arguments[t],e);return e},i.filterObj=function(e,t){var n={};return t=t.split(o),t.forEach(function(t){e.hasOwnProperty(t)&&(n[t]=e[t])}),n},i.extend=function(e,t,n){for(var r in t)("undefined"==typeof e[r]||n===!0)&&(e[r]=t[r])},i.emptyFunc=function(){},i.isEmptyFunc=function(e){return e===i.emptyFunc},i.notEmptyFunc=function(e){return e!==i.emptyFunc},i.splice=function(e,t,n){return[].splice.call(e,t,n)},i.onError=function(e){throw new r(e)},i.typeOf=function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},i.isString=function(e){return"string"===i.typeOf(e)},i.isBoolean=function(e){return"boolean"===i.typeOf(e)},i.isArray=function(e){return"array"===i.typeOf(e)},i.isFunction=function(e){return"function"===i.typeOf(e)},i.isObject=function(e){return"object"===i.typeOf(e)},i.undef=function(e){return"undefined"==typeof e},i.notundef=function(e){return"undefined"!=typeof e},i.isnull=function(e){return null===e},i.notnull=function(e){return null!==e},i.exist=function(e){return i.notundef(e)&&i.notnull(e)},i.notexist=function(e){return i.undef(e)||i.isnull(e)},i.verifyParamPresent=function(e,t,n){n=n||"";var r=!1;switch(i.typeOf(t)){case"undefined":case"null":r=!0;break;case"string":""===t&&(r=!0);break;case"array":t.length||(r=!0)}r&&i.onParamAbsent(n+e)},i.onParamAbsent=function(e){i.onParamError('缺少参数"'+e+'"，请确保参数不是空字符串、空数组和null')},i.verifyParamAbsent=function(e,t,n){n=n||"",void 0!==t&&i.onParamPresent(n+e)},i.onParamPresent=function(e){i.onParamError('多余的参数"'+e+'"')},i.verifyParamType=function(e,t,n){var r=i.typeOf(t).toLowerCase();i.isArray(n)||(n=[n]),n=n.map(function(e){return e.toLowerCase()});var o=!0;switch(-1===n.indexOf(r)&&(o=!1),r){case"number":isNaN(t)&&(o=!1)}o||i.onParamInvalidType(e,n)},i.onParamInvalidType=function(e,t,n){n=n||"",i.isArray(t)?(t=t.map(function(e){return'"'+e+'"'}),t=t.join(", ")):t='"'+t+'"',i.onParamError('参数"'+n+e+'"类型错误，合法的类型包括: ['+t+"]")},i.verifyParamValid=function(e,t,n){i.isArray(n)||(n=[n]),-1===n.indexOf(t)&&i.onParamInvalidValue(e,n)},i.onParamInvalidValue=function(e,t){i.isArray(t)||(t=[t]),t=t.map(function(e){return'"'+e+'"'}),i.isArray(t)&&(t=t.join(", ")),i.onParamError('参数"'+e+'"值错误，合法的值包括: ['+t+"]")},i.verifyParamMin=function(e,t,n){n>t&&i.onParamError("参数"+e+"的值不能小于"+n)},i.verifyParamMax=function(e,t,n){t>n&&i.onParamError("参数"+e+"的值不能大于"+n)},i.verifyEmail=function(){var e=/^\S+@\S+$/;return function(t,n){e.test(n)||i.onParamError("参数"+t+"邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符")}}(),i.verifyTel=function(){var e=/^[+\-\(\)\d]+$/;return function(t,n){e.test(n)||i.onParamError("参数"+t+"电话号码格式错误, 合法字符包括+、-、英文括号和数字")}}(),i.verifyBirth=function(){var e=/^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;return function(t,n){e.test(n)||i.onParamError("参数"+t+'生日格式错误, 合法为"yyyy-MM-dd"')}}(),i.onParamError=function(e){i.onError(e)},i.verifyOptions=function(e,t,n,r){if(i.verifyParamPresent("options",e),t&&(i.isString(t)&&(t=t.split(o)),i.isArray(t))){n=void 0===n?!0:!!n;var s=n?i.verifyParamPresent:i.verifyParamAbsent;t.forEach(function(t){s.call(i,t,e[t],r)})}},i.verifyParamAtLeastPresentOne=function(e,t){if(t&&(i.isString(t)&&(t=t.split(o)),i.isArray(t))){var n=t.some(function(t){return i.exist(e[t])});n||i.onParamError("以下参数["+t.join(", ")+"]至少需要传入一个")}},i.verifyParamPresentJustOne=function(e,t){if(t&&(i.isString(t)&&(t=t.split(o)),i.isArray(t))){var n=t.reduce(function(t,n){return i.exist(e[n])&&t++,t},0);1!==n&&i.onParamError("以下参数["+t.join(", ")+"]必须且只能传入一个")}},i.verifyBooleanWithDefault=function(e,t,n,r){i.undef(n)&&(n=!0),o.test(t)&&(t=t.split(o)),i.isArray(t)?t.forEach(function(t){i.verifyBooleanWithDefault(e,t,n,r)}):"undefined"==typeof e[t]?e[t]=n:i.isBoolean(e[t])||i.onParamInvalidType(t,"boolean",r)},i.verifyFileInput=function(e){return i.verifyParamPresent("fileInput",e),i.isString(e)&&(e=window.document.getElementById(e),e||i.onParamError("找不到要上传的文件对应的input，请检查fileInput id")),("input"!==e.tagName.toLowerCase()||"file"!==e.type.toLowerCase())&&i.onParamError("请提供正确的fileInput"),e},i.verifyFileType=function(e){i.verifyParamValid("type",e,i.validFileTypes)},i.verifyCallback=function(e,t){o.test(t)&&(t=t.split(o)),i.isArray(t)?t.forEach(function(t){i.verifyCallback(e,t)}):e[t]?i.isFunction(e[t])||i.onParamInvalidType(t,"function"):e[t]=i.emptyFunc},i.verifyFileUploadCallback=function(e){i.verifyCallback(e,"uploadprogress uploaddone uploaderror uploadcancel")},i.validFileTypes=["image","audio","video","file"],i.filterFiles=function(e,t){t=t.toLowerCase();var n,r,i,o="file"===t,s=[];return[].forEach.call(e,function(e){o?s.push(e):(n=e.type.split("/"),n[0]&&n[1]&&(r=n[0].toLowerCase(),i=n[1].toLowerCase(),r===t&&s.push(e)))}),s},i.getFileName=function(){var e=i.notundef(window.FormData);return function(t){return t=i.verifyFileInput(t),e?t.files[0].name:t.value.slice(t.value.lastIndexOf("\\")+1)}}(),i.sizeText=function(){var e=["B","KB","MB","GB","TB","PB","EB","ZB","BB"];return function(t){var n,r=0;do{t=Math.floor(100*t)/100;var i=e[r];n=t+i,t/=1024,r++}while(t>1);return n}}(),e.exports=i},function(e,t){"use strict";function n(e,t){this.message=e,this.code=t}n.prototype=Object.create(Error.prototype),n.prototype.name="NIMError",n.prototype.appendMessage=function(e){this.message?e&&(this.message+="("+e+")"):this.message=e};var r={201:"客户端版本过低",302:"帐号或者密码错误，请检查appKey和token是否有效，account和token是否匹配",403:"操作被禁止",404:"目标(用户或群)不存在",406:"数据自上次查询以来未发生变化",414:"非法参数",422:"帐号被禁用",500:"未知错误",501:"数据库操作失败",503:"服务器繁忙",509:"已失效",801:"已达人数上限",802:"没有权限",803:"群不存在",804:"用户不在群里面",805:"群类型不对",806:"创建群数量限制",807:"群成员状态不对",809:"已经在群里"};[200,808,810].forEach(function(e){r[e]=null}),n.genError=function(e){var t=r[e];return void 0===t&&(t="操作失败"),null===t?null:new n(t,e)},n.newServerError=function(e){return new n(e||"无法连接到socket服务器","Server_Not_Available")},n.newNetworkError=function(){return new n("网断了","Error_Internet_Disconnected")},n.newConnectionError=function(){return new n("连接未建立","Error_Connection_is_not_Established")},n.newTimeoutError=function(){return new n("超时","Error_Timeout")},n.newParamError=function(e){return new n(e||"参数错误","Param_Error")},n.newNoFileError=function(e){return new n(e||"请选择文件","No_File_Selected")},n.newWrongFileTypeError=function(e){return new n(e||"文件类型错误","Wrong_File_Type")},n.newFileTooLargeError=function(e){return new n(e||"文件过大","File_Too_Large")},n.newCORSIframeError=function(){return new n("不能获取跨域Iframe的内容","Cross_Origin_Iframe")},n.newUnknownError=function(){return new n("未知错误","Error_Unknown")},e.exports=n},function(e,t,n){var r,i;!function(o,s){"use strict";r=s,i="function"==typeof r?r.call(t,n,t,e):r,!(void 0!==i&&(e.exports=i))}(this,function(){function e(e){var t=typeof e;return null===e||"undefined"===t||"boolean"===t||"number"===t||"string"===t}var t,n=Array.prototype,r=Object.prototype,i=Function.prototype,o=String.prototype,s=Number.prototype,a=n.slice,c=n.splice,l=n.push,u=n.unshift,p=i.call,d=r.toString,f=Array.isArray||function(e){return"[object Array]"===d.call(e)},m="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,y=Function.prototype.toString,h=function(e){try{return y.call(e),!0}catch(t){return!1}},v="[object Function]",g="[object GeneratorFunction]";t=function(e){if("function"!=typeof e)return!1;if(m)return h(e);var t=d.call(e);return t===v||t===g};var b,k=RegExp.prototype.exec,T=function(e){try{return k.call(e),!0}catch(t){return!1}},S="[object RegExp]";b=function(e){return"object"!=typeof e?!1:m?T(e):d.call(e)===S};var w,M=String.prototype.valueOf,O=function(e){try{return M.call(e),!0}catch(t){return!1}},C="[object String]";w=function(e){return"string"==typeof e?!0:"object"!=typeof e?!1:m?O(e):d.call(e)===C};var I=function(e){var n=d.call(e),r="[object Arguments]"===n;return r||(r=!f(e)&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&t(e.callee)),r},_=function(e){var t,n=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}();return t=n?function(e,t,n,r){!r&&t in e||Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:!0,value:n})}:function(e,t,n,r){!r&&t in e||(e[t]=n)},function(n,r,i){for(var o in r)e.call(r,o)&&t(n,o,r[o],i)}}(r.hasOwnProperty),x={ToInteger:function(e){var t=+e;return t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t},ToPrimitive:function(n){var r,i,o;if(e(n))return n;if(i=n.valueOf,t(i)&&(r=i.call(n),e(r)))return r;if(o=n.toString,t(o)&&(r=o.call(n),e(r)))return r;throw new TypeError},ToObject:function(e){if(null==e)throw new TypeError("can't convert "+e+" to object");return Object(e)},ToUint32:function(e){return e>>>0}},E=function(){};_(i,{bind:function(e){var n=this;if(!t(n))throw new TypeError("Function.prototype.bind called on incompatible "+n);for(var r,i=a.call(arguments,1),o=function(){if(this instanceof r){var t=n.apply(this,i.concat(a.call(arguments)));return Object(t)===t?t:this}return n.apply(e,i.concat(a.call(arguments)))},s=Math.max(0,n.length-i.length),c=[],l=0;s>l;l++)c.push("$"+l);return r=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this, arguments); }")(o),n.prototype&&(E.prototype=n.prototype,r.prototype=new E,E.prototype=null),r}});var P=p.bind(r.hasOwnProperty),j=function(){var e=[1,2],t=e.splice();return 2===e.length&&f(t)&&0===t.length}();_(n,{splice:function(e,t){return 0===arguments.length?[]:c.apply(this,arguments)}},!j);var A=function(){var e={};return n.splice.call(e,0,0,1),1===e.length}();_(n,{splice:function(e,t){if(0===arguments.length)return[];var n=arguments;return this.length=Math.max(x.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof t&&(n=a.call(arguments),n.length<2?n.push(this.length-e):n[1]=x.ToInteger(t)),c.apply(this,n)}},!A);var R=1!==[].unshift(0);_(n,{unshift:function(){return u.apply(this,arguments),this.length}},R),_(Array,{isArray:f});var F=Object("a"),N="a"!==F[0]||!(0 in F),D=function(e){var t=!0,n=!0;return e&&(e.call("foo",function(e,n,r){"object"!=typeof r&&(t=!1)}),e.call([1],function(){"use strict";n="string"==typeof this},"x")),!!e&&t&&n};_(n,{forEach:function(e){var n=x.ToObject(this),r=N&&w(this)?this.split(""):n,i=arguments[1],o=-1,s=r.length>>>0;if(!t(e))throw new TypeError;for(;++o<s;)o in r&&e.call(i,r[o],o,n)}},!D(n.forEach)),_(n,{map:function(e){var n=x.ToObject(this),r=N&&w(this)?this.split(""):n,i=r.length>>>0,o=Array(i),s=arguments[1];if(!t(e))throw new TypeError(e+" is not a function");for(var a=0;i>a;a++)a in r&&(o[a]=e.call(s,r[a],a,n));return o}},!D(n.map)),_(n,{filter:function(e){var n,r=x.ToObject(this),i=N&&w(this)?this.split(""):r,o=i.length>>>0,s=[],a=arguments[1];if(!t(e))throw new TypeError(e+" is not a function");for(var c=0;o>c;c++)c in i&&(n=i[c],e.call(a,n,c,r)&&s.push(n));return s}},!D(n.filter)),_(n,{every:function(e){var n=x.ToObject(this),r=N&&w(this)?this.split(""):n,i=r.length>>>0,o=arguments[1];if(!t(e))throw new TypeError(e+" is not a function");for(var s=0;i>s;s++)if(s in r&&!e.call(o,r[s],s,n))return!1;return!0}},!D(n.every)),_(n,{some:function(e){var n=x.ToObject(this),r=N&&w(this)?this.split(""):n,i=r.length>>>0,o=arguments[1];if(!t(e))throw new TypeError(e+" is not a function");for(var s=0;i>s;s++)if(s in r&&e.call(o,r[s],s,n))return!0;return!1}},!D(n.some));var B=!1;n.reduce&&(B="object"==typeof n.reduce.call("es5",function(e,t,n,r){return r})),_(n,{reduce:function(e){var n=x.ToObject(this),r=N&&w(this)?this.split(""):n,i=r.length>>>0;if(!t(e))throw new TypeError(e+" is not a function");if(!i&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var o,s=0;if(arguments.length>=2)o=arguments[1];else for(;;){if(s in r){o=r[s++];break}if(++s>=i)throw new TypeError("reduce of empty array with no initial value")}for(;i>s;s++)s in r&&(o=e.call(void 0,o,r[s],s,n));return o}},!B);var U=!1;n.reduceRight&&(U="object"==typeof n.reduceRight.call("es5",function(e,t,n,r){return r})),_(n,{reduceRight:function(e){var n=x.ToObject(this),r=N&&w(this)?this.split(""):n,i=r.length>>>0;if(!t(e))throw new TypeError(e+" is not a function");if(!i&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var o,s=i-1;if(arguments.length>=2)o=arguments[1];else for(;;){if(s in r){o=r[s--];break}if(--s<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>s)return o;do s in r&&(o=e.call(void 0,o,r[s],s,n));while(s--);return o}},!U);var W=Array.prototype.indexOf&&-1!==[0,1].indexOf(1,2);_(n,{indexOf:function(e){var t=N&&w(this)?this.split(""):x.ToObject(this),n=t.length>>>0;if(!n)return-1;var r=0;for(arguments.length>1&&(r=x.ToInteger(arguments[1])),r=r>=0?r:Math.max(0,n+r);n>r;r++)if(r in t&&t[r]===e)return r;return-1}},W);var L=Array.prototype.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);_(n,{lastIndexOf:function(e){var t=N&&w(this)?this.split(""):x.ToObject(this),n=t.length>>>0;if(!n)return-1;var r=n-1;for(arguments.length>1&&(r=Math.min(r,x.ToInteger(arguments[1]))),r=r>=0?r:n-Math.abs(r);r>=0;r--)if(r in t&&e===t[r])return r;return-1}},L);var $=!{toString:null}.propertyIsEnumerable("toString"),H=function(){}.propertyIsEnumerable("prototype"),q=!P("x","0"),X=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],V=X.length;_(Object,{keys:function(e){var n=t(e),r=I(e),i=null!==e&&"object"==typeof e,o=i&&w(e);if(!i&&!n&&!r)throw new TypeError("Object.keys called on a non-object");var s=[],a=H&&n;if(o&&q||r)for(var c=0;c<e.length;++c)s.push(String(c));if(!r)for(var l in e)a&&"prototype"===l||!P(e,l)||s.push(String(l));if($)for(var u=e.constructor,p=u&&u.prototype===e,d=0;V>d;d++){var f=X[d];p&&"constructor"===f||!P(e,f)||s.push(f)}return s}});var z=Object.keys&&function(){return 2===Object.keys(arguments).length}(1,2),J=Object.keys;_(Object,{keys:function(e){return J(I(e)?n.slice.call(e):e)}},!z);var G=-621987552e5,K="-000001",Z=Date.prototype.toISOString&&-1===new Date(G).toISOString().indexOf(K);_(Date.prototype,{toISOString:function(){var e,t,n,r,i;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");for(r=this.getUTCFullYear(),i=this.getUTCMonth(),r+=Math.floor(i/12),i=(i%12+12)%12,e=[i+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],r=(0>r?"-":r>9999?"+":"")+("00000"+Math.abs(r)).slice(r>=0&&9999>=r?-4:-6),t=e.length;t--;)n=e[t],10>n&&(e[t]="0"+n);return r+"-"+e.slice(0,2).join("-")+"T"+e.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},Z);var Q=function(){try{return Date.prototype.toJSON&&null===new Date(0/0).toJSON()&&-1!==new Date(G).toJSON().indexOf(K)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(e){return!1}}();Q||(Date.prototype.toJSON=function(e){var n=Object(this),r=x.ToPrimitive(n);if("number"==typeof r&&!isFinite(r))return null;var i=n.toISOString;if(!t(i))throw new TypeError("toISOString property is not callable");return i.call(n)});var Y=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),ee=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")),te=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));(!Date.parse||te||ee||!Y)&&(Date=function(e){function t(n,r,i,o,s,a,c){var l=arguments.length;if(this instanceof e){var u=1===l&&String(n)===n?new e(t.parse(n)):l>=7?new e(n,r,i,o,s,a,c):l>=6?new e(n,r,i,o,s,a):l>=5?new e(n,r,i,o,s):l>=4?new e(n,r,i,o):l>=3?new e(n,r,i):l>=2?new e(n,r):l>=1?new e(n):new e;return _(u,{constructor:t},!0),u}return e.apply(this,arguments)}function n(e,t){var n=t>1?1:0;return o[t]+Math.floor((e-1969+n)/4)-Math.floor((e-1901+n)/100)+Math.floor((e-1601+n)/400)+365*(e-1970)}function r(t){return Number(new e(1970,0,1,0,0,0,t))}var i=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),o=[0,31,59,90,120,151,181,212,243,273,304,334,365];for(var s in e)t[s]=e[s];return t.now=e.now,t.UTC=e.UTC,t.prototype=e.prototype,t.prototype.constructor=t,t.parse=function(t){var o=i.exec(t);if(o){var s,a=Number(o[1]),c=Number(o[2]||1)-1,l=Number(o[3]||1)-1,u=Number(o[4]||0),p=Number(o[5]||0),d=Number(o[6]||0),f=Math.floor(1e3*Number(o[7]||0)),m=Boolean(o[4]&&!o[8]),y="-"===o[9]?1:-1,h=Number(o[10]||0),v=Number(o[11]||0);return(p>0||d>0||f>0?24:25)>u&&60>p&&60>d&&1e3>f&&c>-1&&12>c&&24>h&&60>v&&l>-1&&l<n(a,c+1)-n(a,c)&&(s=60*(24*(n(a,c)+l)+u+h*y),s=1e3*(60*(s+p+v*y)+d)+f,m&&(s=r(s)),s>=-864e13&&864e13>=s)?s:0/0}return e.parse.apply(this,arguments)},t}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()});var ne=s.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),re={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(e,t){for(var n=-1,r=t;++n<re.size;)r+=e*re.data[n],re.data[n]=r%re.base,r=Math.floor(r/re.base)},divide:function(e){for(var t=re.size,n=0;--t>=0;)n+=re.data[t],re.data[t]=Math.floor(n/e),n=n%e*re.base},numToString:function(){for(var e=re.size,t="";--e>=0;)if(""!==t||0===e||0!==re.data[e]){var n=String(re.data[e]);""===t?t=n:t+="0000000".slice(0,7-n.length)+n}return t},pow:function ye(e,t,n){return 0===t?n:t%2===1?ye(e,t-1,n*e):ye(e*e,t/2,n)},log:function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}};_(s,{toFixed:function(e){var t,n,r,i,o,s,a,c;if(t=Number(e),t=t!==t?0:Math.floor(t),0>t||t>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(n=Number(this),n!==n)return"NaN";if(-1e21>=n||n>=1e21)return String(n);if(r="",0>n&&(r="-",n=-n),i="0",n>1e-21)if(o=re.log(n*re.pow(2,69,1))-69,s=0>o?n*re.pow(2,-o,1):n/re.pow(2,o,1),s*=4503599627370496,o=52-o,o>0){for(re.multiply(0,s),a=t;a>=7;)re.multiply(1e7,0),a-=7;for(re.multiply(re.pow(10,a,1),0),a=o-1;a>=23;)re.divide(1<<23),a-=23;re.divide(1<<a),re.multiply(1,1),re.divide(2),i=re.numToString()}else re.multiply(0,s),re.multiply(1<<-o,0),i=re.numToString()+"0.00000000000000000000".slice(2,2+t);return t>0?(c=i.length,i=t>=c?r+"0.0000000000000000000".slice(0,t-c+2)+i:r+i.slice(0,c-t)+"."+i.slice(c-t)):i=r+i,i}},ne);var ie=o.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var e="undefined"==typeof/()??/.exec("")[1];o.split=function(t,n){var r=this;if("undefined"==typeof t&&0===n)return[];if(!b(t))return ie.call(this,t,n);var i,o,s,a,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.extended?"x":"")+(t.sticky?"y":""),p=0,d=new RegExp(t.source,u+"g");r+="",e||(i=new RegExp("^"+d.source+"$(?!\\s)",u));var f="undefined"==typeof n?-1>>>0:x.ToUint32(n);for(o=d.exec(r);o&&(s=o.index+o[0].length,!(s>p&&(c.push(r.slice(p,o.index)),!e&&o.length>1&&o[0].replace(i,function(){for(var e=1;e<arguments.length-2;e++)"undefined"==typeof arguments[e]&&(o[e]=void 0)}),o.length>1&&o.index<r.length&&l.apply(c,o.slice(1)),a=o[0].length,p=s,c.length>=f)));)d.lastIndex===o.index&&d.lastIndex++,o=d.exec(r);return p===r.length?(a||!d.test(""))&&c.push(""):c.push(r.slice(p)),c.length>f?c.slice(0,f):c}}():"0".split(void 0,0).length&&(o.split=function(e,t){return"undefined"==typeof e&&0===t?[]:ie.call(this,e,t)});var oe=o.replace,se=function(){var e=[];return"x".replace(/x(.)?/g,function(t,n){e.push(n)}),1===e.length&&"undefined"==typeof e[0]}();se||(o.replace=function(e,n){var r=t(n),i=b(e)&&/\)[*?]/.test(e.source);if(r&&i){var o=function(t){var r=arguments.length,i=e.lastIndex;e.lastIndex=0;var o=e.exec(t)||[];return e.lastIndex=i,o.push(arguments[r-2],arguments[r-1]),n.apply(this,o)};return oe.call(this,e,o)}return oe.call(this,e,n)});var ae=o.substr,ce="".substr&&"b"!=="0b".substr(-1);_(o,{substr:function(e,t){var n=e;return 0>e&&(n=Math.max(this.length+e,0)),ae.call(this,n,t)}},ce);var le="	\n\f\r   ᠎             　\u2028\u2029\ufeff",ue="​",pe="["+le+"]",de=new RegExp("^"+pe+pe+"*"),fe=new RegExp(pe+pe+"*$"),me=o.trim&&(le.trim()||!ue.trim());_(o,{trim:function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");return String(this).replace(de,"").replace(fe,"")}},me),(8!==parseInt(le+"08")||22!==parseInt(le+"0x16"))&&(parseInt=function(e){var t=/^0[xX]/;return function(n,r){var i=String(n).trim(),o=Number(r)||(t.test(i)?16:10);return e(i,o)}}(parseInt))})},function(e,t,n){var r,i;!function(o,s){"use strict";r=s,i="function"==typeof r?r.call(t,n,t,e):r,!(void 0!==i&&(e.exports=i))}(this,function(){function e(e){try{return e.sentinel=0,0===Object.getOwnPropertyDescriptor(e,"sentinel").value}catch(t){return!1}}function t(e){try{return Object.defineProperty(e,"sentinel",{}),"sentinel"in e}catch(t){return!1}}var n,r,i,o,s=Function.prototype.call,a=Object.prototype,c=s.bind(a.hasOwnProperty),l=c(a,"__defineGetter__");if(l&&(n=s.bind(a.__defineGetter__),r=s.bind(a.__defineSetter__),i=s.bind(a.__lookupGetter__),o=s.bind(a.__lookupSetter__)),Object.getPrototypeOf||(Object.getPrototypeOf=function(e){var t=e.__proto__;return t||null===t?t:e.constructor?e.constructor.prototype:a}),Object.defineProperty){var u=e({}),p="undefined"==typeof document||e(document.createElement("div"));if(!p||!u)var d=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||d){var f="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(e,t){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError(f+e);if(d)try{return d.call(Object,e,t)}catch(n){}var r;if(!c(e,t))return r;if(r={enumerable:!0,configurable:!0},l){var s=e.__proto__,u=e!==a;u&&(e.__proto__=a);var p=i(e,t),m=o(e,t);if(u&&(e.__proto__=s),p||m)return p&&(r.get=p),m&&(r.set=m),r}return r.value=e[t],r.writable=!0,r}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(e){return Object.keys(e)}),!Object.create){var m,y=!({__proto__:null}instanceof Object);m=y||"undefined"==typeof document?function(){return{__proto__:null}}:function(){function e(){}var t=document.createElement("iframe"),n=document.body||document.documentElement;t.style.display="none",n.appendChild(t),t.src="javascript:";var r=t.contentWindow.Object.prototype;return n.removeChild(t),t=null,delete r.constructor,delete r.hasOwnProperty,delete r.propertyIsEnumerable,delete r.isPrototypeOf,delete r.toLocaleString,delete r.toString,delete r.valueOf,r.__proto__=null,e.prototype=r,m=function(){return new e},new e},Object.create=function(e,t){function n(){}var r;if(null===e)r=m();else{if("object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object prototype may only be an Object or null");n.prototype=e,r=new n,r.__proto__=e}return void 0!==t&&Object.defineProperties(r,t),r}}if(Object.defineProperty){var h=t({}),v="undefined"==typeof document||t(document.createElement("div"));if(!h||!v)var g=Object.defineProperty,b=Object.defineProperties}if(!Object.defineProperty||g){var k="Property description must be an object: ",T="Object.defineProperty called on non-object: ",S="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(e,t,s){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError(T+e);if("object"!=typeof s&&"function"!=typeof s||null===s)throw new TypeError(k+s);if(g)try{return g.call(Object,e,t,s)}catch(c){}if("value"in s)if(l&&(i(e,t)||o(e,t))){var u=e.__proto__;e.__proto__=a,delete e[t],e[t]=s.value,e.__proto__=u}else e[t]=s.value;else{if(!l)throw new TypeError(S);"get"in s&&n(e,t,s.get),"set"in s&&r(e,t,s.set)}return e}}(!Object.defineProperties||b)&&(Object.defineProperties=function(e,t){if(b)try{return b.call(Object,e,t)}catch(n){}for(var r in t)c(t,r)&&"__proto__"!==r&&Object.defineProperty(e,r,t[r]);return e}),Object.seal||(Object.seal=function(e){if(Object(e)!==e)throw new TypeError("Object.seal can only be called on Objects.");return e}),Object.freeze||(Object.freeze=function(e){if(Object(e)!==e)throw new TypeError("Object.freeze can only be called on Objects.");return e});try{Object.freeze(function(){})}catch(w){Object.freeze=function(e){return function(t){return"function"==typeof t?t:e(t)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(e){if(Object(e)!==e)throw new TypeError("Object.preventExtensions can only be called on Objects.");return e}),Object.isSealed||(Object.isSealed=function(e){if(Object(e)!==e)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.isFrozen||(Object.isFrozen=function(e){if(Object(e)!==e)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isExtensible||(Object.isExtensible=function(e){if(Object(e)!==e)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var t="";c(e,t);)t+="?";e[t]=!0;var n=c(e,t);return delete e[t],n})})},function(e,t,n){"use strict";function r(e){o.verifyOptions(e,"appKey account token"),a.setDebug(e.debug),o.verifyCallback(e,"onconnect onkicked onerror ondisconnect onloginportschange onmyinfo onblacklist onmutelist onfriends onteams onsessions onroamingmsgs onofflinemsgs onofflinesysmsgs onofflinecustomsysmsgs onsyncdone onteammembers onsyncteammembersdone onmsg onsysmsg oncustomsysmsg onsynccreateteam onupdateteammember onsyncmarkinblacklist onsyncmarkinmutelist  onsyncfriendaction"),this.options=o.copy(e),this.socket=new i(e)}var i=n(6),o=n(1),s=n(14),a=n(11);r.fn=r.prototype,r.version=r.fn.version=s.version,r.fn.getNosToken=function(e){this.sendCmd("getNosToken",{responseBody:e.responseBody},e.callback)},r.fn.processCallback=function(){function e(e,t,n,r){var i=e.callback.options;r=r||i,t&&(r=i),o.isFunction(e._cbaop)&&(r=e._cbaop(n,r)),e.done(n,r)}return function(t,n){o.verifyOptions(t,"done"),o.verifyCallback(t,"done"),t.callback=e.bind(this,t,n),t.callback.options=o.copy(t)}}(),r.fn.processPs=function(e){"undefined"==typeof e.ps&&(e.ps="")},r.fn.sendCmd=function(){this.socket.sendCmd.apply(this.socket,arguments)},e.exports=r,n(50),n(51),n(52),n(59),n(60)},function(e,t,n){"use strict";function r(e){this.options=i.copy(e),this.initAutoMarkRead(),this.reset(),this.lbsRetryCount=0,this.shouldReconnect=!0,this.kicked=!1,this.connectViaLbs()}var i=n(1),o=n(7),s=n(2),a=n(14),c=n(11);r.fn=r.prototype,r.fn.initReconnect=function(){var e=this.options;this.needReconnect=e.needReconnect!==!1,i.notundef(e.reconnectionAttempts)&&i.verifyParamType("reconnectionAttempts",e.reconnectionAttempts,"number"),this.reconnectionAttempts=e.reconnectionAttempts||1/0,i.notundef(e.reconnectionDelay)&&(i.verifyParamType("reconnectionDelay",e.reconnectionDelay,"number"),e.reconnectionDelay<a.reconnectionDelay&&(e.reconnectionDelay=a.reconnectionDelay)),this.reconnectionDelay=e.reconnectionDelay||a.reconnectionDelay,i.notundef(e.reconnectionDelayMax)&&(i.verifyParamType("reconnectionDelayMax",e.reconnectionDelayMax,"number"),e.reconnectionDelayMax<a.reconnectionDelayMax&&(e.reconnectionDelayMax=a.reconnectionDelayMax)),this.reconnectionDelayMax=e.reconnectionDelayMax||a.reconnectionDelayMax},r.fn.initAutoMarkRead=function(){var e=this.options;i.notundef(e.autoMarkRead)?i.isObject(e.autoMarkRead)||(i.verifyParamType("autoMarkRead",e.autoMarkRead,"boolean"),e.autoMarkRead===!0&&(e.autoMarkRead={})):e.autoMarkRead={};var t=!0;e.autoMarkRead===!1&&(e.autoMarkRead={},t=!1),i.verifyBooleanWithDefault(e.autoMarkRead,"p2p team sys customSys filterP2p filterTeam filterSys filterCustomSys",t,"autoMarkRead.")},r.fn.reset=function(){this.reconnecting=!1,this.stopHeartbeat(),this.heartbeatTimer=null,this.cmdCallbackMap={},this.cmdContentMap={},this.syncTime=0,this.syncTeamMembersTime={},this.entrust={}},r.fn.sendCmd=function(e,t,n){c.log("socket command	"+e,t?t:""),e=o.createCmd(e,t);var r,i=e.SER;return t=t||{},this.cmdContentMap[i]=t,t.single&&(delete t.single,r=Object.keys(t),1===r.length&&(this.cmdContentMap[i]=t[r[0]])),t.NOTSTORE&&(r=t.NOTSTORE.split(" "),r.forEach(function(e){delete t[e]}),delete t.NOTSTORE),n&&(this.cmdCallbackMap[i]=n),this.isConnected()?this.doSendCmd(e):this.markCallbackInvalid(i,s.newConnectionError()),i},r.fn.doSendCmd=function(e){this.socket.send(JSON.stringify(e))},r.fn.getObjWithSer=function(e){var t=this.cmdContentMap[e];return delete this.cmdContentMap[e],t},r.fn.markCallbackInvalid=function(e,t){var n=this.getCallbackWithSer(e);if(this.getObjWithSer(e),!n)throw t;var r=n.options;window.setTimeout(function(){n(t||s.newUnknownError(),r)}.bind(this),100)},r.fn.getPacketObj=function(e){if(e&&e.raw){var t=e.raw.ser;if(t)return this.getObjWithSer(t)}return null},r.fn.packetFromSync=function(e){return!e.obj||!!e.obj.sync},r.fn.onMessage=function(e){var t=o.parsePacket(e);switch(t.obj=this.getPacketObj(t),c.log("socket content	"+t.cmd,t),t.service){case"link":this.processLink(t);break;case"auth":this.processAuth(t);break;case"user":this.processUser(t);break;case"notify":this.processNotify(t);break;case"sync":this.processSync(t);break;case"misc":this.processMisc(t);break;case"talk":this.processMessage(t);break;case"team":this.processTeam(t);break;case"friend":this.processFriend(t);break;case"filter":this.processFilter(t);break;default:return}this.callPacketAckCallback(t)},r.fn.getCallbackWithSer=function(e){var t=this.cmdCallbackMap[e];return delete this.cmdCallbackMap[e],t},r.fn.callPacketAckCallback=function(e){if(e&&e.raw){var t=e.raw.ser;if(t){var n=this.getCallbackWithSer(t);n&&n(e.error,e.obj)}}},e.exports=r,n(22),n(25),n(28),n(44),n(45),n(46),n(47),n(49)},function(e,t,n){"use strict";function r(e,t){var n=s[t],r={};for(var i in n)e.hasOwnProperty(i)&&(r[n[i]]=e[i]);return r}var i=n(9),o=n(1),s=n(10),a=n(8),c=n(2),l=n(11),u=1,p={};p.createCmd=function(e,t){var n=i.cmdConfig[e];return e={SID:n.sid,CID:n.cid,SER:u++},n.params&&(e.Q=[],n.params.forEach(function(n){var i,o=n.type,s=n.name;switch(o){case"Property":i=r(t[s],s);break;case"bool":i=t[s]?"true":"false";break;default:i=t[s]}e.Q.push({t:o,v:i})})),e},p.parsePacket=function(e){var t=JSON.parse(e),n={raw:t,error:c.genError(t.code)},r=i.packetConfig[t.sid+"_"+t.cid];if(!r)return l.log("no config for sid: "+t.sid+" cid: "+t.cid),n;var s=t.r,a="notify"===r.service&&!r.cmd;if(n.isNotify=a,a){var u=t.r[1].headerPacket;if(r=i.packetConfig[u.sid+"_"+u.cid],s=t.r[1].body,!r)return l.log("no config for sid: "+u.sid+" cid: "+u.cid),n}return n.service=r.service,n.cmd=r.cmd,!n.error&&r.response&&(n.content={},r.response.forEach(function(e,r){var i=s[r];if(!o.undef(i)){var c=e.type,l=e.name,u=e.entity||l;switch(c){case"Property":n.content[l]=p.unserialize(i,u);break;case"PropertyArray":n.content[l]=[],i.forEach(function(e){n.content[l].push(p.unserialize(e,u))});break;case"String":n.content[l]=i;break;case"StrArray":n.content[l]=i;break;case"Number":n.content[l]=+i;break;case"Boolean":n.content[l]=i}if(a&&"msg"===l||"sysMsg"===l){var d=n.content[l];o.isObject(d)&&(d.idServer=t.r[0])}}})),n},p.unserialize=function(e,t){var n=a[t],r={};for(var i in n)e.hasOwnProperty(i)&&(r[n[i]]=e[i]);return r},e.exports=p},function(e,t){e.exports={
	login:{4:"os",6:"sdkVersion",9:"protocolVersion",13:"deviceId",18:"appKey",19:"account",24:"browser",1000:"token"},loginRes:{17:"lastLoginDeviceId",102:"connectionId",103:"ip",104:"port",106:"country"},loginPort:{3:"type",4:"os",5:"mac",13:"deviceId",19:"account",102:"connectionId",103:"ip",109:"time"},sync:{1:"myInfo",2:"offline",3:"teams",5:"teamMembers",7:"roamingMsgs",9:"blacklistAndMutelist",11:"friends",12:"sessions",13:"friendusers",100:"filter"},team:{1:"teamId",3:"name",4:"type",5:"owner",6:"level",7:"selfCustom",8:"valid",9:"memberNum",10:"memberUpdateTime",11:"createTime",12:"updateTime",13:"validToCurrentUser",14:"intro",15:"announcement",16:"joinMode",17:"bits",18:"custom",19:"serverCustom"},teamMember:{1:"teamId",3:"account",4:"type",5:"nickInTeam",7:"bits",8:"active",9:"valid",10:"joinTime",11:"updateTime"},msg:{0:"scene",1:"to",2:"from",4:"fromClientType",5:"fromDeviceId",6:"fromNick",7:"time",8:"type",9:"body",10:"attach",11:"idClient",12:"idServer",13:"resend",14:"userUpdateTime",100:"isHistoryable",101:"isRoamingable",102:"isSyncable",104:"isMuted",105:"cc",107:"isPushable"},sysMsg:{0:"time",1:"type",2:"to",3:"from",4:"ps",5:"attach",6:"idServer",7:"sendToOnlineUsersOnly",8:"apnsText",105:"cc"},nosToken:{1:"objectName",2:"token",3:"bucket",4:"expireTime"},friend:{4:"account",5:"flag",6:"beflag",7:"source",8:"alias",9:"bits",10:"custom",11:"createTime",12:"updateTime"},user:{1:"account",3:"nick",4:"avatar",5:"sign",6:"gender",7:"email",8:"birth",9:"tel",10:"custom",12:"createTime",13:"updateTime"},specialRelation:{0:"account",1:"isMuted",2:"isBlacked",3:"createTime",4:"updateTime"}}},function(e,t){"use strict";var n={link:{id:1,heartbeat:2},auth:{id:2,login:3,kicked:5,logout:6,multiPortLogin:7,kick:8},user:{id:3,markInBlacklist:3,getBlacklist:4,markInMutelist:5,getMutelist:6,getBlacklistAndMutelist:8,getUsers:7,updateMyInfo:10,syncMyInfo:109,syncUpdateMyInfo:110},notify:{id:4,markRead:3,syncOfflineMsgs:4,batchMarkRead:5,syncOfflineSysMsgs:6,syncRoamingMsgs:9},sync:{id:5,sync:1,syncTeamMembers:2},misc:{id:6,getNosToken:2},talk:{id:7,sendMsg:1,msg:2,sysMsg:3,getHistoryMsgs:6,sendCustomSysMsg:7,searchHistoryMsgs:8,deleteSessions:9,getSessions:10,syncSendMsg:101},team:{id:8,createTeam:1,sendTeamMsg:2,teamMsg:3,teamMsgs:4,addTeamMembers:5,removeTeamMembers:6,updateTeam:7,leaveTeam:8,getTeam:9,getTeams:10,getTeamMembers:11,dismissTeam:12,applyTeam:13,passTeamApply:14,rejectTeamApply:15,addTeamManagers:16,removeTeamManagers:17,transferTeam:18,updateInfoInTeam:19,updateNickInTeam:20,acceptTeamInvite:21,rejectTeamInvite:22,getTeamHistoryMsgs:23,searchTeamHistoryMsgs:24,syncTeams:109,syncTeamMembers:111,syncCreateTeam:101,syncSendTeamMsg:102,syncUpdateTeamMember:119},friend:{id:12,friendRequest:1,syncFriendRequest:101,deleteFriend:2,syncDeleteFriend:102,updateFriend:3,syncUpdateFriend:103,getFriends:4},filter:{id:101,sendFilterMsg:1,filterMsg:2,filterSysMsg:3,sendFilterCustomSysMsg:7}},r={heartbeat:{sid:n.link.id,cid:n.link.heartbeat},login:{sid:n.auth.id,cid:n.auth.login,params:[{type:"Property",name:"login"}]},logout:{sid:n.auth.id,cid:n.auth.logout},kick:{sid:n.auth.id,cid:n.auth.kick,params:[{type:"StrArray",name:"deviceIds"}]},markInBlacklist:{sid:n.user.id,cid:n.user.markInBlacklist,params:[{type:"String",name:"account"},{type:"bool",name:"isAdd"}]},getBlacklist:{sid:n.user.id,cid:n.user.getBlacklist,params:[{type:"long",name:"time"}]},markInMutelist:{sid:n.user.id,cid:n.user.markInMutelist,params:[{type:"String",name:"account"},{type:"bool",name:"isAdd"}]},getMutelist:{sid:n.user.id,cid:n.user.getMutelist,params:[{type:"long",name:"time"}]},getBlacklistAndMutelist:{sid:n.user.id,cid:n.user.getBlacklistAndMutelist,params:[{type:"long",name:"time"}]},getUsers:{sid:n.user.id,cid:n.user.getUsers,params:[{type:"StrArray",name:"accounts"}]},updateMyInfo:{sid:n.user.id,cid:n.user.updateMyInfo,params:[{type:"Property",name:"user"}]},markRead:{sid:n.notify.id,cid:n.notify.markRead,params:[{type:"long",name:"id"},{type:"ph",name:"ph"}]},batchMarkRead:{sid:n.notify.id,cid:n.notify.batchMarkRead,params:[{type:"byte",name:"sid"},{type:"byte",name:"cid"},{type:"LongArray",name:"ids"}]},sync:{sid:n.sync.id,cid:n.sync.sync,params:[{type:"Property",name:"sync"}]},syncTeamMembers:{sid:n.sync.id,cid:n.sync.syncTeamMembers,params:[{type:"LongLongMap",name:"sync"}]},getNosToken:{sid:n.misc.id,cid:n.misc.getNosToken,params:[{type:"String",name:"responseBody"}]},sendMsg:{sid:n.talk.id,cid:n.talk.sendMsg,params:[{type:"Property",name:"msg"}]},getHistoryMsgs:{sid:n.talk.id,cid:n.talk.getHistoryMsgs,params:[{type:"String",name:"to"},{type:"long",name:"beginTime"},{type:"long",name:"endTime"},{type:"long",name:"lastMsgId"},{type:"int",name:"limit"},{type:"bool",name:"reverse"}]},sendCustomSysMsg:{sid:n.talk.id,cid:n.talk.sendCustomSysMsg,params:[{type:"Property",name:"sysMsg"}]},searchHistoryMsgs:{sid:n.talk.id,cid:n.talk.searchHistoryMsgs,params:[{type:"String",name:"to"},{type:"long",name:"beginTime"},{type:"long",name:"endTime"},{type:"String",name:"keyword"},{type:"int",name:"limit"},{type:"bool",name:"reverse"}]},getSessions:{sid:n.talk.id,cid:n.talk.getSessions,params:[{type:"long",name:"time"}]},deleteSessions:{sid:n.talk.id,cid:n.talk.deleteSessions,params:[{type:"StrArray",name:"sessions"}]},createTeam:{sid:n.team.id,cid:n.team.createTeam,params:[{type:"Property",name:"team"},{type:"StrArray",name:"accounts"},{type:"String",name:"ps"}]},sendTeamMsg:{sid:n.team.id,cid:n.team.sendTeamMsg,params:[{type:"Property",name:"msg"}]},addTeamMembers:{sid:n.team.id,cid:n.team.addTeamMembers,params:[{type:"long",name:"teamId"},{type:"StrArray",name:"accounts"},{type:"String",name:"ps"}]},removeTeamMembers:{sid:n.team.id,cid:n.team.removeTeamMembers,params:[{type:"long",name:"teamId"},{type:"StrArray",name:"accounts"}]},updateTeam:{sid:n.team.id,cid:n.team.updateTeam,params:[{type:"Property",name:"team"}]},leaveTeam:{sid:n.team.id,cid:n.team.leaveTeam,params:[{type:"long",name:"teamId"}]},getTeam:{sid:n.team.id,cid:n.team.getTeam,params:[{type:"long",name:"teamId"}]},getTeams:{sid:n.team.id,cid:n.team.getTeams,params:[{type:"long",name:"time"}]},getTeamMembers:{sid:n.team.id,cid:n.team.getTeamMembers,params:[{type:"long",name:"teamId"},{type:"long",name:"time"}]},dismissTeam:{sid:n.team.id,cid:n.team.dismissTeam,params:[{type:"long",name:"teamId"}]},applyTeam:{sid:n.team.id,cid:n.team.applyTeam,params:[{type:"long",name:"teamId"},{type:"String",name:"ps"}]},passTeamApply:{sid:n.team.id,cid:n.team.passTeamApply,params:[{type:"long",name:"teamId"},{type:"String",name:"from"}]},rejectTeamApply:{sid:n.team.id,cid:n.team.rejectTeamApply,params:[{type:"long",name:"teamId"},{type:"String",name:"from"},{type:"String",name:"ps"}]},addTeamManagers:{sid:n.team.id,cid:n.team.addTeamManagers,params:[{type:"long",name:"teamId"},{type:"StrArray",name:"accounts"}]},removeTeamManagers:{sid:n.team.id,cid:n.team.removeTeamManagers,params:[{type:"long",name:"teamId"},{type:"StrArray",name:"accounts"}]},transferTeam:{sid:n.team.id,cid:n.team.transferTeam,params:[{type:"long",name:"teamId"},{type:"String",name:"account"},{type:"bool",name:"leave"}]},updateInfoInTeam:{sid:n.team.id,cid:n.team.updateInfoInTeam,params:[{type:"Property",name:"teamMember"}]},updateNickInTeam:{sid:n.team.id,cid:n.team.updateNickInTeam,params:[{type:"Property",name:"teamMember"}]},acceptTeamInvite:{sid:n.team.id,cid:n.team.acceptTeamInvite,params:[{type:"long",name:"teamId"},{type:"String",name:"from"}]},rejectTeamInvite:{sid:n.team.id,cid:n.team.rejectTeamInvite,params:[{type:"long",name:"teamId"},{type:"String",name:"from"},{type:"String",name:"ps"}]},getTeamHistoryMsgs:{sid:n.team.id,cid:n.team.getTeamHistoryMsgs,params:[{type:"long",name:"to"},{type:"long",name:"beginTime"},{type:"long",name:"endTime"},{type:"long",name:"lastMsgId"},{type:"int",name:"limit"},{type:"bool",name:"reverse"}]},searchTeamHistoryMsgs:{sid:n.team.id,cid:n.team.searchTeamHistoryMsgs,params:[{type:"long",name:"to"},{type:"long",name:"beginTime"},{type:"long",name:"endTime"},{type:"String",name:"keyword"},{type:"int",name:"limit"},{type:"bool",name:"reverse"}]},friendRequest:{sid:n.friend.id,cid:n.friend.friendRequest,params:[{type:"String",name:"account"},{type:"byte",name:"type"},{type:"String",name:"ps"}]},deleteFriend:{sid:n.friend.id,cid:n.friend.deleteFriend,params:[{type:"String",name:"account"}]},updateFriend:{sid:n.friend.id,cid:n.friend.updateFriend,params:[{type:"Property",name:"friend"}]},getFriends:{sid:n.friend.id,cid:n.friend.getFriends,params:[{type:"long",name:"time"}]},sendFilterMsg:{sid:n.filter.id,cid:n.filter.sendFilterMsg,params:[{type:"Property",name:"msg"}]},sendFilterCustomSysMsg:{sid:n.filter.id,cid:n.filter.sendFilterCustomSysMsg,params:[{type:"Property",name:"sysMsg"}]}},i={"1_2":{service:"link",cmd:"heartbeat"},"2_3":{service:"auth",cmd:"login",response:[{type:"Property",name:"loginRes"},{type:"PropertyArray",name:"loginPorts",entity:"loginPort"}]},"2_5":{service:"auth",cmd:"kicked",response:[{type:"Number",name:"from"},{type:"Number",name:"reason"}]},"2_6":{service:"auth",cmd:"logout"},"2_7":{service:"auth",cmd:"multiPortLogin",response:[{type:"Number",name:"state"},{type:"PropertyArray",name:"loginPorts",entity:"loginPort"}]},"2_8":{service:"auth",cmd:"kick",response:[{type:"StrArray",name:"deviceIds"}]},"3_3":{service:"user",cmd:"markInBlacklist"},"3_103":{service:"user",cmd:"syncMarkInBlacklist",response:[{type:"String",name:"account"},{type:"Boolean",name:"isAdd"}]},"3_4":{service:"user",cmd:"getBlacklist",response:[{type:"StrArray",name:"blacklist"}]},"3_5":{service:"user",cmd:"markInMutelist"},"3_105":{service:"user",cmd:"syncMarkInMutelist",response:[{type:"String",name:"account"},{type:"Boolean",name:"isAdd"}]},"3_6":{service:"user",cmd:"getMutelist",response:[{type:"StrArray",name:"mutelist"}]},"3_8":{service:"user",cmd:"getBlacklistAndMutelist",response:[{type:"PropertyArray",name:"specialRelations",entity:"specialRelation"}]},"3_7":{service:"user",cmd:"getUsers",response:[{type:"PropertyArray",name:"users",entity:"user"}]},"3_10":{service:"user",cmd:"updateMyInfo",response:[{type:"Number",name:"timetag"}]},"3_109":{service:"user",cmd:"syncMyInfo",response:[{type:"Property",name:"user"},{type:"Number",name:"timetag"}]},"3_110":{service:"user",cmd:"syncUpdateMyInfo",response:[{type:"Property",name:"user"}]},"4_1":{service:"notify"},"4_2":{service:"notify"},"4_3":{service:"notify",cmd:"markRead"},"4_4":{service:"notify",cmd:"syncOfflineMsgs",response:[{type:"PropertyArray",name:"msgs",entity:"msg"}]},"4_5":{service:"notify",cmd:"batchMarkRead"},"4_6":{service:"notify",cmd:"syncOfflineSysMsgs",response:[{type:"PropertyArray",name:"sysMsgs",entity:"sysMsg"}]},"4_9":{service:"notify",cmd:"syncRoamingMsgs",response:[{type:"PropertyArray",name:"msgs",entity:"msg"}]},"4_100":{service:"notify",cmd:"syncOfflineFilterMsgs",response:[{type:"PropertyArray",name:"msgs",entity:"msg"}]},"4_101":{service:"notify",cmd:"syncOfflineFilterSysMsgs",response:[{type:"PropertyArray",name:"sysMsgs",entity:"sysMsg"}]},"5_1":{service:"sync",cmd:"sync",response:[{type:"Number",name:"syncTime"}]},"5_2":{service:"sync",cmd:"syncTeamMembers",response:[{type:"Number",name:"syncTime"}]},"6_2":{service:"misc",cmd:"getNosToken",response:[{type:"Property",name:"nosToken"}]},"7_1":{service:"talk",cmd:"sendMsg",response:[{type:"Property",name:"msg"}]},"7_2":{service:"talk",cmd:"msg",response:[{type:"Property",name:"msg"}]},"7_3":{service:"talk",cmd:"sysMsg",response:[{type:"Property",name:"sysMsg"}]},"7_6":{service:"talk",cmd:"getHistoryMsgs",response:[{type:"PropertyArray",name:"msgs",entity:"msg"}]},"7_7":{service:"talk",cmd:"sendCustomSysMsg"},"7_8":{service:"talk",cmd:"searchHistoryMsgs",response:[{type:"PropertyArray",name:"msgs",entity:"msg"}]},"7_9":{service:"talk",cmd:"deleteSessions"},"7_10":{service:"talk",cmd:"getSessions",response:[{type:"StrArray",name:"sessions"}]},"7_101":{service:"talk",cmd:"syncSendMsg",response:[{type:"Property",name:"msg"}]},"8_1":{service:"team",cmd:"createTeam",response:[{type:"Property",name:"team"}]},"8_2":{service:"team",cmd:"sendTeamMsg",response:[{type:"Property",name:"msg"}]},"8_3":{service:"team",cmd:"teamMsg",response:[{type:"Property",name:"msg"}]},"8_4":{service:"team",cmd:"teamMsgs",response:[{type:"PropertyArray",name:"msgs",entity:"msg"}]},"8_5":{service:"team",cmd:"addTeamMembers"},"8_6":{service:"team",cmd:"removeTeamMembers"},"8_7":{service:"team",cmd:"updateTeam",response:[{type:"Number",name:"id"},{type:"Number",name:"time"}]},"8_8":{service:"team",cmd:"leaveTeam"},"8_9":{service:"team",cmd:"getTeam",response:[{type:"Property",name:"team"}]},"8_10":{service:"team",cmd:"getTeams",response:[{type:"PropertyArray",name:"teams",entity:"team"},{type:"Number",name:"time"}]},"8_11":{service:"team",cmd:"getTeamMembers",response:[{type:"Number",name:"teamId"},{type:"PropertyArray",name:"members",entity:"teamMember"},{type:"Number",name:"time"}]},"8_12":{service:"team",cmd:"dismissTeam"},"8_13":{service:"team",cmd:"applyTeam",response:[{type:"Property",name:"team"}]},"8_14":{service:"team",cmd:"passTeamApply"},"8_15":{service:"team",cmd:"rejectTeamApply"},"8_16":{service:"team",cmd:"addTeamManagers"},"8_17":{service:"team",cmd:"removeTeamManagers"},"8_18":{service:"team",cmd:"transferTeam"},"8_19":{service:"team",cmd:"updateInfoInTeam"},"8_20":{service:"team",cmd:"updateNickInTeam"},"8_21":{service:"team",cmd:"acceptTeamInvite",response:[{type:"Property",name:"team"}]},"8_22":{service:"team",cmd:"rejectTeamInvite"},"8_23":{service:"team",cmd:"getTeamHistoryMsgs",response:[{type:"PropertyArray",name:"msgs",entity:"msg"}]},"8_24":{service:"team",cmd:"searchTeamHistoryMsgs",response:[{type:"PropertyArray",name:"msgs",entity:"msg"}]},"8_109":{service:"team",cmd:"syncTeams",response:[{type:"Number",name:"syncTime"},{type:"PropertyArray",name:"teams",entity:"team"}]},"8_111":{service:"team",cmd:"syncTeamMembers",response:[{type:"Number",name:"teamId"},{type:"PropertyArray",name:"members",entity:"teamMember"},{type:"Number",name:"syncTime"}]},"8_101":{service:"team",cmd:"syncCreateTeam",response:[{type:"Property",name:"team"}]},"8_102":{service:"team",cmd:"syncSendTeamMsg",response:[{type:"Property",name:"msg"}]},"8_119":{service:"team",cmd:"syncUpdateTeamMember",response:[{type:"Property",name:"teamMember"}]},"12_1":{service:"friend",cmd:"friendRequest"},"12_101":{service:"friend",cmd:"syncFriendRequest",response:[{type:"String",name:"account"},{type:"Number",name:"type"},{type:"String",name:"ps"}]},"12_2":{service:"friend",cmd:"deleteFriend"},"12_102":{service:"friend",cmd:"syncDeleteFriend",response:[{type:"String",name:"account"}]},"12_3":{service:"friend",cmd:"updateFriend"},"12_103":{service:"friend",cmd:"syncUpdateFriend",response:[{type:"Property",name:"friend"}]},"12_4":{service:"friend",cmd:"getFriends",response:[{type:"PropertyArray",name:"friends",entity:"friend"}]},"12_5":{service:"friend",cmd:"syncFriends",response:[{type:"PropertyArray",name:"friends",entity:"friend"},{type:"Number",name:"syncTime"}]},"12_6":{service:"friend",cmd:"syncFriendUsers",response:[{type:"PropertyArray",name:"users",entity:"user"},{type:"Number",name:"syncTime"}]},"101_1":{service:"filter",cmd:"sendFilterMsg",response:[{type:"Property",name:"msg"}]},"101_2":{service:"filter",cmd:"filterMsg",response:[{type:"Property",name:"msg"}]},"101_3":{service:"filter",cmd:"filterSysMsg",response:[{type:"Property",name:"sysMsg"}]},"101_7":{service:"filter",cmd:"sendFilterCustomSysMsg"}};e.exports={idMap:n,cmdConfig:r,packetConfig:i}},function(e,t){e.exports={login:{os:4,sdkVersion:6,protocolVersion:9,deviceId:13,appKey:18,account:19,browser:24,token:1e3},loginRes:{lastLoginDeviceId:17,connectionId:102,ip:103,port:104,country:106},loginPort:{type:3,os:4,mac:5,deviceId:13,account:19,connectionId:102,ip:103,time:109},sync:{myInfo:1,offline:2,teams:3,teamMembers:5,roamingMsgs:7,blacklistAndMutelist:9,friends:11,sessions:12,friendusers:13,filter:100},team:{teamId:1,name:3,type:4,owner:5,level:6,selfCustom:7,valid:8,memberNum:9,memberUpdateTime:10,createTime:11,updateTime:12,validToCurrentUser:13,intro:14,announcement:15,joinMode:16,bits:17,custom:18,serverCustom:19},teamMember:{teamId:1,account:3,type:4,nickInTeam:5,bits:7,active:8,valid:9,joinTime:10,updateTime:11},msg:{scene:0,to:1,from:2,fromClientType:4,fromDeviceId:5,fromNick:6,time:7,type:8,body:9,attach:10,idClient:11,idServer:12,resend:13,userUpdateTime:14,isHistoryable:100,isRoamingable:101,isSyncable:102,isMuted:104,cc:105,isPushable:107},sysMsg:{time:0,type:1,to:2,from:3,ps:4,attach:5,idServer:6,sendToOnlineUsersOnly:7,apnsText:8,cc:105},nosToken:{objectName:1,token:2,bucket:3,expireTime:4},friend:{account:4,flag:5,beflag:6,source:7,alias:8,bits:9,custom:10,createTime:11,updateTime:12},user:{account:1,nick:3,avatar:4,sign:5,gender:6,email:7,birth:8,tel:9,custom:10,createTime:12,updateTime:13},specialRelation:{account:0,isMuted:1,isBlacked:2,createTime:3,updateTime:4}}},function(e,t,n){"use strict";var r=n(12),i=n(1),o={log:i.emptyFunc,debug:!1,api:"log",style:"color:blue;background:rgba(0,0,0,0.05);",_log:function(e){return console&&console.log(e)}},s=["log","info","warn","error"],a=["Chrome","Safari","Firefox"];o.setDebug=function(e){if(e=e?e:!1,o.debug=e,e.api&&-1!==s.indexOf(e.api)&&(o.api=e.api),e.style&&(o.style=e.style),o.debug&&window.console&&console[o.api])if("function"==typeof console[o.api].apply)o.log=function(){var e=[].slice.call(arguments,0);o.formatArgs(e),-1!==a.indexOf(r.name)&&i.isString(e[0])&&(e[0]="%c"+e[0],e.splice(1,0,o.style)),console[o.api].apply(console,e)};else switch(o.api){case"debug":o.log=function(){var e=[].slice.call(arguments,0);o.formatArgs(e);for(var t=0,n=e.length;n>t;t++)console.debug(JSON.stringify(e[t]))};break;case"log":o.log=function(){var e=[].slice.call(arguments,0);o.formatArgs(e);for(var t=0,n=e.length;n>t;t++)console.log(JSON.stringify(e[t]))};break;case"info":o.log=function(){var e=[].slice.call(arguments,0);o.formatArgs(e);for(var t=0,n=e.length;n>t;t++)console.info(JSON.stringify(e[t]))};break;case"warn":o.log=function(){var e=[].slice.call(arguments,0);o.formatArgs(e);for(var t=0,n=e.length;n>t;t++)console.warn(JSON.stringify(e[t]))};break;case"error":o.log=function(){var e=[].slice.call(arguments,0);o.formatArgs(e);for(var t=0,n=e.length;n>t;t++)console.error(JSON.stringify(e[t]))}}else o.log=i.emptyFunc},o.formatArgs=function(e){var t=new Date,n=t.getFullYear()+"-"+c(t.getMonth()+1)+"-"+c(t.getDate())+" "+c(t.getHours())+":"+c(t.getMinutes())+":"+c(t.getSeconds())+":"+c(t.getMilliseconds(),3),r="[NIM SDK LOG "+ +t+" "+n+"]	";i.isString(e[0])?e[0]=r+e[0]:e.splice(0,0,r)};var c=function(e,t){t=t||2;for(var n=""+e;n.length<t;)n="0"+n;return n};e.exports=o},function(e,t,n){var r;(function(e,i){(function(){"use strict";function o(e){return e=String(e),e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t,n){var r={6.4:"10",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&n&&/^Win/i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&n&&(e=e.replace(RegExp(t,"i"),n)),e=c(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").split(" on ")[0])}function a(e,t){var n=-1,r=e?e.length:0;if("number"==typeof r&&r>-1&&S>=r)for(;++n<r;)t(e[n],n,e);else l(e,t)}function c(e){return e=m(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:o(e)}function l(e,t){for(var n in e)C.call(e,n)&&t(e[n],n,e)}function u(e){return null==e?o(e):I.call(e).slice(8,-1)}function p(e,t){var n=null!=e?typeof e[t]:"number";return!/^(?:boolean|number|string|undefined)$/.test(n)&&("object"==n?!!e[t]:!0)}function d(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function f(e,t){var n=null;return a(e,function(r,i){n=t(n,r,i,e)}),n}function m(e){return String(e).replace(/^ +| +$/g,"")}function y(e){function t(t){return f(t,function(t,n){return t||RegExp("\\b"+(n.pattern||d(n))+"\\b","i").exec(e)&&(n.label||n)})}function n(t){return f(t,function(t,n,r){return t||(n[G]||n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(G)]||RegExp("\\b"+d(r)+"(?:\\b|\\w*\\d)","i").exec(e))&&r})}function r(t){return f(t,function(t,n){return t||RegExp("\\b"+(n.pattern||d(n))+"\\b","i").exec(e)&&(n.label||n)})}function i(t){return f(t,function(t,n){var r=n.pattern||d(n);return!t&&(t=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(t=s(t,r,n.label||n)),t})}function o(t){return f(t,function(t,n){var r=n.pattern||d(n);return!t&&(t=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(n.label&&!RegExp(r,"i").test(n.label)?n.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),n=n.label||n,t=c(t[0].replace(RegExp(r,"i"),n).replace(RegExp("; *(?:"+n+"[_-])?","i")," ").replace(RegExp("("+n+")[-_.]?(\\w)","i"),"$1 $2"))),t})}function a(t){return f(t,function(t,n){return t||(RegExp(n+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null})}function h(){return this.description||""}var b=v,k=e&&"object"==typeof e&&"String"!=u(e);k&&(b=e,e=null);var T=b.navigator||{},S=T.userAgent||"";e||(e=S);var O,C,_=k||M==g,x=k?!!T.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(I.toString()),E="Object",P=k?E:"ScriptBridgingProxyObject",j=k?E:"Environment",A=k&&b.java?"JavaPackage":u(b.java),R=k?E:"RuntimeObject",F=/\bJava/.test(A)&&b.java,N=F&&u(b.environment)==j,D=F?"a":"α",B=F?"b":"β",U=b.document||{},W=b.operamini||b.opera,L=w.test(L=k&&W?W["[[Class]]"]:u(W))?L:W=null,$=e,H=[],q=null,X=e==S,V=X&&W&&"function"==typeof W.version&&W.version(),z=t(["Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),J=r(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel",{label:"SRWare Iron",pattern:"Iron"},"K-Meleon","Konqueror","Lunascape","Maxthon","Midori","Nook Browser","PhantomJS","Raven","Rekonq","RockMelt","SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser","Sunrise","Swiftfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),G=o([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nook","PlayBook","PlayStation 4","PlayStation 3","PlayStation Vita","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),K=n({Apple:{iPad:1,iPhone:1,iPod:1},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{"PlayStation 4":1,"PlayStation 3":1,"PlayStation Vita":1}}),Z=i(["Windows Phone ","Android","CentOS","Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);if(z&&(z=[z]),K&&!G&&(G=o([K])),(O=/\bGoogle TV\b/.exec(G))&&(G=O[0]),/\bSimulator\b/i.test(e)&&(G=(G?G+" ":"")+"Simulator"),"Opera Mini"==J&&/\bOPiOS\b/.test(e)&&H.push("running in Turbo/Uncompressed mode"),/^iP/.test(G)?(J||(J="Safari"),Z="iOS"+((O=/ OS ([\d_]+)/i.exec(e))?" "+O[1].replace(/_/g,"."):"")):"Konqueror"!=J||/buntu/i.test(Z)?K&&"Google"!=K&&(/Chrome/.test(J)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test(G))?(J="Android Browser",Z=/\bAndroid\b/.test(Z)?Z:"Android"):(!J||(O=!/\bMinefield\b|\(Android;/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(J)))&&(J&&!G&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(O+"/")+8))&&(J=null),(O=G||K||Z)&&(G||K||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(Z))&&(J=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(Z)?Z:O)+" Browser")):Z="Kubuntu",(O=/\((Mobile|Tablet).*?Firefox\b/i.exec(e))&&O[1]&&(Z="Firefox OS",G||(G=O[1])),V||(V=a(["(?:Cloud9|CriOS|CrMo|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|Silk(?!/[\\d.]+$))","Version",d(J),"(?:Firefox|Minefield|NetFront)"])),"iCab"==z&&parseFloat(V)>3?z=["WebKit"]:"Trident"!=z&&(O=/\bOpera\b/.test(J)&&(/\bOPR\b/.test(e)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&"WebKit"||!z&&/\bMSIE\b/i.test(e)&&("Mac OS"==Z?"Tasman":"Trident"))?z=[O]:/\bPlayStation\b(?! Vita\b)/i.test(J)&&"WebKit"==z&&(z=["NetFront"]),"IE"==J&&(O=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(J+=" Mobile",Z="Windows Phone "+(/\+$/.test(O)?O:O+".x"),H.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(J="IE Mobile",Z="Windows Phone 8+",H.unshift("desktop mode"),V||(V=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=J&&"Trident"==z&&(O=/\brv:([\d.]+)/.exec(e))?(/\bWPDesktop\b/i.test(e)||(J&&H.push("identifying as "+J+(V?" "+V:"")),J="IE"),V=O[1]):"Chrome"!=J&&"IE"==J||!(O=/\bEdge\/([\d.]+)/.exec(e))||(J="IE",V=O[1],z=["Trident"],H.unshift("platform preview")),X){if(p(b,"global"))if(F&&(O=F.lang.System,$=O.getProperty("os.arch"),Z=Z||O.getProperty("os.name")+" "+O.getProperty("os.version")),_&&p(b,"system")&&(O=[b.system])[0]){Z||(Z=O[0].os||null);try{O[1]=b.require("ringo/engine").version,V=O[1].join("."),J="RingoJS"}catch(Q){O[0].global.system==b.system&&(J="Narwhal")}}else"object"==typeof b.process&&(O=b.process)?(J="Node.js",$=O.arch,Z=O.platform,V=/[\d.]+/.exec(O.version)[0]):N&&(J="Rhino");else u(O=b.runtime)==P?(J="Adobe AIR",Z=O.flash.system.Capabilities.os):u(O=b.phantom)==R?(J="PhantomJS",V=(O=O.version||null)&&O.major+"."+O.minor+"."+O.patch):"number"==typeof U.documentMode&&(O=/\bTrident\/(\d+)/i.exec(e))&&(V=[V,U.documentMode],(O=+O[1]+4)!=V[1]&&(H.push("IE "+V[1]+" mode"),z&&(z[1]=""),V[1]=O),V="IE"==J?String(V[1].toFixed(1)):V[0]);Z=Z&&c(Z)}V&&(O=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(V)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(X&&T.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&(q=/b/i.test(O)?"beta":"alpha",V=V.replace(RegExp(O+"\\+?$"),"")+("beta"==q?B:D)+(/\d+\+?/.exec(O)||"")),"Fennec"==J||"Firefox"==J&&/\b(?:Android|Firefox OS)\b/.test(Z)?J="Firefox Mobile":"Maxthon"==J&&V?V=V.replace(/\.[\d.]+/,".x"):"Silk"==J?(/\bMobi/i.test(e)||(Z="Android",H.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&H.unshift("accelerated")):/\bXbox\b/i.test(G)?(Z=null,"Xbox 360"==G&&/\bIEMobile\b/.test(e)&&H.unshift("mobile mode")):!/^(?:Chrome|IE|Opera)$/.test(J)&&(!J||G||/Browser|Mobi/.test(J))||"Windows CE"!=Z&&!/Mobi/i.test(e)?"IE"==J&&X&&null===b.external?H.unshift("platform preview"):(/\bBlackBerry\b/.test(G)||/\bBB10\b/.test(e))&&(O=(RegExp(G.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||V)?(O=[O,/BB10/.test(e)],Z=(O[1]?(G=null,K="BlackBerry"):"Device Software")+" "+O[0],V=null):this!=l&&"Wii"!=G&&(X&&W||/Opera/.test(J)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==J&&/\bOS X (?:\d+\.){2,}/.test(Z)||"IE"==J&&(Z&&!/^Win/.test(Z)&&V>5.5||/\bWindows XP\b/.test(Z)&&V>8||8==V&&!/\bTrident\b/.test(e)))&&!w.test(O=y.call(l,e.replace(w,"")+";"))&&O.name&&(O="ing as "+O.name+((O=O.version)?" "+O:""),w.test(J)?(/\bIE\b/.test(O)&&"Mac OS"==Z&&(Z=null),O="identify"+O):(O="mask"+O,J=L?c(L.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(O)&&(Z=null),X||(V=null)),z=["Presto"],H.push(O)):J+=" Mobile",(O=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(O=[parseFloat(O.replace(/\.(\d)$/,".0$1")),O],"Safari"==J&&"+"==O[1].slice(-1)?(J="WebKit Nightly",q="alpha",V=O[1].slice(0,-1)):(V==O[1]||V==(O[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1]))&&(V=null),O[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==O[0]&&537.36==O[2]&&parseFloat(O[1])>=28&&"IE"!=J&&(z=["Blink"]),X&&(x||O[1])?(z&&(z[1]="like Chrome"),O=O[1]||(O=O[0],530>O?1:532>O?2:532.05>O?3:533>O?4:534.03>O?5:534.07>O?6:534.1>O?7:534.13>O?8:534.16>O?9:534.24>O?10:534.3>O?11:535.01>O?12:535.02>O?"13+":535.07>O?15:535.11>O?16:535.19>O?17:536.05>O?18:536.1>O?19:537.01>O?20:537.11>O?"21+":537.13>O?23:537.18>O?24:537.24>O?25:537.36>O?26:"Blink"!=z?"27":"28")):(z&&(z[1]="like Safari"),O=O[0],O=400>O?1:500>O?2:526>O?3:533>O?4:534>O?"4+":535>O?5:537>O?6:538>O?7:601>O?8:"8"),z&&(z[1]+=" "+(O+="number"==typeof O?".x":/[.+]/.test(O)?"":"+")),"Safari"==J&&(!V||parseInt(V)>45)&&(V=O)),"Opera"==J&&(O=/\bzbov|zvav$/.exec(Z))?(J+=" ",H.unshift("desktop mode"),"zvav"==O?(J+="Mini",V=null):J+="Mobile",Z=Z.replace(RegExp(" *"+O+"$"),"")):"Safari"==J&&/\bChrome\b/.exec(z&&z[1])&&(H.unshift("desktop mode"),J="Chrome Mobile",V=null,/\bOS X\b/.test(Z)?(K="Apple",Z="iOS 4.3+"):Z=null),V&&0==V.indexOf(O=/[\d.]+$/.exec(Z))&&e.indexOf("/"+O+"-")>-1&&(Z=m(Z.replace(O,""))),z&&!/\b(?:Avant|Nook)\b/.test(J)&&(/Browser|Lunascape|Maxthon/.test(J)||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Sleipnir|Web)/.test(J)&&z[1])&&(O=z[z.length-1])&&H.push(O),H.length&&(H=["("+H.join("; ")+")"]),K&&G&&G.indexOf(K)<0&&H.push("on "+K),G&&H.push((/^on /.test(H[H.length-1])?"":"on ")+G),Z&&(O=/ ([\d.+]+)$/.exec(Z),C=O&&"/"==Z.charAt(Z.length-O[0].length-1),Z={architecture:32,family:O&&!C?Z.replace(O[0],""):Z,version:O?O[1]:null,toString:function(){var e=this.version;return this.family+(e&&!C?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(O=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec($))&&!/\bi686\b/i.test($)&&(Z&&(Z.architecture=64,Z.family=Z.family.replace(RegExp(" *"+O),"")),J&&(/\bWOW64\b/i.test(e)||X&&/\w(?:86|32)$/.test(T.cpuClass||T.platform)&&!/\bWin64; x64\b/i.test(e))&&H.unshift("32-bit")),e||(e=null);var Y={};return Y.description=e,Y.layout=z&&z[0],Y.manufacturer=K,Y.name=J,Y.prerelease=q,Y.product=G,Y.ua=e,Y.version=J&&V,Y.os=Z||{architecture:null,family:null,version:null,toString:function(){return"null"}},Y.parse=y,Y.toString=h,Y.version&&H.unshift(V),Y.name&&H.unshift(J),Z&&J&&(Z!=String(Z).split(" ")[0]||Z!=J.split(" ")[0]&&!G)&&H.push(G?"("+Z+")":"on "+Z),H.length&&(Y.description=H.join(" ")),Y}var h={"function":!0,object:!0},v=h[typeof window]&&window||this,g=v,b=h[typeof t]&&t,k=h[typeof e]&&e&&!e.nodeType&&e,T=b&&k&&"object"==typeof i&&i;!T||T.global!==T&&T.window!==T&&T.self!==T||(v=T);var S=Math.pow(2,53)-1,w=/\bOpera/,M=this,O=Object.prototype,C=O.hasOwnProperty,I=O.toString;r=function(){return y()}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}).call(this)}).call(t,n(13)(e),function(){return this}())},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,n){var r="1.5.0",i="https://lbs.netease.im/lbs/webconf.jsp",o=n(15),s=n(1),a={};if(!s.notundef(r))throw new Error("please inject version");if(a.version=r,!s.notundef(i))throw new Error("please inject lbsUrl");a.lbsUrl=i,a.sdkVersion=16,a.protocolVersion=1,a.lbsMaxRetryCount=1,a.reconnectionDelay=1e3,a.reconnectionDelayMax=8e3,a.socketTimeout=6e3,a.socketServerUrls=[],a.socketServerUrlsBackup=[],a.socketServerUrl="https://weblink.netease.im:9092",a.getSocketServerUrl=function(e){var t=a.lbsUrl+"?k="+e.appKey+"&id="+e.account+"&sv="+a.sdkVersion+"&pv="+a.protocolVersion;o({method:"GET",cors:!0,url:t},function(t,n,r){t?e.done(t):(r=JSON.parse(r),r.common.link.forEach(function(e){a.socketServerUrls.push(a.formatSocketServerUrl(e))}),r.common["link.default"].forEach(function(e){e=a.formatSocketServerUrl(e),
	-1===a.socketServerUrls.indexOf(e)&&a.socketServerUrls.push(e)}),a.socketServerUrls=a.socketServerUrls.slice(0,5),a.socketServerUrlsBackup=a.socketServerUrls.slice(0),e.done(null,a.getNextSocketServerUrl()))})},a.formatSocketServerUrl=function(e){return-1===e.indexOf("https")?"https://"+e:e},a.getNextSocketServerUrl=function(){var e=a.socketServerUrls.shift();return e},a.restoreSocketServerUrls=function(){a.socketServerUrls=a.socketServerUrlsBackup.slice(0)};var c="https://nos.netease.com/";a.fileServerUrl=c,a.genUploadUrl=function(e){return a.fileServerUrl+e},a.genDownloadUrl=function(e,t){return a.fileServerUrl===c?"http://"+e+".nos.netease.com/"+t:void 0},e.exports=a},function(e,t,n){"use strict";function r(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function i(e,t){function n(){4===p.readyState&&l()}function o(){var e=void 0;if(p.response?e=p.response:"text"!==p.responseType&&p.responseType||(e=p.responseText||p.responseXML),k)try{e=JSON.parse(e)}catch(t){}return e}function s(e){clearTimeout(m),e instanceof Error||(e=new Error(""+(e||"unknown"))),e.statusCode=0,t(e,u)}function l(){if(!f){var n;clearTimeout(m),n=e.useXDR&&void 0===p.status?200:1223===p.status?204:p.status;var r=u,i=null;0!==n?(r={body:o(),statusCode:n,method:h,headers:{},url:y,rawRequest:p},p.getAllResponseHeaders&&(r.headers=c(p.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),t(i,r,r.body)}}var u={body:void 0,headers:{},statusCode:0,method:h,url:y,rawRequest:p};if("string"==typeof e&&(e={uri:e}),e=e||{},"undefined"==typeof t)throw new Error("callback argument missing");t=a(t);var p=e.xhr||null;p||(p=e.cors||e.useXDR?new i.XDomainRequest:new i.XMLHttpRequest);var d,f,m,y=p.url=e.uri||e.url,h=p.method=e.method||"GET",v=e.body||e.data,g=p.headers=e.headers||{},b=!!e.sync,k=!1;if("json"in e&&(k=!0,g.accept||g.Accept||(g.Accept="application/json"),"GET"!==h&&"HEAD"!==h&&(g["Content-Type"]="application/json",v=JSON.stringify(e.json))),p.onreadystatechange=n,p.onload=l,p.onerror=s,p.onprogress=function(){},p.ontimeout=s,p.open(h,y,!b,e.username,e.password),b||(p.withCredentials=!!e.withCredentials),!b&&e.timeout>0&&(m=setTimeout(function(){f=!0,p.abort("timeout"),s()},e.timeout)),p.setRequestHeader)for(d in g)g.hasOwnProperty(d)&&p.setRequestHeader(d,g[d]);else if(e.headers&&!r(e.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in e&&(p.responseType=e.responseType),"beforeSend"in e&&"function"==typeof e.beforeSend&&e.beforeSend(p),p.send(v),p}function o(){}var s=n(16),a=n(17),c=n(18);e.exports=i,i.XMLHttpRequest=s.XMLHttpRequest||o,i.XDomainRequest="withCredentials"in new i.XMLHttpRequest?i.XMLHttpRequest:s.XDomainRequest},function(e,t){(function(t){e.exports="undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{}}).call(t,function(){return this}())},function(e,t){function n(e){var t=!1;return function(){return t?void 0:(t=!0,e.apply(this,arguments))}}e.exports=n,n.proto=n(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return n(this)},configurable:!0})})},function(e,t,n){var r=n(19),i=n(20),o=function(e){return"[object Array]"===Object.prototype.toString.call(e)};e.exports=function(e){if(!e)return{};var t={};return i(r(e).split("\n"),function(e){var n=e.indexOf(":"),i=r(e.slice(0,n)).toLowerCase(),s=r(e.slice(n+1));"undefined"==typeof t[i]?t[i]=s:o(t[i])?t[i].push(s):t[i]=[t[i],s]}),t}},function(e,t){function n(e){return e.replace(/^\s*|\s*$/g,"")}t=e.exports=n,t.left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}},function(e,t,n){function r(e,t,n){if(!a(t))throw new TypeError("iterator must be a function");arguments.length<3&&(n=this),"[object Array]"===c.call(e)?i(e,t,n):"string"==typeof e?o(e,t,n):s(e,t,n)}function i(e,t,n){for(var r=0,i=e.length;i>r;r++)l.call(e,r)&&t.call(n,e[r],r,e)}function o(e,t,n){for(var r=0,i=e.length;i>r;r++)t.call(n,e.charAt(r),r,e)}function s(e,t,n){for(var r in e)l.call(e,r)&&t.call(n,e[r],r,e)}var a=n(21);e.exports=r;var c=Object.prototype.toString,l=Object.prototype.hasOwnProperty},function(e,t){function n(e){var t=r.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}e.exports=n;var r=Object.prototype.toString},function(e,t,n){"use strict";var r=n(6),i=n(14),o=n(12),s=n(11),a=n(23),c=n(1),l=n(2),u=n(24);r.fn.isConnected=function(){return!!this.socket&&!!this.socket.socket&&this.socket.socket.connected},r.fn.connectViaLbs=function(){this.reconnecting=!1,i.getSocketServerUrl({appKey:this.options.appKey,account:this.options.account,done:function(e,t){e?this.reconnect():this.doConnect(t)}.bind(this)})},r.fn.doConnect=function(e){this.isConnected()||(s.log("try connect to "+e),this.socket=u.connect(e,{reconnect:!1,"max reconnection attempts":1/0,"connect timeout":i.socketTimeout,transports:["websocket","xhr-polling"],"force new connection":!0,secure:!0,reconnection:!1,reconnectionAttempts:1/0,timeout:i.socketTimeout,forceNew:!0}),this.socket.on("connect",this.onConnect.bind(this)),this.socket.on("error",this.onError.bind(this)),this.socket.on("message",this.onMessage.bind(this)),this.socket.on("disconnect",this.onDisconnect.bind(this)))},r.fn.onConnect=function(){s.log("onConnect"),s.log("version "+i.version+"; sdkVersion "+i.sdkVersion+"; protocolVersion "+i.protocolVersion),this.reset(),this.backoff&&this.backoff.reset(),this.shouldReconnect=!0,this.kicked=!1,this.lbsRetryCount=0,this.login()},r.fn.onDisconnect=function(){s.log("onDisconnect"),this.afterNetworkError(),this.reconnect()},r.fn.onError=function(){s.log("onError"),this.afterNetworkError(),this.reconnect()},r.fn.reconnect=function(){if(this.reconnecting)return this;if(this.shouldReconnect){this.reconnecting=!0;var e=i.getNextSocketServerUrl();e?(s.log("will try next lbs"),this.doConnect(e)):(this.socket=null,this.lbsRetryCount<i.lbsMaxRetryCount?(this.lbsRetryCount++,s.log("will refresh lbs"),this.connectViaLbs()):this.noReconnect())}else this.noReconnect()},r.fn.noReconnect=function(){this.reset(),this.lbsRetryCount=0,this.reconnecting=!1,s.log("onDisconnect"),this.options.ondisconnect({willReconnect:!1,kicked:this.kicked})},r.fn.login=function(){this.sendCmd("login",{login:{os:o.os.toString(),sdkVersion:i.sdkVersion,protocolVersion:i.protocolVersion,deviceId:o.id,appKey:this.options.appKey,account:this.options.account,browser:o.name+" "+o.version,token:this.options.token}},this.onLogin.bind(this))},r.fn.onLogin=function(e,t){e?(this.afterLoginError(),this.checkMiscError(e,t)):(this.options.onconnect(t),this.syncData(),this.startHeartbeat())},r.fn.logout=function(){this.sendCmd("logout"),this.afterLoginError(),this.socket.disconnect()},r.fn.onLogout=function(){},r.fn.kick=function(e){this.sendCmd("kick",{deviceIds:e.deviceIds},e.callback)},r.fn.onKicked=function(e){switch(s.log("onKicked"),this.afterLoginError(),c.notundef(e.from)&&(e.from=a.reverseType(e.from)),e.reason){case 1:e.reason="samePlatformKick",e.message="Web SDK不允许一个帐号在多个地方同时登录";break;case 2:e.reason="serverKick",e.message="被服务器踢了";break;case 3:e.reason="otherPlatformKick",e.message="被其它端踢了";break;default:e.reason="unknown",e.message="未知原因"}this.kicked=e},r.fn.syncData=function(){c.verifyBooleanWithDefault(this.options,"syncMyInfo syncBlacklistAndMutelist syncFriends syncSessions syncRoamingMsgs syncTeams syncTeamMembers",!0),c.verifyBooleanWithDefault(this.options,"syncFilter",!1);var e={};e.offline=0,this.options.syncMyInfo&&(e.myInfo=0),this.options.syncBlacklistAndMutelist&&(e.blacklistAndMutelist=0),this.options.syncFriends&&(e.friends=0),this.options.syncTeams&&(e.teams=0),this.options.syncSessions&&(e.sessions=0),this.options.syncRoamingMsgs&&(e.roamingMsgs=0),this.options.syncFilter&&(e.filter=0),this.sendCmd("sync",{sync:e},this.onSyncData.bind(this))},r.fn.onSyncData=function(e,t){this.checkMiscError(e,t,"sync data error - 同步数据失败")},r.fn.startHeartbeat=function(){this.stopHeartbeat(),this.heartbeatTimer=window.setInterval(function(){this.sendCmd("heartbeat",null,this.onHeartbeat.bind(this))}.bind(this),18e4)},r.fn.onHeartbeat=function(e,t){this.checkMiscError(e,t,"send heartbeat error - 发送心跳包失败")},r.fn.stopHeartbeat=function(){this.heartbeatTimer&&window.clearInterval(this.heartbeatTimer)},r.fn.checkMiscError=function(e,t,n){e&&(e.appendMessage(n),this.reset(),this.shouldReconnect=!1,t=t||{},t.willReconnect=!1,this.options.onerror(e,t))},r.fn.afterNetworkError=function(){this.markAllCallbackInvalid(l.newNetworkError()),this.reset()},r.fn.afterLoginError=function(){this.markAllCallbackInvalid(l.newConnectionError()),this.reset(),this.shouldReconnect=!1},r.fn.markAllCallbackInvalid=function(e){Object.keys(this.cmdCallbackMap).forEach(function(t){this.markCallbackInvalid(t,e)},this)},r.fn.processLink=function(e){switch(e.cmd){case"heartbeat":}},r.fn.processAuth=function(e){switch(e.cmd){case"login":e.error||(e.obj=e.content.loginRes,this.onLoginPortsChange(e.content.loginPorts,2));break;case"kicked":return void this.onKicked(e.content);case"multiPortLogin":this.onLoginPortsChange(e.content.loginPorts,e.content.state);break;case"kick":e.error||(e.obj.deviceIds=e.content.deviceIds)}},r.fn.onLoginPortsChange=function(e,t){if(e&&e.length){var n=!0;switch(t){case 2:n=!0;break;case 3:n=!1}e.forEach(function(e){e.type=a.reverseType(e.type),e.time=+e.time,e.online=n}),this.options.onloginportschange(e)}},r.fn.processSync=function(e){switch(e.cmd){case"sync":this.syncTime=e.content.syncTime,this.options.onsyncdone();break;case"syncTeamMembers":}}},function(e,t){"use strict";function n(){}var r={1:"Android",2:"iOS",4:"PC",8:"WindowsPhone",16:"Web"},i=function(e){var t=e;return t.type=r[t.type],t},o=function(e){return r[e]||e};e.exports={LoginPort:n,reverse:i,reverseType:o}},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(module){var io=module.exports;!function(){if(function(e,t){var n=e;n.version="0.9.11",n.protocol=1,n.transports=[],n.j=[],n.sockets={},n.connect=function(e,r){var i,o,s=n.util.parseUri(e);t&&t.location&&(s.protocol=s.protocol||t.location.protocol.slice(0,-1),s.host=s.host||(t.document?t.document.domain:t.location.hostname),s.port=s.port||t.location.port),i=n.util.uniqueUri(s);var a={host:s.host,secure:"https"==s.protocol,port:s.port||("https"==s.protocol?443:80),query:s.query||""};return n.util.merge(a,r),(a["force new connection"]||!n.sockets[i])&&(o=new n.Socket(a)),!a["force new connection"]&&o&&(n.sockets[i]=o),o=o||n.sockets[i],o.of(s.path.length>1?s.path:"")}}(module.exports,this),function(e,t){var n=e.util={},r=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,i=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];n.parseUri=function(e){for(var t=r.exec(e||""),n={},o=14;o--;)n[i[o]]=t[o]||"";return n},n.uniqueUri=function(e){var n=e.protocol,r=e.host,i=e.port;return"document"in t?(r=r||document.domain,i=i||("https"==n&&"https:"!==document.location.protocol?443:document.location.port)):(r=r||"localhost",i||"https"!=n||(i=443)),(n||"http")+"://"+r+":"+(i||80)},n.query=function(e,t){var r=n.chunkQuery(e||""),i=[];n.merge(r,n.chunkQuery(t||""));for(var o in r)r.hasOwnProperty(o)&&i.push(o+"="+r[o]);return i.length?"?"+i.join("&"):""},n.chunkQuery=function(e){for(var t,n={},r=e.split("&"),i=0,o=r.length;o>i;++i)t=r[i].split("="),t[0]&&(n[t[0]]=t[1]);return n};var o=!1;n.load=function(e){return"document"in t&&"complete"===document.readyState||o?e():void n.on(t,"load",e,!1)},n.on=function(e,t,n,r){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener&&e.addEventListener(t,n,r)},n.request=function(e){if(e&&"undefined"!=typeof XDomainRequest&&!n.ua.hasCORS)return new XDomainRequest;if("undefined"!=typeof XMLHttpRequest&&(!e||n.ua.hasCORS))return new XMLHttpRequest;if(!e)try{return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}return null},"undefined"!=typeof window&&n.load(function(){o=!0}),n.defer=function(e){return n.ua.webkit&&"undefined"==typeof importScripts?void n.load(function(){setTimeout(e,100)}):e()},n.merge=function(e,t,r,i){var o,s=i||[],a="undefined"==typeof r?2:r;for(o in t)t.hasOwnProperty(o)&&n.indexOf(s,o)<0&&("object"==typeof e[o]&&a?n.merge(e[o],t[o],a-1,s):(e[o]=t[o],s.push(t[o])));return e},n.mixin=function(e,t){n.merge(e.prototype,t.prototype)},n.inherit=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},n.intersect=function(e,t){for(var r=[],i=e.length>t.length?e:t,o=e.length>t.length?t:e,s=0,a=o.length;a>s;s++)~n.indexOf(i,o[s])&&r.push(o[s]);return r},n.indexOf=function(e,t,n){for(var r=e.length,n=0>n?0>n+r?0:n+r:n||0;r>n&&e[n]!==t;n++);return n>=r?-1:n},n.toArray=function(e){for(var t=[],n=0,r=e.length;r>n;n++)t.push(e[n]);return t},n.ua={},n.ua.hasCORS="undefined"!=typeof XMLHttpRequest&&function(){try{var e=new XMLHttpRequest}catch(t){return!1}return void 0!=e.withCredentials}(),n.ua.webkit="undefined"!=typeof navigator&&/webkit/i.test(navigator.userAgent),n.ua.iDevice="undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)}("undefined"!=typeof io?io:module.exports,this),function(e,t){function n(){}e.EventEmitter=n,n.prototype.on=function(e,n){return this.$events||(this.$events={}),this.$events[e]?t.util.isArray(this.$events[e])?this.$events[e].push(n):this.$events[e]=[this.$events[e],n]:this.$events[e]=n,this},n.prototype.addListener=n.prototype.on,n.prototype.once=function(e,t){function n(){r.removeListener(e,n),t.apply(this,arguments)}var r=this;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,n){if(this.$events&&this.$events[e]){var r=this.$events[e];if(t.util.isArray(r)){for(var i=-1,o=0,s=r.length;s>o;o++)if(r[o]===n||r[o].listener&&r[o].listener===n){i=o;break}if(0>i)return this;r.splice(i,1),r.length||delete this.$events[e]}else(r===n||r.listener&&r.listener===n)&&delete this.$events[e]}return this},n.prototype.removeAllListeners=function(e){return void 0===e?(this.$events={},this):(this.$events&&this.$events[e]&&(this.$events[e]=null),this)},n.prototype.listeners=function(e){return this.$events||(this.$events={}),this.$events[e]||(this.$events[e]=[]),t.util.isArray(this.$events[e])||(this.$events[e]=[this.$events[e]]),this.$events[e]},n.prototype.emit=function(e){if(!this.$events)return!1;var n=this.$events[e];if(!n)return!1;var r=Array.prototype.slice.call(arguments,1);if("function"==typeof n)n.apply(this,r);else{if(!t.util.isArray(n))return!1;for(var i=n.slice(),o=0,s=i.length;s>o;o++)i[o].apply(this,r)}return!0}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(exports,nativeJSON){"use strict";function f(e){return 10>e?"0"+e:e}function date(e,t){return isFinite(e.valueOf())?e.getUTCFullYear()+"-"+f(e.getUTCMonth()+1)+"-"+f(e.getUTCDate())+"T"+f(e.getUTCHours())+":"+f(e.getUTCMinutes())+":"+f(e.getUTCSeconds())+"Z":null}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,o,s,a=gap,c=t[e];switch(c instanceof Date&&(c=date(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,s=[],"[object Array]"===Object.prototype.toString.apply(c)){for(o=c.length,n=0;o>n;n+=1)s[n]=str(n,c)||"null";return i=0===s.length?"[]":gap?"[\n"+gap+s.join(",\n"+gap)+"\n"+a+"]":"["+s.join(",")+"]",gap=a,i}if(rep&&"object"==typeof rep)for(o=rep.length,n=0;o>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],i=str(r,c),i&&s.push(quote(r)+(gap?": ":":")+i));else for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(i=str(r,c),i&&s.push(quote(r)+(gap?": ":":")+i));return i=0===s.length?"{}":gap?"{\n"+gap+s.join(",\n"+gap)+"\n"+a+"}":"{"+s.join(",")+"}",gap=a,i}}if(nativeJSON&&nativeJSON.parse)return exports.JSON={parse:nativeJSON.parse,stringify:nativeJSON.stringify};var JSON=exports.JSON={},cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})},JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&"object"==typeof i)for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),void 0!==r?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof JSON?JSON:void 0),function(e,t){var n=e.parser={},r=n.packets=["disconnect","connect","heartbeat","message","json","event","ack","error","noop"],i=n.reasons=["transport not supported","client not handshaken","unauthorized"],o=n.advice=["reconnect"],s=t.JSON,a=t.util.indexOf;n.encodePacket=function(e){var t=a(r,e.type),n=e.id||"",c=e.endpoint||"",l=e.ack,u=null;switch(e.type){case"error":var p=e.reason?a(i,e.reason):"",d=e.advice?a(o,e.advice):"";(""!==p||""!==d)&&(u=p+(""!==d?"+"+d:""));break;case"message":""!==e.data&&(u=e.data);break;case"event":var f={name:e.name};e.args&&e.args.length&&(f.args=e.args),u=s.stringify(f);break;case"json":u=s.stringify(e.data);break;case"connect":e.qs&&(u=e.qs);break;case"ack":u=e.ackId+(e.args&&e.args.length?"+"+s.stringify(e.args):"")}var m=[t,n+("data"==l?"+":""),c];return null!==u&&void 0!==u&&m.push(u),m.join(":")},n.encodePayload=function(e){var t="";if(1==e.length)return e[0];for(var n=0,r=e.length;r>n;n++){var i=e[n];t+="�"+i.length+"�"+e[n]}return t};var c=/([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;n.decodePacket=function(e){var t=e.match(c);if(!t)return{};var n=t[2]||"",e=t[5]||"",a={type:r[t[1]],endpoint:t[4]||""};switch(n&&(a.id=n,a.ack=t[3]?"data":!0),a.type){case"error":var t=e.split("+");a.reason=i[t[0]]||"",a.advice=o[t[1]]||"";break;case"message":a.data=e||"";break;case"event":try{var l=s.parse(e);a.name=l.name,a.args=l.args}catch(u){}a.args=a.args||[];break;case"json":try{a.data=s.parse(e)}catch(u){}break;case"connect":a.qs=e||"";break;case"ack":var t=e.match(/^([0-9]+)(\+)?(.*)/);if(t&&(a.ackId=t[1],a.args=[],t[3]))try{a.args=t[3]?s.parse(t[3]):[]}catch(u){}break;case"disconnect":case"heartbeat":}return a},n.decodePayload=function(e){var t=function(e,t){for(var n=0,r=e;r<t.length;r++){if("�"==t.charAt(r))return n;n++}return n};if("�"==e.charAt(0)){for(var r=[],i=1,o="";i<e.length;i++)if("�"==e.charAt(i)){var s=e.substr(i+1).substr(0,o);if("�"!=e.charAt(i+1+Number(o))&&i+1+Number(o)!=e.length){var a=Number(o);l=t(i+a+1,e),s=e.substr(i+1).substr(0,a+l),i+=l}r.push(n.decodePacket(s)),i+=Number(o)+1,o=""}else o+=e.charAt(i);return r}return[n.decodePacket(e)]}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t){function n(e,t){this.socket=e,this.sessid=t}e.Transport=n,t.util.mixin(n,t.EventEmitter),n.prototype.heartbeats=function(){return!0},n.prototype.onData=function(e){if(this.clearCloseTimeout(),(this.socket.connected||this.socket.connecting||this.socket.reconnecting)&&this.setCloseTimeout(),""!==e){var n=t.parser.decodePayload(e);if(n&&n.length)for(var r=0,i=n.length;i>r;r++)this.onPacket(n[r])}return this},n.prototype.onPacket=function(e){return this.socket.setHeartbeatTimeout(),"heartbeat"==e.type?this.onHeartbeat():("connect"==e.type&&""==e.endpoint&&this.onConnect(),"error"==e.type&&"reconnect"==e.advice&&(this.isOpen=!1),this.socket.onPacket(e),this)},n.prototype.setCloseTimeout=function(){if(!this.closeTimeout){var e=this;this.closeTimeout=setTimeout(function(){e.onDisconnect()},this.socket.closeTimeout)}},n.prototype.onDisconnect=function(){return this.isOpen&&this.close(),this.clearTimeouts(),this.socket.onDisconnect(),this},n.prototype.onConnect=function(){return this.socket.onConnect(),this},n.prototype.clearCloseTimeout=function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)},n.prototype.clearTimeouts=function(){this.clearCloseTimeout(),this.reopenTimeout&&clearTimeout(this.reopenTimeout)},n.prototype.packet=function(e){this.send(t.parser.encodePacket(e))},n.prototype.onHeartbeat=function(e){this.packet({type:"heartbeat"})},n.prototype.onOpen=function(){this.isOpen=!0,this.clearCloseTimeout(),this.socket.onOpen()},n.prototype.onClose=function(){this.isOpen=!1,this.socket.onClose(),this.onDisconnect()},n.prototype.prepareUrl=function(){var e=this.socket.options;return this.scheme()+"://"+e.host+":"+e.port+"/"+e.resource+"/"+t.protocol+"/"+this.name+"/"+this.sessid},n.prototype.ready=function(e,t){t.call(this)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t,n){function r(e){if(this.options={port:80,secure:!1,document:"document"in n?document:!1,resource:"socket.io",transports:t.transports,"connect timeout":1e4,"try multiple transports":!0,reconnect:!0,"reconnection delay":500,"reconnection limit":1/0,"reopen delay":3e3,"max reconnection attempts":10,"sync disconnect on unload":!1,"auto connect":!0,"flash policy port":10843,manualFlush:!1},t.util.merge(this.options,e),this.connected=!1,this.open=!1,this.connecting=!1,this.reconnecting=!1,this.namespaces={},this.buffer=[],this.doBuffer=!1,this.options["sync disconnect on unload"]&&(!this.isXDomain()||t.util.ua.hasCORS)){var r=this;t.util.on(n,"beforeunload",function(){r.disconnectSync()},!1)}this.options["auto connect"]&&this.connect()}function i(){}e.Socket=r,t.util.mixin(r,t.EventEmitter),r.prototype.of=function(e){return this.namespaces[e]||(this.namespaces[e]=new t.SocketNamespace(this,e),""!==e&&this.namespaces[e].packet({type:"connect"})),this.namespaces[e]},r.prototype.publish=function(){this.emit.apply(this,arguments);var e;for(var t in this.namespaces)this.namespaces.hasOwnProperty(t)&&(e=this.of(t),e.$emit.apply(e,arguments))},r.prototype.handshake=function(e){function n(t){t instanceof Error?(r.connecting=!1,r.onError(t.message)):e.apply(null,t.split(":"))}var r=this,o=this.options,s=["http"+(o.secure?"s":"")+":/",o.host+":"+o.port,o.resource,t.protocol,t.util.query(this.options.query,"t="+ +new Date)].join("/");if(this.isXDomain()&&!t.util.ua.hasCORS){var a=document.getElementsByTagName("script")[0],c=document.createElement("script");c.src=s+"&jsonp="+t.j.length,c.onreadystatechange=function(){"loaded"==this.readyState&&c.parentNode&&(c.parentNode.removeChild(c),r.connecting=!1,!r.reconnecting&&r.onError("Server down or port not open"))},a.parentNode.insertBefore(c,a),t.j.push(function(e){n(e),c.parentNode.removeChild(c)})}else{var l=t.util.request();l.open("GET",s,!0),this.isXDomain()&&(l.withCredentials=!0),l.onreadystatechange=function(){4==l.readyState&&(l.onreadystatechange=i,200==l.status?n(l.responseText):403==l.status?r.onError(l.responseText):(r.connecting=!1,!r.reconnecting&&r.onError(l.responseText)))},l.send(null)}},r.prototype.getTransport=function(e){for(var n,r=e||this.transports,i=0;n=r[i];i++)if(t.Transport[n]&&t.Transport[n].check(this)&&(!this.isXDomain()||t.Transport[n].xdomainCheck(this))){var o=new t.Transport[n](this,this.sessionid);return o}return null},r.prototype.connect=function(e){if(this.connecting)return this;var n=this;return n.connecting=!0,this.handshake(function(r,i,o,s){function a(e){return n.transport&&n.transport.clearTimeouts(),n.transport=n.getTransport(e),n.transport?void n.transport.ready(n,function(){n.connecting=!0,n.publish("connecting",n.transport.name),n.transport.open(),n.options["connect timeout"]&&(n.connectTimeoutTimer=setTimeout(function(){if(!n.connected&&(n.connecting=!1,n.options["try multiple transports"])){for(var e=n.transports;e.length>0&&e.splice(0,1)[0]!=n.transport.name;);e.length?a(e):n.publish("connect_failed")}},n.options["connect timeout"]))}):n.publish("connect_failed")}n.sessionid=r,n.closeTimeout=1e3*o,n.heartbeatTimeout=1e3*i,n.transports||(n.transports=n.origTransports=s?t.util.intersect(s.split(","),n.options.transports):n.options.transports),n.setHeartbeatTimeout(),a(n.transports),n.once("connect",function(){clearTimeout(n.connectTimeoutTimer),e&&"function"==typeof e&&e()})}),this},r.prototype.setHeartbeatTimeout=function(){if(clearTimeout(this.heartbeatTimeoutTimer),!this.transport||this.transport.heartbeats()){var e=this;this.heartbeatTimeoutTimer=setTimeout(function(){e.transport.onClose()},this.heartbeatTimeout)}},r.prototype.packet=function(e){return this.connected&&!this.doBuffer?this.transport.packet(e):this.buffer.push(e),this},r.prototype.setBuffer=function(e){this.doBuffer=e,!e&&this.connected&&this.buffer.length&&(this.options.manualFlush||this.flushBuffer())},r.prototype.flushBuffer=function(){this.transport.payload(this.buffer),this.buffer=[]},r.prototype.disconnect=function(){return(this.connected||this.connecting)&&(this.open&&this.of("").packet({type:"disconnect"}),this.onDisconnect("booted")),this},r.prototype.disconnectSync=function(){var e=t.util.request(),n=["http"+(this.options.secure?"s":"")+":/",this.options.host+":"+this.options.port,this.options.resource,t.protocol,"",this.sessionid].join("/")+"/?disconnect=1";e.open("GET",n,!1),e.send(null),this.onDisconnect("booted")},r.prototype.isXDomain=function(){var e=n.location.port||("https:"==n.location.protocol?443:80);return this.options.host!==n.location.hostname||this.options.port!=e},r.prototype.onConnect=function(){this.connected||(this.connected=!0,this.connecting=!1,this.doBuffer||this.setBuffer(!1),this.emit("connect"))},r.prototype.onOpen=function(){this.open=!0},r.prototype.onClose=function(){this.open=!1,clearTimeout(this.heartbeatTimeoutTimer)},r.prototype.onPacket=function(e){this.of(e.endpoint).onPacket(e)},r.prototype.onError=function(e){e&&e.advice&&"reconnect"===e.advice&&(this.connected||this.connecting)&&(this.disconnect(),this.options.reconnect&&this.reconnect()),this.publish("error",e&&e.reason?e.reason:e)},r.prototype.onDisconnect=function(e){var t=this.connected,n=this.connecting;this.connected=!1,this.connecting=!1,this.open=!1,(t||n)&&(this.transport.close(),this.transport.clearTimeouts(),t&&(this.publish("disconnect",e),"booted"!=e&&this.options.reconnect&&!this.reconnecting&&this.reconnect()))},r.prototype.reconnect=function(){function e(){if(n.connected){for(var e in n.namespaces)n.namespaces.hasOwnProperty(e)&&""!==e&&n.namespaces[e].packet({type:"connect"});n.publish("reconnect",n.transport.name,n.reconnectionAttempts)}clearTimeout(n.reconnectionTimer),n.removeListener("connect_failed",t),n.removeListener("connect",t),n.reconnecting=!1,delete n.reconnectionAttempts,delete n.reconnectionDelay,delete n.reconnectionTimer,delete n.redoTransports,n.options["try multiple transports"]=i}function t(){return n.reconnecting?n.connected?e():n.connecting&&n.reconnecting?n.reconnectionTimer=setTimeout(t,1e3):void(n.reconnectionAttempts++>=r?n.redoTransports?(n.publish("reconnect_failed"),e()):(n.on("connect_failed",t),n.options["try multiple transports"]=!0,n.transports=n.origTransports,n.transport=n.getTransport(),n.redoTransports=!0,n.connect()):(n.reconnectionDelay<o&&(n.reconnectionDelay*=2),n.connect(),n.publish("reconnecting",n.reconnectionDelay,n.reconnectionAttempts),n.reconnectionTimer=setTimeout(t,n.reconnectionDelay))):void 0}this.reconnecting=!0,this.reconnectionAttempts=0,this.reconnectionDelay=this.options["reconnection delay"];var n=this,r=this.options["max reconnection attempts"],i=this.options["try multiple transports"],o=this.options["reconnection limit"];this.options["try multiple transports"]=!1,this.reconnectionTimer=setTimeout(t,this.reconnectionDelay),this.on("connect",t)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t){function n(e,t){this.socket=e,this.name=t||"",this.flags={},this.json=new r(this,"json"),this.ackPackets=0,this.acks={}}function r(e,t){this.namespace=e,this.name=t}e.SocketNamespace=n,t.util.mixin(n,t.EventEmitter),n.prototype.$emit=t.EventEmitter.prototype.emit,n.prototype.of=function(){return this.socket.of.apply(this.socket,arguments)},n.prototype.packet=function(e){return e.endpoint=this.name,this.socket.packet(e),this.flags={},this},n.prototype.send=function(e,t){var n={type:this.flags.json?"json":"message",data:e};return"function"==typeof t&&(n.id=++this.ackPackets,n.ack=!0,this.acks[n.id]=t),this.packet(n)},n.prototype.emit=function(e){var t=Array.prototype.slice.call(arguments,1),n=t[t.length-1],r={type:"event",name:e};return"function"==typeof n&&(r.id=++this.ackPackets,r.ack="data",this.acks[r.id]=n,t=t.slice(0,t.length-1)),r.args=t,this.packet(r)},n.prototype.disconnect=function(){return""===this.name?this.socket.disconnect():(this.packet({type:"disconnect"}),this.$emit("disconnect")),this},n.prototype.onPacket=function(e){function n(){r.packet({type:"ack",args:t.util.toArray(arguments),ackId:e.id})}var r=this;switch(e.type){case"connect":this.$emit("connect");break;case"disconnect":""===this.name?this.socket.onDisconnect(e.reason||"booted"):this.$emit("disconnect",e.reason);break;case"message":case"json":var i=["message",e.data];"data"==e.ack?i.push(n):e.ack&&this.packet({type:"ack",ackId:e.id}),this.$emit.apply(this,i);break;case"event":var i=[e.name].concat(e.args);"data"==e.ack&&i.push(n),this.$emit.apply(this,i);break;case"ack":this.acks[e.ackId]&&(this.acks[e.ackId].apply(this,e.args),delete this.acks[e.ackId]);break;case"error":e.advice?this.socket.onError(e):"unauthorized"==e.reason?this.$emit("connect_failed",e.reason):this.$emit("error",e.reason)}},r.prototype.send=function(){this.namespace.flags[this.name]=!0,this.namespace.send.apply(this.namespace,arguments)},r.prototype.emit=function(){this.namespace.flags[this.name]=!0,this.namespace.emit.apply(this.namespace,arguments)}}("undefined"!=typeof io?io:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t,n){function r(e){t.Transport.apply(this,arguments)}e.websocket=r,t.util.inherit(r,t.Transport),r.prototype.name="websocket",r.prototype.open=function(){var e,r=t.util.query(this.socket.options.query),i=this;return e||(e=n.MozWebSocket||n.WebSocket),this.websocket=new e(this.prepareUrl()+r),this.websocket.onopen=function(){i.onOpen(),i.socket.setBuffer(!1)},this.websocket.onmessage=function(e){i.onData(e.data)},this.websocket.onclose=function(){i.onClose(),i.socket.setBuffer(!0)},this.websocket.onerror=function(e){i.onError(e)},this},r.prototype.send=t.util.ua.iDevice?function(e){var t=this;return setTimeout(function(){t.websocket.send(e)},0),this}:function(e){return this.websocket.send(e),this},r.prototype.payload=function(e){for(var t=0,n=e.length;n>t;t++)this.packet(e[t]);return this},r.prototype.close=function(){
	return this.websocket.close(),this},r.prototype.onError=function(e){this.socket.onError(e)},r.prototype.scheme=function(){return this.socket.options.secure?"wss":"ws"},r.check=function(){return"WebSocket"in n&&!("__addTask"in WebSocket)||"MozWebSocket"in n},r.xdomainCheck=function(){return!0},t.transports.push("websocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t){function n(){t.Transport.websocket.apply(this,arguments)}e.flashsocket=n,t.util.inherit(n,t.Transport.websocket),n.prototype.name="flashsocket",n.prototype.open=function(){var e=this,n=arguments;return WebSocket.__addTask(function(){t.Transport.websocket.prototype.open.apply(e,n)}),this},n.prototype.send=function(){var e=this,n=arguments;return WebSocket.__addTask(function(){t.Transport.websocket.prototype.send.apply(e,n)}),this},n.prototype.close=function(){return WebSocket.__tasks.length=0,t.Transport.websocket.prototype.close.call(this),this},n.prototype.ready=function(e,r){function i(){var t=e.options,i=t["flash policy port"],s=["http"+(t.secure?"s":"")+":/",t.host+":"+t.port,t.resource,"static/flashsocket","WebSocketMain"+(e.isXDomain()?"Insecure":"")+".swf"];n.loaded||("undefined"==typeof WEB_SOCKET_SWF_LOCATION&&(WEB_SOCKET_SWF_LOCATION=s.join("/")),843!==i&&WebSocket.loadFlashPolicyFile("xmlsocket://"+t.host+":"+i),WebSocket.__initialize(),n.loaded=!0),r.call(o)}var o=this;return document.body?i():void t.util.load(i)},n.check=function(){return"undefined"!=typeof WebSocket&&"__initialize"in WebSocket&&swfobject?swfobject.getFlashPlayerVersion().major>=10:!1},n.xdomainCheck=function(){return!0},"undefined"!=typeof window&&(WEB_SOCKET_DISABLE_AUTO_INITIALIZATION=!0),t.transports.push("flashsocket")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports),"undefined"!=typeof window)var swfobject=function(){function e(){if(!H){try{var e=N.getElementsByTagName("body")[0].appendChild(h("span"));e.parentNode.removeChild(e)}catch(t){return}H=!0;for(var n=U.length,r=0;n>r;r++)U[r]()}}function t(e){H?e():U[U.length]=e}function n(e){if(typeof F.addEventListener!=_)F.addEventListener("load",e,!1);else if(typeof N.addEventListener!=_)N.addEventListener("load",e,!1);else if(typeof F.attachEvent!=_)v(F,"onload",e);else if("function"==typeof F.onload){var t=F.onload;F.onload=function(){t(),e()}}else F.onload=e}function r(){B?i():o()}function i(){var e=N.getElementsByTagName("body")[0],t=h(x);t.setAttribute("type",j);var n=e.appendChild(t);if(n){var r=0;!function(){if(typeof n.GetVariable!=_){var i=n.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),V.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(10>r)return r++,void setTimeout(arguments.callee,10);e.removeChild(t),n=null,o()}()}else o()}function o(){var e=W.length;if(e>0)for(var t=0;e>t;t++){var n=W[t].id,r=W[t].callbackFn,i={success:!1,id:n};if(V.pv[0]>0){var o=y(n);if(o)if(!g(W[t].swfVersion)||V.wk&&V.wk<312)if(W[t].expressInstall&&a()){var u={};u.data=W[t].expressInstall,u.width=o.getAttribute("width")||"0",u.height=o.getAttribute("height")||"0",o.getAttribute("class")&&(u.styleclass=o.getAttribute("class")),o.getAttribute("align")&&(u.align=o.getAttribute("align"));for(var p={},d=o.getElementsByTagName("param"),f=d.length,m=0;f>m;m++)"movie"!=d[m].getAttribute("name").toLowerCase()&&(p[d[m].getAttribute("name")]=d[m].getAttribute("value"));c(u,p,n,r)}else l(o),r&&r(i);else k(n,!0),r&&(i.success=!0,i.ref=s(n),r(i))}else if(k(n,!0),r){var h=s(n);h&&typeof h.SetVariable!=_&&(i.success=!0,i.ref=h),r(i)}}}function s(e){var t=null,n=y(e);if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=_)t=n;else{var r=n.getElementsByTagName(x)[0];r&&(t=r)}return t}function a(){return!q&&g("6.0.65")&&(V.win||V.mac)&&!(V.wk&&V.wk<312)}function c(e,t,n,r){q=!0,M=r||null,O={success:!1,id:n};var i=y(n);if(i){"OBJECT"==i.nodeName?(S=u(i),w=null):(S=i,w=n),e.id=A,(typeof e.width==_||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),(typeof e.height==_||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),N.title=N.title.slice(0,47)+" - Flash Player Installation";var o=V.ie&&V.win?["Active"].concat("").join("X"):"PlugIn",s="MMredirectURL="+F.location.toString().replace(/&/g,"%26")+"&MMplayerType="+o+"&MMdoctitle="+N.title;if(typeof t.flashvars!=_?t.flashvars+="&"+s:t.flashvars=s,V.ie&&V.win&&4!=i.readyState){var a=h("div");n+="SWFObjectNew",a.setAttribute("id",n),i.parentNode.insertBefore(a,i),i.style.display="none",function(){4==i.readyState?i.parentNode.removeChild(i):setTimeout(arguments.callee,10)}()}p(e,t,n)}}function l(e){if(V.ie&&V.win&&4!=e.readyState){var t=h("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(u(e),t),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(u(e),e)}function u(e){var t=h("div");if(V.win&&V.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(x)[0];if(n){var r=n.childNodes;if(r)for(var i=r.length,o=0;i>o;o++)1==r[o].nodeType&&"PARAM"==r[o].nodeName||8==r[o].nodeType||t.appendChild(r[o].cloneNode(!0))}}return t}function p(e,t,n){var r,i=y(n);if(V.wk&&V.wk<312)return r;if(i)if(typeof e.id==_&&(e.id=n),V.ie&&V.win){var o="";for(var s in e)e[s]!=Object.prototype[s]&&("data"==s.toLowerCase()?t.movie=e[s]:"styleclass"==s.toLowerCase()?o+=' class="'+e[s]+'"':"classid"!=s.toLowerCase()&&(o+=" "+s+'="'+e[s]+'"'));var a="";for(var c in t)t[c]!=Object.prototype[c]&&(a+='<param name="'+c+'" value="'+t[c]+'" />');i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+o+">"+a+"</object>",L[L.length]=e.id,r=y(e.id)}else{var l=h(x);l.setAttribute("type",j);for(var u in e)e[u]!=Object.prototype[u]&&("styleclass"==u.toLowerCase()?l.setAttribute("class",e[u]):"classid"!=u.toLowerCase()&&l.setAttribute(u,e[u]));for(var p in t)t[p]!=Object.prototype[p]&&"movie"!=p.toLowerCase()&&d(l,p,t[p]);i.parentNode.replaceChild(l,i),r=l}return r}function d(e,t,n){var r=h("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function f(e){var t=y(e);t&&"OBJECT"==t.nodeName&&(V.ie&&V.win?(t.style.display="none",function(){4==t.readyState?m(e):setTimeout(arguments.callee,10)}()):t.parentNode.removeChild(t))}function m(e){var t=y(e);if(t){for(var n in t)"function"==typeof t[n]&&(t[n]=null);t.parentNode.removeChild(t)}}function y(e){var t=null;try{t=N.getElementById(e)}catch(n){}return t}function h(e){return N.createElement(e)}function v(e,t,n){e.attachEvent(t,n),$[$.length]=[e,t,n]}function g(e){var t=V.pv,n=e.split(".");return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function b(e,t,n,r){if(!V.ie||!V.mac){var i=N.getElementsByTagName("head")[0];if(i){var o=n&&"string"==typeof n?n:"screen";if(r&&(C=null,I=null),!C||I!=o){var s=h("style");s.setAttribute("type","text/css"),s.setAttribute("media",o),C=i.appendChild(s),V.ie&&V.win&&typeof N.styleSheets!=_&&N.styleSheets.length>0&&(C=N.styleSheets[N.styleSheets.length-1]),I=o}V.ie&&V.win?C&&typeof C.addRule==x&&C.addRule(e,t):C&&typeof N.createTextNode!=_&&C.appendChild(N.createTextNode(e+" {"+t+"}"))}}}function k(e,t){if(X){var n=t?"visible":"hidden";H&&y(e)?y(e).style.visibility=n:b("#"+e,"visibility:"+n)}}function T(e){var t=/[\\\"<>\.;]/,n=null!=t.exec(e);return n&&typeof encodeURIComponent!=_?encodeURIComponent(e):e}{var S,w,M,O,C,I,_="undefined",x="object",E="Shockwave Flash",P="ShockwaveFlash.ShockwaveFlash",j="application/x-shockwave-flash",A="SWFObjectExprInst",R="onreadystatechange",F=window,N=document,D=navigator,B=!1,U=[r],W=[],L=[],$=[],H=!1,q=!1,X=!0,V=function(){var e=typeof N.getElementById!=_&&typeof N.getElementsByTagName!=_&&typeof N.createElement!=_,t=D.userAgent.toLowerCase(),n=D.platform.toLowerCase(),r=/win/.test(n?n:t),i=/mac/.test(n?n:t),o=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,s=!1,a=[0,0,0],c=null;if(typeof D.plugins!=_&&typeof D.plugins[E]==x)c=D.plugins[E].description,!c||typeof D.mimeTypes!=_&&D.mimeTypes[j]&&!D.mimeTypes[j].enabledPlugin||(B=!0,s=!1,c=c.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),a[0]=parseInt(c.replace(/^(.*)\..*$/,"$1"),10),a[1]=parseInt(c.replace(/^.*\.(.*)\s.*$/,"$1"),10),a[2]=/[a-zA-Z]/.test(c)?parseInt(c.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof F[["Active"].concat("Object").join("X")]!=_)try{var l=new(window[["Active"].concat("Object").join("X")])(P);l&&(c=l.GetVariable("$version"),c&&(s=!0,c=c.split(" ")[1].split(","),a=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]))}catch(u){}return{w3:e,pv:a,wk:o,ie:s,win:r,mac:i}}();!function(){V.w3&&((typeof N.readyState!=_&&"complete"==N.readyState||typeof N.readyState==_&&(N.getElementsByTagName("body")[0]||N.body))&&e(),H||(typeof N.addEventListener!=_&&N.addEventListener("DOMContentLoaded",e,!1),V.ie&&V.win&&(N.attachEvent(R,function(){"complete"==N.readyState&&(N.detachEvent(R,arguments.callee),e())}),F==top&&!function(){if(!H){try{N.documentElement.doScroll("left")}catch(t){return void setTimeout(arguments.callee,0)}e()}}()),V.wk&&!function(){return H?void 0:/loaded|complete/.test(N.readyState)?void e():void setTimeout(arguments.callee,0)}(),n(e)))}(),function(){V.ie&&V.win&&window.attachEvent("onunload",function(){for(var e=$.length,t=0;e>t;t++)$[t][0].detachEvent($[t][1],$[t][2]);for(var n=L.length,r=0;n>r;r++)f(L[r]);for(var i in V)V[i]=null;V=null;for(var o in swfobject)swfobject[o]=null;swfobject=null})}()}return{registerObject:function(e,t,n,r){if(V.w3&&e&&t){var i={};i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=r,W[W.length]=i,k(e,!1)}else r&&r({success:!1,id:e})},getObjectById:function(e){return V.w3?s(e):void 0},embedSWF:function(e,n,r,i,o,s,l,u,d,f){var m={success:!1,id:n};V.w3&&!(V.wk&&V.wk<312)&&e&&n&&r&&i&&o?(k(n,!1),t(function(){r+="",i+="";var t={};if(d&&typeof d===x)for(var y in d)t[y]=d[y];t.data=e,t.width=r,t.height=i;var h={};if(u&&typeof u===x)for(var v in u)h[v]=u[v];if(l&&typeof l===x)for(var b in l)typeof h.flashvars!=_?h.flashvars+="&"+b+"="+l[b]:h.flashvars=b+"="+l[b];if(g(o)){var T=p(t,h,n);t.id==n&&k(n,!0),m.success=!0,m.ref=T}else{if(s&&a())return t.data=s,void c(t,h,n,f);k(n,!0)}f&&f(m)})):f&&f(m)},switchOffAutoHideShow:function(){X=!1},ua:V,getFlashPlayerVersion:function(){return{major:V.pv[0],minor:V.pv[1],release:V.pv[2]}},hasFlashPlayerVersion:g,createSWF:function(e,t,n){return V.w3?p(e,t,n):void 0},showExpressInstall:function(e,t,n,r){V.w3&&a()&&c(e,t,n,r)},removeSWF:function(e){V.w3&&f(e)},createCSS:function(e,t,n,r){V.w3&&b(e,t,n,r)},addDomLoadEvent:t,addLoadEvent:n,getQueryParamValue:function(e){var t=N.location.search||N.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return T(t);for(var n=t.split("&"),r=0;r<n.length;r++)if(n[r].substring(0,n[r].indexOf("="))==e)return T(n[r].substring(n[r].indexOf("=")+1))}return""},expressInstallCallback:function(){if(q){var e=y(A);e&&S&&(e.parentNode.replaceChild(S,e),w&&(k(w,!0),V.ie&&V.win&&(S.style.display="block")),M&&M(O)),q=!1}}}}();!function(){if("undefined"!=typeof window&&!window.WebSocket){var e=window.console;if(e&&e.log&&e.error||(e={log:function(){},error:function(){}}),!swfobject.hasFlashPlayerVersion("10.0.0"))return void e.error("Flash Player >= 10.0.0 is required.");"file:"==location.protocol&&e.error("WARNING: web-socket-js doesn't work in file:///... URL unless you set Flash Security Settings properly. Open the page via Web server i.e. http://..."),WebSocket=function(e,t,n,r,i){var o=this;o.__id=WebSocket.__nextId++,WebSocket.__instances[o.__id]=o,o.readyState=WebSocket.CONNECTING,o.bufferedAmount=0,o.__events={},t?"string"==typeof t&&(t=[t]):t=[],setTimeout(function(){WebSocket.__addTask(function(){WebSocket.__flash.create(o.__id,e,t,n||null,r||0,i||null)})},0)},WebSocket.prototype.send=function(e){if(this.readyState==WebSocket.CONNECTING)throw"INVALID_STATE_ERR: Web Socket connection has not been established";var t=WebSocket.__flash.send(this.__id,encodeURIComponent(e));return 0>t?!0:(this.bufferedAmount+=t,!1)},WebSocket.prototype.close=function(){this.readyState!=WebSocket.CLOSED&&this.readyState!=WebSocket.CLOSING&&(this.readyState=WebSocket.CLOSING,WebSocket.__flash.close(this.__id))},WebSocket.prototype.addEventListener=function(e,t,n){e in this.__events||(this.__events[e]=[]),this.__events[e].push(t)},WebSocket.prototype.removeEventListener=function(e,t,n){if(e in this.__events)for(var r=this.__events[e],i=r.length-1;i>=0;--i)if(r[i]===t){r.splice(i,1);break}},WebSocket.prototype.dispatchEvent=function(e){for(var t=this.__events[e.type]||[],n=0;n<t.length;++n)t[n](e);var r=this["on"+e.type];r&&r(e)},WebSocket.prototype.__handleEvent=function(e){"readyState"in e&&(this.readyState=e.readyState),"protocol"in e&&(this.protocol=e.protocol);var t;if("open"==e.type||"error"==e.type)t=this.__createSimpleEvent(e.type);else if("close"==e.type)t=this.__createSimpleEvent("close");else{if("message"!=e.type)throw"unknown event type: "+e.type;var n=decodeURIComponent(e.message);t=this.__createMessageEvent("message",n)}this.dispatchEvent(t)},WebSocket.prototype.__createSimpleEvent=function(e){if(document.createEvent&&window.Event){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}return{type:e,bubbles:!1,cancelable:!1}},WebSocket.prototype.__createMessageEvent=function(e,t){if(document.createEvent&&window.MessageEvent&&!window.opera){var n=document.createEvent("MessageEvent");return n.initMessageEvent("message",!1,!1,t,null,null,window,null),n}return{type:e,data:t,bubbles:!1,cancelable:!1}},WebSocket.CONNECTING=0,WebSocket.OPEN=1,WebSocket.CLOSING=2,WebSocket.CLOSED=3,WebSocket.__flash=null,WebSocket.__instances={},WebSocket.__tasks=[],WebSocket.__nextId=0,WebSocket.loadFlashPolicyFile=function(e){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(e)})},WebSocket.__initialize=function(){if(!WebSocket.__flash){if(WebSocket.__swfLocation&&(window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation),!window.WEB_SOCKET_SWF_LOCATION)return void e.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");var t=document.createElement("div");t.id="webSocketContainer",t.style.position="absolute",WebSocket.__isFlashLite()?(t.style.left="0px",t.style.top="0px"):(t.style.left="-100px",t.style.top="-100px");var n=document.createElement("div");n.id="webSocketFlash",t.appendChild(n),document.body.appendChild(t),swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:!0,swliveconnect:!0,allowScriptAccess:"always"},null,function(t){t.success||e.error("[WebSocket] swfobject.embedSWF failed")})}},WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash"),WebSocket.__flash.setCallerUrl(location.href),WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var e=0;e<WebSocket.__tasks.length;++e)WebSocket.__tasks[e]();WebSocket.__tasks=[]},0)},WebSocket.__onFlashEvent=function(){return setTimeout(function(){try{for(var t=WebSocket.__flash.receiveEvents(),n=0;n<t.length;++n)WebSocket.__instances[t[n].webSocketId].__handleEvent(t[n])}catch(r){e.error(r)}},0),!0},WebSocket.__log=function(t){e.log(decodeURIComponent(t))},WebSocket.__error=function(t){e.error(decodeURIComponent(t))},WebSocket.__addTask=function(e){WebSocket.__flash?e():WebSocket.__tasks.push(e)},WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes)return!1;var e=window.navigator.mimeTypes["application/x-shockwave-flash"];return e&&e.enabledPlugin&&e.enabledPlugin.filename&&e.enabledPlugin.filename.match(/flashlite/i)?!0:!1},window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION||(window.addEventListener?window.addEventListener("load",function(){WebSocket.__initialize()},!1):window.attachEvent("onload",function(){WebSocket.__initialize()}))}}(),function(e,t,n){function r(e){e&&(t.Transport.apply(this,arguments),this.sendBuffer=[])}function i(){}e.XHR=r,t.util.inherit(r,t.Transport),r.prototype.open=function(){return this.socket.setBuffer(!1),this.onOpen(),this.get(),this.setCloseTimeout(),this},r.prototype.payload=function(e){for(var n=[],r=0,i=e.length;i>r;r++)n.push(t.parser.encodePacket(e[r]));this.send(t.parser.encodePayload(n))},r.prototype.send=function(e){return this.post(e),this},r.prototype.post=function(e){function t(){4==this.readyState&&(this.onreadystatechange=i,o.posting=!1,200==this.status?o.socket.setBuffer(!1):o.onClose())}function r(){this.onload=i,o.socket.setBuffer(!1)}var o=this;this.socket.setBuffer(!0),this.sendXHR=this.request("POST"),n.XDomainRequest&&this.sendXHR instanceof XDomainRequest?this.sendXHR.onload=this.sendXHR.onerror=r:this.sendXHR.onreadystatechange=t,this.sendXHR.send(e)},r.prototype.close=function(){return this.onClose(),this},r.prototype.request=function(e){var n=t.util.request(this.socket.isXDomain()),r=t.util.query(this.socket.options.query,"t="+ +new Date);if(n.open(e||"GET",this.prepareUrl()+r,!0),"POST"==e)try{n.setRequestHeader?n.setRequestHeader("Content-type","text/plain;charset=UTF-8"):n.contentType="text/plain"}catch(i){}return n},r.prototype.scheme=function(){return this.socket.options.secure?"https":"http"},r.check=function(e,r){try{var i=t.util.request(r),o=n.XDomainRequest&&i instanceof XDomainRequest,s=e&&e.options&&e.options.secure?"https:":"http:",a=n.location&&s!=n.location.protocol;if(i&&(!o||!a))return!0}catch(c){}return!1},r.xdomainCheck=function(e){return r.check(e,!0)}}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t){function n(e){t.Transport.XHR.apply(this,arguments)}e.htmlfile=n,t.util.inherit(n,t.Transport.XHR),n.prototype.name="htmlfile",n.prototype.get=function(){this.doc=new(window[["Active"].concat("Object").join("X")])("htmlfile"),this.doc.open(),this.doc.write("<html></html>"),this.doc.close(),this.doc.parentWindow.s=this;var e=this.doc.createElement("div");e.className="socketio",this.doc.body.appendChild(e),this.iframe=this.doc.createElement("iframe"),e.appendChild(this.iframe);var n=this,r=t.util.query(this.socket.options.query,"t="+ +new Date);this.iframe.src=this.prepareUrl()+r,t.util.on(window,"unload",function(){n.destroy()})},n.prototype._=function(e,t){this.onData(e);try{var n=t.getElementsByTagName("script")[0];n.parentNode.removeChild(n)}catch(r){}},n.prototype.destroy=function(){if(this.iframe){try{this.iframe.src="about:blank"}catch(e){}this.doc=null,this.iframe.parentNode.removeChild(this.iframe),this.iframe=null,CollectGarbage()}},n.prototype.close=function(){return this.destroy(),t.Transport.XHR.prototype.close.call(this)},n.check=function(e){if("undefined"!=typeof window&&["Active"].concat("Object").join("X")in window)try{var n=new(window[["Active"].concat("Object").join("X")])("htmlfile");return n&&t.Transport.XHR.check(e)}catch(r){}return!1},n.xdomainCheck=function(){return!1},t.transports.push("htmlfile")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports),function(e,t,n){function r(){t.Transport.XHR.apply(this,arguments)}function i(){}e["xhr-polling"]=r,t.util.inherit(r,t.Transport.XHR),t.util.merge(r,t.Transport.XHR),r.prototype.name="xhr-polling",r.prototype.heartbeats=function(){return!1},r.prototype.open=function(){var e=this;return t.Transport.XHR.prototype.open.call(e),!1},r.prototype.get=function(){function e(){4==this.readyState&&(this.onreadystatechange=i,200==this.status?(o.onData(this.responseText),o.get()):o.onClose())}function t(){this.onload=i,this.onerror=i,o.retryCounter=1,o.onData(this.responseText),o.get()}function r(){o.retryCounter++,!o.retryCounter||o.retryCounter>3?o.onClose():o.get()}if(this.isOpen){var o=this;this.xhr=this.request(),n.XDomainRequest&&this.xhr instanceof XDomainRequest?(this.xhr.onload=t,this.xhr.onerror=r):this.xhr.onreadystatechange=e,this.xhr.send(null)}},r.prototype.onClose=function(){if(t.Transport.XHR.prototype.onClose.call(this),this.xhr){this.xhr.onreadystatechange=this.xhr.onload=this.xhr.onerror=i;try{this.xhr.abort()}catch(e){}this.xhr=null}},r.prototype.ready=function(e,n){var r=this;t.util.defer(function(){n.call(r)})},t.transports.push("xhr-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),function(e,t,n){function r(e){t.Transport["xhr-polling"].apply(this,arguments),this.index=t.j.length;var n=this;t.j.push(function(e){n._(e)})}var i=n.document&&"MozAppearance"in n.document.documentElement.style;e["jsonp-polling"]=r,t.util.inherit(r,t.Transport["xhr-polling"]),r.prototype.name="jsonp-polling",r.prototype.post=function(e){function n(){r(),i.socket.setBuffer(!1)}function r(){i.iframe&&i.form.removeChild(i.iframe);try{s=document.createElement('<iframe name="'+i.iframeId+'">')}catch(e){s=document.createElement("iframe"),s.name=i.iframeId}s.id=i.iframeId,i.form.appendChild(s),i.iframe=s}var i=this,o=t.util.query(this.socket.options.query,"t="+ +new Date+"&i="+this.index);if(!this.form){var s,a=document.createElement("form"),c=document.createElement("textarea"),l=this.iframeId="socketio_iframe_"+this.index;a.className="socketio",a.style.position="absolute",a.style.top="0px",a.style.left="0px",a.style.display="none",a.target=l,a.method="POST",a.setAttribute("accept-charset","utf-8"),c.name="d",a.appendChild(c),document.body.appendChild(a),this.form=a,this.area=c}this.form.action=this.prepareUrl()+o,r(),this.area.value=t.JSON.stringify(e);try{this.form.submit()}catch(u){}this.iframe.attachEvent?s.onreadystatechange=function(){"complete"==i.iframe.readyState&&n()}:this.iframe.onload=n,this.socket.setBuffer(!0)},r.prototype.get=function(){var e=this,n=document.createElement("script"),r=t.util.query(this.socket.options.query,"t="+ +new Date+"&i="+this.index);this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),n.async=!0,n.src=this.prepareUrl()+r,n.onerror=function(){e.onClose()};var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(n,o),this.script=n,i&&setTimeout(function(){var e=document.createElement("iframe");document.body.appendChild(e),document.body.removeChild(e)},100)},r.prototype._=function(e){return this.onData(e),this.isOpen&&this.get(),this},r.prototype.ready=function(e,n){var r=this;return i?void t.util.load(function(){n.call(r)}):n.call(this)},r.check=function(){return"document"in n},r.xdomainCheck=function(){return!0},t.transports.push("jsonp-polling")}("undefined"!=typeof io?io.Transport:module.exports,"undefined"!=typeof io?io:module.parent.exports,this),__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return window.io=io,io}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),!(void 0!==__WEBPACK_AMD_DEFINE_RESULT__&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}()}).call(exports,__webpack_require__(13)(module))},function(e,t,n){"use strict";var r=n(6),i=n(26),o=n(27);r.fn.processUser=function(e){var t,n=[],r=[];switch(e.cmd){case"markInBlacklist":break;case"syncMarkInBlacklist":this.options.onsyncmarkinblacklist({account:e.content.account,isAdd:e.content.isAdd});break;case"markInMutelist":break;case"syncMarkInMutelist":this.options.onsyncmarkinmutelist({account:e.content.account,isAdd:e.content.isAdd});break;case"getBlacklistAndMutelist":e.error||(e.content.specialRelations.forEach(function(e){e=i.parse(e),e.isBlacked&&n.push(e.account),e.isMuted&&r.push(e.account)}),this.packetFromSync(e)?(this.options.onblacklist(n),this.options.onmutelist(r)):(e.obj.blacklist=n,e.obj.mutelist=r));break;case"getUsers":e.error||(e.obj=e.content.users.map(function(e){return o.reverse(e)}));break;case"updateMyInfo":var s=+e.content.timetag;e.obj.updateTime=s,e.obj=o.reverse(e.obj),this.entrust.userUpdateTime=s;break;case"syncMyInfo":case"syncUpdateMyInfo":t=o.reverse(e.content.user),this.options.onmyinfo(t),this.entrust.user=!0,this.entrust.userUpdateTime=t.updateTime}}},function(e,t,n){"use strict";function r(){}var i=n(1);r.parse=function(e){var t=i.copy(e);return t.isBlacked="1"===t.isBlacked,t.isMuted="1"===t.isMuted,t.createTime=+t.createTime,t.updateTime=+t.updateTime,t},e.exports=r},function(e,t,n){"use strict";function r(e){i.merge(this,e),i.notundef(this.gender)&&(i.verifyParamValid("gender",this.gender,r.validGenders),this.gender=o[this.gender]),i.notundef(this.email)&&""!==this.email&&i.verifyEmail("email",this.email),i.notundef(this.birth)&&""!==this.birth&&i.verifyBirth("birth",this.birth),i.notundef(this.tel)&&""!==this.tel&&i.verifyTel("tel",this.tel)}var i=n(1),o={unknown:0,male:1,female:2},s={0:"unknown",1:"male",2:"female"};r.reverse=function(e){var t=i.filterObj(e,"account nick avatar sign gender email birth tel custom createTime updateTime");return i.notundef(t.gender)&&(t.gender=s[t.gender]),i.notundef(t.createTime)&&(t.createTime=+t.createTime),i.notundef(t.updateTime)&&(t.updateTime=+t.updateTime),t},r.validGenders=Object.keys(o),e.exports=r},function(e,t,n){"use strict";var r=n(6),i=n(1),o=n(32),s=n(29),a=n(43),c=n(9);r.fn._filterMsg=function(e,t){e.error||(t.idServer=e.content.msg.idServer,t.time=e.content.msg.time),t.from=this.options.account,e.obj=o.reverse(t)},r.fn._filterSysMsg=function(e,t){e.obj=s.reverse(t),e.obj.from=this.options.account,e.obj.scene=e.obj.type.slice(6).toLowerCase(),delete e.obj.type},r.fn.processMessage=function(e){var t=e.obj;switch(e.cmd){case"sendMsg":this._filterMsg(e,t);break;case"msg":t=o.reverse(e.content.msg),this.onMsg(t);break;case"sysMsg":t=s.reverse(e.content.sysMsg),this.onSysMsg(t);break;case"sendCustomSysMsg":this._filterSysMsg(e,t);break;case"getHistoryMsgs":case"searchHistoryMsgs":e.error||(e.obj.msgs=e.content.msgs.map(function(e){return o.reverse(e)}));break;case"syncSendMsg":t=o.reverse(e.content.msg),this.onMsg(t);break;case"getSessions":if(e.error)404===e.error.code&&(e.error=null,e.obj=[]);else{var n=e.content.sessions.map(function(e){return a.parse(e)});n=n.reverse(),this.packetFromSync(e)?this.options.onsessions(n):e.obj=n}break;case"deleteSessions":e.obj=e.obj.sessions.map(function(e){return a.parse(e)})}},r.fn.onMsg=function(e){this.onMsgs([e])},r.fn.onMsgs=function(e){var t=this.options.onmsg;i.notEmptyFunc(t)&&(this.autoMarkMsgsRead(e),e.forEach(function(e){t(e)},this))},r.fn.onOfflineMsgs=function(e){var t=this.options.onofflinemsgs;i.notEmptyFunc(t)&&(this.autoMarkMsgsRead(e),t(e))},r.fn.onSysMsg=function(e){if(s.isCustom(e)){var t=this.options.oncustomsysmsg;i.notEmptyFunc(t)&&(this.autoMarkCustomSysMsgsRead([e]),t(e))}else{var n=this.options.onsysmsg;i.notEmptyFunc(n)&&(this.autoMarkSysMsgsRead([e]),n(e))}},r.fn.onOfflineSysMsgs=function(e){var t=[];this.splitSysMsgs(e,t);var n=this.options.onofflinesysmsgs;e.length&&i.notEmptyFunc(n)&&(this.autoMarkSysMsgsRead(e),n(e));var r=this.options.onofflinecustomsysmsgs;t.length&&i.notEmptyFunc(r)&&(this.autoMarkCustomSysMsgsRead(t),r(t))},r.fn._isFilterMsgs=function(e){return!!e[0].filter},r.fn.markMsgRead=function(e,t){this.markMsgsRead([e],t)},r.fn.markMsgsRead=function(e,t){this.autoMarkMsgsRead(e,t,!0)},r.fn.autoMarkMsgsRead=function(e,t,n){if(e.length){var r=[],i=[];this.splitMsgs(e,r,i),this._isFilterMsgs(e)?((this.options.autoMarkRead.filterP2p||n)&&this.markFilterMsgsRead(r,t),(this.options.autoMarkRead.filterTeam||n)&&this.markFilterMsgsRead(i,t)):((this.options.autoMarkRead.p2p||n)&&this.markP2pMsgsRead(r,t),(this.options.autoMarkRead.team||n)&&this.markTeamMsgsRead(i,t))}},r.fn.markFilterMsgsRead=function(e,t){if(e.length){var n=c.idMap.filter.id,r=c.idMap.filter.filterMsg;this.doMarkMsgsRead(n,r,e,t)}},r.fn.markP2pMsgsRead=function(e,t){if(e.length){var n=c.idMap.talk.id,r=c.idMap.talk.msg;this.doMarkMsgsRead(n,r,e,t)}},r.fn.markTeamMsgsRead=function(e,t){if(e.length){var n=c.idMap.team.id,r=c.idMap.team.teamMsg;this.doMarkMsgsRead(n,r,e,t)}},r.fn.autoMarkSysMsgsRead=function(e){var t=this._isFilterMsgs(e);(!t&&this.options.autoMarkRead.sys||t&&this.options.autoMarkRead.filterSys)&&this.markSysMsgsRead(e)},r.fn.autoMarkCustomSysMsgsRead=function(e){var t=this._isFilterMsgs(e);(!t&&this.options.autoMarkRead.customSys||t&&this.options.autoMarkRead.filterCustomSys)&&this.markSysMsgsRead(e)},r.fn.markSysMsgRead=function(e,t){this.markSysMsgsRead([e],t)},r.fn.markSysMsgsRead=function(e,t){if(e.length){var n=c.idMap.talk.id,r=c.idMap.talk.sysMsg;e[0].filter&&(n=c.idMap.filter.id,r=c.idMap.filter.filterSysMsg),this.doMarkMsgsRead(n,r,e,t)}},r.fn.doMarkMsgsRead=function(e,t,n,r){r=null,this.sendCmd("batchMarkRead",{sid:e,cid:t,ids:n.map(function(e){return e.idServer})},r)},r.fn.onMarkMsgsRead=function(e,t){this.checkMiscError(e,t,"标记消息已读失败")},r.fn.splitMsgs=function(e,t,n){e.forEach(function(e){switch(e.scene){case"p2p":t.push(e);break;case"team":n.push(e)}})},r.fn.splitSysMsgs=function(e,t){for(var n,r=e.length-1;r>=0;r--)n=e[r],s.isCustom(n)&&(e.splice(r,1),t.push(n))}},function(e,t,n){"use strict";function r(e){i.verifyOptions(e,"type to"),i.verifyParamValid("type",e.type,p()),-1!==e.type.indexOf("custom")&&(i.verifyOptions(e,"content sendToOnlineUsersOnly"),i.verifyParamType("sendToOnlineUsersOnly",e.sendToOnlineUsersOnly,"boolean"),this.attach=e.content,this.sendToOnlineUsersOnly=e.sendToOnlineUsersOnly?"0":"1",i.notundef(e.apnsText)&&(this.apnsText=""+e.apnsText)),this.time=+new Date,this.to=e.to,this.type=c[e.type],this.idClient=i.guid(),i.notundef(e.cc)&&(this.cc=e.cc?1:0)}var i=n(1),o=n(7),s=n(30),a=n(31),c={applyTeam:0,rejectTeamApply:1,teamInvite:2,rejectTeamInvite:3,customP2p:100,customTeam:101},l={0:"applyTeam",1:"rejectTeamApply",2:"teamInvite",3:"rejectTeamInvite",5:"friendRequest",6:"deleteFriend",100:"customP2p",101:"customTeam",102:"customP2p"},u={1:"addFriend",2:"applyFriend",3:"passFriendApply",4:"rejectFriendApply"};r.isCustom=function(e){return"custom"===e.type},r.reverse=function(e){var t={time:+e.time,to:e.to,type:l[e.type]};if(i.notundef(e.from)&&(t.from=e.from),i.notundef(e.idServer)&&(t.idServer=+e.idServer),i.notundef(e.idClient)&&(t.idClient=e.idClient),i.notundef(e.ps)&&(t.ps=e.ps),-1===t.type.indexOf("custom")){if(i.notundef(e.attach)){t.attach={};var n=JSON.parse(e.attach);i.notundef(n.vt)&&(t.type=u[n.vt],delete t.attach),i.notundef(n.tinfo)&&(t.attach.team=s.reverse(o.unserialize(n.tinfo,"team"))),i.notundef(n.tlist)&&(t.attach.member=a.reverse(o.unserialize(n.tlist,"teamMember")))}}else"customTeam"===t.type&&(t.to=+t.to),t.content=e.attach,i.notundef(e.sendToOnlineUsersOnly)&&(t.sendToOnlineUsersOnly="0"===e.sendToOnlineUsersOnly),i.notundef(e.apnsText)&&(t.apnsText=e.apnsText),t.scene=t.type.slice(6).toLowerCase(),t.type="custom";return i.notundef(e.cc)&&(t.cc=1===+e.cc),t};var p=function(){return Object.keys(c)};e.exports=r},function(e,t,n){"use strict";function r(e){switch(i.verifyOptions(e,"action"),e.action){case"create":i.verifyOptions(e,"teamId",!1),i.verifyOptions(e,"type name"),i.verifyParamValid("type",e.type,l),"normal"===e.type&&i.verifyOptions(e,"intro announcement joinMode custom",!1);break;case"update":i.verifyOptions(e,"teamId"),i.notundef(e.name)&&i.verifyOptions(e,"name"),i.verifyOptions(e,"type",!1)}i.notundef(e.teamId)&&(this.teamId=e.teamId),i.notundef(e.type)&&(this.type=o[e.type]),i.notundef(e.name)&&(this.name=""+e.name),i.notundef(e.intro)&&(this.intro=""+e.intro),i.notundef(e.announcement)&&(this.announcement=""+e.announcement),i.notundef(e.joinMode)&&(i.verifyParamValid("joinMode",e.joinMode,u),this.joinMode=a[e.joinMode]),i.notundef(e.custom)&&(this.custom=""+e.custom)}var i=n(1),o={normal:0,advanced:1},s={0:"normal",1:"advanced"},a={noVerify:0,needVerify:1,rejectAll:2},c={0:"noVerify",1:"needVerify",2:"rejectAll"};r.reverse=function(e){var t=i.filterObj(e,"teamId name type owner level selfCustom valid memberNum memberUpdateTime createTime updateTime validToCurrentUser");return i.notundef(t.teamId)&&(t.teamId=+t.teamId),i.notundef(t.type)&&(t.type=s[t.type]),i.notundef(t.level)&&(t.level=+t.level),
	i.notundef(t.valid)&&(t.valid="1"===t.valid),i.notundef(t.memberNum)&&(t.memberNum=+t.memberNum),i.notundef(t.memberUpdateTime)&&(t.memberUpdateTime=+t.memberUpdateTime),i.notundef(t.createTime)&&(t.createTime=+t.createTime),i.notundef(t.updateTime)&&(t.updateTime=+t.updateTime),i.notundef(t.validToCurrentUser)&&(t.validToCurrentUser="1"===t.validToCurrentUser),"advanced"!==t.type&&e.type||(t=i.merge(t,i.filterObj(e,"intro announcement joinMode bits custom serverCustom")),i.notundef(t.joinMode)&&(t.joinMode=c[t.joinMode])),t};var l=Object.keys(o),u=Object.keys(a),p=function(e){return r.reverse(e)};e.exports={Team:r,reverse:p}},function(e,t,n){"use strict";function r(e){i.verifyOptions(e,"teamId"),i.verifyParamAtLeastPresentOne(e,"nickInTeam muteTeam"),this.teamId=e.teamId,i.notundef(e.account)&&(this.account=e.account),i.notundef(e.nickInTeam)&&(this.nickInTeam=e.nickInTeam),i.notundef(e.muteTeam)&&(this.bits=0,e.muteTeam&&(this.bits+=1))}var i=n(1),o={0:"normal",1:"owner",2:"manager"},s=function(e){var t=e;if(i.notundef(t.teamId)&&(t.teamId=+t.teamId),i.notundef(t.type)&&(t.type=o[t.type]),i.notundef(t.active)&&(t.active="1"===t.active),i.notundef(t.valid)&&(t.valid="1"===t.valid),i.notundef(t.joinTime)&&(t.joinTime=+t.joinTime),i.notundef(t.updateTime)&&(t.updateTime=+t.updateTime),i.notundef(t.bits)){var n=t.bits;delete t.bits,t.muteTeam=!!(1&n)}return t};e.exports={TeamMember:r,reverse:s}},function(e,t,n){"use strict";var r=n(33),i=n(34),o=n(35),s=n(39),a=n(40),c=n(41),l=n(42),u=function(e){var t,n=r.typeReverseMap[e.type]||e.type;switch(n){case"text":t=i.reverse(e);break;case"image":case"audio":case"video":case"file":t=o.reverse(e);break;case"geo":t=s.reverse(e);break;case"notification":t=l.reverse(e);break;case"tip":t=c.reverse(e);break;case"custom":t=a.reverse(e);break;default:t=r.reverse(e)}return t};e.exports={Message:r,TextMessage:i,FileMessage:o,GeoMessage:s,CustomMessage:a,TipMessage:c,NotificationMessage:l,validScenes:r.validScenes,reverse:u}},function(e,t,n){"use strict";function r(e){i.verifyOptions(e,"scene to"),i.verifyParamValid("scene",e.scene,c()),this.scene=s[e.scene],this.to=""+e.to,this.time=+new Date,this.type=l[e.type],this.resend=e.resend?1:0,e.resend?(i.verifyOptions(e,"idClient"),this.idClient=e.idClient):this.idClient=i.guid()}var i=n(1),o=n(23),s={p2p:0,team:1},a={0:"p2p",1:"team"},c=function(){return Object.keys(s)},l={text:0,image:1,audio:2,video:3,geo:4,notification:5,file:6,tip:10,custom:100},u={0:"text",1:"image",2:"audio",3:"video",4:"geo",5:"notification",6:"file",10:"tip",100:"custom"};r.prototype.getScene=function(){return a[this.scene]},r.reverse=function(e){var t=a[e.scene],n=u[e.type],r={scene:t||e.scene,to:e.to,time:+e.time,type:n||e.type,resend:"1"===e.resend,isMuted:"1"===e.isMuted};return"team"===t&&(r.to=+r.to),i.notundef(e.from)&&(r.from=e.from),i.notundef(e.fromNick)&&(r.fromNick=e.fromNick),i.notundef(e.fromClientType)&&(r.fromClientType=o.reverseType(e.fromClientType)),i.notundef(e.fromDeviceId)&&(r.fromDeviceId=e.fromDeviceId),i.notundef(e.idClient)&&(r.idClient=e.idClient),i.notundef(e.idServer)&&(r.idServer=+e.idServer),i.notundef(e.userUpdateTime)&&(r.userUpdateTime=+e.userUpdateTime),r},r.validScenes=c,r.typeReverseMap=u,e.exports=r},function(e,t,n){"use strict";function r(e){o.verifyOptions(e,"text"),e.type="text",i.call(this,e),this.body=e.text}var i=n(33),o=n(1);r.prototype=Object.create(i.prototype),r.reverse=function(e){var t=i.reverse(e);return t.text=e.body,t},e.exports=r},function(e,t,n){"use strict";function r(e){switch(o.notundef(e.type)?o.verifyFileType(e.type):e.type="file",o.verifyOptions(e,"file"),o.verifyOptions(e.file,"url ext size md5",!0,"file."),e.type){case"image":s.verifyFile(e.file);break;case"audio":a.verifyFile(e.file);break;case"video":c.verifyFile(e.file)}i.call(this,e),this.attach=JSON.stringify(e.file)}var i=n(33),o=n(1);r.prototype=Object.create(i.prototype),r.reverse=function(e){var t=i.reverse(e);return t.file=o.notundef(e.attach)?JSON.parse(e.attach):{},t},e.exports=r;var s=n(36),a=n(37),c=n(38)},function(e,t,n){"use strict";function r(){}var i=n(1),o=n(35);r.prototype=Object.create(o.prototype),r.verifyFile=function(e){i.verifyOptions(e,"w h",!0,"file.")},e.exports=r},function(e,t,n){"use strict";function r(){}var i=n(35),o=n(1);r.prototype=Object.create(i.prototype),r.verifyFile=function(e){o.verifyOptions(e,"dur",!0,"file.")},e.exports=r},function(e,t,n){"use strict";function r(){}var i=n(35),o=n(1);r.prototype=Object.create(i.prototype),r.verifyFile=function(e){o.verifyOptions(e,"dur w h",!0,"file.")},e.exports=r},function(e,t,n){"use strict";function r(e){o.verifyOptions(e,"geo"),o.verifyOptions(e.geo,"lng lat title",!0,"geo."),o.verifyParamType("geo.lng",e.geo.lng,"number"),o.verifyParamType("geo.lat",e.geo.lat,"number"),o.verifyParamType("geo.title",e.geo.title,"string"),i.call(this,e),this.attach=JSON.stringify(e.geo)}var i=n(33),o=n(1);r.prototype=Object.create(i.prototype),r.reverse=function(e){var t=i.reverse(e);return t.geo=o.notundef(e.attach)?JSON.parse(e.attach):{},t},e.exports=r},function(e,t,n){"use strict";function r(e){o.verifyOptions(e,"content"),i.call(this,e),this.attach=e.content}var i=n(33),o=n(1);r.prototype=Object.create(i.prototype),r.reverse=function(e){var t=i.reverse(e);return o.notundef(e.attach)&&(t.content=e.attach),t},e.exports=r},function(e,t,n){"use strict";function r(e){i.call(this,e)}var i=n(40);r.prototype=Object.create(i.prototype),r.reverse=function(e){var t=i.reverse(e);return t},e.exports=r},function(e,t,n){"use strict";function r(){}var i=n(1),o=n(33),s=n(7),a=n(30),c={0:"addTeamMembers",1:"removeTeamMembers",2:"leaveTeam",3:"updateTeam",4:"dismissTeam",5:"passTeamApply",6:"transferTeam",7:"addTeamManagers",8:"removeTeamManagers",9:"acceptTeamInvite"};r.reverse=function(e){var t=o.reverse(e);if(i.notundef(e.attach)){var n=JSON.parse(e.attach);if(t.attach={type:c[n.id]},i.notundef(n.data)){var r=n.data;i.notundef(r.tinfo)&&(t.attach.team=a.reverse(s.unserialize(r.tinfo,"team"))),i.notundef(r.ids)&&(t.attach.accounts=r.ids),i.notundef(r.id)&&(t.attach.account=r.id)}}return t},e.exports=r},function(e,t){"use strict";function n(){}n.parse=function(e){var t=e.split("|");return{scene:t[0],to:t[1]}},e.exports=n},function(e,t,n){"use strict";var r=n(6);r.fn.processMisc=function(e){switch(e.cmd){case"getNosToken":e.error||(e.obj=e.content.nosToken)}}},function(e,t,n){"use strict";var r=n(6),i=n(32),o=n(29);r.fn.processNotify=function(e){var t;switch(e.cmd){case"syncOfflineMsgs":t=e.content.msgs.map(function(e){return i.reverse(e)}),this.onOfflineMsgs(t);break;case"batchMarkRead":break;case"syncOfflineSysMsgs":t=e.content.sysMsgs.map(function(e){return o.reverse(e)}),this.onOfflineSysMsgs(t);break;case"syncRoamingMsgs":t=e.content.msgs.map(function(e){return i.reverse(e)}),this.options.onroamingmsgs(t);break;case"syncOfflineFilterMsgs":t=e.content.msgs.map(function(e){return e=i.reverse(e),e.filter=!0,e}),this.onOfflineMsgs(t);break;case"syncOfflineFilterSysMsgs":t=e.content.sysMsgs.map(function(e){return e=o.reverse(e),e.filter=!0,e}),this.onOfflineSysMsgs(t)}}},function(e,t,n){"use strict";var r=n(6),i=n(30),o=n(31),s=n(32);r.fn.processTeam=function(e){var t,n,r=e.obj;switch(e.cmd){case"createTeam":e.error||(r.team=e.content.team),e.obj.team=i.reverse(r.team);break;case"sendTeamMsg":e.error||(r.idServer=e.content.msg.idServer,r.time=e.content.msg.time),r.from=this.options.account,e.obj=s.reverse(r);break;case"teamMsg":r=s.reverse(e.content.msg),this.onMsg(r);break;case"teamMsgs":t=e.content.msgs.map(function(e){return s.reverse(e)},this),this.onMsgs(t);break;case"addTeamMembers":case"removeTeamMembers":case"leaveTeam":case"dismissTeam":case"passTeamApply":case"rejectTeamApply":case"addTeamManagers":case"removeTeamManagers":case"transferTeam":case"rejectTeamInvite":break;case"updateInfoInTeam":case"updateNickInTeam":e.obj=o.reverse(e.obj);break;case"updateTeam":e.obj=i.reverse(e.obj);break;case"getTeam":case"applyTeam":case"acceptTeamInvite":e.error||(e.obj=i.reverse(e.content.team));break;case"getTeams":e.error||(e.obj=e.content.teams.map(function(e){return i.reverse(e)}));break;case"getTeamMembers":e.error||(e.obj={teamId:e.content.teamId,members:e.content.members.map(function(e){return o.reverse(e)})});break;case"syncTeams":r=e.content.teams.map(function(e){return i.reverse(e)}),this.options.onteams(r),this.options.syncTeamMembers&&this.syncTeamMembers(r);break;case"syncTeamMembers":n=e.content.members.map(function(e){return o.reverse(e)}),this.options.onteammembers({teamId:e.content.teamId,members:n}),this.syncTeamMembersTime[e.content.teamId]=e.content.syncTime,this.checkSyncTeamMembers();break;case"getTeamHistoryMsgs":case"searchTeamHistoryMsgs":e.error||(e.obj.msgs=e.content.msgs.map(function(e){return s.reverse(e)}));break;case"syncCreateTeam":r=i.reverse(e.content.team),this.options.onsynccreateteam(r);break;case"syncSendTeamMsg":r=s.reverse(e.content.msg),this.onMsg(r);break;case"syncUpdateTeamMember":r=o.reverse(e.content.teamMember),this.options.onupdateteammember(r)}},r.fn.syncTeamMembers=function(e){if(this.syncTeamMembersTime={},e.length){var t;e.forEach(function(e){this.syncTeamMembersTime[e.teamId]=0,t={},t[e.teamId]=0,this.sendCmd("syncTeamMembers",{sync:t},this.onSyncTeamMembers.bind(this))}.bind(this))}else this.options.onsyncteammembersdone()},r.fn.onSyncTeamMembers=function(e,t){this.checkMiscError(e,t,"sync teamMembers error - 同步群成员失败")},r.fn.checkSyncTeamMembers=function(){var e=Object.keys(this.syncTeamMembersTime).some(function(e){return 0===this.syncTeamMembersTime[e]},this);e||this.options.onsyncteammembersdone()}},function(e,t,n){"use strict";var r=n(6),i=n(48),o=n(27);r.fn.processFriend=function(e){var t,n;switch(e.cmd){case"friendRequest":break;case"syncFriendRequest":this.options.onsyncfriendaction({type:i.getTypeFromByte(e.content.type),account:e.content.account,ps:e.content.ps});break;case"deleteFriend":break;case"syncDeleteFriend":this.options.onsyncfriendaction({type:"deleteFriend",account:e.content.account});break;case"updateFriend":break;case"syncUpdateFriend":this.options.onsyncfriendaction({type:"updateFriend",friend:i.reverse(e.content.friend)});break;case"getFriends":t=e.content.friends.map(function(e){return i.reverse(e)}),e.error||(e.obj=t);break;case"syncFriends":t=e.content.friends.map(function(e){return i.reverse(e)}),this.options.onfriends(t);break;case"syncFriendUsers":n=e.content.users.map(function(e){return o.reverse(e)})}}},function(e,t,n){"use strict";function r(e){i.verifyOptions(e,"account"),i.verifyParamAtLeastPresentOne(e,"alias custom"),this.account=e.account,this.alias=e.alias,this.custom=e.custom}var i=n(1),o={addFriend:1,applyFriend:2,passFriendApply:3,rejectFriendApply:4},s={1:"addFriend",2:"applyFriend",3:"passFriendApply",4:"rejectFriendApply"};r.reverse=function(e){var t=i.filterObj(e,"account alias custom createTime updateTime");return t.createTime=+t.createTime,t.updateTime=+t.updateTime,t},r.validTypes=function(){return Object.keys(o)},r.getByteFromType=function(e){return o[e]},r.getTypeFromByte=function(e){return s[e]},e.exports=r},function(e,t,n){"use strict";var r=n(6),i=n(32),o=n(29);r.fn.processFilter=function(e){var t=e.obj;switch(e.cmd){case"sendFilterMsg":this._filterMsg(e,t),e.obj.filter=!0;break;case"filterMsg":t=i.reverse(e.content.msg),t.filter=!0,this.onMsg(t);break;case"filterSysMsg":t=o.reverse(e.content.sysMsg),t.filter=!0,this.onSysMsg(t);break;case"sendFilterCustomSysMsg":this._filterSysMsg(e,t),e.obj.filter=!0}}},function(e,t,n){"use strict";var r=n(5),i=n(1);r.fn.isConnected=function(){return this.socket.connected},r.fn.connect=function(){this.socket.connectViaLbs()},r.fn.disconnect=function(){this.socket.logout()},r.fn.kick=function(e){i.verifyOptions(e,"deviceIds"),this.processCallback(e),this.socket.kick(e)}},function(e,t,n){"use strict";var r=n(5),i=n(1),o=n(27);r.fn.markInBlacklist=function(e){i.verifyOptions(e,"account isAdd"),i.verifyParamType("isAdd",e.isAdd,"boolean"),this.processCallback(e),this.sendCmd("markInBlacklist",{account:e.account,isAdd:e.isAdd},e.callback)},r.fn.addToBlacklist=function(e){e.isAdd=!0,this.markInBlacklist(e)},r.fn.removeFromBlacklist=function(e){e.isAdd=!1,this.markInBlacklist(e)},r.fn.markInMutelist=function(e){i.verifyOptions(e,"account"),i.verifyParamType("isAdd",e.isAdd,"boolean"),this.processCallback(e),this.sendCmd("markInMutelist",{account:e.account,isAdd:e.isAdd},e.callback)},r.fn.addToMutelist=function(e){e.isAdd=!0,this.markInMutelist(e)},r.fn.removeFromMutelist=function(e){e.isAdd=!1,this.markInMutelist(e)},r.fn.getBlacklistAndMutelist=function(e){this.processCallback(e),this.sendCmd("getBlacklistAndMutelist",{time:0,NOTSTORE:"time"},e.callback)},r.fn.getUser=function(e){i.verifyOptions(e,"account"),e._cbaop=function(e,t){return t[0]},this.processCallback(e),this.sendCmd("getUsers",{accounts:[e.account],single:!0},e.callback)},r.fn.getUsers=function(e){i.verifyOptions(e,"accounts"),i.verifyParamType("accounts",e.accounts,"array"),this.processCallback(e),this.sendCmd("getUsers",{accounts:e.accounts,single:!0},e.callback)},r.fn.updateMyInfo=function(e){i.verifyOptions(e),this.processCallback(e),e.user=new o(e),delete e.user.account,this.sendCmd("updateMyInfo",{user:e.user,single:!0},e.callback)}},function(e,t,n){"use strict";var r=n(5),i=n(1),o=n(14),s=n(54),a=n(55),c=n(53),l=n(12),u=n(2),p=n(32),d=n(29);r.fn.assignIdClient=function(e){e.idClient=e.idClient||i.guid()},r.fn.sendText=function(e){return i.verifyOptions(e,"scene to text"),i.verifyParamValid("scene",e.scene,p.validScenes()),e.type="text",this.processCallback(e),e.msg=new p.TextMessage(e),this.doSendMsg(e),e.msg.idClient},r.fn.previewFile=function(e){if(i.verifyOptions(e,"done"),e.type||(e.type="file"),i.verifyParamPresentJustOne(e,"dataURL blob fileInput"),e.dataURL)e.blob=c.fromDataURL(e.dataURL);else if(e.blob);else if(e.fileInput&&(e.fileInput=i.verifyFileInput(e.fileInput),e.fileInput.files&&!e.fileInput.files.length))return void e.done(u.newNoFileError("请选择"+e.type+"文件后再预览"),e);this.processCallback(e);var t=s.genResponseBody(e.type)||{};this.getNosToken({responseBody:JSON.stringify(t).replace(/\"/gi,'\\"'),callback:function(t,n){return t?(this.assignIdClient(e.callback.options),void e.done(t,e.callback.options)):(e.nosToken=n,void this._doPreviewFile(e))}.bind(this)})},r.fn._doPreviewFile=function(e){var t=e.uploaddone;e.uploaddone=function(n,r){if(n)return n.appendMessage("上传文件失败"),this.assignIdClient(e.callback.options),void e.done(n,e.callback.options);if(r=s.parseResponse(r),r.url=o.genDownloadUrl(e.nosToken.bucket,e.params.Object),e.fileInput)r.name=i.getFileName(e.fileInput);else if(e.blob){r.name="";var a=e.blob.type;r.ext=a.slice(a.lastIndexOf("/")+1)}if(!r.ext){var c=r.name.lastIndexOf(".");r.ext=-1===c?"":r.name.slice(c+1)}return e.uploaddone=t,void e.done(null,i.copy(r))}.bind(this),e.url=o.genUploadUrl(e.nosToken.bucket),e.params=this.assembleUploadParams(e.nosToken),e.fileName="file",new a(e)},r.fn.sendFile=function(e){if(i.verifyOptions(e,"scene to done"),i.verifyParamValid("scene",e.scene,p.validScenes()),e.type||(e.type="file"),i.verifyParamPresentJustOne(e,"dataURL blob fileInput file"),this.processCallback(e),e.dataURL)this._previewAndSendFile(e);else if(e.blob)this._previewAndSendFile(e);else if(e.fileInput){if(e.fileInput=i.verifyFileInput(e.fileInput),e.fileInput.files&&!e.fileInput.files.length)return void e.done(u.newNoFileError("请选择"+e.type+"文件后再发送"),e.callback.options);this._previewAndSendFile(e)}else if(e.file)return e.msg=new p.FileMessage(e),this.doSendMsg(e),e.msg.idClient},r.fn._previewAndSendFile=function(e){i.verifyCallback(e,"uploaddone beforesend");var t=e.done;e.done=function(n,r){n?(this.assignIdClient(e.callback.options),t(n,e.callback.options)):(e.uploaddone(null,i.copy(r)),e.file=r,e.msg=new p.FileMessage(e),e.beforesend(e.msg.idClient),e.done=t,this.doSendMsg(e))}.bind(this),this.previewFile(e)},r.fn.assembleUploadParams=function(e){return e?{Object:decodeURIComponent(e.objectName),"x-nos-token":e.token,"x-nos-entity-type":"json"}:null},r.fn.sendGeo=function(e){return i.verifyOptions(e,"scene to geo done"),i.verifyParamValid("scene",e.scene,p.validScenes()),e.type="geo",this.processCallback(e),e.msg=new p.GeoMessage(e),this.doSendMsg(e),e.msg.idClient},r.fn.sendCustomMsg=function(e){return i.verifyOptions(e,"scene to content"),i.verifyParamValid("scene",e.scene,p.validScenes()),i.verifyParamType("content",e.content,"string"),e.type="custom",this.processCallback(e),e.msg=new p.CustomMessage(e),this.doSendMsg(e),e.msg.idClient},r.fn.sendTipMsg=function(e){return i.verifyOptions(e,"scene to content"),i.verifyParamValid("scene",e.scene,p.validScenes()),i.verifyParamType("content",e.content,"string"),e.type="tip",this.processCallback(e),e.msg=new p.TipMessage(e),this.doSendMsg(e),e.msg.idClient},r.fn.doSendMsg=function(e){e.callback.options.idClient=e.msg.idClient;var t=e.msg;t.to===this.options.account&&(t.fromDeviceId=l.id),this.socket.entrust.user&&(t.userUpdateTime=this.socket.entrust.userUpdateTime);var n;switch(t.getScene()){case"p2p":n="sendMsg";break;case"team":n="sendTeamMsg"}e.filter&&(n="sendFilterMsg"),this.sendCmd(n,{msg:t,single:!0},e.callback)},r.fn.sendCustomSysMsg=function(e){i.verifyOptions(e,"scene to content"),i.verifyParamValid("scene",e.scene,p.validScenes()),i.notundef(e.sendToOnlineUsersOnly)?i.verifyParamType("sendToOnlineUsersOnly",e.sendToOnlineUsersOnly,"boolean"):e.sendToOnlineUsersOnly=!0,this.processCallback(e),e.type="p2p"===e.scene?"customP2p":"customTeam",e.sysMsg=new d(e);var t="sendCustomSysMsg";return e.filter&&(t="sendFilterCustomSysMsg"),this.sendCmd(t,{sysMsg:e.sysMsg,single:!0},e.callback),e.sysMsg.idClient},r.fn.getHistoryMsgs=function(e){i.verifyOptions(e,"scene to"),i.verifyParamValid("scene",e.scene,p.validScenes()),"undefined"==typeof e.beginTime&&(e.beginTime=0),i.verifyParamType("beginTime",e.beginTime,"number"),"undefined"==typeof e.endTime&&(e.endTime=0),i.verifyParamType("endTime",e.endTime,"number"),"undefined"==typeof e.lastMsgId&&(e.lastMsgId=0),i.verifyParamType("lastMsgId",e.lastMsgId,"number"),"undefined"==typeof e.limit&&(e.limit=100),i.verifyParamType("limit",e.limit,"number"),i.verifyParamMax("limit",e.limit,100),i.notundef(e.reverse)?i.verifyParamType("reverse",e.reverse,"boolean"):e.reverse=!1,this.processCallback(e);var t;switch(e.scene){case"p2p":t="getHistoryMsgs";break;case"team":t="getTeamHistoryMsgs"}var n={scene:e.scene,to:e.to,beginTime:e.beginTime,endTime:e.endTime,lastMsgId:e.lastMsgId,limit:e.limit,reverse:e.reverse};this.sendCmd(t,n,e.callback)},r.fn.searchHistoryMsgs=function(e){i.verifyOptions(e,"scene to keyword"),i.verifyParamValid("scene",e.scene,p.validScenes()),"undefined"==typeof e.beginTime&&(e.beginTime=0),i.verifyParamType("beginTime",e.beginTime,"number"),"undefined"==typeof e.endTime&&(e.endTime=0),i.verifyParamType("endTime",e.endTime,"number"),"undefined"==typeof e.limit&&(e.limit=100),i.verifyParamType("limit",e.limit,"number"),i.verifyParamMax("limit",e.limit,100),i.notundef(e.reverse)?i.verifyParamType("reverse",e.reverse,"boolean"):e.reverse=!1,this.processCallback(e);var t;switch(e.scene){case"p2p":t="searchHistoryMsgs";break;case"team":t="searchTeamHistoryMsgs"}var n=i.filterObj(e,"scene to beginTime endTime keyword limit reverse");this.sendCmd(t,n,e.callback)},r.fn.getSessions=function(e){i.verifyOptions(e),this.processCallback(e),this.sendCmd("getSessions",{time:0,NOTSTORE:"time"},e.callback)},r.fn.deleteSession=function(e){i.verifyOptions(e,"scene to"),this.processCallback(e),e.sessions=[{scene:e.scene,to:e.to}],this.deleteSessions(e)},r.fn.deleteSessions=function(e){i.verifyOptions(e,"sessions"),i.verifyParamType("sessions",e.sessions,"array"),e.sessions.forEach(function(e,t){i.verifyOptions(e,"scene to",!0,"sessions["+t+"].")}),this.processCallback(e),this.sendCmd("deleteSessions",{sessions:e.sessions.map(function(e){return e.scene+"|"+e.to})},e.callback)},r.fn.markMsgRead=function(e){i.verifyOptions(e,"msg"),i.verifyOptions(e.msg,"scene idServer",!0,"msg."),i.verifyOptions(e,"done",!1),this.socket.markMsgRead(e.msg,e.callback)},r.fn.markSysMsgRead=function(e){i.verifyOptions(e,"sysMsg"),i.verifyOptions(e.sysMsg,"type idServer",!0,"sysMsg."),i.verifyOptions(e,"done",!1),this.socket.markSysMsgRead(e.sysMsg,e.callback)}},function(e,t){"use strict";var n={};n.fromDataURL=function(e){var t;t=e.split(",")[0].indexOf("base64")>=0?window.atob(e.split(",")[1]):window.decodeURIComponent(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],r=new window.Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return new window.Blob([r],{type:n})},e.exports=n},function(e,t,n){"use strict";var r=n(1),i={file:{md5:"$(Etag)",size:"$(ObjectSize)"},image:{md5:"$(Etag)",size:"$(ObjectSize)",w:"$(ImageInfo.Width)",h:"$(ImageInfo.Height)"},audio:{md5:"$(Etag)",size:"$(ObjectSize)",dur:"$(AVinfo.Audio.Duration)"},video:{md5:"$(Etag)",size:"$(ObjectSize)",dur:"$(AVinfo.Video.Duration)",w:"$(AVinfo.Video.Width)",h:"$(AVinfo.Video.Height)"}},o={};o.genResponseBody=function(e){return e=e||"file",i[e]},o.parseResponse=function(e){return r.notundef(e.size)&&(e.size=+e.size),r.notundef(e.w)&&(e.w=+e.w),r.notundef(e.h)&&(e.h=+e.h),r.notundef(e.dur)&&(e.dur=+e.dur),e},e.exports=o},function(e,t,n){"use strict";function r(e){this.options=i.copy(e),i.verifyOptions(e,"url fileName"),i.verifyParamPresentJustOne(e,"blob fileInput"),e.fileInput&&(e.fileInput=i.verifyFileInput(e.fileInput)),e.type&&i.verifyFileType(e.type),e.timeout?i.verifyParamType("timeout",e.timeout,"number"):e.timeout=6e5,i.verifyFileUploadCallback(e),a?l.call(this,e):p.call(this,e)}var i=n(1),o=n(56),s=n(2),a=i.notundef(window.FormData),c=104857600;r.prototype.cancel=function(){a?u.call(this):d.call(this)};var l=function(e){var t=new window.FormData,n=e.fileName;if(e.fileInput){var r=e.type?i.filterFiles(e.fileInput.files,e.type):[].slice.call(e.fileInput.files,0);if(!r||!r.length)return void e.uploaddone(s.newWrongFileTypeError("未读取到"+e.type+"类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了"+e.type+"类型的文件"));var o=e.fileInput.files[0].size;if(o>c)return void e.uploaddone(s.newFileTooLargeError("文件大小超过100M"));t.append(n,r[0])}else e.blob&&t.append(n,e.blob);e.params&&Object.keys(e.params).forEach(function(n){t.append(n,e.params[n])});var a=new window.XMLHttpRequest;this.xhr=a,a.upload.addEventListener("progress",function(t){t.lengthComputable&&t.loaded<=t.total&&(t.percentage=Math.floor(1e4*t.loaded/t.total)/100,e.uploadprogress({total:t.total,loaded:t.loaded,percentage:t.percentage,percentageText:t.percentage+"%"}))}.bind(this)),a.upload.addEventListener("load",function(t){t.percentage=100,e.uploadprogress({total:t.total,loaded:t.loaded,percentage:t.percentage})}.bind(this)),a.upload.addEventListener("error",function(){e.uploaddone(s.newNetworkError())}.bind(this)),a.upload.addEventListener("abort",function(){e.uploadcancel()}.bind(this)),a.upload.addEventListener("timeout",function(){e.uploadtimeout(s.newTimeoutError())}.bind(this)),a.addEventListener("load",function(t){var n,r,i,o,a=t.target.responseText;switch(a&&(n=JSON.parse(a)),t.target.status){case 200:e.uploaddone(null,n);break;default:n=n||{},r=n.Error||{},i=r.Code||"unknown",o=r.Message||"未知错误",e.uploaddone(new s(i+"("+o+")",i))}}.bind(this)),a.open("POST",e.url),a.timeout=e.timeout,e.headers&&(i.verifyParamType("headers",e.headers,"object"),Object.keys(e.headers).forEach(function(t){a.setRequestHeader(t,e.headers[t])})),a.send(t)},u=function(){this.xhr.abort()},p=function(e){this.iframe=new o(e)},d=function(){this.iframe.cancel(),this.options.uploadcancel()};e.exports=r},function(e,t,n){"use strict";function r(e){this.options=i.copy(e),i.verifyOptions(e,"url fileInput fileName");var t=o.html2node('<form style="display:none;"></form>');this.form=t,l++;var n="iframe-"+l;c[n]=this;var r=o.html2node('<iframe src="'+u+'" name="'+n+'"></iframe>');this.iframe=r,this.onIframeAddedCallback=m.bind(this,e),s.addEventListener(r,"load",this.onIframeAddedCallback),d(),t.appendChild(r),window.document.body.appendChild(t)}var i=n(1),o=n(57),s=n(58),a=n(2),c={},l=0,u="javascript:false;",p="NEJ-UPLOAD-RESULT:",d=function(){var e=!1;return function(){e||(e=!0,s.addEventListener(window,"message",f))}}(),f=function(e){var t=e.data;if(0===t.indexOf(p)){t=JSON.parse(t.replace(p,""));var n=c[t.key];n&&(delete c[t.key],n.onData(decodeURIComponent(t.result)))}},m=function(e){var t=this.form,n=this.iframe;s.removeEventListener(n,"load",this.onIframeAddedCallback),this.onIframeLoadedCallback=y.bind(this),s.addEventListener(n,"load",this.onIframeLoadedCallback),t.target=n.name;var r=-1===e.url.indexOf("?")?"?":"&";t.action=e.url+r+"_proxy_=form",t.method="POST";var i=e.fileInput,a=i.cloneNode(!0);if(i.parentNode.insertBefore(a,i),i.name=e.fileName,t.appendChild(i),t.enctype="multipart/form-data",t.encoding="multipart/form-data",i.setAttribute("form",""),i.removeAttribute("form"),e.params){var c=Object.keys(e.params);c.forEach(function(n){var r=o.html2node('<input type="hidden"/>');r.name=n,r.value=e.params[n],t.appendChild(r)})}t.submit(),i.name=a.name,i.setAttribute("form",a.getAttribute("form")),a.parentNode.replaceChild(i,a)},y=function(){var e,t=this.iframe,n=this.form;try{if(e=t.contentDocument||t.contentWindow.document,!e||!e.firstChild)throw a.newCORSIframeError()}catch(r){e=void 0}if(e){var i=e.body.textContent||e.body.innerText;this.onData(i)}n.appendChild(o.html2node('<iframe src="'+u+'"></iframe>')),window.setTimeout(function(){n.parentNode.removeChild(n)},0)};r.prototype.onData=function(e){var t,n,r,i;t=JSON.parse(e),t.Error?(t=t||{},n=t.Error||{},r=n.Code||"unknown",i=n.Message||"未知错误",this.options.uploaddone(new a(r+"("+i+")",r))):this.options.uploaddone(null,t)},r.prototype.cancel=function(){var e=this.form,t=this.iframe;t&&(s.removeEventListener(t,"load",this.onIframeLoadedCallback),t.src=u),e&&e.parentNode.removeChild(e)},e.exports=r},function(e,t){"use strict";var n={};n.html2node=function(e){var t=window.document.createElement("div");t.innerHTML=e;var n,r,i=[];if(t.children)for(n=0,r=t.children.length;r>n;n++)i.push(t.children[n]);else for(n=0,r=t.childNodes.length;r>n;n++){var o=t.childNodes[n];1===o.nodeType&&i.push(o)}return i.length>1?t:i[0]},e.exports=n},function(e,t){"use strict";var n={addEventListener:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},removeEventListener:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent&&e.detachEvent("on"+t,n)}};e.exports=n},function(e,t,n){"use strict";var r=n(5),i=n(1),o=n(30),s=n(31);r.fn.createTeam=function(e){i.verifyOptions(e,"type name"),i.verifyParamType("accounts",e.accounts,"array"),e.action="create",this.processPs(e),this.processCallback(e),e.team=new o.Team(e);var t={team:e.team,accounts:e.accounts,ps:e.ps};this.sendCmd("createTeam",t,e.callback)},r.fn.updateTeam=function(e){i.verifyOptions(e,"teamId"),e.action="update",this.processCallback(e),e.team=new o.Team(e),this.sendCmd("updateTeam",{team:e.team,single:!0},e.callback)},r.fn.addTeamMembers=function(e){i.verifyOptions(e,"teamId accounts"),i.verifyParamType("accounts",e.accounts,"array"),this.processPs(e),this.processCallback(e);var t={teamId:e.teamId,accounts:e.accounts,ps:e.ps};this.sendCmd("addTeamMembers",t,e.callback)},r.fn.removeTeamMembers=function(e){i.verifyOptions(e,"teamId accounts"),i.verifyParamType("accounts",e.accounts,"array"),this.processCallback(e);var t={teamId:e.teamId,accounts:e.accounts};this.sendCmd("removeTeamMembers",t,e.callback)},r.fn.acceptTeamInvite=function(e){i.verifyOptions(e,"teamId from"),this.processCallback(e);var t={teamId:e.teamId,from:e.from};this.sendCmd("acceptTeamInvite",t,e.callback)},r.fn.rejectTeamInvite=function(e){i.verifyOptions(e,"teamId from"),this.processPs(e),this.processCallback(e);var t={teamId:e.teamId,from:e.from,ps:e.ps||""};this.sendCmd("rejectTeamInvite",t,e.callback)},r.fn.applyTeam=function(e){i.verifyOptions(e,"teamId"),this.processPs(e),this.processCallback(e);var t={teamId:e.teamId,ps:e.ps};this.sendCmd("applyTeam",t,e.callback)},r.fn.passTeamApply=function(e){i.verifyOptions(e,"teamId from"),this.processCallback(e);var t={teamId:e.teamId,from:e.from};this.sendCmd("passTeamApply",t,e.callback)},r.fn.rejectTeamApply=function(e){i.verifyOptions(e,"teamId from"),this.processPs(e),this.processCallback(e);var t={teamId:e.teamId,from:e.from,ps:e.ps||""};this.sendCmd("rejectTeamApply",t,e.callback)},r.fn.leaveTeam=function(e){i.verifyOptions(e,"teamId"),this.processCallback(e);var t={teamId:e.teamId};this.sendCmd("leaveTeam",t,e.callback)},r.fn.addTeamManagers=function(e){i.verifyOptions(e,"teamId accounts"),i.verifyParamType("accounts",e.accounts,"array"),this.processCallback(e);var t={teamId:e.teamId,accounts:e.accounts};this.sendCmd("addTeamManagers",t,e.callback)},r.fn.removeTeamManagers=function(e){i.verifyOptions(e,"teamId accounts"),i.verifyParamType("accounts",e.accounts,"array"),this.processCallback(e);var t={teamId:e.teamId,accounts:e.accounts};this.sendCmd("removeTeamManagers",t,e.callback)},r.fn.transferTeam=function(e){i.verifyOptions(e,"teamId account leave"),i.verifyParamType("leave",e.leave,"boolean"),this.processCallback(e);var t={teamId:e.teamId,account:e.account,leave:e.leave};this.sendCmd("transferTeam",t,e.callback)},r.fn.dismissTeam=function(e){i.verifyOptions(e,"teamId"),this.processCallback(e);var t={teamId:e.teamId};this.sendCmd("dismissTeam",t,e.callback)},r.fn.updateInfoInTeam=function(e){i.verifyOptions(e,"teamId"),this.processCallback(e),this.sendCmd("updateInfoInTeam",{teamMember:new s.TeamMember(e),single:!0},e.callback)},r.fn.updateNickInTeam=function(e){i.verifyOptions(e,"teamId account"),this.processCallback(e),this.sendCmd("updateNickInTeam",{teamMember:new s.TeamMember(e),single:!0},e.callback)},r.fn.getTeam=function(e){i.verifyOptions(e,"teamId"),this.processCallback(e);var t={teamId:e.teamId};this.sendCmd("getTeam",t,e.callback)},r.fn.getTeams=function(e){this.processCallback(e),this.sendCmd("getTeams",{time:0},e.callback)},r.fn.getTeamMembers=function(e){i.verifyOptions(e,"teamId"),this.processCallback(e);var t={teamId:e.teamId,time:0};this.sendCmd("getTeamMembers",t,e.callback)}},function(e,t,n){"use strict";var r=n(5),i=n(1),o=n(48);r.fn.friendRequest=function(e){i.verifyOptions(e,"type account"),i.verifyParamValid("type",e.type,o.validTypes()),this.processPs(e),this.processCallback(e),this.sendCmd("friendRequest",{account:e.account,type:o.getByteFromType(e.type),ps:e.ps,NOTSTORE:"type"},e.callback)},r.fn.addFriend=function(e){e.type="addFriend",this.friendRequest(e)},r.fn.applyFriend=function(e){e.type="applyFriend",this.friendRequest(e)},r.fn.passFriendApply=function(e){e.type="passFriendApply",this.friendRequest(e)},r.fn.rejectFriendApply=function(e){e.type="rejectFriendApply",this.friendRequest(e)},r.fn.deleteFriend=function(e){i.verifyOptions(e,"account"),this.processCallback(e),this.sendCmd("deleteFriend",{account:e.account},e.callback)},r.fn.updateFriend=function(e){this.processCallback(e);var t=new o(e);this.sendCmd("updateFriend",{friend:t,single:!0},e.callback)},r.fn.getFriends=function(e){i.verifyOptions(e),this.processCallback(e),this.sendCmd("getFriends",{time:0,NOTSTORE:"time"},e.callback)}}])});

/***/ },
/* 10 */
/***/ function(module, exports) {

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

/***/ },
/* 11 */
/***/ function(module, exports) {

	
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
	


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-chatContainer\">\n\t<div class=\"g-left\">\n\t\t<personal-center info=\"{{personMap}}\" account=\"{{account}}\">\n\t\t</personal-center>\n\t\t<panel\tpersonmap=\"{{personMap}}\"\n\t\t\t\tteammap=\"{{teammap}}\"\n\t\t\t\tmsgs=\"{{msgs}}\" \n\t\t\t\tsessionlist=\"{{sessionlist}}\" \n\t\t\t\tfriendlist=\"{{friendlist}}\" \n\t\t\t\tteamlist=\"{{teamlist}}\" \n\t\t\t\tcrtsession=\"{{crtSession}}\"\n\t\t\t\tsetcrtsession=\"{{setCrtSession}}\"\n\t\t\t\taccount=\"{{account}}\">\n\t\t</panel>\n\t</div>\n\t<div class=\"g-right\">\n\t\t<chat\tpersonmap=\"{{personMap}}\"\n\t\t\t\tteammap=\"{{teammap}}\"\n\t\t\t\tmsgs=\"{{msgs}}\"\n\t\t\t\taccount=\"{{account}}\"\n\t\t\t\tcrtsession=\"{{crtSession}}\">\n\t\t</chat>\n\t</div>\n</div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	module.exports = {
	    template: __webpack_require__(16),
	    props: ['info','account']
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".clearfix {\n  zoom: 1;\n}\n.clearfix:after {\n  display: block;\n  clear: both;\n  visibility: hidden;\n  height: 0;\n  overflow: hidden;\n  content: \".\";\n}\n.m-personalCenter {\n  width: 100%;\n  height: 80px;\n  border-bottom: 1px solid #ced4d9;\n  background-color: #e5f4ff;\n}\n.m-personalCenter .avatar {\n  float: left;\n  margin: 12px 10px 0 14px;\n  width: 56px;\n  height: 56px;\n  border: none;\n  border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-border-radius: 50%;\n}\n.m-personalCenter .nick {\n  float: left;\n  display: inline-block;\n  margin-top: 34px;\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-personalCenter\">\n\t<img class=\"avatar\" alt=\"{{info[account].account}}\" v-attr=\"src: info[account].avatar\">\n\t<span class=\"nick\">{{info[account].nick}}</span>\n</div>";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(18);
	/**
	 * 判断会话的对象
	 * @param  {Object} msg 消息
	 * @return {String} 会话的对象
	 */
	function switchConversationUser(account,msg){
		return msg.to === account? msg.from : msg.to;
	}
	
	module.exports = {
	    template: __webpack_require__(20),
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

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".clearfix {\n  zoom: 1;\n}\n.clearfix:after {\n  display: block;\n  clear: both;\n  visibility: hidden;\n  height: 0;\n  overflow: hidden;\n  content: \".\";\n}\n.m-chatContainer .m-panel .tabs {\n  width: 100%;\n  height: 40px;\n  zoom: 1;\n}\n.m-chatContainer .m-panel .tabs:after {\n  display: block;\n  clear: both;\n  visibility: hidden;\n  height: 0;\n  overflow: hidden;\n  content: \".\";\n}\n.m-chatContainer .m-panel .tab {\n  float: left;\n  width: 90px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #fff;\n}\n.m-chatContainer .m-panel .tab.active {\n  background-color: #e5f4ff;\n}\n.m-chatContainer .m-panel .item {\n  width: 100%;\n  height: 60px;\n}\n", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-panel\">\n\t<ul class=\"tabs\">\n\t\t<li class=\"tab\"\n\t\t\tv-repeat=\"item in tabs\" \n\t\t\tv-on= \"click: crtTab = item\"\n\t\t\tv-class=\"active: crtTab === item\">\n\t\t\t{{item}}\n\t\t</li>\n\t</ul>\n\t<ul v-show=\"crtTab==='session'\" class=\"list\">\n\t\t<li v-repeat=\"item in sessionlist\" v-on=\"click: doChat(item)\">\n\t\t\t<img class=\"avatar\" width=\"40\" height=\"40\" v-attr=\"src: item|avatar|toImage\">\n\t\t\t<span class=\"name\">{{item|name}}</span>\n\t\t\t<span>{{item|message}}</span>\n\t\t</li>\n\t</ul>\n\t<ul v-show=\"crtTab==='friend'\" class=\"list\" >\n\t\t<li v-repeat=\"item in friendlist\" class=\"item\" v-on=\"click: doFriendChat(item)\">\n\t\t\t{{personmap[item].nick}}\n\t\t</li>\n\t</ul>\n\t<ul v-show=\"crtTab==='team'\" class=\"list\">\n\t\t<li v-repeat=\"item in teamlist\" class=\"item\" v-on=\"click: doTeamChat(item.teamId)\">\n\t\t\t{{item.name}}\n\t\t</li>\n\t</ul>\n</div>";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22);
	
	module.exports = {
		template:__webpack_require__(24),
		props:["personmap","teammap","msgs","crtsession","account"],
		ready:function(){
	
		},
		components:{
			headContainer: __webpack_require__(25),
	        chatContainer: __webpack_require__(29),
	        footContainer: __webpack_require__(33)
		}
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<div class=\"m-chat\" v-show=\"crtsession.to!==''\">\n\t<head-container personmap=\"{{personmap}}\" \n\t\t\t\t\tteammap=\"{{teammap}}\" \n\t\t\t\t\taccount=\"{{account}}\"\n\t\t\t\t\tcrtsession=\"{{crtsession}}\">\n\t</head-container>\n\t<chat-container personmap=\"{{personmap}}\"\n\t\t\t\t\tmsgs=\"{{msgs}}\"\n\t\t\t\t\taccount=\"{{account}}\"\n\t\t\t\t\tcrtsession=\"{{crtsession}}\">\n\t</chat-container>\n\t<foot-container></foot-container>\n</div>";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	module.exports = {
	    template: __webpack_require__(28),
	    props:["personmap","teammap","crtsession","account"]
	};
	
	


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"head\">\n\t{{crtsession.scene}}-------{{crtsession.to}}\n</div>";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	module.exports = {
	    template: __webpack_require__(32),
	    props:["personmap","msgs","crtsession","account"],
	    filters:{
	    	toSession:function(obj){
	    		return obj.scene+'-'+obj.to;
	    	}
	    }
	};
	


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"chat\">\n\t<li v-repeat=\"item in msgs[crtsession.scene+'-'+crtsession.to]\">\n\t\t{{item.text}}\n\t</li>\n</div>";

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	module.exports = {
	    template: __webpack_require__(36),
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

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/autoprefixer-loader/index.js!./../../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-text {\n  height: 160px;\n  border-top: solid 1px #ddd;\n}\n.m-text textarea {\n  padding: 10px;\n  height: 100%;\n  width: 200px;\n  border: none;\n  outline: none;\n  font-family: \"Micrsofot Yahei\";\n  resize: none;\n}\n", ""]);
	
	// exports


/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div class=\"foot\">\n\t<div class=\"text\">\n\t\t<textarea placeholder=\"按 Ctrl + Enter 发送\" v-model=\"text\" v-on=\"keyup: inputing\"></textarea>\n\t</div>\n</div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=script.js.map