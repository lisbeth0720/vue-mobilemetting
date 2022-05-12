<template>
  <ul id="messageList">
    <li v-for="item in messages" 
        :key="item"
        @click="clickItem(item.ID)">{{item.Title.split("@")[1]}}</li>
  </ul>
</template>

<script>
export default {
	name: "MessageList",
    props:{
       messages:{
           type:Array,
           default(){
               return []
           }
       }
    },
    computed: {
     
    }, 
    methods: {
      clickItem(id){
         this.$router.push("/message/"+id); 
      }
    }
}
</script>

<style scoped>
  #messageList {
    position: relative;
    height: 100vh;
    background-color:#eee;
  }
  #messageList li{
      margin-top:10px;
      background-color:#fff;
      padding:4px 6px;
  }
</style>
