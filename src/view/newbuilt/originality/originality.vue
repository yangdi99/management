<template>
  <div>
    <h1>广告创意</h1>
    <div class="page">
      <h4>落地页</h4>
      <div>
        <el-col :span="16">
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label="着陆页地址:">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </div>
    </div>
    <div class="uploading">
      <h4>上传创意</h4>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="创意1" name="first">
          <el-upload class="avatar-uploader" action="http://localhost:9090/dsp-creative/creative/upload" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-col :span="16">
            <el-form ref="form" :model="form" label-width="90px">
              <el-form-item label="广告文案:">
                <el-input v-model="form.name1"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="16">
            <el-form ref="form" :model="form" label-width="90px">
              <el-form-item label="监控连接:">
                <el-input v-model="form.name2"></el-input>
              </el-form-item>
            </el-form>
          </el-col>
        </el-tab-pane>
        <el-tab-pane label="创意2" name="second">创意2</el-tab-pane>
      </el-tabs>
      <div class='add' @click="centerDialogVisible = true">+添加创意</div>
      <el-dialog title="选择模板" :visible.sync="centerDialogVisible" width="30%">
        <div class="add-left" @click="addCreative">
          <div class="simple">
            <div class="simple-power"></div>
            <div>
              <p class="simple-head"></p>
              <p class="simple-head"></p>
            </div>
          </div>
          <div class="simples">单图</div>
        </div>
        <div class="add-right">
          <p class="simple-head"></p>
          <div>
            <p class="simple-power"></p>
            <p class="simple-power"></p>
            <p class="simple-power"></p>
          </div>
          <div class="simples">多图</div>
        </div>
      </el-dialog>
    </div>
    <el-col>
      <el-button type="info" class="btn">提交</el-button>
    </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '请设置广告名称',
        name1: '请设置广告名称',
        name2: '请设置广告名称'
      },
      activeName: 'secord',
      imageUrl: '',
      centerDialogVisible: false
    }
  },
  methods: {
    addCreative () {
      console.log(111)
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = 'http://localhost:9090/' + res.data.value
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style>
.page {
  margin: 30px 0;
  height: 65px;
}

.uploading {
  margin-top: 30px;
  position: relative;
}

.mains {
  background: #fff;
}

.creativity,
.el-container {
  width: 100%;
  height: 100%;
}

.el-tabs__item.is-active {
  color: #FA8C16;
}

.el-tabs__item:hover {
  color: #FA8C16;
}

.el-tabs__active-bar {
  background: #FA8C16;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.btn {
  border-radius: 0;
  background: #E8E8E8;
  color: #333;
  width: 100px;
}

.add {
  color: #6399FF;
  position: absolute;
  top: 33px;
  left: 130px;
  font-size: 12px;
}

.add-left,
.add-right {
  width: 45%;
  height: 150px;
  border: 1px solid #ccc;
  float: left;
  margin-right: 10px;
}

.el-dialog {
  height: 300px;
}

.simple {
  margin-top: 20px;
  height: 70px;
}

.simple-power {
  width: 65px;
  height: 65px;
  background: #E8E8E8;
  margin-left: 10px;
}

.simple div {
  float: left;
}

.simple-head {
  width: 80px;
  height: 20px;
  background: #E8E8E8;
  margin-left: 10px;
  margin-top: 5px;
}

.simples {
  margin-top: 25px;
  width: 100%;
  text-align: center;
}

.add-right .simple-head {
  width: 90%;
  margin-top: 20px;
}

.add-right .simple-power {
  width: 43px;
  height: 43px;
  float: left;
  margin-top: 10px;
}

.add-right .simples {
  margin-top: 73px;
}
</style>
