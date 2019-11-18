<template>
  <div class="userInfo">
    <div v-if="userName">
      <!-- <img
        src="../../assets/image/astronaut.png"
        style="width:40px;height:40px; border-radius: 80px;"
      /> -->
      <el-avatar :size="50" src="../../assets/image/astronaut.png"></el-avatar>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{userName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userCenter">用户中心</el-dropdown-item>
          <el-dropdown-item command="logout">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div v-else>
      <router-link to="/login"><a>请登录</a></router-link>
    </div>
  </div>
</template>

<script>
import {mapState} from 'Vuex';
export default {
  name: "userInfo",
  data() {
    return {
      
    };
  },
  computed:{
    ...mapState({
      userName:state => state.userName
    })
  },
  methods:{
    handleCommand(command){
      if(command === 'userCenter'){
        
      }else if(command === "logout"){
        this.$store.dispatch("setUserName",null);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.userInfo{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 20px
}
</style>
