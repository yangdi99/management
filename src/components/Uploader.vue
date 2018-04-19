<template>
  <div>
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
      imageUrl: ''
    }
  },
  methods: {
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

</style>
