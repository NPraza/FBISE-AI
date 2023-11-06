import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
	{
		// will match everything
		path: '*',
		component: () => import('../views/404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		redirect: '/landing-page',
	},
	{
		path: '/landing-page',
		name: 'Landing Page',
		layout: "dashboard",
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/admin/app-landing-page/landing-page.vue'),
		meta: {
			layoutClass: "navbarFixed",
		},
	},
	{
		path: '/add-new-paper',
		name: 'Add New Paper',
		layout: "dashboard",
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/admin/add-paper-page/paper-page.vue'),
		meta: {
			layoutClass: "navbarFixed",
		},
	},
	{
		path: '/check-results',
		name: 'Check Results',
		layout: "dashboard",
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/admin/check-result-page/check-result.vue'),
		meta: {
			layoutClass: "navbarFixed",
		},
	},
	{
		path: '/question-list',
		name: 'Question List',
		layout: "dashboard",
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/admin/question-list-page/question-list.vue'),
		meta: {
			layoutClass: "navbarFixed",
		},
	},
	{
		path: '/user-data',
		name: 'User Data',
		layout: "dashboard",
		component: () => import(/* webpackChunkName: "dashboard" */ '../views/admin/user-data-page/user-data.vue'),
		meta: {
			layoutClass: "navbarFixed",
		},
	},
	// {
	// 	path: '/dashboard',
	// 	name: 'Dashboard',
	// 	layout: "dashboard",
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
	// },
	// {
	// 	path: '/layout',
	// 	name: 'Layout',
	// 	layout: "dashboard",
	// 	component: () => import('../views/Layout.vue'),
	// },
	// {
	// 	path: '/tables',
	// 	name: 'Tables',
	// 	layout: "dashboard",
	// 	component: () => import('../views/Tables.vue'),
	// },
	// {
	// 	path: '/billing',
	// 	name: 'Billing',
	// 	layout: "dashboard",
	// 	component: () => import('../views/Billing.vue'),
	// },
	// {
	// 	path: '/rtl',
	// 	name: 'RTL',
	// 	layout: "dashboard-rtl",
	// 	meta: {
	// 		layoutClass: 'dashboard-rtl',
	// 	},
	// 	component: () => import('../views/RTL.vue'),
	// },
	// {
	// 	path: '/Profile',
	// 	name: 'Profile',
	// 	layout: "dashboard",
	// 	meta: {
	// 		layoutClass: 'layout-profile',
	// 	},
	// 	component: () => import('../views/Profile.vue'),
	// },
	// {
	// 	path: '/sign-in',
	// 	name: 'Sign-In',
	// 	component: () => import('../views/Sign-In.vue'),
	// },
	// {
	// 	path: '/sign-up',
	// 	name: 'Sign-Up',
	// 	meta: {
	// 		layoutClass: 'layout-sign-up',
	// 	},
	// 	component: () => import('../views/Sign-Up.vue'),
	// },
]

// Adding layout property from each route to the meta
// object so it can be accessed later.
function addLayoutToRoute( route, parentLayout = "default" )
{
	route.meta = route.meta || {} ;
	route.meta.layout = route.layout || parentLayout ;
	
	if( route.children )
	{
		route.children = route.children.map( ( childRoute ) => addLayoutToRoute( childRoute, route.meta.layout ) ) ;
	}
	return route ;
}

routes = routes.map( ( route ) => addLayoutToRoute( route ) ) ;

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
		if ( to.hash ) {
			return {
				selector: to.hash,
				behavior: 'smooth',
			}
		}
		return {
			x: 0,
			y: 0,
			behavior: 'smooth',
		}
	}
})

export default router
