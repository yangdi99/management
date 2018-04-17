<template>
  <div class="cellBox">
    <h1>广告单元</h1>
    <el-row :gutter="10" style="margin-top:20px;">
      <el-col :span="12"><h4>基本信息</h4></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="单元名称">
            <el-input v-model="form.name" placeholder="请设置广告名称"></el-input>
          </el-form-item>
          <el-form-item label="投放周期">
            <el-col :span="24">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12"><h4>定向</h4></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col>
        <el-row style="margin-top:20px;">
          <el-col>
            <label>性别：</label>
            <el-radio-group v-model="radio1">
              <el-radio-button label="不限"></el-radio-button>
              <el-radio-button label="男"></el-radio-button>
              <el-radio-button label="女"></el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col>
            <label>年龄：</label>
            <el-radio-group v-model="radio2">
              <el-radio-button label="不限"></el-radio-button>
              <el-radio-button label="指定年龄段"></el-radio-button>
            </el-radio-group>
            <el-radio-group v-model="radio3">
              <el-radio-button label="<6"></el-radio-button>
              <el-radio-button label="6-12"></el-radio-button>
              <el-radio-button label=">12"></el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col>
            <label>地域：</label>
            <el-radio-group v-model="radio4">
              <el-radio-button label="不限"></el-radio-button>
              <el-radio-button label="指定省市"></el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col>
            <el-transfer
              filterable
              :filter-method="filterMethod"
              filter-placeholder="请输入城市拼音"
              v-model="value2"
              :data="data2">
            </el-transfer>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col>
            <label>年级：</label>
            <el-radio-group v-model="radio5">
              <el-radio-button label="不限"></el-radio-button>
              <el-radio-button label="指定省市"></el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col>
            <el-transfer
              filterable
              :filter-method="filterMethod"
              filter-placeholder="请输入城市拼音"
              v-model="value2"
              :data="data2">
            </el-transfer>
          </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
          <el-col>
            <label>时段：</label>
            <el-radio-group v-model="radio6">
              <el-radio-button label="不限"></el-radio-button>
              <el-radio-button label="自定投放"></el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:20px;">
      <el-col :span="12"><h4>广告位</h4></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col>
        <el-table
          ref="multipleTable"
          :data="tableData3"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="space"
            label="广告位"
            width="120">
          </el-table-column>
          <el-table-column
            prop="type"
            label="创意形式"
            width="200">
          </el-table-column>
          <el-table-column
            prop="describe"
            label="描述"
            width="150">
          </el-table-column>
          <el-table-column
            prop="count"
            label="曝光量"
            width="150">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:20px;">
      <el-col :span="12"><h4>出价</h4></el-col>
    </el-row>
    <el-row style="margin-top:20px;">
      <el-col>
        <el-form :model="form" label-width="80px">
          <el-row>
            <el-col>
              <label>出价方式：</label>
              <el-radio-group v-model="radio7">
                <el-radio-button label="CPC"></el-radio-button>
                <el-radio-button label="CPM"></el-radio-button>
              </el-radio-group>
            </el-col>
          </el-row>
          <el-row style="margin-top:20px;">
            <el-col :span="12">
                <el-form-item label="出价:">
                  <el-input v-model="inputPrice" placeholder="￥"></el-input>
                </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px;">
      <el-col :span="6">
        <el-button type="primary">下一步</el-button>
      </el-col>
      <el-col :span="6">
        <el-button plain>保存</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    const generateData2 = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        })
      })
      return data
    }
    return {
      input: '',
      inputPrice: '',
      value1: '',
      radio1: '不限',
      radio2: '不限',
      radio3: '<6',
      radio4: '不限',
      radio5: '不限',
      radio6: '不限',
      radio7: 'CPC',
      form: {
        name: '',
        date1: ''
      },
      data2: generateData2(),
      value2: [],
      filterMethod (query, item) {
        return item.pinyin.indexOf(query) > -1
      },
      tableData3: [{
        space: '首页信息流',
        type: '640*240单图（文）',
        describe: '原生广告位',
        count: '23327万'
      }, {
        space: '首页信息流',
        type: '640*240单图（文）',
        describe: '原生广告位',
        count: '23327万'
      }, {
        space: '首页信息流',
        type: '640*240单图（文）',
        describe: '原生广告位',
        count: '23327万'
      }],
      multipleSelection: []
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style>
.cellBox {
  background: #fff;
}
</style>
