import Vue              from 'vue'
import Router           from 'vue-router'
import ElementUI        from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import locale           from 'element-ui/lib/locale/lang/es'


import 'element-theme-default'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'swiper/dist/css/swiper.css'


import App              from './App.vue'
import Home             from '@/components/Home'
import Flaco            from '@/components/Nosotros_Flaco'
import Irema            from '@/components/Nosotros_Irema'
import Justy            from '@/components/Nosotros_Justy'
import Nahuel           from '@/components/Nosotros_Nahuel'
import Nigga            from '@/components/Nosotros_Nigga'
import Oso              from '@/components/Nosotros_Oso'


Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueAwesomeSwiper, /* { default global options } */)
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
        {   path: '/justy',         name: 'justy',          component: Justy,
        },
        {   path: '/nahuel',        name: 'nahuel',         component: Nahuel,
        },
        {   path: '/nigga',         name: 'nigga',          component: Nigga,
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