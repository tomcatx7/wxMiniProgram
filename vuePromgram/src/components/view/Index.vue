<template>
  <div class="index">
    <div class="top align-center" :style="{backgroundImage: 'url(' + logoImg + ')'}">
      <!-- <img src="../../assets/image/logo.jpg" style="width:100%;height:80px;"/> -->
      <div>
        <userInfo></userInfo>
      </div>
    </div>

    <div class="showImage">
      <div class="block">
        <el-carousel height="350px">
          <el-carousel-item v-for="item in showImages" :key="item">
            <el-image :src="item"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="content">
      <el-tabs type="border-card" >
        <el-tab-pane v-for="item in 2" :key="i">
          <span slot="label">
            <i class="el-icon-date"></i>公司简介
          </span>
          <el-card>
            <el-row :gutter="20">
              <el-col :span="8">
                <img src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" />
              </el-col>
              <el-col :span="16">
                <div>
                  <h2 style="padding-bottom:20px">公司简介</h2>
                  <div id="adiv">
                    <p>
                      之前做过一个IM的项目，里面涉及了基本的聊天功能，所以注意这系列的文章不是练习，不含基础和逐步学习的部分，直接开始实战和思想引导，基础部分需要额外的去补充，我有精力的话可以后续出一系列的文章。
                      为什么第一篇是聊天室，聊天室是最容易实现的部分。也是IM结构最简单的一部分，其次作单聊和群聊，业务逻辑层层递增，彻底的拿下聊天室的代码，进阶单聊和群聊就很简单了，后续我还会推出直播间的实现。
                      如果单纯想实现聊天室很简单，但是我尽量会把流程都走全，为了方便理解。
                      主要由两个功能类实现：初始化类+响应处理类
                    </p>
                    <p>
                      之前做过一个IM的项目，里面涉及了基本的聊天功能，所以注意这系列的文章不是练习，不含基础和逐步学习的部分，直接开始实战和思想引导，基础部分需要额外的去补充，我有精力的话可以后续出一系列的文章。
                      为什么第一篇是聊天室，聊天室是最容易实现的部分。也是IM结构最简单的一部分，其次作单聊和群聊，业务逻辑层层递增，彻底的拿下聊天室的代码，进阶单聊和群聊就很简单了，后续我还会推出直播间的实现。
                      如果单纯想实现聊天室很简单，但是我尽量会把流程都走全，为了方便理解。
                      主要由两个功能类实现：初始化类+响应处理类
                    </p>
                    <p>
                      之前做过一个IM的项目，里面涉及了基本的聊天功能，所以注意这系列的文章不是练习，不含基础和逐步学习的部分，直接开始实战和思想引导，基础部分需要额外的去补充，我有精力的话可以后续出一系列的文章。
                      为什么第一篇是聊天室，聊天室是最容易实现的部分。也是IM结构最简单的一部分，其次作单聊和群聊，业务逻辑层层递增，彻底的拿下聊天室的代码，进阶单聊和群聊就很简单了，后续我还会推出直播间的实现。
                      如果单纯想实现聊天室很简单，但是我尽量会把流程都走全，为了方便理解。
                      主要由两个功能类实现：初始化类+响应处理类
                    </p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="关于产品">关于产品</el-tab-pane>
        <el-tab-pane label="新闻动态">新闻动态</el-tab-pane>
        <el-tab-pane label="联系我们">联系我们</el-tab-pane>
      </el-tabs>
    </div>
    <div id="id_footer">
      banquanusoyou
    </div>
  </div>
</template>

<script>
import userInfo from '@/components/common/userInfo';
export default {
  name: "Index",
  components:{userInfo},
  data() {
    return {
      logoImg: require("../../assets/image/logo.jpg"),
      showImages: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg"
      ]
    };
  },
  //在data初始化之后赋值
  mounted() {
    this.showImages = [
      require("../../assets/image/image1.jpg"),
      require("../../assets/image/image2.jpg"),
      require("../../assets/image/image3.jpg"),
      require("../../assets/image/image4.jpg")
    ];
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*不用添加scoped，需要都在公共组件页面显示*/

img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
#adiv {
  overflow: hidden;
  padding-bottom: 10px;
}

#adiv p {
  text-align: left;
  text-indent: 2em;
  line-height: 25px;
  font-family: 微软雅黑;
  font-size: medium;
  background-color: #dddddd;
  /* #DDDDDD */
}
#id_footer {
    height: 40px; /*设定footer高度*/
    bottom: 0;
    width: 100%; /*展开footer宽度*/
    background-color: #dddddd;
    line-height: 40px;
}

.el-col {
  height: 300px;
  overflow: hidden;
}

.index {
  width: 98%;
  height: 100%;
  marign: 0 auto;
}
.top {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row-reverse;
}
/* .userInfo {
  padding-right: 60px;
} */
.showImage {
}

.content {
}

.content-body {
  height: 480px;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.align-center {
  align-items: center;
}

.just-center {
  justify-content: center;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
