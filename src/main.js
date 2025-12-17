import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue';
// ...
import 'bulma/css/bulma.css';
// ...

createApp(App).use(router).mount('#app')

// this is for development mode. Remove in production
// Vue.config.productionTip = false;

// is this the same as above? createApp?
// new Vue({
//     router,
//     render: (h) => h(App),
// }).$mount('#app');