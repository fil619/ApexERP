import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
window.Vue = require('vue');
require('./bootstrap');

import Indirect from './components/Indirect'
import Direct from './components/Direct'
import Viewexpense from './components/Viewexpense'
import ViewDexpense from './components/ViewDexpense'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/indirect',
            name: 'indirect',
            component: Indirect
        },
        {
            path: '/viewexpense',
            name: 'viewexpense',
            component: Viewexpense
        },
        {
            path: '/direct',
            name: 'direct',
            component: Direct
        },
        {
            path: '/viewdexpense',
            name: 'viewdexpense',
            component: ViewDexpense
        },
    ],
});

Vue.component('example', require('./components/Example.vue'));
 Vue.component('dashboard', require('./components/Dashboard.vue'));
Vue.component('posts', require('./components/Post.vue'));
Vue.component('indirect', require('./components/Indirect.vue'));
Vue.component('direct', require('./components/Direct.vue'));
Vue.component('viewexpense', require('./components/Viewexpense.vue'));
Vue.component('viewdirectexpense', require('./components/ViewDexpense.vue'));

const app = new Vue({
    el: '#app',
    router
});
