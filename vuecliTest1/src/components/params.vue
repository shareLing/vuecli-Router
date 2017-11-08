
<template>
    <div>
        <h2>{{ msg }}</h2> 
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>
</template>
 
<script>
export default {
  name: 'params',
  data () {
    return {
      msg: 'Params page.'
    }
  }//,
  //写在模板中的钩子函数
  //进入路由之前
  // beforeRouteEnter: (to, from, next) => {
  //   console.log('准备进入路由模板');
  //   next();
  // },
  // //离开路由之前
  // beforeRouteLeave: (to, from, next) => {
  //   console.log('准备离开路由模板');
  //   next();
  // }
}
</script>