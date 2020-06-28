import Vue from 'vue'
import Router from "vue-router"

import AdminHome from './components/pages/admin-home'
import Dashboard from './components/dashboard'
Vue.use(Router);

const routes = [
    {
        path: '/',
        component: AdminHome,
        name: 'admin'
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard'
    }
];

export default new Router({
    mode: 'history',
    routes
})
