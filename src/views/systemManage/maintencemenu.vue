<template>
  <div class="mcm">
    <div class="mcm_aside_left">
      <div class="mcm_aside_e">
        <el-tree :data="menuList"
          :props="defaultProps"
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
          accordion
          node-key="id">
          <span class="custom-tree-node"
          slot-scope="{node,data}">
          <span>{{node.label}}</span></span></el-tree>
      </div>
    </div>
    <div class="mcm_content_right">
      <div class="add_btn">
        <el-button type="primary" size="mini" @click="addMenu">添加菜单</el-button>
      </div>
      <div class="line"></div>
      <div class="mcm_content_f">
        <el-form :inline="true" :model="showList" class="demo-form-inline" label-width="110px">
          <el-form-item label="上级菜单">
            <el-input v-model="showList.lastMenu" ></el-input>
          </el-form-item>
          <br/>
          <el-form-item label="菜单名称">
            <el-input v-model="showList.label" ></el-input>
          </el-form-item>
          <el-form-item label="菜单排序号">
            <el-input v-model="showList.nodeId" ></el-input>
          </el-form-item>
          <br/>
          <el-form-item label="模块名称">
            <el-input v-model="showList.label" ></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="showList.label" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <br/>
          <el-form-item label="模块URL">
            <el-input v-model="showList.path" ></el-input>
          </el-form-item>
          <el-form-item label="菜单描述 :">
            <el-input type="textarea" v-model="showList.path"></el-input>
          </el-form-item>
          <el-form-item label="用户上岗信息 :">
          <template>
            <el-transfer
              style="display:block"
              v-model="value1"
              :data="data"
              :titles="['岗位列表', '已选岗位']"></el-transfer>
            </template>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('showList')">提交</el-button>
            <el-button @click="resetForm('showList')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog
      title="添加菜单"
      :visible.sync="dialogVisibleAdd"
      width="50%"
      :before-close="handleClose">
      <div class="mcm_content_f">
        <el-form :inline="true" :model="addShowList" class="demo-form-inline" label-width="110px">
          <el-form-item label="上级菜单">
            <el-input v-model="addShowList.lastMenu" ></el-input>
          </el-form-item>
          <br/>
          <el-form-item label="菜单名称">
            <el-input v-model="addShowList.label" ></el-input>
          </el-form-item>
          <el-form-item label="菜单排序号">
            <el-input v-model="addShowList.nodeId" ></el-input>
          </el-form-item>
          <br/>
          <el-form-item label="模块名称">
            <el-input v-model="addShowList.label" ></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="addShowList.label" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <br/>
          <el-form-item label="模块URL">
            <el-input v-model="addShowList.path" ></el-input>
          </el-form-item>
          <el-form-item label="菜单描述 :">
            <el-input type="textarea" v-model="addShowList.path"></el-input>
          </el-form-item>
          <el-form-item label="用户上岗信息 :">
          <template>
            <el-transfer
              style="display:block"
              v-model="value1"
              :data="data"
              :titles="['岗位列表', '已选岗位']"></el-transfer>
            </template>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(addShowList)">保存</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>

</template>
<script>
let addMenuId = 1001;
import menulist from "@/baseConfig/menulist";
export default {
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
      data: generateData(),
      value1: [1, 4],
      menuList: menulist,
      defaultProps: {
        children: "children",
        label: "label"
      },
      showList: {
        label: "",
        nodeId: "",
        lastMenu: "",
        path: "",
        status: ""
      },
      addMenuList: {},
      addShowList: {
        label: "",
        nodeId: "",
        lastMenu: "",
        path: "",
        status: "",
        id: 0
      },
      dialogVisibleAdd: false
    };
  },
  methods: {
    handleNodeClick(data, checked, indeter) {
      // checked.level菜单级别（一级菜单、二级菜单）
      // checked.parent.label上级菜单
      // data.label菜单名称
      // data.$stringNodeId菜单排序号
      this.addMenuList = data;
      if (checked.level == 1) {
        this.showList = this.showList;
      } else {
        this.showList.label = data.label;
        this.showList.nodeId = data.$treeNodeId;
        this.showList.lastMenu = checked.parent.label;
        this.showList.path = data.path;
      }
      this.addShowList.lastMenu = data.label;
      this.addShowList.id = data.id;
    },
    onSubmit(data) {
      console.log("submit!");
    },
    resetForm(data) {
      console.log("submit!");
    },
    submitForm(data) {
      this.append(this.addMenuList);
    },
    addMenu() {
      this.dialogVisibleAdd = true;
      if (this.addShowList.lastMenu == "") {
        this.addShowList.lastMenu = "菜单";
        this.addShowList.id = 1;
      }
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    append(data) {
      const newChild = {
        id: addMenuId++,
        label: this.addShowList.label,
        children: []
      };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
$mainBg: #ecf0f1;
.mcm {
  padding: 10px;
  min-height: 100%;
  font-size: 12px;
  display: flex;
  flex: 1;
  flex-direction: row;
  .mcm_aside_left {
    width: 30%;
    background: $mainBg;
    min-height: 100%;
    padding: 10px;
  }
  .mcm_content_right {
    background: $mainBg;
    width: calc(70% - 20px);
    margin-left: 19px;
    padding: 10px;
    height: 100%;
  }
  .el-form-item--medium {
    &:nth-child(9) {
      width: 100%;
      .el-form-item__content {
        width: 488px;
      }
    }
    .el-select--medium {
      width: 185px;
    }
  }
}
</style>