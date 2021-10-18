import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	/*
	* Home page
	*/
	{
		path: '/',
		name: 'Home',
		component: () => { return import('@/views/Home.vue') }
	},

	/*
	* About page
	*/
	{
		path: '/about',
		name: 'About',
		component: () => { return import('@/views/About.vue') }
	},

	/*
	* Error page
	*/
	{
		path: '/error',
		name: 'Error',
		component: () => { return import('@/views/Error.vue') }
	},

	{ path: '*', redirect: '/error' },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.VUE_APP_BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

export default router
