import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import Login from '@/models/users/Login'
import Register from '@/models/users/Register'
import Home from '@/models/Home'
import Cate from '@/models/Cate'
import Detail from '@/models/Detail'


export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/user/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/user/register',
			name: 'Register',
			component: Register
		},
		{
			path: '/cate',
			name: 'Cate',
			component: Cate
		},
    {
      path:'/detail',
      name:'detail',
      component:Detail,
    }
	]
})
