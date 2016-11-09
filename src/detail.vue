<template>
	<div class="h-detail">
		<h4>帖子详情</h4>
		<p class="title">{{title}}</p>
		<p class="content">{{content}}</p>
		<p class="return" @click="back">返回</p>
	</div>
</template>
<style>
	.h-detail{
		width: 100%;
		overflow: hidden;

	}
	.h-detail p{
		margin-bottom: 10px;
		line-height: 23px;
		color: #ccc;
		font-size: 14px;
	}

	.h-detail .return{
		float: right;
		color: blue;
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
		created(){
			console.log('created');
			this.showDetail();
		},
		watch:{
			'$route':'showDetail'
		},
		methods:{
			showDetail(){
				var obj = this.$store.state.topics[this.$route.params.id];
				if(!obj){
					this.$router.push('/');
					return;
				}
				this.title=obj.title;
				this.content=obj.content;
			},
			back:function(){
				this.$router.push('/');
			}
		}
	}
</script>