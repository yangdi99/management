<template>
  <div>
    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
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

}
</script>

<style>

</style>
