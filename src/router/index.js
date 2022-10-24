import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/indexPage.vue'

const routerArr = [
    {
        path: '/',
        redirect: 'test'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/test',
        component: () => import('@/views/test/indexPage.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routerArr
})

export default router