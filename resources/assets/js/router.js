/* global Vue */

import VueRouter from 'vue-router';
import Home from '@components/home';
Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        component: Home,
        name: 'home',
    },
];

export default new VueRouter({
    routes,
    mode: 'history'
    // linkActiveClass: 'is-active'
});
