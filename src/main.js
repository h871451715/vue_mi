// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//导入ajax方法
import axios from 'axios'
//全局注册
Vue.prototype.$axios = axios
Vue.config.productionTip = false

//全局导入公共组件

import miHeader from '@/components/Header'
import miContent from '@/components/Content'
import miFooter from '@/components/Footer'

//全局注册公共组件

Vue.component('mi-header', miHeader)
Vue.component('mi-content', miContent)
Vue.component('mi-footer', miFooter)


//引入mint-ui组件
import { Cell , Navbar, TabItem ,Swipe,SwipeItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);





//注册mint-ui组件
Vue.component(Cell.name, Cell);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
