import Vue              from 'vue'
import Router           from 'vue-router'
import ElementUI        from 'element-ui'
import locale           from 'element-ui/lib/locale/lang/es'
import VueCookies       from 'vue-cookies'
import CanvasVideo      from 'vue-canvasvideo'


import 'element-theme-default'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'vue-canvasvideo/dist/vuecanvasvideo.min.css'


import App              from './App.vue'
import Home             from '@/components/Home'
import Flaco            from '@/components/Nosotros_Flaco'
import Irema            from '@/components/Nosotros_Irema'
import Oso              from '@/components/Nosotros_Oso'


Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueCookies)
Vue.use(CanvasVideo)
Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [
        {   path: '/',              name: 'home',           component: Home,
        },
        {   path: '/flaco',         name: 'flaco',          component: Flaco,
        },
        {   path: '/irema',         name: 'irema',          component: Irema,
        },
        {   path: '/oso',           name: 'oso',            component: Oso,
        },
        {   path: '',               redirect: '/',
        },
        {   path: '*',              redirect: '/',
        }
    ]
})


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')