
<template>
    <div>
        <h2>{{ msg }}</h2> 
        <p style="color:red"> 此页面不存在！</p>      
    </div>
</template>
 
<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'Error:404'
    }
  }
}
</script>