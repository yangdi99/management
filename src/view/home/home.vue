<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bgs bg-purple">
          <dl>
            <dt class="orgin">
              <i class="iconfont icon-qian"></i>
            </dt>
            <dd>
              <p class="character">现金账户
                <i class="iconfont icon-tishi"></i>
              </p>
              <p class="monerys">￥126,560.00</p>
            </dd>
          </dl>
        </div>
      </el-col>
      <el-col :span="16" :offset="0">
        <div class="grid-content bgs bg-purple">
          <dl>
            <dt class="green">
              <i class="iconfont icon-wendang"></i>
            </dt>
            <dd>
              <p class="character">今日消耗
                <i class="iconfont icon-tishi"></i>
              </p>
              <p class="monerys">￥5,400</p>
            </dd>
          </dl>
        </div>
      </el-col>
    </el-row>
    <el-container>
      <el-header style="height:55px">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="grid-content bg-purple">整体情况</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <div class="block">
                <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2">
                </el-date-picker>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content bgs bg-purples bg-purple">
              <p class="character">曝光量(次)</p>
              <p class="monerys">278,456</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bgs bg-purples bg-purple">
              <p class="character">点击量(次)</p>
              <p class="monerys">278,456</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bgs bg-purples bg-purple">
              <p class="character">点击量(次)</p>
              <p class="monerys">278,456</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bgs bg-purples bg-purple">
              <p class="character">点击量(次)</p>
              <p class="monerys">278,456</p>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin:0">
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-select v-model="value2" placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
    <div id="myChart" :style="{width: '100%', height: '350px'}"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options2: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: true
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value2: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value6: '',
      value7: ''
    }
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['2016/10', '2016/11', '2016/12', '2017/01', '2017/02']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [1100, 1200, 1300, 1400, 1500, 1600, 1700],
          type: 'line'
        }]
      })
    }
  },
  mounted () {
    this.drawLine()
  }
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
}

.bgs {
  background: #fff;
  width: 190px;
  height: 55px;
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
  padding-top: 10px;
  padding-left: 10px;
}

.bgs .monerys {
  font-size: 16px;
  padding-left: 10px;
}

.bgs dl dt.orgin {
  color: #FAAD14;
}

.bgs dl dt.green {
  color: #50E394;
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

.el-main {
  padding-bottom: 0;
}
</style>
