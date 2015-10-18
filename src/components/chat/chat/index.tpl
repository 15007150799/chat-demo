<div class="chat">
	<li v-repeat="item in msgs[crtsession.scene+'-'+crtsession.to]">
		{{item.text}}
	</li>
</div>