<template>
  <ul>
    <li>id:{{messageDetail.id}}</li>
    <li>title:{{messageDetail.title}}</li>
    <li>content:{{messageDetail.content}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'MessageDetail',
    data(){
      return{
        messageDetail:{}
      }
    },
    mounted () {
      setTimeout(()=>{
         const messageAllDetail = [
          {title: 'message01', id: 1,content:'message001 content....'},
          {title: 'message03', id: 3,content:'message003 content....'},
          {title: 'message05', id: 5,content:'message005 content....'},
          {title: 'message07', id: 7,content:'message007 content....'}
        ]
        this.messageAllDetail=messageAllDetail
        const id = this.$route.params.id*1
        this.messageDetail=messageAllDetail.find(detail=>detail.id===id)

      },1000)
    },
    watch:{
      $route:function(value) {
        const id = this.$route.params.id*1
        this.messageDetail=this.messageAllDetail.find(detail=>detail.id===id)
      }
    }
  }
</script>

<style scoped>

</style>
