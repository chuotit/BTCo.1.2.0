// ==UserScript==
// @name         ProBET
// @namespace    Hotline: 0989.468.567 - 0961.179.678
// @version      1.2.0
// @description  ProBET tools developed by https://www.facebook.com/groups/142471483081439/
// @require      https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js
// @author       Coin Free
// @match        https://freebitco.in/*
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

var _0xad27=["\x6E\x67\x2D\x63\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72","\x58\x31\x30\x43\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72","\x61\x74\x74\x72","\x6E\x67\x2D\x61\x70\x70","\x62\x65\x74\x41\x70\x70","\x62\x6F\x64\x79","\x6E\x67\x2D\x6D\x6F\x64\x65\x6C","\x62\x74\x63\x46\x6F\x72\x42\x65\x74","\x23\x64\x6F\x75\x62\x6C\x65\x5F\x79\x6F\x75\x72\x5F\x62\x74\x63\x5F\x73\x74\x61\x6B\x65","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x62\x61\x63\x6B\x2D\x64\x72\x6F\x70\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x61\x70\x70\x65\x6E\x64","\x23\x64\x6F\x75\x62\x6C\x65\x5F\x79\x6F\x75\x72\x5F\x62\x74\x63\x5F\x6D\x61\x69\x6E\x5F\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x70\x61\x79\x6F\x75\x74","\x23\x64\x6F\x75\x62\x6C\x65\x5F\x79\x6F\x75\x72\x5F\x62\x74\x63\x5F\x70\x61\x79\x6F\x75\x74\x5F\x6D\x75\x6C\x74\x69\x70\x6C\x69\x65\x72"];$(_0xad27[5])[_0xad27[2]](_0xad27[3],_0xad27[4])[_0xad27[2]](_0xad27[0],_0xad27[1]);$(_0xad27[8])[_0xad27[2]](_0xad27[6],_0xad27[7]);$(_0xad27[11])[_0xad27[10]](_0xad27[9]);$(_0xad27[13])[_0xad27[2]](_0xad27[6],_0xad27[12])
var _0x116c=["\x61\x70\x70\x65\x6E\x64","\x23\x6D\x61\x69\x6E\x5F\x63\x6F\x6E\x74\x65\x6E\x74"];$(_0x116c[1])[_0x116c[0]](`
	<div class="pro-bet">
		<div class="setting-content">
			<div class="left-content">
				<div class="row">
					<div class="large-8 small-8 columns">
						<div class="row">
							<div class="large-5 small-5 columns">
								<fieldset>
									<legend>Cài đặt:</legend>
									<div class="row">
										<div class="large-7 small-7 columns">
											<div class="group">
												<label class="title">Cược ban đầu</label>
												<select ng-options="type.value as type.value for type in btcBases" ng-model="btcBase" ng-disabled="onBetting" ng-change="changeSetting()"></select>
											</div>
										</div>
										<div class="large-5 small-5 columns">
											<div class="group">
												<label class="title">Payout</label>
												<select ng-options="type.value as type.value for type in payouts" ng-model="payout" ng-disabled="onBetting" ng-change="changeSetting()"></select>
											</div>
										</div>
									</div>
								</fieldset>
							</div>
							<div class="large-7 small-7 columns">
								<fieldset style="min-height: 65px;">
									<legend>Tùy chọn:</legend>
									<div class="group">
										<label class="title">Kiểu BET</label>
										<ul class="modes-list ul-list">
											<li ng-repeat="item in betModes">
												<label>
													<input type="radio" name="betModeOption" ng-model="$parent.betMode" ng-value="item.value">{{item.name}}</label>
											</li>
										</ul>
									</div>
								</fieldset>
							</div>
						</div>
						<div class="row">
							<div class="large-9 small-9 columns">
								<fieldset>
									<legend>Tùy chọn rà chuỗi và cược:</legend>
									<div class="row">
										<div class="large-4 small-4 columns">
											<div class="group">
												<label class="title">Chuỗi rà trước</label>
												<select style="max-width: 50px; display: inline;" ng-options="type.value as type.value for type in betProbes" ng-model="betProbe" ng-disabled="onBetting" ng-change="changeSetting()"></select>
											</div>
										</div>
										<div class="large-4 small-4 columns">
											<div class="group">
												<label class="title">Cược sau rà</label>
												<select ng-options="type.value as type.value for type in btcPlusList" ng-model="btcPlus" ng-disabled="onBetting" ng-change="changeSetting()"></select>
											</div>
										</div>
										<div class="large-4 small-4 columns">
											<div class="group">
												<label class="title">Tăng % lên</label>
												<select style="max-width: 50px; display: inline;" ng-options="type.value as type.value for type in percentIncreases" ng-model="percentIncrease"
												 ng-disabled="onBetting" ng-change="changeSetting()"></select>
												<span>%</span>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="large-4 small-4 columns">
											<div class="group">
												<label class="title">Tăng % sau khi</label>
												<span>thua</span>
												<select style="max-width: 40px; display: inline;" ng-options="type.value as type.value for type in increaseWhenLosts" ng-model="increaseWhenLost"
												 ng-disabled="onBetting" ng-change="changeSetting()"></select>
												<span>lần</span>
											</div>
										</div>
										<div class="large-4 small-4 columns">
											<div class="group">
												<label class="title">Chuỗi rà sau</label>
												<select style="max-width: 90px; display: inline;" ng-options="type.value as type.value for type in betProbesAfter" ng-model="betProbeAfter"
												 ng-disabled="onBetting" ng-change="changeSetting()">
													<option value="">Không set</option>
												</select>
											</div>
										</div>
										<div class="large-4 small-4 columns">
											<div class="group">
												<label class="title">Thua an toàn</label>
												<select style="max-width: 100px; display: inline;" ng-options="type.value as type.value for type in btcLostList" ng-model="loseProbeAfter"
												 ng-disabled="onBetting || !betProbeAfter" ng-change="changeSetting()"></select>
											</div>
										</div>
									</div>
								</fieldset>
							</div>
							<div class="large-3 small-3 columns">
								<fieldset style="min-height: 104px;">
									<legend>Tạm dừng</legend>
									<div class="group">
										<label class="title">Sau khi ăn</label>
										<input type="checkbox" name="pauseOnWin" ng-model="pauseOnWin" /> <span>Dừng</span>
									</div>
									<!-- <div class="group">
										<label class="title">Hoặc Bet hơn</label>
										<select style="display: inline-block; width: 47px;" ng-options="type.value as type.name for type in increaseBets" ng-model="pauseOnLoss"></select>
										<span>lần</span>
									</div> -->
								</fieldset>
							</div>
						</div>
						<div class="row">
							<div class="large-12 small-12 columns">
								<fieldset style="min-height: 50px;">
									<legend>Tốc độ BET</legend>
									<ul class="speed-list ul-list">
										<li ng-repeat="item in betSpeeds">
											<label>
												<input type="radio" name="betSpeedOption" ng-model="$parent.betSpeed" ng-value="item.value" ng-disabled="betSpeedAuto" />{{item.name}}</label>
										</li>
										<li>
											<label>
												<input type="checkbox" ng-model="betSpeedAuto" />Auto</label>
										</li>
									</ul>
									<div class="clear"></div>
								</fieldset>
							</div>
						</div>
						<div class="tools-info">
							<div class="marquee-area">
								<marquee onMouseOver="this.stop()" onMouseOut="this.start()">Bản <span class="tool-name">ProBET</span> này được phát triển bởi nhóm <a target="_blank" href="https://www.facebook.com/groups/142471483081439/" class="author">Coin Free</a></span> - Mọi thắc mắc hoặc cần hỗ trợ, các bạn vui lòng liên hệ theo HOTLINE ở dưới - Chúc các bạn chơi vui vẻ!</marquee>
							</div>
							<label class="hot-line">HOTLINE: 0989.468.567 - 0961.179.678</label>
							<label class="version">Phiên bản: 1.2.0</label>
						</div>
					</div>
					<div class="large-4 small-4 columns">
						<fieldset>
							<legend>Thống kê:</legend>
							<div class="row">
								<div class="large-6 small-6 columns">
									<div class="group">
										<label class="title">Trước:</label>
										<div class="btc-display red-color">{{btcBefore}}</div>
									</div>
								</div>
								<div class="large-6 small-6 columns">
									<div class="group">
										<label class="title">Sau:</label>
										<div id="btcAfter" class="btc-display green-color">{{btcAfter}}</div>
									</div>
								</div>
								<div class="large-6 small-6 columns">
									<div class="group">
										<label class="title">Lợi nhuận:</label>
										<div class="btc-display {{btcIncrement >= 0?'green-color':'red-color'}}">{{btcIncrement}}</div>
									</div>
								</div>
								<div class="large-6 small-6 columns">
									<div class="group">
										<label class="title">Số lần Bet:</label>
										<div class="btc-display red-color">{{betCount}}</div>
									</div>
								</div>
							</div>
						</fieldset>
						<fieldset style="min-height: 185px;">
							<legend>Phân tích</legend>
							<div class="group">
								<label class="title">Bạn có <span class="red-color">{{onBetList.length}}</span> lần cược:</label>
								<span>
									Mức cược lớn nhất: <span class="green-color">{{currentMaxBet.btcBet}}</span>
								</span>
							</div>
							<div class="group">
								<label class="title">Cược lớn nhất hiện tại:</label>
								<span>
									<span class="red-color">{{onBtcMaxBet}}</span> (
									<span class="red-color">{{onMaxBet}}</span> lần cược)</span>
							</div>
							<!-- <div class="group">
								<label style="display: inline-block;" class="title">Cược lại sau:</label>
								<span>Cược lớn hơn {{btcLimitBet}} ({{btcLimitPercent}}% vốn)</span>
							</div>
							<div class="group">
								<label style="display: inline-block;" class="title">Cược lại sau:</label>
								<span>Cược lớn hơn {{btcLimitBet}} ({{btcLimitPercent}}% vốn)</span>
							</div> -->
						</fieldset>
					</div>
				</div>
			</div>
			<div class="right-content">
				<ul class="timeline-list">
					<li ng-if="onBetList" ng-repeat="item in onBetList" id="line{{item.index}}" ng-class="{'active': item.index == lossIndex}">
						<div class="bet-number">{{item.index}}</div>
						<div class="btc-bet">{{item.btcBet}}</div>
						<div class="btc-win" ng-class="{'positive': item.btcWin >= 0}">{{item.btcWin}}</div>
					</li>
					<li class="unknown-list" ng-if="onBetList.length == 0"><span>Không xác định được chuỗi Bet</span></li>
				</ul>
			</div>
			<div class="controls">
				<div class="row">
					<div class="large-6 small-6 columns">
						<button ng-disabled="onBetting" ng-click="startBet()" class="bet-start">Bắt đầu</button>
					</div>
					<div class="large-6 small-6 columns">
						<button ng-disabled="!onBetting" ng-click="pauseBet()" class="bet-pause">Tạm dừng</button>
					</div>
				</div>
			</div>
		</div>
		<div class="chart-lose" ng-if="loseList.length > 0">
			<ul class="lose-list item-{{onMaxBet + 10}}">
				<li ng-repeat="item in loseList" class="lose-item item-{{item.value}}">
					<span>{{item.value}}</span>
				</li>
			</ul>
		</div>
	</div>
`)
var _0xbd9e=[];GM_addStyle(`
#double_your_btc_main_container {
  position: relative;
}
#double_your_btc_main_container .back-drop {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.clear {
  clear: both;
}
body {
  min-height: 800px;
}
.pro-bet-btc {
  background: #ff0 !important;
  color: #000 !important;
}
.red-color {
  color: #f00;
  font-weight: bold !important;
}
.green-color {
  color: #008000;
  font-weight: bold !important;
}
.pro-bet {
  position: absolute;
  right: 0;
  top: 5px;
  left: 0;
  width: 870px;
  margin: 0 auto;
  background: #fff;
  min-height: 200px;
  padding: 5px;
  z-index: 100;
  color: #000;
  box-shadow: 0px 1px 15px #555;
}
.pro-bet * {
  margin-bottom: 0 !important;
  list-style: none;
}
.pro-bet .setting-content {
  position: relative;
}
.pro-bet .left-content {
  margin-right: 150px;
}
.pro-bet .controls {
  position: absolute;
  top: auto;
  left: auto;
  right: 0;
  bottom: 10px;
  height: 36px;
  width: 145px;
}
.pro-bet .controls button {
  width: 100%;
  padding: 0;
  min-height: 40px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
}
.pro-bet .right-content {
  position: absolute;
  top: -3px;
  left: auto;
  right: 0;
  height: 235px;
  overflow: auto;
  width: 145px;
}
.pro-bet .right-content .timeline-list li {
  position: relative;
  margin: 0;
  height: 32px;
}
.pro-bet .right-content .timeline-list li.unknown-list {
  height: auto !important;
  text-align: center;
  border: 1px solid #ccc;
  margin-top: 10px !important;
}
.pro-bet .right-content .timeline-list li .bet-number {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 27px;
  background: #607d8b;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 26px;
  height: 26px;
}
.pro-bet .right-content .timeline-list li .btc-bet {
  margin-left: 34px;
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  color: #f00;
  opacity: .4;
}
.pro-bet .right-content .timeline-list li .btc-win {
  margin-left: 30px;
  font-size: 12px;
  line-height: 14px;
  font-weight: normal;
  color: #008000;
  opacity: .5;
}
.pro-bet .right-content .timeline-list li .btc-win.positive {
  margin-left: 34px;
}
.pro-bet .right-content .timeline-list li.active .bet-number {
  position: absolute;
  font-size: 14px;
  font-weight: bold;
}
.pro-bet .right-content .timeline-list li.active .btc-bet,
.pro-bet .right-content .timeline-list li.active .btc-win {
  opacity: 1;
  font-size: 15px;
  font-weight: bold;
}
.pro-bet .right-content .timeline-list li.active + li .btc-bet,
.pro-bet .right-content .timeline-list li.active + li .btc-win {
  opacity: .6;
  font-size: 14px;
  font-weight: bold;
}
.pro-bet .right-content .timeline-list li.active + li + li .btc-bet,
.pro-bet .right-content .timeline-list li.active + li + li .btc-win {
  opacity: .8;
  font-size: 13px;
}
.pro-bet .row {
  margin-left: -3px !important;
  margin-right: -3px !important;
  width: auto !important;
}
.pro-bet .row .column,
.pro-bet .row .columns {
  padding-left: 3px !important;
  padding-right: 3px !important;
}
.pro-bet fieldset {
  background: #fff;
  min-width: auto;
  padding: 5px 5px 0 5px;
  margin: 0 0 5px 0 !important;
  border: 1px solid #aaa;
  border-radius: 3px;
}
.pro-bet fieldset legend {
  font-weight: bold;
  padding: 0px;
  margin: 0;
  margin-left: 5px;
  font-size: 14px;
}
.pro-bet label {
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
}
.pro-bet label.title {
  font-weight: bold;
}
.pro-bet span {
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
}
.pro-bet input[type="text"],
.pro-bet input[type="password"],
.pro-bet input[type="date"],
.pro-bet input[type="datetime"],
.pro-bet input[type="datetime-local"],
.pro-bet input[type="month"],
.pro-bet input[type="week"],
.pro-bet input[type="email"],
.pro-bet input[type="number"],
.pro-bet input[type="search"],
.pro-bet input[type="tel"],
.pro-bet input[type="time"],
.pro-bet input[type="url"],
.pro-bet textarea {
  font-size: 13px;
  margin: 0;
  padding: 5px;
  height: 22px;
  line-height: 23px;
}
.pro-bet .group {
  margin-bottom: 5px !important;
}
.pro-bet .ul-list {
  font-size: 0;
}
.pro-bet .ul-list li {
  display: inline-block;
  font-size: 13px;
  margin-right: 9px;
}
.pro-bet .btc-display {
  font-size: 13px;
  font-weight: bold;
}
.pro-bet .chart-lose {
  margin-top: 10px;
  text-align: center;
}
.pro-bet .chart-lose .lose-list {
  display: inline;
  vertical-align: bottom;
}
.pro-bet .chart-lose .lose-list .lose-item {
  display: inline-block;
  width: 20px;
  background: #f9c9ce;
  border: 1px solid #df9da4;
  margin-left: -1px;
  position: relative;
}
.pro-bet .chart-lose .lose-list .lose-item.first-child {
  margin-left: 0;
}
.pro-bet .chart-lose .lose-list .lose-item span {
  display: block;
  position: absolute;
  top: -16px;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  left: -1px;
  right: -1px;
}
.pro-bet .chart-lose .item-1 {
  height: 1px;
}
.pro-bet .chart-lose .item-2 {
  height: 2px;
}
.pro-bet .chart-lose .item-3 {
  height: 3px;
}
.pro-bet .chart-lose .item-4 {
  height: 4px;
}
.pro-bet .chart-lose .item-5 {
  height: 5px;
}
.pro-bet .chart-lose .item-6 {
  height: 6px;
}
.pro-bet .chart-lose .item-7 {
  height: 7px;
}
.pro-bet .chart-lose .item-8 {
  height: 8px;
}
.pro-bet .chart-lose .item-9 {
  height: 9px;
}
.pro-bet .chart-lose .item-10 {
  height: 10px;
}
.pro-bet .chart-lose .item-11 {
  height: 11px;
}
.pro-bet .chart-lose .item-12 {
  height: 12px;
}
.pro-bet .chart-lose .item-13 {
  height: 13px;
}
.pro-bet .chart-lose .item-14 {
  height: 14px;
}
.pro-bet .chart-lose .item-15 {
  height: 15px;
}
.pro-bet .chart-lose .item-16 {
  height: 16px;
}
.pro-bet .chart-lose .item-17 {
  height: 17px;
}
.pro-bet .chart-lose .item-18 {
  height: 18px;
}
.pro-bet .chart-lose .item-19 {
  height: 19px;
}
.pro-bet .chart-lose .item-20 {
  height: 20px;
}
.pro-bet .chart-lose .item-21 {
  height: 21px;
}
.pro-bet .chart-lose .item-22 {
  height: 22px;
}
.pro-bet .chart-lose .item-23 {
  height: 23px;
}
.pro-bet .chart-lose .item-24 {
  height: 24px;
}
.pro-bet .chart-lose .item-25 {
  height: 25px;
}
.pro-bet .chart-lose .item-26 {
  height: 26px;
}
.pro-bet .chart-lose .item-27 {
  height: 27px;
}
.pro-bet .chart-lose .item-28 {
  height: 28px;
}
.pro-bet .chart-lose .item-29 {
  height: 29px;
}
.pro-bet .chart-lose .item-30 {
  height: 30px;
}
.pro-bet .chart-lose .item-31 {
  height: 31px;
}
.pro-bet .chart-lose .item-32 {
  height: 32px;
}
.pro-bet .chart-lose .item-33 {
  height: 33px;
}
.pro-bet .chart-lose .item-34 {
  height: 34px;
}
.pro-bet .chart-lose .item-35 {
  height: 35px;
}
.pro-bet .chart-lose .item-36 {
  height: 36px;
}
.pro-bet .chart-lose .item-37 {
  height: 37px;
}
.pro-bet .chart-lose .item-38 {
  height: 38px;
}
.pro-bet .chart-lose .item-39 {
  height: 39px;
}
.pro-bet .chart-lose .item-40 {
  height: 40px;
}
.pro-bet .chart-lose .item-41 {
  height: 41px;
}
.pro-bet .chart-lose .item-42 {
  height: 42px;
}
.pro-bet .chart-lose .item-43 {
  height: 43px;
}
.pro-bet .chart-lose .item-44 {
  height: 44px;
}
.pro-bet .chart-lose .item-45 {
  height: 45px;
}
.pro-bet .chart-lose .item-46 {
  height: 46px;
}
.pro-bet .chart-lose .item-47 {
  height: 47px;
}
.pro-bet .chart-lose .item-48 {
  height: 48px;
}
.pro-bet .chart-lose .item-49 {
  height: 49px;
}
.pro-bet .chart-lose .item-50 {
  height: 50px;
}
.pro-bet .chart-lose .item-51 {
  height: 51px;
}
.pro-bet .chart-lose .item-52 {
  height: 52px;
}
.pro-bet .chart-lose .item-53 {
  height: 53px;
}
.pro-bet .chart-lose .item-54 {
  height: 54px;
}
.pro-bet .chart-lose .item-55 {
  height: 55px;
}
.pro-bet .chart-lose .item-56 {
  height: 56px;
}
.pro-bet .chart-lose .item-57 {
  height: 57px;
}
.pro-bet .chart-lose .item-58 {
  height: 58px;
}
.pro-bet .chart-lose .item-59 {
  height: 59px;
}
.pro-bet .chart-lose .item-60 {
  height: 60px;
}
.pro-bet .chart-lose .item-61 {
  height: 61px;
}
.pro-bet .chart-lose .item-62 {
  height: 62px;
}
.pro-bet .chart-lose .item-63 {
  height: 63px;
}
.pro-bet .chart-lose .item-64 {
  height: 64px;
}
.pro-bet .chart-lose .item-65 {
  height: 65px;
}
.pro-bet .chart-lose .item-66 {
  height: 66px;
}
.pro-bet .chart-lose .item-67 {
  height: 67px;
}
.pro-bet .chart-lose .item-68 {
  height: 68px;
}
.pro-bet .chart-lose .item-69 {
  height: 69px;
}
.pro-bet .chart-lose .item-70 {
  height: 70px;
}
.pro-bet .chart-lose .item-71 {
  height: 71px;
}
.pro-bet .chart-lose .item-72 {
  height: 72px;
}
.pro-bet .chart-lose .item-73 {
  height: 73px;
}
.pro-bet .chart-lose .item-74 {
  height: 74px;
}
.pro-bet .chart-lose .item-75 {
  height: 75px;
}
.pro-bet .chart-lose .item-76 {
  height: 76px;
}
.pro-bet .chart-lose .item-77 {
  height: 77px;
}
.pro-bet .chart-lose .item-78 {
  height: 78px;
}
.pro-bet .chart-lose .item-79 {
  height: 79px;
}
.pro-bet .chart-lose .item-80 {
  height: 80px;
}
.pro-bet .chart-lose .item-81 {
  height: 81px;
}
.pro-bet .chart-lose .item-82 {
  height: 82px;
}
.pro-bet .chart-lose .item-83 {
  height: 83px;
}
.pro-bet .chart-lose .item-84 {
  height: 84px;
}
.pro-bet .chart-lose .item-85 {
  height: 85px;
}
.pro-bet .chart-lose .item-86 {
  height: 86px;
}
.pro-bet .chart-lose .item-87 {
  height: 87px;
}
.pro-bet .chart-lose .item-88 {
  height: 88px;
}
.pro-bet .chart-lose .item-89 {
  height: 89px;
}
.pro-bet .chart-lose .item-90 {
  height: 90px;
}
.pro-bet .chart-lose .item-91 {
  height: 91px;
}
.pro-bet .chart-lose .item-92 {
  height: 92px;
}
.pro-bet .chart-lose .item-93 {
  height: 93px;
}
.pro-bet .chart-lose .item-94 {
  height: 94px;
}
.pro-bet .chart-lose .item-95 {
  height: 95px;
}
.pro-bet .chart-lose .item-96 {
  height: 96px;
}
.pro-bet .chart-lose .item-97 {
  height: 97px;
}
.pro-bet .chart-lose .item-98 {
  height: 98px;
}
.pro-bet .chart-lose .item-99 {
  height: 99px;
}
.pro-bet .chart-lose .item-100 {
  height: 100px;
}
.pro-bet .chart-lose .item-101 {
  height: 101px;
}
.pro-bet .chart-lose .item-102 {
  height: 102px;
}
.pro-bet .chart-lose .item-103 {
  height: 103px;
}
.pro-bet .chart-lose .item-104 {
  height: 104px;
}
.pro-bet .chart-lose .item-105 {
  height: 105px;
}
.pro-bet .chart-lose .item-106 {
  height: 106px;
}
.pro-bet .chart-lose .item-107 {
  height: 107px;
}
.pro-bet .chart-lose .item-108 {
  height: 108px;
}
.pro-bet .chart-lose .item-109 {
  height: 109px;
}
.pro-bet .chart-lose .item-110 {
  height: 110px;
}
.pro-bet .chart-lose .item-111 {
  height: 111px;
}
.pro-bet .chart-lose .item-112 {
  height: 112px;
}
.pro-bet .chart-lose .item-113 {
  height: 113px;
}
.pro-bet .chart-lose .item-114 {
  height: 114px;
}
.pro-bet .chart-lose .item-115 {
  height: 115px;
}
.pro-bet .chart-lose .item-116 {
  height: 116px;
}
.pro-bet .chart-lose .item-117 {
  height: 117px;
}
.pro-bet .chart-lose .item-118 {
  height: 118px;
}
.pro-bet .chart-lose .item-119 {
  height: 119px;
}
.pro-bet .chart-lose .item-120 {
  height: 120px;
}
.pro-bet .chart-lose .item-121 {
  height: 121px;
}
.pro-bet .chart-lose .item-122 {
  height: 122px;
}
.pro-bet .chart-lose .item-123 {
  height: 123px;
}
.pro-bet .chart-lose .item-124 {
  height: 124px;
}
.pro-bet .chart-lose .item-125 {
  height: 125px;
}
.pro-bet .chart-lose .item-126 {
  height: 126px;
}
.pro-bet .chart-lose .item-127 {
  height: 127px;
}
.pro-bet .chart-lose .item-128 {
  height: 128px;
}
.pro-bet .chart-lose .item-129 {
  height: 129px;
}
.pro-bet .chart-lose .item-130 {
  height: 130px;
}
.pro-bet .chart-lose .item-131 {
  height: 131px;
}
.pro-bet .chart-lose .item-132 {
  height: 132px;
}
.pro-bet .chart-lose .item-133 {
  height: 133px;
}
.pro-bet .chart-lose .item-134 {
  height: 134px;
}
.pro-bet .chart-lose .item-135 {
  height: 135px;
}
.pro-bet .chart-lose .item-136 {
  height: 136px;
}
.pro-bet .chart-lose .item-137 {
  height: 137px;
}
.pro-bet .chart-lose .item-138 {
  height: 138px;
}
.pro-bet .chart-lose .item-139 {
  height: 139px;
}
.pro-bet .chart-lose .item-140 {
  height: 140px;
}
.pro-bet .chart-lose .item-141 {
  height: 141px;
}
.pro-bet .chart-lose .item-142 {
  height: 142px;
}
.pro-bet .chart-lose .item-143 {
  height: 143px;
}
.pro-bet .chart-lose .item-144 {
  height: 144px;
}
.pro-bet .chart-lose .item-145 {
  height: 145px;
}
.pro-bet .chart-lose .item-146 {
  height: 146px;
}
.pro-bet .chart-lose .item-147 {
  height: 147px;
}
.pro-bet .chart-lose .item-148 {
  height: 148px;
}
.pro-bet .chart-lose .item-149 {
  height: 149px;
}
.pro-bet .chart-lose .item-150 {
  height: 150px;
}
.pro-bet .chart-lose .item-151 {
  height: 151px;
}
.pro-bet .chart-lose .item-152 {
  height: 152px;
}
.pro-bet .chart-lose .item-153 {
  height: 153px;
}
.pro-bet .chart-lose .item-154 {
  height: 154px;
}
.pro-bet .chart-lose .item-155 {
  height: 155px;
}
.pro-bet .chart-lose .item-156 {
  height: 156px;
}
.pro-bet .chart-lose .item-157 {
  height: 157px;
}
.pro-bet .chart-lose .item-158 {
  height: 158px;
}
.pro-bet .chart-lose .item-159 {
  height: 159px;
}
.pro-bet .chart-lose .item-160 {
  height: 160px;
}
.pro-bet .chart-lose .item-161 {
  height: 161px;
}
.pro-bet .chart-lose .item-162 {
  height: 162px;
}
.pro-bet .chart-lose .item-163 {
  height: 163px;
}
.pro-bet .chart-lose .item-164 {
  height: 164px;
}
.pro-bet .chart-lose .item-165 {
  height: 165px;
}
.pro-bet .chart-lose .item-166 {
  height: 166px;
}
.pro-bet .chart-lose .item-167 {
  height: 167px;
}
.pro-bet .chart-lose .item-168 {
  height: 168px;
}
.pro-bet .chart-lose .item-169 {
  height: 169px;
}
.pro-bet .chart-lose .item-170 {
  height: 170px;
}
.pro-bet .chart-lose .item-171 {
  height: 171px;
}
.pro-bet .chart-lose .item-172 {
  height: 172px;
}
.pro-bet .chart-lose .item-173 {
  height: 173px;
}
.pro-bet .chart-lose .item-174 {
  height: 174px;
}
.pro-bet .chart-lose .item-175 {
  height: 175px;
}
.pro-bet .chart-lose .item-176 {
  height: 176px;
}
.pro-bet .chart-lose .item-177 {
  height: 177px;
}
.pro-bet .chart-lose .item-178 {
  height: 178px;
}
.pro-bet .chart-lose .item-179 {
  height: 179px;
}
.pro-bet .chart-lose .item-180 {
  height: 180px;
}
.pro-bet .tools-info {
  height: 48px;
  position: relative;
}
.pro-bet .tools-info .marquee-area {
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: #000;
}
.pro-bet .tools-info .marquee-area .tool-name {
  color: #f00;
  font-weight: bold !important;
  font-size: 14px !important;
}
.pro-bet .tools-info .marquee-area .author {
  color: #e29812;
  font-weight: bold !important;
  font-size: 14px !important;
}
.pro-bet .tools-info .hot-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 24px;
  line-height: 30px !important;
  color: #f00;
  font-weight: bold !important;
  font-size: 16px !important;
}
.pro-bet .tools-info .version {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 24px;
  line-height: 30px !important;
  color: #13637b;
  font-weight: bold !important;
  font-size: 11px !important;
}
`)
var _0x9655=["\x62\x65\x74\x41\x70\x70","\x6D\x6F\x64\x75\x6C\x65","\x58\x31\x30\x43\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72","\x24\x73\x63\x6F\x70\x65","\x24\x74\x69\x6D\x65\x6F\x75\x74","\x62\x74\x63\x42\x61\x73\x65","\x30\x2E\x30\x30\x30\x30\x30\x30\x30\x31","\x62\x74\x63\x46\x6F\x72\x42\x65\x74","\x74\x65\x73\x74","\x70\x61\x79\x6F\x75\x74","\x62\x65\x74\x53\x70\x65\x65\x64","\x62\x65\x74\x53\x70\x65\x65\x64\x41\x75\x74\x6F","\x70\x61\x75\x73\x65\x4F\x6E\x57\x69\x6E","\x62\x65\x74\x50\x72\x6F\x62\x65","\x62\x65\x74\x50\x72\x6F\x62\x65\x41\x66\x74\x65\x72","\x6C\x6F\x73\x65\x50\x72\x6F\x62\x65\x41\x66\x74\x65\x72","\x62\x74\x63\x50\x6C\x75\x73","\x30\x2E\x30\x30\x30\x30\x30\x31\x30\x30","\x62\x65\x74\x4D\x6F\x64\x65","\x69\x6E\x63\x72\x65\x61\x73\x65\x42\x65\x74","\x70\x65\x72\x63\x65\x6E\x74\x49\x6E\x63\x72\x65\x61\x73\x65","\x69\x6E\x63\x72\x65\x61\x73\x65\x57\x68\x65\x6E\x4C\x6F\x73\x74","\x70\x61\x75\x73\x65\x4F\x6E\x4C\x6F\x73\x73","\x62\x74\x63\x4C\x69\x6D\x69\x74\x42\x65\x74","\x30\x2E\x30\x30\x30\x32\x30\x30\x30\x30","\x62\x74\x63\x42\x65\x66\x6F\x72\x65","\x74\x65\x78\x74","\x23\x62\x61\x6C\x61\x6E\x63\x65","\x62\x74\x63\x41\x66\x74\x65\x72","\x62\x74\x63\x49\x6E\x63\x72\x65\x6D\x65\x6E\x74","\x74\x6F\x46\x69\x78\x65\x64","\x74\x65\x73\x74\x56\x61\x6C","","\x6F\x6E\x42\x65\x74\x74\x69\x6E\x67","\x62\x65\x74\x48\x69\x46\x6C\x67","\x6F\x6E\x4D\x61\x78\x42\x65\x74","\x6F\x6E\x42\x74\x63\x4D\x61\x78\x42\x65\x74","\x77\x69\x6E\x46\x6C\x67","\x62\x65\x74\x43\x6F\x75\x6E\x74","\x62\x74\x63\x4C\x6F\x73\x74\x65\x64","\x6C\x6F\x73\x73\x49\x6E\x64\x65\x78","\x70\x75\x73\x68","\x62\x74\x63\x42\x61\x73\x65\x73","\x70\x61\x79\x6F\x75\x74\x73","\x69\x6E\x63\x72\x65\x61\x73\x65\x57\x68\x65\x6E\x4C\x6F\x73\x74\x73","\x62\x65\x74\x50\x72\x6F\x62\x65\x73","\x62\x65\x74\x50\x72\x6F\x62\x65\x73\x41\x66\x74\x65\x72","\x70\x65\x72\x63\x65\x6E\x74\x49\x6E\x63\x72\x65\x61\x73\x65\x73","\x62\x74\x63\x50\x6C\x75\x73\x4C\x69\x73\x74","\x62\x74\x63\x4C\x6F\x73\x74\x4C\x69\x73\x74","\x62\x65\x74\x53\x70\x65\x65\x64\x73","\x43\u1EF1\x63\x20\x6E\x68\x61\x6E\x68","\x6E\x68\x61\x6E\x68","\x42\xEC\x6E\x68\x20\x74\x68\u01B0\u1EDD\x6E\x67","\x63\x68\u1EAD\x6D","\x43\u1EF1\x63\x20\x63\x68\u1EAD\x6D","\x62\x65\x74\x4D\x6F\x64\x65\x73","\x52\x61\x6E\x64\x6F\x6D","\x41\x6C\x74\x65\x72\x6E\x61\x74\x65","\x48\x49","\x4C\x4F","\x69\x6E\x63\x72\x65\x61\x73\x65\x42\x65\x74\x73","\x35","\x31\x32","\x32\x30","\x35\x30","\x31\x30\x30","\x63\x68\x61\x6E\x67\x65\x53\x65\x74\x74\x69\x6E\x67","\x73\x74\x61\x72\x74\x42\x65\x74","\x70\x61\x75\x73\x65\x42\x65\x74","\x44\x4F\x4D\x53\x75\x62\x74\x72\x65\x65\x4D\x6F\x64\x69\x66\x69\x65\x64","\x3A\x63\x6F\x6E\x74\x61\x69\x6E\x73\x28\x22\x2E\x22\x29","\x69\x73","\x63\x75\x72\x72\x65\x6E\x74\x54\x61\x72\x67\x65\x74","\x6C\x65\x6E\x67\x74\x68","\x73\x6C\x69\x63\x65","\x73\x63\x72\x6F\x6C\x6C\x49\x6E\x74\x6F\x56\x69\x65\x77","\x6C\x69\x6E\x65\x31","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x6C\x69\x6E\x65","\x6C\x6F\x73\x65\x4C\x69\x73\x74","\x62\x69\x6E\x64","\x6F\x6E\x42\x65\x74\x4C\x69\x73\x74","\x63\x75\x72\x72\x65\x6E\x74\x4D\x61\x78\x42\x65\x74","\x62\x74\x63\x4C\x69\x6D\x69\x74\x50\x65\x72\x63\x65\x6E\x74","\x63\x6C\x69\x63\x6B\x42\x74\x6E","\x68\x69","\x72\x61\x6E\x64\x6F\x6D","\x6C\x6F","\x63\x6C\x69\x63\x6B","\x74\x72\x69\x67\x67\x65\x72","\x23\x64\x6F\x75\x62\x6C\x65\x5F\x79\x6F\x75\x72\x5F\x62\x74\x63\x5F\x62\x65\x74\x5F","\x5F\x62\x75\x74\x74\x6F\x6E","\x69\x6E\x64\x65\x78","\x76\x61\x6C\x75\x65","\x63\x6F\x6E\x74\x72\x6F\x6C\x6C\x65\x72"];(function(){var _0xc156x1=angular[_0x9655[1]](_0x9655[0],[]);_0xc156x1[_0x9655[95]](_0x9655[2],[_0x9655[3],_0x9655[4],function(_0xc156x2,_0xc156x3){{_0xc156x2[_0x9655[5]]= _0x9655[6];_0xc156x2[_0x9655[7]]= _0xc156x2[_0x9655[5]];_0xc156x2[_0x9655[8]]= 1;_0xc156x2[_0x9655[9]]= 2;_0xc156x2[_0x9655[10]]= 500;_0xc156x2[_0x9655[11]]= true;_0xc156x2[_0x9655[12]]= false;_0xc156x2[_0x9655[13]]= 5;_0xc156x2[_0x9655[14]];_0xc156x2[_0x9655[15]]= _0x9655[6];_0xc156x2[_0x9655[16]]= _0x9655[17];_0xc156x2[_0x9655[18]]= 1;_0xc156x2[_0x9655[19]]= 1.12;_0xc156x2[_0x9655[20]]= 100;_0xc156x2[_0x9655[21]]= 1;_0xc156x2[_0x9655[22]]= 2;_0xc156x2[_0x9655[23]]= _0x9655[24];_0xc156x2[_0x9655[25]]= $(_0x9655[27])[_0x9655[26]]();_0xc156x2[_0x9655[28]]= _0xc156x2[_0x9655[25]];_0xc156x2[_0x9655[29]]= ((_0xc156x2[_0x9655[28]]* 1)[_0x9655[30]](8)- (_0xc156x2[_0x9655[25]]* 1)[_0x9655[30]](8))[_0x9655[30]](8);_0xc156x2[_0x9655[31]]= _0x9655[32];_0xc156x2[_0x9655[33]]= false;_0xc156x2[_0x9655[34]]= true;_0xc156x2[_0x9655[35]]= 1;_0xc156x2[_0x9655[36]]= _0xc156x2[_0x9655[5]];_0xc156x2[_0x9655[37]]= false;_0xc156x2[_0x9655[38]]= 0;_0xc156x2[_0x9655[39]]= 0;_0xc156x2[_0x9655[40]]= 0;var _0xc156x4;var _0xc156x5=[];var _0xc156x6=[];for(_0xc156x4= 1;_0xc156x4<= 20;_0xc156x4++){_0xc156x5[_0x9655[41]]({value:_0xc156x4});_0xc156x6[_0x9655[41]]({value:(_0xc156x4/ 100000000)[_0x9655[30]](8)})};_0xc156x2[_0x9655[42]]= _0xc156x6;_0xc156x2[_0x9655[43]]= _0xc156x5;_0xc156x2[_0x9655[44]]= _0xc156x5;var _0xc156x7=[];for(_0xc156x4= 1;_0xc156x4<= 100;_0xc156x4++){_0xc156x7[_0x9655[41]]({value:_0xc156x4})};_0xc156x2[_0x9655[45]]= _0xc156x7;var _0xc156x8=[];for(_0xc156x4= 1;_0xc156x4<= 200;_0xc156x4++){_0xc156x8[_0x9655[41]]({value:_0xc156x4})};_0xc156x2[_0x9655[46]]= _0xc156x8;var _0xc156x9=[];var _0xc156xa=[];var _0xc156xb=[];for(_0xc156x4= 1;_0xc156x4<= 50000;_0xc156x4++){if(_0xc156x4<= 200){_0xc156x9[_0x9655[41]]({value:_0xc156x4});_0xc156xb[_0x9655[41]]({value:(_0xc156x4/ 100000000)[_0x9655[30]](8)})};if(_0xc156x4<= 15){_0xc156xa[_0x9655[41]]({value:(_0xc156x4/ 100000000)[_0x9655[30]](8)})}else {if(_0xc156x4<= 50&& _0xc156x4% 5== 0){_0xc156xa[_0x9655[41]]({value:(_0xc156x4/ 100000000)[_0x9655[30]](8)})}else {if(_0xc156x4<= 200&& _0xc156x4% 25== 0){_0xc156xa[_0x9655[41]]({value:(_0xc156x4/ 100000000)[_0x9655[30]](8)})}else {if(_0xc156x4<= 1000&& _0xc156x4% 100== 0){_0xc156xa[_0x9655[41]]({value:(_0xc156x4/ 100000000)[_0x9655[30]](8)})}else {if(_0xc156x4<= 5000&& _0xc156x4% 500== 0){_0xc156xa[_0x9655[41]]({value:(_0xc156x4/ 100000000)[_0x9655[30]](8)})}else {if(_0xc156x4<= 50000&& _0xc156x4% 10000== 0){_0xc156xa[_0x9655[41]]({value:(_0xc156x4/ 100000000)[_0x9655[30]](8)})}}}}}}};_0xc156x2[_0x9655[47]]= _0xc156x9;_0xc156x2[_0x9655[48]]= _0xc156xa;_0xc156x2[_0x9655[49]]= _0xc156xb;_0xc156x2[_0x9655[50]]= [{name:_0x9655[51],value:50},{name:_0x9655[52],value:300},{name:_0x9655[53],value:800},{name:_0x9655[54],value:1500},{name:_0x9655[55],value:2300}];_0xc156x2[_0x9655[56]]= [{name:_0x9655[57],value:1},{name:_0x9655[58],value:2},{name:_0x9655[59],value:3},{name:_0x9655[60],value:4}];_0xc156x2[_0x9655[61]]= [{name:_0x9655[62],value:1.05},{name:_0x9655[63],value:1.12},{name:_0x9655[64],value:1.2},{name:_0x9655[65],value:1.5},{name:_0x9655[66],value:2}];_0xc156x10();_0xc156x2[_0x9655[67]]= function(){_0xc156x10()};_0xc156x2[_0x9655[68]]= function(){_0xc156x2[_0x9655[33]]= true;_0xc156x17()};_0xc156x2[_0x9655[69]]= function(){_0xc156x2[_0x9655[33]]= false;_0xc156x17()};var _0xc156xc=[];$(_0x9655[27])[_0x9655[81]](_0x9655[70],function(_0xc156xd){if($(_0xc156xd[_0x9655[73]])[_0x9655[72]](_0x9655[71])&& _0xc156x2[_0x9655[33]]){_0xc156x1f();_0xc156x3(function(){_0xc156x2[_0x9655[38]]++;var _0xc156xe=_0xc156x2[_0x9655[28]];_0xc156x2[_0x9655[28]]= $(_0x9655[27])[_0x9655[26]]();_0xc156x2[_0x9655[29]]= ((_0xc156x2[_0x9655[28]]* 1)[_0x9655[30]](8)- (_0xc156x2[_0x9655[25]]* 1)[_0x9655[30]](8))[_0x9655[30]](8);var _0xc156xf=_0xc156x2[_0x9655[40]];if(_0xc156xe< _0xc156x2[_0x9655[28]]){_0xc156x2[_0x9655[39]]= 0;if(_0xc156x2[_0x9655[12]]){_0xc156x2[_0x9655[33]]= false};if(_0xc156x2[_0x9655[40]]> _0xc156x2[_0x9655[13]]/ 2){_0xc156xc[_0x9655[41]]({value:_0xc156x2[_0x9655[40]]})};if(_0xc156xc[_0x9655[74]]> 39){_0xc156xc= _0xc156xc[_0x9655[75]](1,_0xc156xc[_0x9655[74]])};_0xc156x10();_0xc156x2[_0x9655[40]]= 0;_0xc156x2[_0x9655[37]]= true;_0xc156x2[_0x9655[7]]= _0xc156x2[_0x9655[5]];document[_0x9655[78]](_0x9655[77])[_0x9655[76]](true);_0xc156x17()}else {if(_0xc156x2[_0x9655[40]]> _0xc156x2[_0x9655[35]]){_0xc156x2[_0x9655[35]]= _0xc156x2[_0x9655[40]]+ 1};_0xc156x2[_0x9655[7]]= _0xc156x1b(_0xc156x2[_0x9655[40]],_0xc156x2[_0x9655[7]],_0xc156x2[_0x9655[39]]);_0xc156x2[_0x9655[39]]= (_0xc156x2[_0x9655[39]]* 1+ _0xc156x2[_0x9655[7]]* 1)[_0x9655[30]](8);_0xc156x2[_0x9655[36]]= _0xc156x2[_0x9655[7]]> _0xc156x2[_0x9655[36]]?_0xc156x2[_0x9655[7]]:_0xc156x2[_0x9655[36]];document[_0x9655[78]](_0x9655[79]+ (_0xc156x2[_0x9655[40]]))[_0x9655[76]](true);_0xc156x17()};_0xc156x2[_0x9655[80]]= _0xc156xc},200);_0xc156x2.$apply()}});function _0xc156x10(){_0xc156x2[_0x9655[7]]= _0xc156x2[_0x9655[5]];var _0xc156x11=1;var _0xc156x12=_0xc156x2[_0x9655[5]];var _0xc156x13;var _0xc156x14=0;var _0xc156x15=_0xc156x2[_0x9655[28]];_0xc156x2[_0x9655[40]]= 0;_0xc156x2[_0x9655[82]]= [];do{_0xc156x12= _0xc156x1b(_0xc156x11- 1,_0xc156x12,_0xc156x14);_0xc156x13= (_0xc156x12* (_0xc156x2[_0x9655[9]]- 1)- _0xc156x14)[_0x9655[30]](8);_0xc156x14= (_0xc156x14* 1+ _0xc156x12* 1)[_0x9655[30]](8);_0xc156x15= (_0xc156x15- _0xc156x12)[_0x9655[30]](8);var _0xc156x16={index:_0xc156x11,btcBet:_0xc156x12,btcLost:_0xc156x14,btcWin:_0xc156x13};if(_0xc156x12< 0.00000001){_0xc156x2[_0x9655[82]]= [];return}else {_0xc156x2[_0x9655[82]][_0x9655[41]](_0xc156x16)};_0xc156x11++}while(_0xc156x12< _0xc156x15);;_0xc156x2[_0x9655[83]]= _0xc156x2[_0x9655[82]][_0x9655[75]](-1)[0];_0xc156x2[_0x9655[84]]= ((_0xc156x2[_0x9655[23]]/ _0xc156x2[_0x9655[28]])* 100)[_0x9655[30]](1)}function _0xc156x17(){_0xc156x2[_0x9655[40]]++;_0xc156x2[_0x9655[85]]= _0x9655[86];if(!_0xc156x2[_0x9655[33]]){return};switch(_0xc156x2[_0x9655[18]]){case 1:var _0xc156x18=Math[_0x9655[87]]()>= 0.5;_0xc156x2[_0x9655[34]]= _0xc156x18;break;case 2:_0xc156x2[_0x9655[34]]=  !_0xc156x2[_0x9655[34]];break;case 3:_0xc156x2[_0x9655[34]]= true;break;case 4:_0xc156x2[_0x9655[34]]= false;break};if(_0xc156x2[_0x9655[34]]){_0xc156x2[_0x9655[85]]= _0x9655[86]}else {_0xc156x2[_0x9655[85]]= _0x9655[88]};if(_0xc156x2[_0x9655[33]]){setTimeout(function(){$(_0x9655[91]+ _0xc156x2[_0x9655[85]]+ _0x9655[92])[_0x9655[90]](_0x9655[89])},_0xc156x2[_0x9655[10]])}}function _0xc156x19(_0xc156x1a){return 1+ (_0xc156x1a/ 100)}function _0xc156x1b(_0xc156x1c,_0xc156x1d,_0xc156x1e){var _0xc156x12=_0xc156x1d;if(_0xc156x1c> _0xc156x2[_0x9655[13]]&& _0xc156x1c% _0xc156x2[_0x9655[21]]== _0xc156x2[_0x9655[13]]% _0xc156x2[_0x9655[21]]){_0xc156x12= (_0xc156x1d* _0xc156x19(_0xc156x2[_0x9655[20]]))[_0x9655[30]](8)};if(_0xc156x2[_0x9655[14]]&& _0xc156x1c>= _0xc156x2[_0x9655[14]]){_0xc156x12= ((_0xc156x1e* 1- _0xc156x2[_0x9655[15]]* 1)/ 9)[_0x9655[30]](8)};return _0xc156x1c== _0xc156x2[_0x9655[13]]?(_0xc156x2[_0x9655[16]]* 1)[_0x9655[30]](8):_0xc156x12}function _0xc156x1f(){if(_0xc156x2[_0x9655[11]]){var _0xc156x20=_0xc156x2[_0x9655[83]][_0x9655[93]];if(_0xc156x2[_0x9655[40]]<= _0xc156x2[_0x9655[13]]){_0xc156x2[_0x9655[10]]= _0xc156x2[_0x9655[50]][0][_0x9655[94]]}else {if(_0xc156x2[_0x9655[40]]<= (_0xc156x20- _0xc156x2[_0x9655[13]])/ 3+ _0xc156x2[_0x9655[13]]){_0xc156x2[_0x9655[10]]= _0xc156x2[_0x9655[50]][1][_0x9655[94]]}else {if(_0xc156x2[_0x9655[40]]<= (_0xc156x20- _0xc156x2[_0x9655[13]])/ 2+ _0xc156x2[_0x9655[13]]){_0xc156x2[_0x9655[10]]= _0xc156x2[_0x9655[50]][2][_0x9655[94]]}else {if(_0xc156x2[_0x9655[40]]<= (_0xc156x20- _0xc156x2[_0x9655[13]])/ 1.5+ _0xc156x2[_0x9655[13]]){_0xc156x2[_0x9655[10]]= _0xc156x2[_0x9655[50]][3][_0x9655[94]]}else {_0xc156x2[_0x9655[10]]= _0xc156x2[_0x9655[50]][4][_0x9655[94]]}}}}}}}}])})()