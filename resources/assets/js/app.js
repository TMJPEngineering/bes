/* global Vue */

import Router from './router';
import App from '@components';

new Vue({
    el: '#app',
    render: createEl => createEl(App),
    router: Router
});
