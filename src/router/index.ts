import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

export type Routes = 'home' | 'about';

export const baseRoutes: Record<
    Routes,
    {
        path: RouteRecordRaw["path"],
        component: RouteRecordRaw["component"],
        humanName: string
    }
> = {
    home: {
        path: '/',
        component: HomeView,
        humanName: 'Home'
    },
    about: {
        path: '/about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/OverView.vue'),
        humanName: 'Overview'
    }
}


const routes: RouteRecordRaw[] = Object.entries(baseRoutes)
    .map(([name, value]) => {
        return {
            ...value,
            name
        }
    });

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
