<template>
  <div class="pmg">
    <div class="pmg-top">
      <span class="pmg-title">属性规格查询</span>
      <div class="line"></div>
      <div class="pmg-form">
        <el-form :inline="true"
          :model="formInline"
          class="demo-form-inline"
          label-width="100px">
          <el-form-item label="属性名称 :">
            <el-input v-model="formInline.user"></el-input>
          </el-form-item>
          <el-form-item label="属性编码 :">
            <el-input v-model="formInline.number"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
          <br/>

          <el-form-item label="属性值类型 :">
            <el-select v-model="formInline.region" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="默认 :">
            <el-select v-model="formInline.jobs" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmitRe">重置</el-button>
          </el-form-item>
          <br/>
          <el-form-item label="状态 :">
            <el-select v-model="formInline.region" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="属性类型 :">
            <el-select v-model="formInline.jobs" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>

    </div>
    <div class="line10"></div>
    <div class="pmg-content">
      <span class="pmg-title">属性列表</span>
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
          <el-button size="small" type="danger"
          @click="deleteMsg">
            注销
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
            width="40">
          </el-table-column>
          <el-table-column
            property="username"
            label="属性名称">
          </el-table-column>
          <el-table-column
            property="usernum"
            label="属性编码">
          </el-table-column>
          <el-table-column
            property="orgnization"
            label="属性描述">
          </el-table-column>
          <el-table-column
            property="region"
            label="属性值类型">
          </el-table-column>
          <el-table-column
            property="status"
            label="状态">
          </el-table-column>
          <el-table-column
            property="gangwei"
            label="默认值">
          </el-table-column>
          <el-table-column
            property="number"
            label="唯一性标志">
          </el-table-column>
          <el-table-column
          :show-overflow-tooltip="true"
            property="email"
            label="起始值">
          </el-table-column>
          <el-table-column
            property="number"
            label="结束值">
          </el-table-column>
          <el-table-column
            property="number"
            label="是否可空标志">
          </el-table-column>
          <el-table-column
            property="number"
            label="属性长度">
          </el-table-column>
          <el-table-column
            property="number"
            label="属性类型">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      title="属性规格信息"
      :visible.sync="dialogVisibleAdd"
      width="50%">
      <el-form
        ref="form"
        :model="form"
        :inline="true"
        label-width="90px">
        <el-form-item label="属性名称 :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="属性编码 :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="状态 :">
          <el-select v-model="form.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="默认值 :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="是否唯一 :">
          <el-select v-model="form.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否为空 :">
          <el-select v-model="form.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="属性值类型 :">
          <el-select v-model="form.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="属性类型 :">
          <el-select v-model="form.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="正则表达式 :">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="属性描述 :">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleAdd = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleAdd = false">保存</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="编辑规格信息"
      :visible.sync="dialogVisibleWrite"
      width="50%">
      <el-form
        ref="formWrite"
        :model="formWrite"
        :inline="true"
        label-width="100px">
        <el-form-item label="属性名称 :">
          <el-input v-model="formWrite.username" wieth="185px"></el-input>
        </el-form-item>
        <el-form-item label="属性编码 :">
          <el-input v-model="formWrite.usernum"></el-input>
        </el-form-item>
        <el-form-item label="状态 :">
          <el-select v-model="formWrite.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="默认值 :">
          <el-input v-model="formWrite.name"></el-input>
        </el-form-item>
        <el-form-item label="是否唯一 :">
          <el-select v-model="formWrite.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否为空 :">
          <el-select v-model="formWrite.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="属性值类型 :">
          <el-select v-model="formWrite.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="属性类型 :">
          <el-select v-model="formWrite.region" placeholder="集团">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="正则表达式 :">
          <el-input v-model="formWrite.name"></el-input>
        </el-form-item>
        <el-form-item label="属性描述 :">
          <el-input type="textarea" v-model="formWrite.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleWrite = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleWrite = false">保存</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="删除员工信息"
      :visible.sync="dialogVisibleDelete"
      width="30%">
      <span><i class="aside-icon" >
          <svg-icon icon-class="makesure" style="font-size:20px"></svg-icon>
        </i> 确定要删除该属性规格信息吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleDelete = false" >取 消</el-button>
        <el-button type="primary" @click="dialogVisibleDelete = false" >确定</el-button>
      </span>
    </el-dialog>
  </div>

</template>
<script>
export default {
  name: "pmg",
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
      console.log(val, this.currentRow, 9);
    },
    rewriteMsg() {
      if (this.currentRow == null) {
        this.$message({
          message: "请选择要编辑的项"
        });
      } else {
        console.log(this.formWrite, this.currentRow, 88);
        this.dialogVisibleWrite = true;
        this.formWrite = this.currentRow;
        console.log(this.formWrite, this.currentRow, 88);
      }
    },
    deleteMsg() {
      if (this.currentRow == null) {
        this.$message({
          message: "请选择要编辑的项"
        });
      } else {
        this.dialogVisibleDelete = true;
      }
    }
  },
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        });
      }
      return data;
    };
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
      dialogVisibleDelete: false,
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
      data: generateData(),
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
.pmg {
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
