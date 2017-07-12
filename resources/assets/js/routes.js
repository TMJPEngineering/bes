import VueRouter from 'vue-router'
import Home from '~/modules/Welcome/Client/Components/Home'
import About from '~/modules/Welcome/Client/Components/About'
import Contact from '~/modules/Welcome/Client/Components/Contact'

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    }
]

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
})
