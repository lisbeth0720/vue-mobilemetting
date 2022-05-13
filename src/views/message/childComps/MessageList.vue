<template>
  <div>
    <ul v-if="messages.length>0" id="messageList">
      <li v-for="item in messages" 
          :key="item"
          @click="clickItem(item.ID)">{{item.Title.split("@")[1]}}</li>
     </ul>
     <div v-else class="empty">
          <div>暂无</div>
      </div>
   </div>
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
  .empty{
  text-align: center;
  font-size:24px;
  margin-top:50px;
}
</style>
