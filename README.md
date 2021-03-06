##  智能投放系统
###  1.整体技术选型

* 用 vue-cli 脚手架

* 选用vue框架做智能投资系统这个项目, 因为vue提供高效的数据绑定和灵活的组件系统, 是一个轻量级的框架, 且它的API简单易学, 异步批处理方式更新DOM, 组件可复用性, 在组件中vue即支持jsx，也可以将CSS和HTML都写入js文件中,又可以使用template模板进行编译, vue中可以直接在style中写css语法,可以支持媒体查询, 扩展性强, 既可以向上又可以向下扩展

* 当我们会遇到单页面中包含着大量的组件及复杂的数据结构, 使用vuex就会方便很多
        
* 写项目时我们采用elementUI, 因为element-ui是一套采用 Vue 2.0 作为基础框架实现的组件库, 它面向企业级的后台应用, 可以快速地搭建网站, 极大地减少研发的人力与时间成本。

* ECharts, 一个纯 Javascript 的图表库, 可以流畅的运行在 PC 和移动设备上, 兼容当前绝大部分浏览器, 底层依赖轻量级的 Canvas 类库 ZRender,提供直观, 生动, 可交互, 可高度个性化定制的数据可视化图表。

* es6:let可以声明块级变量箭头函数,箭头函数与包围它的代码共享同一个thisimport模块,除了基本语法外,开发者还可以在一个模块中多次export以及import整个模块作为一个特定的命名空间优化了“尾调用（Tail Calls）”:一直到ES5,函数递归调用过多会导致栈溢出（到达内存上限）,这是因为函数每次调用自己时都会调用一个新版本。但优化之后，每次调用会同上次调用共享同一个上下文,保证了内存使用率的稳定。

* 封装axios 请求拦截 和 响应拦截
``` axios
  // 请求拦截
  instance.interceptors.request.use((config) => {}, (err) => {})

  // 响应拦截
  instance.interceptors.response.use((response) => {}, (err) => {})
```
* 用node搭建一个简单的静态服务器, 模拟接口

###  2.路由搭建，路由拦截的实现，权限接口设置

* vue-router 搭建路由

* 在router.js中搭建关于登录页、首页、广告管理页、数据中心、工具箱及新建广告的一级路由以及新建广告下的建立广告计划、广告单元、广告创意的二级路由。
        路由拦截，判断该用户是否登录，没有登录跳转到login页，登录后将数据存储到localStorage中
#### 路由拦截
```router
  // 用 vue-router 的 beforeEach 实现导航守卫
  router.beforeEach((to, from, next) => {
    let islogin = routeToken()
    if (to.name === 'login') {
        next()
    } else {
        if (!islogin) {
        next('/login')
        } else {
        next()
        }
    }
  })
  function routeToken () {
    let tkn = localStorage.getItem('token')
    if (tkn) {
        store.commit('saveUser', localStorage.getItem('username'))
    }
    ·return !!tkn
  }
```
###  3.数据请求以及如何封装全局请求接口
* 采用axios来处理网络请求, 为了避免在每次请求时都去判断各种各样的网络情况, 对axios进行了封装, 主要使用axios中的拦截器的功能, 在相应拦截器中对请求常见的错误进行了全局异常处理, 把封装后的axios挂载在Vue原型上```(Object.defineProperty(Vue.prototype, '$axios', {value: instance}))```,以便全局使用

```axios
  // 请求拦截
  instance.interceptors.request.use((config) => {}, (err) => {})

  // 响应拦截
  instance.interceptors.response.use((response) => {}, (err) => {})
```  

###  4.项目中的核心功能和难点功能介绍
* 登录
    - 点击登录把用户名和密码传给后台,后台与数据库中的数据做比较, 登录成功时把登录名存到localStroage和store中
* 首页 
    - 根据月份动态渲染更新ECharts图表
* 新建广告  
    - 建立广告计划
    - 广告单元
    - 广告创意  
      * 上传广告 点击添加创意, 弹出遮罩层, 点击单图, 就会添加一个创意, 在创意中点击上传图片, 请求后台接口, 将上传到的图片由后台写入文件夹
###  5.数据管理(store 是如何管理和维护数据的)

    Vuex在项目中，提供管理和维护数据源的仓库

    state:数据的定义以及存放数据的属性，类似于组件内部的data属性
    action: 提交的是mutation，而不是直接更变状态。action可以包含任意异步操作。
    mutation: 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    涉及数据改变用mutation,涉及业务逻辑的使用actions
###  6.遇到的困难以及解决方式(自定义组件)

    遇到的难点：计算日历起始与结束的遍历循环数据
    解决的方式：使用element-ui库，对它的一些组件什么的都不是很了解，在日期这块也花费了很长时间，最后自己封装了一个公共方法获取日期，处理也来也方便