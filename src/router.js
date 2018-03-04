import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/button',
            name: '',
            // 使用vue的[异步组件](https://cn.vuejs.org/v2/guide/components.html#异步组件)技术，可以实现按需加载
            // 但是，这种情况下一个组件生成一个js文件
            component: resolve => require(['./views/ButtonDemo'], resolve)
        },
        {
            path: '/datetimepicker',
            name: '',
            component: resolve => require(['./views/DatetimePickerDemo'], resolve)
        },
        {
            path: '/cell',
            name: '',
            component: resolve => require(['./views/CellDemo'], resolve)
        }
    ]
})
