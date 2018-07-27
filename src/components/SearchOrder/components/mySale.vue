<template>
<div class="hpg-content">
      <span class="hpg-title">我的销售品/服务项申请单</span>
      <!-- <div class="line"></div> -->
      <div class="pro_table_container">
        <el-table
          :data="tableData"
          highlight-current-row
          style="width: 100%">
          <el-table-column
          property="index"
          width="40">

          </el-table-column>
          <el-table-column
            property="username"
            label="申请编号">
          </el-table-column>
          <el-table-column
            property="usernum"
            label="申请标题">
          </el-table-column>
          <el-table-column
            property="orgnization"
            label="对象类型">
          </el-table-column>
          <el-table-column
            property="region"
            label="对象名称">
          </el-table-column>
          <el-table-column
            property="gangwei"
            label="申请人">
          </el-table-column>
          <el-table-column
            property="status"
            label="申请时间">
          </el-table-column>
          <el-table-column
          :show-overflow-tooltip="true"
            property="number"
            label="申请单状态">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="mini">[查看审批流程]</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>
<script>
export default {
  name: "asc",
  methods: {},
  data() {
    return {
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
      ]
    };
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.el-input--medium .el-input__inner {
  width: 185px;
}
.el-table thead tr {
  border-bottom: 1px solid #d5deed;
  th {
    background-color: #f0f2f7;
  }
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
