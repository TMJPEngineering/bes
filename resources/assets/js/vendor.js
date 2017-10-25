import 'jquery';
import 'popper.js';
import 'bootstrap';
import Vue from 'vue';
import axios from 'axios';
import Moment from 'moment';
import Form from './core/Form';
import Lodash from 'lodash';

window.Vue = Vue;
window.axios = axios;
window.Moment = Moment;
window._ = Lodash;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.Form = Form;
