<template>
  <div class="login-wrap">
    <el-row class="rows" justify="center" type='flex'>
      <el-col :span="8">
        <el-form :model="ruleForm2"  ref="ruleForm2" class="demo-ruleForm">
          <el-form-item label="用户名" prop="username"  :rules="userRules">
            <el-input v-model="ruleForm2.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" :rules="passRules">
            <el-input type='password' v-model="ruleForm2.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm2: {
        username: '',
        password: ''
      },
      userRules: [
        {
          require: true,
          message: '请输入邮箱地址'
        },
        {
          type: 'email',
          message: '请输入正确的邮箱地址'
        }
      ],
      passRules: [
        {
          require: true,
          message: '请输入密码'
        },
        {
          message: '请输入正确的密码'
        }
      ]
    }
  },
  methods: {
    login () {
      this.$refs.ruleForm2.validate((isValid, options) => {
        if (isValid) {
          this.$store.dispatch('getToken', {
            ruleForm2: this.ruleForm2,
            notify: this.$notify,
            router: this.$router
          })
        } else {
          this.$notify({
            title: '警告',
            message: '请填写正确的用户名和密码',
            type: 'error'
          })
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
.rows {
  padding-top: 150px;
}

.el-button--primary,
.el-button--primary:hover {
  background: #022050;
}

.el-main .login-wrap {
  width: 100%;
  height: 100%;
  background: url('../../assets/bg.jpg')
}
</style>
