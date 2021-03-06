import Vue from 'vue'
import VueRouter from 'vue-router'

import Green from '../views/lamp/v-lamp-green.vue'
import Red from '../views/lamp/v-lamp-red.vue'
import Yellow from '../views/lamp/v-lamp-yellow.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/green',
		name: 'green',
		component: Green
	},
	{
		path: '/red',
		name: 'red',
		component: Red
	},
	{
		path: '/yellow',
		name: 'yellow',
		component: Yellow
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router