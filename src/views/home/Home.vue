<template>
  <div id="home">
      <nav-bar class="home-nav">
        <template v-slot:center><div>首页</div></template>
      </nav-bar> 
      <better-scroll class="content" 
                     ref="scroll" 
                     :probe-type="3" 
                     @scroll="contentScroll"
                     :pull-up-load="true"
                     @pulling-up="loadMore">
          <home-swiper :banners="banners" />
          <!-- <div @click="openScreen">
             
          </div> -->
          <div>222222</div>
          <div>222222</div>
          <div>222222</div>
          <div>222222</div>
          <div>222222</div>
          <button @click="nav=true">筛选</button>
          <room-list :rooms="rooms"></room-list>
          <ul>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
            <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
             <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
              <li>肖战啊啊啊啊啊啊啊啊啊啊1</li>
          </ul>
      </better-scroll>
      <back-top @click.native="backTop" v-show="isShowBackTop"/>
      <div class="m-navbar" v-if="nav" @click="nav=false"></div>
      <transition name="nav">
             <screen v-if="nav" class="m-navba"></screen>
      </transition>
  </div>
</template>

<script>
 //1.1公共组件或者常量
  import NavBar from 'components/common/navbar/NavBar.vue'
  import BetterScroll from 'components/common/scroll/BetterScroll.vue'
  import BackTop from 'components/content/backTop/BackTop.vue'
  import {BACK_POSITION} from 'common/const.js'

 //2.子组件
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RoomList from './childComps/RoomList.vue'
  import Screen from './childComps/Screen.vue'
  
  //3.一些方法
  import {getTocken,getMaxTicket,getHomeSwiper,getRoomList} from "network/home.js";
  //import {debounce} from "common/utils.js";
 //import {itemListenerMixin} from "common/mixin.js";

  //4.一些插件-下面的进行了封装
  //import emitter from "assets/utils/mitt.js"

  export default {
		name: "Home",
    components: {
		  NavBar,
      HomeSwiper,
      RoomList,
      BetterScroll,
      BackTop,
      Screen
    },
    data() {
		  return {
        Ticket:"",
        MaxTicket:"",
        banners: [],
        rooms:[],
        currentType: "pop",
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        nav:false
        
      }
    },
    computed: {
		  
    },
    activated(){
     
    },
    deactivated(){
     
    },
    created() {
      //得到短Token
      getTocken().then(res=>{
         if(res.code=="0"){
				   this.Ticket=res.data.Ticket;
				   this.MaxTicket=res.data.MaxTicket;
				   localStorage.setItem('Ticket',this.Ticket);
				   localStorage.setItem('MaxTicket',this.MaxTicket);
				   //localStorage.setItem('username',this.username);
			  }
      })
      //得到长Token
      getMaxTicket().then(res=>{
        if(res.code=="0"){
			   	return "0";
		   	}else if(res.code=="30007"){
			   	//window.location.href="../login.html";
		  	}else{
				  //window.location.href="../login.html";
		  	}
      })

     //得到首页轮播数据
      getHomeSwiper().then(res => {
          this.banners = res.data.data
      })
      //得到会议室列表
      getRoomList().then(res=>{
          console.log(res)
          this.rooms = res.data.data
      })
    },
    mounted(){
      
    },
    
    destroyed(){
       
    },
    methods: {
       contentScroll(position){
         //console.log(position)
         //1.判断BackTop是否显示
         this.isShowBackTop=(-position.y)>BACK_POSITION;

         //2.判断tabControl是否吸顶（position:fixed)
         //this.isTabFixed=(-position.y)>this.tabOffsetTop;
      },
      loadMore() {//下拉加载更多
		    
      },
      //判断是否回到顶部是否显示
      backTop(){
          this.$refs.scroll.scrollToTop(0,0);
      },
      //弹出筛选框
      openScreen(){

      }

    }
	}
</script>

<style scoped>
/* scoped作用域的意思 下面设置的样式只对本界面中的元素起作用*/
  #home {
    /*position: relative;*/
    height: 100vh;
  }

  /* .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  } */

  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    
  }

  .back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
  }
   
   .home-nav{
     background-color: var(--color-tint);
     font-weight: 700;
     color: #000;
     /*下面的代码是用浏览器原生滚动时防止顶部导航随着滚动而滚动设置的，现在用了better-scroll所以不用设置了 */
     /* position:fixed;
     top:0;
     left:0;
     z-index:9; */
   }

   .content {
     /* 上下两部分高度已定，计算中间部分的高度，两种方式，1.用calc属性；2，使用定位 top,bottom给个值,left,right=0*/
      /* position: absolute;
      top: 44px; 
      bottom: 49px;
      left: 0;
      right: 0; */
       /* margin-top:44px;  */
       /* calc(100%-93px)不加空格无效 */ 
       height:calc(100% - 93px); 
       overflow:hidden;
    }
   .tab-control{
     /* position:sticky;
     top:44px; */
     position:relative;
     z-index:9;
   }
   .v-enter,.v-leave-to{
     transform: translateX(100%)
   }

   .m-navbar{
    position: fixed;
    left:-3px;
    top:44px;
    bottom:49px;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity: 0.5;
    z-index:2;
    height:calc(100% - 93px); 
   }
/*存放弹框内容*/
.m-navba{
   position:absolute ;
   left: 100px;
   right:0;
   top: 0;
   bottom: 0;
   background-color: #fff;
   z-index:1000;
}
.nav-Leave{
   /*定义出场动画的起始状态*//*只停留一帧*/
   transform: translateX(0px);
}
.nav-leave-active {
   /*定义出场动画过程*/
   transition: all 0.8s ease;
}
.nav-leave-to{
   transform: translateX(600px)
}
.nav-enter{
   transform: translateX(600px)
}
.nav-enter-active {
/*定义入场动画过程*/
   transition: all 0.8s ease;
}
.nav-enter-to{
   transform: translateX(0px)
}
</style>
