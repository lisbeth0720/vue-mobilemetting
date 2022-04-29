<template>
	<ul id="meetingInfo">
		<li class="mt-li">
			<div class="mt-row">
				<label>会议主题</label>
				<input type="text" 
                       id="Title" 
                       placeholder="*会议主题必填" 
                       data-input-clear="3">
				<span></span>
				<b>*</b>
			</div>
		</li>
		<li>
			<div class="mt-row">
				<label>申请部门</label>
				<input type="text" 
                      id="deptname" 
                      readonly="readonly" 
                      value="研发部">
			</div>
		</li>
		<li>
			<div class="mt-row">
				<label>预约人</label>
				<input type="text" 
                       readonly="readonly" 
                       id="username" 
                       value="administrator">
				<p id="mineMeeting">
					<input name="notJoin" 
                           type="checkbox" 
                           id="notJoin" 
                           onchange="changeJoin()" 
                           value="true" 
                           checked="CHECKED">
                    我要参会</p>
			</div>
		</li>
		<li>
			<div class="mt-row">
				<label>联系人</label>
				<input type="text" 
                       id="Linkman" 
                       class="input-clear" 
                       placeholder="*联系人为必填" 
                       data-input-clear="7">
				<span class="icon icon-clear hidden"></span>
				<b>*</b>
			</div>
		</li>
		<li>
			<div class="mt-row">
				<label>联系方式</label>
				<input type="text" 
                       id="LinkPhone" 
                      class="input-clear" 
                      placeholder="*联系方式为必填" 
                      data-input-clear="8">
				<span class="icon icon-clear hidden"></span>
				<b>*</b>
			</div>
		</li>
		<li>
			<div class="mt-row">
				<span class="selectTimeSpan">开始时间</span>
				<span id="time1" class="selectBtn" align="right" data-options="{}">
                    2022-04-30 08:00
                </span>
			</div>
		</li>
		<li>
			<div class="mt-row">
				<span class="selectTimeSpan">结束时间</span>
				<span id="time2" class="selectBtn" align="right" data-options="{}">
                    2022-04-30 12:00
                </span>
			</div>
		</li>
		<li>
			<div class="mt-content">
				<div class="mt-checkbox mt-left">
					<label>上午</label>
					<input checked="" 
                           name="checkbox" 
                           value="Item1" 
                           type="checkbox" 
                           id="selectMorning">
				</div>
				<div class="mt-checkbox mt-left">
					<label>下午</label>
					<input name="checkbox" 
                           value="Item2" 
                           type="checkbox" 
                           id="selectAftorn">
				</div>
			</div>
		</li>
		<li>
			<div class="mt-row">
				<label>参会人</label>
				<input type="button" 
                       class="orderMeetingCommon" 
                       id="selectMeetingMember" 
                       value="请选择参会人员" 
                       placeholder="请选择参会人">
				<span>(<i id="selectCount">1</i>)</span>
			</div>
		</li>
		<li>
			<div class="mt-row">
				<label>主持人</label>
				<input id="showUserPicker" class="btn btn-block input-clear" type="text" placeholder="请选择主持人" readonly="readonly"
				 data-input-clear="10"><span class="icon icon-clear hidden"></span>
			</div>
		</li>
		<li>
			<div class="mt-row">
				<label>联系方式</label>
				<input id="hostPhone" type="text" class="input-clear" placeholder=" " data-input-clear="11"><span class="icon icon-clear hidden"></span>
			</div>
		</li>
		<li>
			<div class="mt-row">
				<label>设备</label>
				<a href="#middlePopover">
					<input type="button" class="orderMeetingCommon" id="selectMeetingDevice" value="请选择设备" placeholder="请选择设备">
				</a>
			</div>
		</li>
		<li style="height:100px;border:none;">
			<div class="mt-row">
				<label>其他需求</label>
				<textarea id="specialText" 
                          type="text" class="input-clear" 
                          placeholder="定制化服务填写" ></textarea>
			</div>
		</li>
	</ul>
</template>
<script>
	export default {
		name: 'MeetingDetail',
		data() {
			return {
				isLoad: false
			}
		},
		components: {

		},
		methods: {

		}
	}
</script>

<style scoped>
	#meetingInfo {
		background: #fff;
	}

	#meetingInfo li {
		border-bottom: 1px solid #c8c7cc;
		height: 44px;
		line-height: 44px;
	}

	.mt-row {
		position: relative;
	}

    .mt-row label {
        padding: 11px 10px;
        width: 27%;
         font-family: 'Helvetica Neue',Helvetica,sans-serif;
         line-height: 1.1;
         float: left;
   }
	#meetingInfo li input[type="text"]{
		font-size: 14px;
        height: 40px;
        padding: 10px 15px;
        border-radius: 3px;
        outline: 0;
        /* -webkit-user-select: text; */
        -webkit-appearance: none;
        margin-bottom: 0;
         padding-left: 0;
         border: 0;
         box-sizing: border-box
	}
    .mt-row #mineMeeting {
       color: #ababab;
       width: 35%;
       position:absolute;
       right:0;
       top:0;
   }
	.mt-row .input-clear~.icon-clear,
	.mt-row .input-password~.icon-eye,
	.mt-row .input-speech~.icon-speech {
		font-size: 20px;
		position: absolute;
		z-index: 1;
		top: 10px;
		right: 0;
		width: 38px;
		height: 38px;
		text-align: center;
		color: #999;
	}

	#meetingInfo b {
		color: red;
		font-size: 20px;
		float: right;
		margin-right: 10px;
	}
    .selectTimeSpan {
    width: 27%;
    display: block;
    float: left;
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    line-height: 1;
    float: left;
    width: 35%;
    padding: 0 15px;
    line-height: 40px;
}
.selectBtn {
    float: right;
    margin-right: 10px;
    width: 78%;
    display: block;
    float: left;
    font-family: 'Helvetica Neue',Helvetica,sans-serif;
    line-height: 1.1;
    float: left;
    width: 60%;
    /* padding: 11px 15px; */
    line-height: 40px;
}

.mt-checkbox, .mt-radio {
    width: 50%;
    float: left;
}
.mt-checkbox.mt-left label, .mt-radio.mt-left label {
    padding-right: 15px;
    padding-left: 58px;
}
.mt-checkbox.mt-left input[type=checkbox], .mt-radio.mt-left input[type=radio] {
    left: 20px;
}
#selectMeetingMember {
    color: #fff;
    background: #0075ff;
    margin-top: 5px;
    height: 30px;
    box-sizing: border-box;
    width: 100px;
    margin-right: 20px;
}
#selectMeetingDevice {
    color: #fff;
    background: #0075ff;
    margin-top: 5px;
    height: 30px;
    box-sizing: border-box;
    width: 100px;
    margin-right: 20px;
}
.mt-row textarea{
    width:100%;
    font-size:14px;
    padding: 10px;
    box-sizing: border-box;
    border:0;
}
</style>
