<template>
	<div class="h-post">
		<h4>发帖</h4>
		<p><input type="text" v-model="title" placeholder="请输入帖子标题"/></p>
		<p><textarea placeholder="请输入内容" v-model="content"></textarea></p>
		<p><button type="button" @click="sendTopic">发 帖</button></p>
	</div>
</template>
<style>
	.h-post{
	text-align: left;
	overflow: hidden;
	padding-bottom: 10px;
	padding-left: 5px;padding-right: 5px;
	}
	p{
		margin-bottom: 14px;
	}
	input{
		width: 80%;
		border: solid 1px #ccc;
		border-radius: 4px;
		height: 30px;
	}
	textarea{
		width: 100%;
		border: solid 1px #ccc;
		border-radius: 4px;
		height: 300px;
	}
	button{
		float: right;

	}
</style>
<script>
	 export default{
	 	data(){
	 		return {
	 			title:'',
	 			content:''	 			
	 		}
	 	},
	 	methods:{
	 		sendTopic:function(){
	 		 
	 			this.$store.dispatch('pubTopic',{
	 				title:this.title,
	 				content:this.content,
	 				time:new Date()
	 			});
	 			this.title='';
	 			this.content='';
	 			this.$router.push('/');
	 		}
	 	}
	 }
</script>