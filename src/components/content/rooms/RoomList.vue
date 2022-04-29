<template>
    <div class="roomList">
        <room-list-item v-for="item in rooms" 
                        :key='item'
                        :room-item="item"/>
    </div>
</template>

<script>
import RoomListItem from "./RoomListItem.vue"

export default {
  name: 'RoomList',
  components: {
      RoomListItem
  },
  props:{
     rooms:{
         type:Array,
         default(){
           return []
         }
     }
  }
}
</script>

<style>
   .roomList{
       width:100%;
       border-bottom: 8px solid #eee;
       background-color: #fff;
       /* display: flex;
       flex-wrap:wrap;
       justify-content: space-around;
       padding:2px; */
   }
</style>
