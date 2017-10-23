/* global Vue */

import './bootstrap';
import Routes from './routes';
import App from './components/App';

new Vue({
    el: '#app',
    render: h => h(App),
    Routes
});
