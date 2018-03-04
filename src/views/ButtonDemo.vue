<template lang="pug">
#buttonDemo
    mt-button(type='default' @click.native='handleClick') Default
    mt-button(type='primary') primary
    mt-button(type='danger') danger
</template>

<script>
export default {
    name: '',
    data () {
        return {
        }
    },
    methods: {
        handleClick () {
            console.log('button clicked')
            alert('button clicked')
        }
    }
}
</script>

<style lang="stylus" type="text/stylus">

</style>
