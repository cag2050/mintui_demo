<template lang="pug">
#CellDemo
    mt-cell(title='标题文字'
        label='描述信息：路由to跳到首页'
        is-link
        to='/'
        icon='more'
        value='说明文字：带icon')
    mt-cell(title='标题文字'
        label='描述信息：href跳到百度网站'
        is-link
        href='http://www.baidu.com'
        icon='more'
        value='说明文字：带icon')
</template>

<script>
export default {
    name: '',
    data () {
        return {
        }
    },
    methods: {
    }
}
</script>

<style lang="stylus" type="text/stylus">

</style>
