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
    path: "/internships",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Internships',
        meta: { title: "Internships - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Internships.vue"),
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
  },
  {
    path: "/projects/recycling_system",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Revenge of the Recycling System',
        meta: { title: "Revenge of the Recycling System - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Projects/Recycling_System.vue"),
      },
    ],
  },
  {
    path: "/projects/community",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Power In The Community',
        meta: { title: "Power In The Community - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Projects/Community.vue"),
      },
    ],
  },
  {
    path: "/projects/skybox",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Skybox',
        meta: { title: "Skybox - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Projects/Skybox.vue"),
      },
    ],
  },
  {
    path: "/projects/tub",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'TUB',
        meta: { title: "TUB - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Projects/TUB.vue"),
      },
    ],
  },
  {
    path: "/projects/hackathon_of_change",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Hackathon of Change',
        meta: { title: "Hackathon of Change - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Projects/Hackathon_Of_Change.vue"),
      },
    ],
  },
  {
    path: "/projects/mesh_generator",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Mesh Generator',
        meta: { title: "Mesh Generator - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Projects/Mesh_Generator.vue"),
      },
    ],
  },
  {
    path: "/projects/secure_chat",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Secure Chat Application',
        meta: { title: "Secure Chat Application - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Projects/Secure_Chat_Application.vue"),
      },
    ],
  },
  {
    path: "/internships/yrdsb",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'YRDSB',
        meta: { title: "YRDSB Internship - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Internships/YRDSB.vue"),
      },
    ],
  },
  {
    path: "/internships/wsib",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'WSIB',
        meta: { title: "Workplace Safety and Insurance Board Internship - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Internships/WSIB.vue"),
      },
    ],
  },
  {
    path: "/internships/ericson",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: '',
        name: 'Ericsson',
        meta: { title: "Ericsson Internship - Ahren Chen" },
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/Internships/Ericsson.vue"),
      },
    ],
  },
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
