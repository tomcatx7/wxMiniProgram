<template>
  <div class="container">
    <div class="row-centered">
      <h2>欢迎登陆</h2>
      <div v-if="registerFormVisible">
        <registerForm></registerForm>
      </div>
      <div v-else>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-dynamic"
          size="medium"
        >
          <el-form-item label="账号" prop="userName">
            <el-input type="text" v-model="ruleForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verifyCode">
            <el-col :span="8">
              <el-input type="text" v-model="ruleForm.verifyCode"></el-input>
            </el-col>
            <el-col :span="16">
              <el-image
                style="width: 40px; height: 40"
                :src="verifyCodeImage"
                @click="getVerifyCodeImage"
              ></el-image>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="showRegisterForm">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
// import registerForm from "@/components/common/registerForm";
import axios from "axios";
import qs from "qs";

export default {
  name: "Login",
  components: {},
  created() {
    this.getVerifyCodeImage();
  },
  data() {
    var checkNull = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("内容不能为空"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        // if (this.ruleForm.checkPass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerFormVisible: false,
      verifyCodeImage: "",
      ruleForm: {
        userName: "",
        pass: "",
        verifyCode: "",
        asyID: ""
      },
      rules: {
        userName: [{ validator: checkNull, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        verifyCode: [{ validator: checkNull, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          axios
            .post("http://localhost:8088/dologin", qs.stringify(this.ruleForm))
            .then(result => {
              console.log("post data", result);
              this.$store.dispatch("setUserName", this.ruleForm.userName);
              this.$router.replace("index");
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getVerifyCodeImage() {
      axios.get("http://localhost:8088/getCodeImage").then(result => {
        console.log("result", result);
        if (result.data) {
          this.ruleForm.asyID = result.data.asyID;
          this.verifyCodeImage = result.data.verifyCodeImage;
        }
      });
    },
    showRegisterForm() {
      this.registerFormVisible = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row-centered {
  height: 300px;
  text-align: center;
  border: 1px solid #5e5e5e;
  border-radius: 20px;
  transform: translateY(50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
