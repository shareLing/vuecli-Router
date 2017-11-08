<template>
  <div id="app">
    <img src="./assets/logo.png"><br>
    <div>    
      <!-- 第11节：编程式导航 	 -->
      <button @click="goback">后退</button>     	
      <button @click="goIn">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link>|
    <router-link to="/params/198/jspang website is very good">Params</router-link> |
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/goParams/183/I like vue.js">goParams</router-link>|
    <router-link to="/Hi1">Hi1</router-link>|   	
    <router-link to="/jspang">jspang</router-link>
<!-- 过渡模式mode：
in-out:新元素先进入过渡，完成之后当前元素过渡离开。
out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。

transition的name属性是必须的：
组件过渡过程中，会有四个CSS类名进行切换，这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：
1、fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
2、fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
3、fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
4、fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
 -->
    <transition name="fade" mode="in-out">
      <router-view ></router-view>
    </transition>
   
    <!-- 单页面多路由区域操作时打开 -->
    <!-- <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view> -->

  </div>
</template>

<script>
export default {
  name: 'app',
 methods:{
    goback(){
      this.$router.go(-1);
    },
    goIn(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
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

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity 0.5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity 0.5s;
}
</style>
