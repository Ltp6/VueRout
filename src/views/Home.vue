<template>
  <div>
    <h2>Home</h2>
    <div>
      <ul class="nav nav-tabs">
        <!--<li><a href="#/home/news" class="router-link-exact-active router-link-active">News</a></li>
        <li><a href="#/home/message" class="">Message</a></li>-->
        <li>
          <router-link to="/home/news">News</router-link>
        </li>
        <li>
          <router-link to="/home/message">Message</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  .router-link-active {
    color: red !important;
  }
</style>
