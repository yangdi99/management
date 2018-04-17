<template>
  <div class="establish">
    <h1>建立广告计划</h1>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bgs bg-purple">
          <dl>
            <dt class="blue">
              <i class="iconfont icon-shijian"></i>
            </dt>
            <dd>
              <p class="monery">已有计划
              </p>
              <p class="character">选择已有计划，直接创建广告</p>
            </dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="12" :offset="0">
        <div class="grid-content bgs bg-purple">
          <dl>
            <dt class="blue">
              <i class="iconfont icon-jia"></i>
            </dt>
            <dd>
              <p class="monery">新建计划
              </p>
              <p class="character">新建推广目标，计划设置</p>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
    <ul>
      <li>
        <div>
          推广目标：
        </div>
        <div class="right">
          <el-radio-group v-model="radio5" size="small">
            <el-radio-button label="网页"></el-radio-button>
            <el-radio-button label="ios应用"></el-radio-button>
            <el-radio-button label="Android应用"></el-radio-button>
          </el-radio-group>
        </div>
      </li>
      <li>
        <div>计划名称：</div>
        <div><input type="text" placeholder="请设置广告名称"></div>
      </li>
      <li>
        <div>每日限额：</div>
        <div>
          <input type="text" placeholder="请设置广告名称">
          <span>元/天</span>
          <el-tooltip placement="top">
            <div slot="content">最低100元，若不设置<br/>按账户金额进行投放</div>
            <i class="el-icon-question"></i>
          </el-tooltip>
        </div>
      </li>
    </ul>
    <div class="button">
      <el-row>
        <el-button class="next">下一步</el-button>
        <el-button>保存</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio5: '网页',
      radio7: '1'
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bgs {
  background: #fff;
  width: 220px;
  height: 65px;
  margin-top: 30px;
  border: 1px solid #E8E8E8;
}

.bgs dl dt {
  width: 45px;
  float: left;
  text-align: center;
  line-height: 55px;
}

.bgs dl dt i {
  font-size: 26px;
  font-weight: bold;
}

.bgs dl dd {
  float: left;
}

.bgs .character {
  color: #939393;
  font-size: 12px;
  padding-left: 10px;
}

.bgs .monery {
  font-size: 16px;
  padding-top: 15px;
  padding-left: 10px;
}

.bgs dl dt.blue {
  color: #2873FF;
  padding-top: 5px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.bg-purples {
  width: 150px;
  height: 55px;
  border: 1px solid #ccc;
}
ul{
    width:100%;
    height: auto;
    margin-top:30px;
}
ul li{
    width: 100%;
    height: 32px;
    line-height:32px;
    margin-top:20px;
    list-style: none;
}

ul li div{
    float:left;
}
.el-radio-group{
    margin-left:330px;
}
li div input{
    display: inline-block;
    width:432px;
    height:32px;
    padding-left:15px;
    margin-left:8px;
}
li div span{
    padding-left:5px;
}
.button{
    margin-top:50px;
}
.el-button{
    display: inline-block;
    width: 120px;
    height:40px;
}
.next{
    background: #E8E8E8;
}
</style>
