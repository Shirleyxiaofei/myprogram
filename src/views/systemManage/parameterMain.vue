<template>
  <div class="pam">
    <div class="pmg-top">
      <span class="pmg-title">系统参数查询</span>
      <div class="line"></div>
      <div class="pmg-form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="80px">
          <el-form-item label="pcode :">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
          <el-form-item label="stype :">
            <el-input v-model="formInline.number"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <br/>
          <el-form-item label="pvalue :">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
          <el-form-item label="comments :">
            <el-input v-model="formInline.number"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmitRe">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
    <div class="line10"></div>
    <div class="pmg-content">
      <span class="pmg-title">系统参数列表</span>
      <div class="line"></div>
      <div class="pro_table_container">
        <div class="pro_table_header">
          <el-button size="small" type="info"
          @click="dialogVisibleAdd = true">
            新增
          </el-button>
          <el-button size="small"
          @click="rewriteMsg">
            编辑
          </el-button>
        </div>
        <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          @current-change="handleCurrentChange"
          style="width: 100%">
          <el-table-column
            type="index"
            width="40"
            lable="sysid">
          </el-table-column>
          <el-table-column
            property="username"
            label="pcode">
          </el-table-column>
          <el-table-column
            property="usernum"
            label="stype">
          </el-table-column>
          <el-table-column
            property="orgnization"
            label="pvalue">
          </el-table-column>
          <el-table-column
            property="region"
            label="comments">
          </el-table-column>
          <el-table-column
            property="gangwei"
            label="valuea">
          </el-table-column>
          <el-table-column
            property="status"
            label="valueb">
          </el-table-column>
          <el-table-column
            property="number"
            label="valuec">
          </el-table-column>
          <el-table-column
            property="number"
            label="valued">
          </el-table-column>
          <el-table-column
          :show-overflow-tooltip="true"
            property="number"
            label="useFlag">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      title="参数信息"
      :visible.sync="dialogVisibleAdd"
      width="50%">
      <el-form
      ref="form"
      :model="form"
      label-width="100px">
        <el-form-item label="pcode :">
          <el-input v-model="form.name" width="100%"></el-input>
        </el-form-item>
        <el-form-item label="stype :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="pvalue :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="comments :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="valuea :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="valueb :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="valuec :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="valued :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="useFlag :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleAdd = false">保存</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="参数信息"
      :visible.sync="dialogVisibleWrite"
      width="50%">
      <el-form
      ref="formWrite"
      :model="formWrite"
      label-width="100px">
        <el-form-item label="pcode :">
          <el-input v-model="formWrite.username" width="100%"></el-input>
        </el-form-item>
        <el-form-item label="stype :">
          <el-input v-model="formWrite.usernum"></el-input>
        </el-form-item>
        <el-form-item label="pvalue :">
          <el-input v-model="formWrite.orgnization"></el-input>
        </el-form-item>
        <el-form-item label="comments :">
          <el-input v-model="formWrite.number"></el-input>
        </el-form-item>
        <el-form-item label="valuea :">
          <el-input v-model="formWrite.name"></el-input>
        </el-form-item>
        <el-form-item label="valueb :">
          <el-input v-model="formWrite.name"></el-input>
        </el-form-item>
        <el-form-item label="valuec :">
          <el-input v-model="formWrite.name"></el-input>
        </el-form-item>
        <el-form-item label="valued :">
          <el-input v-model="formWrite.name"></el-input>
        </el-form-item>
        <el-form-item label="useFlag :">
          <el-input v-model="formWrite.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleWrite = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleWrite = false">保存</el-button>
      </span>
    </el-dialog>
  </div>

</template>
<script>
export default {
  name: "pam",
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    onSubmitRe() {
      console.log("submit!");
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    rewriteMsg() {
      if (this.currentRow == null) {
        this.$message({
          message: "请选择要编辑的项"
        });
      } else {
        this.dialogVisibleWrite = true;
        this.formWrite = this.currentRow;
      }
    }
  },
  data() {
    return {
      formInline: {
        user: "",
        number: "",
        region: "",
        jobs: ""
      },
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
      currentRow: null,
      formWrite: [],
      multiselection: [],
      dialogVisibleAdd: false,
      dialogVisibleWrite: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      value1: [1, 4]
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
.pam .el-dialog__body .el-input--medium .el-input__inner {
  width: 98%;
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
.pam {
  padding: 10px;
  height: 100%;
  font-size: 12px;
  .pmg-top {
    background: $mainBg;
    padding: 0 10px;
  }
  .pmg-content {
    background: $mainBg;
    padding: 0 10px;
  }
  .pmg-form {
    margin-top: 10px;
  }
  .pmg-title {
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
