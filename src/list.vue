<template>
	<div class="h-topiclist">
		<div class="h-item">
			<span class="h-title">标题</span>
			<span class="h-time">时间</span>
		</div>

			<div class="h-item" v-for="(item,index) in topics" v-on:click="showDetail(index)">
			<span class="h-title">{{item.title}}</span>
			<span class="h-time">{{item.time}}</span>
		</div>

	</div>
</template>
<style>
	.h-topiclist{
		width: 100%;

	}
	.h-topiclist .h-item{
		line-height: 30px;
		overflow: hidden;
		border-bottom: solid 1px #ccc;
	}
	.h-topiclist .h-item span{
		display: block;
		float: left;
	}
	.h-topiclist .h-item .h-title{
		color: green;
		width: 60%;
	}
	.h-topiclist .h-item .h-time{
		color: #000;
		width: 30%;
	}

</style>

<script>

export default{
	data(){
		return {
			topics:this.$store.state.topics
		}
	},
	methods:{
		showDetail:function(index){
			//this.$store.commit('ShowDetail',index);
			this.$router.push('detail/'+index);
		}
	} 
}
 
	
</script>