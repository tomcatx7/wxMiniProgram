<template>
  <div>

   <el-tabs :tab-position="left" style="height: 200px;">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
   </el-tabs>
  </div>

</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*不用添加scoped，需要都在公共组件页面显示*/

.left-nav{
    /* 字体颜色 */
    color: #fff;
    /* 图标大小 */
    font-size: 10px;
    /* 基本的高 */
    height: 100%;
    /* 背景色跟饿了么一样 */
    background-color:#409EFF;
    /* 浮动 */
    float: left;
    /* 基本宽度 */
    width: 5%;
    position:fixed;
}
.iconfont{
    /* 设置图标大小 */
    font-size: 24px;
}
.left-nav ul{
    /* 去除初始化设置的值 */
    margin: 0;
    padding: 0;
}
.left-nav li{
    /* 设置列表不带点类型 */
    list-style-type: none;
    /* 设置内容居中 */
    text-align: center;
    /* 设置底边 */
    border-bottom: 1px solid #20a0ff;
    /* 设置图标边距 */
    padding:10px;
}

</style>
