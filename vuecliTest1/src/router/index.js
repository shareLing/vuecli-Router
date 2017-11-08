import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  //路由模式 mode的两个值
  //history:当你使用 history 模式时，URL 就像正常的 url，例如 http://jsapng.com/lms/，也好看！
 // hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。
  mode:'history',
  routes: [
    {//alias别名请不要用在path为’/’中,使用不起任何作用
      path: '/',
      name: 'Hello',
      ////单页面多路由区域操作
      // components:{
      //   default: HelloWorld,
      //   left:Hi2,
      //   right:Hi1
      // }
      component:HelloWorld
    },
    {
      //冒号进行绑定，路由利用url传参
      // 传递的新闻ID只能是数字的形式，这时候我们就需要在传递时有个基本的类型判断，vue是支持正则的,加入正则需要在路由配置文件里（/src/router/index.js）以圆括号的形式加入,path:'/params/:newsId(\\d+)/:newsTitle',。	
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
     // 路由配置文件中的钩子函数,但是在路由文件中我们只能写一个beforeEnter,就是在进入此路由配置时。
      beforeEnter:(to,from,next)=>{//在进入此路由配置前。采用了ES6的箭头函数，需要传递三个参数。
        console.log(to);            //to:路由将要跳转的路径信息，信息是包含在对像里边的。
        console.log(from);          //from:路径跳转前的路径信息，也是一个对象的形式。
        next();                     //next:路由的控制参数，常用的有next(true)和next(false)。--就是是否允许跳转
        //next({path:'/'});         //允许跳转到根目录
      }
    },
    {//路由的重定向redirect
      path:'/goHome',
      redirect:'/'
    },
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      //重定向时传递参数,只需要在ridirect后边的参数里复制重定向路径的path参数就可以
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path:'/Hi1',
      component:Hi1,
      //alias别名的使用
      alias:'/jspang'
    },
    {//404页面的处理
      path:'*',//表示404
      component:Error
    }
    
    

  

  ]
})
