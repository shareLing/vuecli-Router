<template>
  <div id="app">
    <img src="./assets/logo.png">
     <!-- <router-link to="/">[显示字段]</router-link>
      to：是我们的导航路径，要填写的是你在router/index.js文件里配置的path值，如果要导航到默认首页，只需要写成  to=”/”  ，
      [显示字段] ：就是我们要显示给用户的导航名称，比如首页  新闻页。 -->
<p>导航 ：
      <router-link to="/">首页</router-link> | 
      <router-link to="/hi">Hi页面</router-link> |
      <!-- 二、通过<router-link> 标签中的to传参
        <router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>
         这里的to前边是带冒号的，然后后边跟的是一个对象形势的字符串.
         name：就是我们在路由配置文件中起的name值。
         params：就是我们要传的参数，它也是对象形势，在对象里可以传递多个值。
         最后在模板里(src/components/Hi1.vue)用$route.params.username进行接收. -->
      <router-link :to="{name:'hi1',params:{username:'jspang',id:'777'}}">-Hi页面1</router-link> |
      <router-link to="/hi/hi2">-Hi页面2</router-link>
</p>
<!-- 用$route.name的形势接手路由 -->
<P>{{$route.name}}</P>
   </router-view> 
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
