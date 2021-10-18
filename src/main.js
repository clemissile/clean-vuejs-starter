import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueMq from 'vue-mq'

import './assets/scss/app.scss'

Vue.config.productionTip = false

Vue.use(VueMq, {
	breakpoints: {
		mobile: 576,
		tablet: 1025,
		desktop: Infinity,
	}
})

new Vue({
	router,
	store,
	render: (h) => { return h(App) }
}).$mount('#app')
