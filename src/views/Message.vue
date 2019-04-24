<template>
  <div>
    <ul>
      <li v-for="(message,index) in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push查看</button>
        <button @click="replaceShow(message.id)">replace查看</button>
      </li>
      <button @click="$router.back()">回退</button>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data () {
      return {
        messages: []
      }
    },
    mounted () {
      //模拟ajax请求
      setTimeout(() => {
        const messages = [
          {title: 'message01', id: 1},
          {title: 'message03', id: 3},
          {title: 'message05', id: 5},
          {title: 'message07', id: 7}
        ]
        this.messages = messages
      }, 1000)
    },
    methods: {
      pushShow (id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow (id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    }
  }
</script>

<style scoped>
  .router-link-active {
    color: red !important;
  }
</style>
