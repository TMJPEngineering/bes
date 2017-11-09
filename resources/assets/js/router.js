/* global Vue */

import VueRouter from 'vue-router';
import Home from '@components/home';
import Login from '@components/login';

Vue.use(VueRouter);

const routes = [
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
];

export default new VueRouter({
    routes,
    mode: 'history'
    // linkActiveClass: 'is-active'
});
