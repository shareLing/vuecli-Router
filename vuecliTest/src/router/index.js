
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import HelloWorld from '@/components/HelloWorld'  //引入根目录下的Hello.vue组件
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1' 
import Hi2 from '@/components/Hi2' 
 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径,这个表示根目录
      name: 'Hello',     //路由名称，可以不写
      component: HelloWorld  //对应的组件模板
    },
    {
      path:'/hi',//也可以写成 path:'/Hi',大小写都可以（和对应组件名相同，但大小写不限）
      name:'Hi',
      component:Hi,
      children:[
        {path:'hi1',name:'hi1',component:Hi1},
        {path:'hi2',name:'hi2',component:Hi2},
      ]
    }
  ]
})