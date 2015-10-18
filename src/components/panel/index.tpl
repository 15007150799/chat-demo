<div class="m-panel">
	<ul class="tabs">
		<li class="tab"
			v-repeat="item in tabs" 
			v-on= "click: crtTab = item"
			v-class="active: crtTab === item">
			{{item}}
		</li>
	</ul>
	<ul v-show="crtTab==='session'" class="list">
		<li v-repeat="item in sessionlist" v-on="click: doChat(item)">
			<img class="avatar" width="40" height="40" v-attr="src: item|avatar|toImage">
			<span class="name">{{item|name}}</span>
			<span>{{item|message}}</span>
		</li>
	</ul>
	<ul v-show="crtTab==='friend'" class="list" >
		<li v-repeat="item in friendlist" class="item" v-on="click: doFriendChat(item)">
			{{personmap[item].nick}}
		</li>
	</ul>
	<ul v-show="crtTab==='team'" class="list">
		<li v-repeat="item in teamlist" class="item" v-on="click: doTeamChat(item.teamId)">
			{{item.name}}
		</li>
	</ul>
</div>