import Vue from 'vue';
import './plugins/bootstrap-vue';

import './plugins/utils';
import './plugins/vue-scrollto';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

export function createApp () {
    const app = new Vue({
        router,
        render: h => h(App)
    });
    return { app };
}