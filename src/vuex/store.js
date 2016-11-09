import Vue from  'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
	state:{

		topics:[{title:'1111',time:'2019-10-10'},{title:'祝你吃成猪',time:'2019-10-10'}],
		sendObj:{},
		detailObj:{}

	},
	mutations:{
		PubTopic:function(state,obj){ 

			const topic={
				title:obj.title,
				content:obj.content,
				time:obj.time
			}

			state.topics.push(topic);


		}
	},
	actions:{
		pubTopic:function(context,obj){
			context.commit('PubTopic',obj);
		}
	}

});