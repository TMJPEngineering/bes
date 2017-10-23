import {$, jQuery} from 'jquery';
import popper from 'popper.js';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Moment from 'moment';
import Form from './core/Form';

window.$ = $;
window.jQuery = jQuery;
window.Popper = popper;

window.Vue = Vue;
Vue.use(VueRouter);

window.axios = axios;
window.Moment = Moment;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Form = Form;
