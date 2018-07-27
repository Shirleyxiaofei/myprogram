<template>
  <div class="hpg">
    <div class="hpg-search-t">
      <el-input v-model="searchCustem" placeholder="组织机构代码/客户名称" class="hpg-search-w"></el-input>
      <el-button type="primary" size="medium" @click="locateCustem">定位客户</el-button>
    </div>
    <div class="line10"></div>
    <div class="hpg-top">
      <span class="hpg-title">查询条件</span>
      <div class="line"></div>
      <div class="hpg-form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline"
          label-width="100px">
          <el-form-item label="客户名称 :">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="formInline.startTime"
              type="datetime"
              placeholder="请输入开始时间"
              default-time="12:00:00">
            </el-date-picker>——
            <el-date-picker
              v-model="formInline.endTime"
              type="datetime"
              placeholder="请输入结束时间"
              default-time="12:00:00">
            </el-date-picker>
          </el-form-item>
          <br/>
          <el-form-item label="销售品名称 :">
            <el-input v-model="formInline.number"></el-input>
          </el-form-item>
          <el-form-item label="订单状态 :">
            <el-input v-model="formInline.number"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmitRe">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
    <SearchOrder></SearchOrder>
    <!-- <div class="line10"></div> -->
    <div class="hpg-content">
      <span class="hpg-title">订单审核历史记录查询</span>
      <!-- <div class="line"></div> -->
      <div class="pro_table_container">

      </div>
    </div>
    <el-dialog
      title="删除员工信息"
      :visible.sync="dialogVisibleLocate"
      width="30%">
      <span><i class="aside-icon" >
          <svg-icon icon-class="makesure" style="font-size:20px"></svg-icon>
        </i> 确定要注销该员工信息吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleLocate = false" >取 消</el-button>
        <el-button type="primary" @click="dialogVisibleLocate = false" >确定</el-button>
      </span>
    </el-dialog>
  </div>

</template>
<script>
import SearchOrder from "@/components/SearchOrder";
import { abccd } from "@/api/article";
export default {
  name: "hpg",
  methods: {
    locateCustem() {
      this.askdj();
      console.log(23);
    },
    askdj() {
      abccd().then(res => {
        console.log(res);
      });
    },
    onSubmit() {},
    onSubmitRe() {}
  },
  created() {
    abccd().then(res => {
      console.log(res);
    });
  },
  components: { SearchOrder },
  data() {
    return {
      formInline: {
        user: "",
        number: "",
        region: "",
        jobs: "",
        startTime: "",
        endTime: ""
      },
      searchCustem: "",
      tableData: [
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        },
        {
          username: "asdasd",
          usernum: "213798213",
          orgnization: "销售部",
          region: "云公司",
          gangwei: "客户经理",
          status: "在职",
          number: "18273743898",
          email: "sadsadsa@163.com"
        }
      ],
      dialogVisibleLocate: false
    };
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.el-input--medium .el-input__inner {
  width: 185px;
}
.el-form-item__label {
  font-size: 12px;
}
.line {
  height: 1px;
  width: 100%;
  background: #fff;
}
.line10 {
  height: 10px;
  width: 100%;
}
.el-table thead tr {
  border-bottom: 1px solid #d5deed;
  th {
    background-color: #f0f2f7;
  }
}
.hpg-search-t {
  text-align: center;
  .el-input--medium {
    display: inline-block;
    width: 40%;
    .el-input__inner {
      width: 100%;
    }
  }
}
.hpg-top {
  .el-form-item__content .el-date-editor--datetime {
    margin-right: -32px;
  }
}
.el-dialog__header {
  background: #0084ff;
}
.el-dialog__title {
  color: #fff;
}
.el-textarea__inner {
  width: 450px;
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$mainBg: #ecf0f1;
.hpg {
  padding: 10px;
  height: 100%;
  font-size: 12px;
  .hpg-top {
    background: $mainBg;
    padding: 0 10px;
  }
  .hpg-content {
    background: $mainBg;
    padding: 0 10px;
  }
  .hpg-form {
    margin-top: 10px;
  }
  .hpg-title {
    display: block;
    padding: 10px 0;
    font-size: 14px;
    font-weight: 600;
  }
  .pro_table_container {
    background: #fff;
    overflow: hidden;
    padding: 10px;
    .pro_table_header {
      margin: 10px 0;
    }
  }
}
</style>
