import Vue from 'vue'
import Buefy from 'buefy'

Vue.use(Buefy)
import App from './app'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
