<template>
	<div id="wrap">
		<div class="content">
			<div class="card">
				<p id="selectUserTitle">
					<input id="searchUser" 
                            type="text" 
                            placeholder="输入姓名、手机号、或者部门名称">
					    <!-- <span class="icon icon-search" id="searchBtn"></span> -->
				</p>
				<ul id="userTree" ></ul>
                   
				<div id="selectContent" class="userCOntent" style="display: none;">
					<ul id="queryUl">

					</ul>
				</div>
			</div>
		</div>
		<div class="bottomBtn">
			<button type="button" class="commSubmitBtn" id="resetBtn">
				重置
			</button>
			<button type="button" class="commSubmitBtn activeBtn" id="submitBtn">
				确认
			</button>
		</div>
	</div>
</template>
<script>
</script>
<style scoped>
#wrap{
    position:absolute;
    height:calc(100% - 93px); 
    top:44px;
    bottom:49px;
    right:0;
}
.content{
    height: 100%;
}
.content>.card:first-child {
    margin-top: 15px;
}
.card {
    margin: 0;
}
.card {
    font-size: 14px;
    position: relative;
    overflow: hidden;
    margin: 10px;
    border-radius: 2px;
    background-color: #fff;
    background-clip: padding-box;
    /* box-shadow: 0 1px 2px rgb(0 0 0 / 30%); */
}
#selectUserTitle {
    background: #fff;
    padding: 10px;
    /* border-bottom: 1px solid #aaa; */
}
#searchUser {
    width: calc(100% - 30px);
    font-size: 10px;
    height:40px;
}
.icon {
    font-family: Muiicons;
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    display: inline-block;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
}

.bottomBtn {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: #f7f7f7;
}
.bottomBtn button {
    width: 50%;
    border: none;
    margin-left: 0;
    box-sizing: border-box;
    margin-right: 0px;
    float: left;
    height: 100%;
    border-radius: 0;
}
</style>
