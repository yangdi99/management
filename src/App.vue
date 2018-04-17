<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #022050">
        <el-menu :default-openeds="['2']" router>
          <div index='' class="system">智能投放系统</div>
          <el-menu-item class="new-built" index='/newbuilt'>
            <template slot="title">
              <i class="el-icon-plus"></i> 新建广告</template>
          </el-menu-item>
          <el-menu-item index='/'>
            <template slot="title">
              <i class="el-icon-menu"></i> 首页概览</template>
          </el-menu-item>
          <el-submenu index='2'>
            <template slot="title">
              <i class="iconfont icon-web-icon-"></i> 广告管理</template>
            <el-menu-item-group>
              <el-menu-item index="/plan">广告计划</el-menu-item>
              <el-menu-item index="/unit">广告单元</el-menu-item>
              <el-menu-item index="/creativity">广告创意</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index='/datacenter'>
            <template slot="title">
              <i class="iconfont icon-shuju"></i> 数据中心</template>
          </el-menu-item>
          <el-menu-item index="/workbox">
            <template slot="title">
              <i class="iconfont icon-icon--1"></i> 工具箱</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="iconfont icon-qian" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown>
            <i class="iconfont icon-Prompt" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>
            <span>{{username}}</span>
          </span>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['username'])
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

html,
body,
#app,
.el-main{
  width: 100%;
  height: 100%;
}

.el-header {
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
}

.el-aside {
  color: #fff;
}

.el-menu {
  background: #022050;
}

.el-menu li,
.el-submenu__title {
  color: #fff;
}

.el-menu-item:hover,
.el-submenu__title:hover {
  background: #2873FF;
}

.el-menu--inline {
  background: #1C2941;
}

.new-built {
  margin-bottom: 50px;
  background-image: linear-gradient(100deg, #095DE1, #081A6C);
}

.system {
  background: #1C2941;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background: #F5F5F5
}
</style>
