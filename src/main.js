import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import vue_header from './header.vue'
import vue_list from './list.vue'
import vue_detail from './detail.vue'
import vue_post from './post.vue'

import store from './vuex/store'

Vue.use(VueRouter);
 
var router=new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	{path:'/',component:vue_list},
	{path:'/list',component:vue_list},
	{path:'/detail/:id',component:vue_detail},
	{path:'/post',component:vue_post}
	]
});//路由对象
 

new Vue({
	router,
	store
}).$mount("#app");
 