<template>
  <div>
    <div class="top" :style="{backgroundImage: 'url(' + logoImg + ')'}">
        <!-- <img src="../../assets/image/logo.jpg" style="width:100%;height:80px;"/> -->
        <div class="userInfo">
          <img src="../../assets/image/astronaut.png" style="width:40px;height:40px; border-radius: 80px;">
        </div>
    </div>

    <!--service企业服务-->
    <div id="service">
      <div id="company_title">
        <div class="title1">
          <img src="img/title1.jpg" />
        </div>
      </div>

      <div id="service_picture">
        <div class="picture1 left">
          <h4>企业培训</h4>
          <div class="service_public">
            <p class="training_intro">为企业经营诊断整合、体系建立、流程梳理、</p>
            <p class="training_intro">各种类型的员工培训、代理企业新技术项目</p>
          </div>
        </div>

        <div class="picture2 left i2width">
          <h4>劳务派遣</h4>
          <div class="service_public">
            <p class="training_intro">为企业提供劳务用工派遣（临时工、小时工、</p>
            <p class="training_intro">普工、固定工、承包生产线、短期项目承包、</p>
            <p class="training_intro">...</p>
          </div>
        </div>

        <div class="picture3 right">
          <h4>企业服务</h4>
          <div class="service_public">
            <p class="training_intro">为企业提供基、中、高端技工，基、中、高</p>
            <p class="training_intro">端管理人才和人才测评</p>
          </div>
        </div>
      </div>
    </div>

    <!--case客户案例-->
    <div id="case">
      <div id="company_title">
        <div class="title2">
          <img src="img/title2.png" />
        </div>
      </div>

      <div id="ClassCase">
        <div class="picture4 left">
          <div class="custom_case_content">
            <h3>案例名称：新员工培训</h3>
            <img src="img/i4.png" width="271px" height="125px"/>
            <p>“《劳动合同法》明确了劳务派遣的用工形式，是把双刃剑，一方面它的执行提高了劳动者的维权意识，一方面也规范了企业的用工...</p>
          </div>
          <a href="#"><img class="more" src="img/more.jpg" width="74" height="24"/></a>
        </div>

        <div class="picture4 left i3width">
          <div class="custom_case_content">
            <h3>案例名称：新员工培训</h3>
            <img src="img/i4.png" width="271px" height="125px"/>
            <p>“《劳动合同法》明确了劳务派遣的用工形式，是把双刃剑，一方面它的执行提高了劳动者的维权意识，一方面也规范了企业的用工...</p>
          </div>
          <a href="#"><img class="more" src="img/more.jpg" width="74" height="24"/></a>
        </div>

        <div class="picture4 right">
          <div class="custom_case_content">
            <h3>案例名称：新员工培训</h3>
            <img src="img/i4.png" width="271px" height="125px"/>
            <p>“《劳动合同法》明确了劳务派遣的用工形式，是把双刃剑，一方面它的执行提高了劳动者的维权意识，一方面也规范了企业的用工...</p>
          </div>
          <a href="#"><img class="more" src="img/more.jpg" width="74" height="24"/></a>
        </div>
      </div>
    </div>
    <br />

    <!--info员源新闻-->
    <div id="info-max">
      <div id="info_title">
        <div class="info_ltitle">
          <div class="div_info_h3">
            <h3>员源新闻&nbsp;<span>HOT NEW</span></h3> </div>
          <div class="info_ltitle_right">更多<img src="img/logo2.png"/></div>
        </div>

        <div class="info_rtitle">
          <div class="div_info_h3">
            <h3>员源最新招聘&nbsp;<span>New Job</span></h3>   </div>
          <div class="info_ltitle_right">更多<img src="img/logo2.png"/></div>
        </div>
      </div>

      <div id="info_content">
        <div id="info_left">
          <div id="info_left1">
            <div class="div_info_img"><img src="img/info1.png"/></div>
            <div class="info_img_right">
              <h2>如今慢慢趋于转向“劳务外包”</h2>
              <p>“目前这几年下来暂不招工人，许多都在天然减员，能省下公司一笔成本，下一步还将经过扩展外包的方法进一步削减出产一线的用工”，马良广接受采访...</p>
            </div>
          </div>
          <div id="info_left2">
            <ul>
              <li><a href="#"><span>如今慢慢趋于转向“劳务外包”</span></a></li>
              <li><a href="#"><span>劳务派遣行业门槛将提高</span></a></li>
              <li><a href="#"><span>农民工司令张全收：珠三角已不是人力大本营</span></a></li>
              <li><a href="#"><span>2012新法下劳务派遣形式分析与派遣员工管理高级研讨会</span></a></li>
              <li><a href="#"><span>掘金中国制造：工段外包的秘密</span></a></li>
              <li><a href="#"><span>全国工会组织劳务派遣工入会工作现场经验交流会议在沈阳召开</span></a></li>
            </ul>
          </div>
        </div>
        <div id="info_right">
          <div id="div_table">
            <table cellpadding="9" border="0" cellspacing="0">
              <tr class="odd"><td class="td">职位名称</td><td>工作地点</td><td>招聘数量</td><td>薪资</td><td>结束时间</td>
              </tr>
              <tr class="even"><td>营销总监</td><td>福州</td>
                <td>1</td><td>面议</td><td>2014-06-30</td>
              </tr>
              <tr class="odd"><td>金融副总理</td><td>晋江</td>
                <td>1</td><td>面议</td><td>2014-06-30</td>
              </tr>
              <tr class="even"><td>市场经理</td><td>成都</td>
                <td>1</td><td>面议</td><td>2014-06-30</td>
              </tr>
              <tr class="odd"><td>营销总监</td><td>福州</td>
                <td>1</td><td>面议</td><td>2014-06-30</td>
              </tr>
              <tr class="even"><td>金融副总理</td><td>晋江</td>
                <td>1</td><td>面议</td><td>2014-06-30</td>
              </tr>
              <tr class="odd"><td>金融副总理</td><td>晋江</td>
                <td>1</td><td>面议</td><td>2014-06-30</td>
              </tr>
              <tr class="even"><td>市场经理</td><td>成都</td>
                <td>1</td><td>面议</td><td>2014-06-30</td>
              </tr>
              <tr class="odd"><td>营销总监</td><td>福州</td>
                <td>1</td><td>面议</td><td>2014-06-30</td>
              </tr>
              <tr class="even"><td>金融副总理</td><td>晋江</td>
                <td>1</td><td>面议</td><td>2014-06-30</td>
              </tr>
            </table></div>
        </div>
      </div>
    </div>

    <!--合作企业-->
    <div id="test-max">
      <div id="text-title">
        <div class="div_info_h3 partner">
          <h3>员源合作企业&nbsp;<span>Customer testimonials</span></h3> </div>
      </div>
      <div id="text-content">
        <div class="text-content1">
          <div class="text-lcontent left"><img src="img/Coke.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
          <div class="text-lcontent left"><img src="img/meike.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
          <div class="text-lcontent left"><img src="img/quechao.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
          <div class="text-lcontent left"><img src="img/al.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
          <div class="text-lcontent1 right "><img src="img/kaiqi.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
        </div>

        <div class="text-content2">
          <div class="text-lcontent left"><img src="img/Coke.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
          <div class="text-lcontent left"><img src="img/meike.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
          <div class="text-lcontent left"><img src="img/quechao.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
          <div class="text-lcontent left"><img src="img/al.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
          <div class="text-lcontent1 right "><img src="img/kaiqi.png"/><span>厦门太古可口可乐饮料有限公司</span></div>
        </div>
      </div>
      </div>

    <!--友情链接-->
      <div id="friendlink">
      <div id="links">
        <!--<table>
            <tr>
                <td><a href="#">21世纪人才网</a></td>
                <td><a href="#">上海总工会</a></td>
                <td><a href="#">上海人力资源和社会保障局</a></td>
                <td><a href="#">中国人力资源网</a></td>
            </tr>
        </table>-->
        <ul >
          <li><a href="#">21世纪人才网</a></li>
          <li><a href="#">上海总工会</a></li>
          <li id="big"><a href="#">上海人力资源和社会保障局</a></li>
          <li><a href="#">中国人力资源网</a></li>
        </ul>

      </div>
      </div>
    <!--foot底部-->
      <div id="footer_nav" >
      <div id="bootme_nav">
        <ul>
          <li><a href="#">网页首页</a></li>
          <li><a href="#">关于员源</a></li>
          <li><a href="#">人才通道</a></li>
          <li><a href="#">技能培训</a></li>
          <li><a href="#">劳务派遣</a></li>
          <li><a href="#">企业服务</a></li>
          <li><a href="#">成功案例</a></li>
          <li><a href="#">新闻资讯</a></li>
          <li id="contact"><a href="#">联系我们</a></li>
        </ul></div>
    </div>

      <div id="footer_bootme" >
      <div id="bootme1">
        <p class="bootme_intro">上海员源主要业务有：培训、人事代理、项目申报、劳务派遣、企业咨询、验厂辅导等服务；涉及电子、机械、食品、饮料、化妆、化纤、工艺、卫浴、运动、保健、服装、鞋帽、</p>
        <p class="bootme_intro">轻纺、印刷、印花、商贸、物流等多种行业的大、中、小企业服务，赢得了上百家知名企业的欢迎和信赖，已拥有较多的集团、大、中、小企业成为我们长期合作的伙伴。</p>
      </div>

      <div id="bootme2">
        <div id="saosao">
          <img src="img/saosao.png" />
          <span>扫一扫</span>
        </div>
        <div id="lianxi">
          <img src="img/lianxi.png" />
        </div>
        <div id="beian">
          Copyright © 2011  版权所有  复制必究 ICP许可证号:沪ICP备11909206号-1  技术支持：
        </div>
      </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
          logoImg: require('../../assets/image/logo.jpg')
    }

  },
  mounted(){

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*不用添加scoped，需要都在公共组件页面显示*/
  .top{
    width: 100%;
    height:80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  } 
  .userInfo{
    margin-right: auto;
  }
</style>
