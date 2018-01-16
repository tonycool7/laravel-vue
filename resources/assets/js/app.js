
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var Vue =require('vue');
Vue.use(require('vue-resource'));

import Customers from './components/customer/Customers.vue';
import Customerform from './components/customer/Customerform.vue';
// Vue.component('CustomerForm', require('./components/customer/CustomerForm.vue'));
// Vue.component('Customers', require('./components/customer/Customers.vue'));

const app = new Vue({
    el: '#app',
    components: { Customers, Customerform }
});
