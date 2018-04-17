<template>
  <div class="newbuilt">
    <el-container>
      <el-aside class="asides" width="200px">
        <el-col  :span="24">
          <el-menu default-active="2" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#F5F5F5" text-color="#333">
            <el-submenu index="1">
              <template slot="title">
                <span>新建广告计划</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/newbuilt/establish">选择计划</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span>广告单元</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/newbuilt/cell">基本信息</el-menu-item>
                <el-menu-item index="/newbuilt/cell">定向</el-menu-item>
                <el-menu-item index="/newbuilt/cell">广告位</el-menu-item>
                <el-menu-item index="/newbuilt/cell">出价</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span>广告创意</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/newbuilt/originality">落地页</el-menu-item>
                <el-menu-item index="/newbuilt/originality">上传创意</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main class="mains">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.asides {
  color: #333;
  height: 100%;
  background: #F5F5F5;
}
.el-main h1{
  font-size: 28px;
  font-weight: normal;
}
</style>
