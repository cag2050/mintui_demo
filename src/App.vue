<template lang="pug">
#app
    div 路由列表：
    router-link(to='/') 首页 <br/>
    router-link(to='/button') button <br/>
    router-link(to='/datetimepicker') datetime-picker <br/>
    router-link(to='/cell') cell <br/>
    div === 以下是页面内容 ===
    router-view
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
