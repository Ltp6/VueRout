<template>
  <div>
    <h2>About</h2>
    <p>使用rount-view传递参数:{{tip}}</p>
    <p v-if="msg">{{msg}}</p>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        msg: 'abc'
      }
    },
    props:{
      tip:String
    }
  }
</script>

<style scoped>

</style>
