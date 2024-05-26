// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        meta: { title: "Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: "/about",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'About',
        meta: { title: "About - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/About.vue"),
      },
    ],
  },
  {
    path: "/projects/wind_turbine",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Wind Turbine',
        meta: { title: "Wind Turbine - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Projects/Wind_Turbine.vue"),
      },
    ],
  },
  {
    path: "/projects/get_a_grip",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Get A Grip',
        meta: { title: "Get A Grip - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Projects/Get_A_Grip.vue"),
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {

		// Exists when Browser's back/forward pressed
		if (savedPosition) {
			return savedPosition

		// For anchors
		} else if (to.hash) {
			return { selector: to.hash }

		// By changing queries we are still in the same component, so "from.path" === "to.path" (new query changes just "to.fullPath", but not "to.path").
		} else if (from.path === to.path) {
			return {}
		}
		
		// Scroll to top
		return { x: 0, y: 0 }
	},
  routes,
})

export default router
