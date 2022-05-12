<template>
	<div id="mineRooms">
		<nav-bar class="nav-bar">
			<template v-slot:left>
				<img slot="left" src="~/assets/img/common/back.svg" @click="back" />
			</template>
			<template v-slot:center>
				<div slot="center">常用会议室</div>
			</template>
		</nav-bar>
		<better-scroll class="content" 
                   ref="scroll" 
                   :probe-type="3" 
                   @scroll="contentScroll" 
                   :pull-up-load="true" 
                   @pulling-up="loadMore">
			
				<ul id="roomList">
					<li class="room-li" v-for="(item,index) in this.rooms.list"
              :key="index">
            <a href="#">
							<div class="roomLeft">
                <img :src="item.Picture" onerror="defaultPic(this)">
                <span>{{item.roomStatus}}</span>
              </div>
							<ul class="roomRight">
								<li>
                  <span class="roomName">{{item.roomName}}</span>
                  <span class="count">已使用{{item.Count}}次</span>
                </li>
								<li class="address">会议室地点:</li>
								<li>{{item.roomAddress}}</li>
							</ul>
						</a>
            </li>
        </ul>
			 <div class="desc">(只统计常用的前五个会议室)</div>
		</better-scroll>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue';
	import BetterScroll from 'components/common/scroll/BetterScroll.vue'
	import {defaultPic} from 'common/utils.js'
	import {getOftenroom} from "network/profile.js";

	export default {
		name: "MineOrder",
		components: {
			NavBar,
			BetterScroll,
		},
		data() {
			return {
				rooms: {
					num: 5,
					list: []
				},
			}
		},
		created() {
			this.getMineCommonRoom()
      console.log(this.rooms.list)
		},
		methods: {
			getMineCommonRoom() { //我的常用会议室
				let num = this.rooms.num;
				getOftenroom(num).then(res => {
					if (res.code == "0") {
						this.rooms.list.push(...res.data)
					} else if (res.code == "30001") { //无效token、无权限//跳转到登陆页
						this.$router.push("/login");
					} else if (res.code == "30006") { //授权到期，重新得到MaxToken
						//this.homeGetMaxTicket(this.MaxTicket)
						this.$router.push("/login");
					} else {
						//alert(data.message);
					}
				})
			},
			//返回上一级
			back() {
				this.$router.push("/profile");
			}
		}
	}
</script>

<style scoped>
	#mineRooms {
		background-color: #efeff4;
    height:100vh;
	}

	.nav-bar {
		background-color: var(--color-tint);
		font-weight: 700;
		color: #000;
		position: relative;
	}

	.nav-bar img {
		height: 18px;
		position: absolute;
		top: 50%;
		left: 4%;
		transform: translate(0, -50%)
	}

	.content {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
	}

	#roomList {
		width: 100%;
    position:relative;
	}
  
  .room-li {
    position: relative;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    background-color: #fff;
}
.room-li:before {
    position: absolute;
    right: 0;
    left: 0;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
    top: -1px;
}

.room-li a {
    display: block;
    height: 120px;
}
.roomLeft {
    width: 80px;
    height: 90px;
    /* float: left; */
    position: absolute;
    left: 15px;
    top: 15px;
}
.room-li img {
    height: 90px;
    width: 80px;
}
.roomLeft span {
    position: absolute;
    bottom: 0;
    width: 80px;
    left: 0;
    text-align: center;
    background: #1376c5;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
}
.roomRight {
    position: absolute;
    left: 105px;
    top: 15px;
    overflow: hidden;
}
.roomName {
    font-size: 18px;
    color: rgb(62, 58, 57);
    font-weight: 600;
}
.count {
    font-size: 12px;
    margin-left: 12px;
    color: #999;
}
.address {
    font-size: 14px;
    margin: 4px 0;
    color: #666;
}
.room-li:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
}
.desc {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: #666;
}
</style>
