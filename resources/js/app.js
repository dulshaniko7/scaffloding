

require('./bootstrap');

window.Vue = require('vue');

import  Vue from 'vue'
import router from './router'
import MainApp from './MainApp'

const app = new Vue({
    el: '#app',
    router,
components: {
        MainApp
}
});
