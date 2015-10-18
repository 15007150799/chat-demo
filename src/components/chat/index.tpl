<div class="m-chat" v-show="crtsession.to!==''">
	<head-container personmap="{{personmap}}" 
					teammap="{{teammap}}" 
					account="{{account}}"
					crtsession="{{crtsession}}">
	</head-container>
	<chat-container personmap="{{personmap}}"
					msgs="{{msgs}}"
					account="{{account}}"
					crtsession="{{crtsession}}">
	</chat-container>
	<foot-container></foot-container>
</div>