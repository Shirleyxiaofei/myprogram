<template>
  <div class="login">
    <img :src="imgUrl" alt="" style="z-index:1">
    <div class="login_monitor">
      <div class="login_container">
        <img :src="imgUrlLog" alt="" style="z-index:2">
        <h2 class="user_login">用户登录</h2>
        <div class="login_table_r">
          <el-form :model="ruleForm" status-icon :rules="loginRules" ref="ruleForm" autoComplete="on" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="name">
              <el-input type="text" name="username" v-model="ruleForm.username" autoComplete="on" style="height:35px"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input :type="passwordType" name="password" v-model="ruleForm.password" autoCcomplete="on"
              @keyup.enter.native="handleLogin"></el-input>
              <span class="show-pwd" @click="showPwd">
                <svg-icon icon-class="eye" />
              </span>
            </el-form-item>
            <el-form-item  prop="vcode">
              <!-- <el-input :type="passwordType" name="vericode" v-model="ruleForm.vericode" autoCcomplete="on"
              ></el-input> -->
              <span class="vcode" >
              </span>
              <span class="vcode" @click="showPwd">
              </span>
            </el-form-item>
            <el-form-item>
              <el-button style="width:206px" type="primary" :loading="loading" @click.native.prevent="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";
import LangSelect from "@/components/LangSelect";
import SocialSign from "./socialsignin";
export default {
  components: { LangSelect, SocialSign },
  name: "login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error("账号不能为空"));
        console.log(callback());
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        vcode: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      imgUrl: "",
      imgUrlLog: "",
      passwordType: "password",
      loading: false
    };
  },
  created() {
    let urlTemp = "assets/images/bg.png",
      urlLoginBg = "assets/images/login_.png";
    this.imgUrl = require("@/" + urlTemp);
    this.imgUrlLog = require("@/" + urlLoginBg);
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
    },
    handleLogin() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("LoginByUsername", this.ruleForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: "/" });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="css">
.login {
  width: 100%;
  height: 100%;
  background: #3582b9;
  height: 660px;
  overflow: hidden;
}

.user_login,
.login_monitor {
  width: 550px;
  margin: 20px auto;
  padding: 20px;
  position: absolute;
  top: 50%;
  right: 160px;
  margin-top: -183px;
}
.user_login {
  left: 20px;
}
.login_container {
  position: relative;
}
.login_table_r {
  width: 60%;
  position: absolute;
  top: 100px;
  left: 12%;
}
.el-input__inner {
  height: 35px;
}
.show-pwd {
  position: absolute;
  right: 10px;
  top: 0px;
  font-size: 16px;
  color: #889aa4;
  cursor: pointer;
  user-select: none;
}
.vcode {
  width: 49%;
  height: 35px;
  display: inline-block;
  background: #fff;
}
</style>


<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 100px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      color: #fff;
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>
