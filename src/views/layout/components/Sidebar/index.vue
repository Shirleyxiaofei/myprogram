<template>
    <div class="sideBar" :style="{width: sideBarWidth + 'px'}" v-if='!aisdeHide'>
      <el-aside>
        <div class="aside-flex" :style="{width: isOpenSubMenu ? 'auto' : '380px'}">
          <el-row>
            <el-col :span="!isOpen ? 12 : 3" class="Menu">
              <el-menu :collapse="false"
              class="aside-width" :class="{'el-menu-collapse' : isOpen}" :default-active="routerName">
                <li class="el-menu-item" style="padding-left: 20px; text-align: center;" @click='toggle("isOpen")'>
                  <i class="aside-icon" >
                    <svg-icon icon-class="menu" v-if="isOpen"></svg-icon>
                    <svg-icon icon-class="menu" style="transform: rotate(90deg);" v-if="!isOpen" ></svg-icon>
                  </i>
                  <!-- <span slot="title" v-show="isOpen">切换开关</span> -->
                </li>


                <el-tooltip :disabled="!isOpen" v-for='(items ,index) in navListTwo' :key='index+1' :enterable='false' :content="items.name" placement="right">
                  <el-menu-item  :index='items.id' @click="showListDetail(index)">
                    <i class="aside-icon">
                      <svg-icon :icon-class='items.id'></svg-icon>
                      </i>
                    <span
                    @click="showListDetail(index)"
                    slot="title" v-show="!isOpen" class="side-name">{{items.name}}</span>
                  </el-menu-item>
                </el-tooltip>
              </el-menu>
            </el-col>
            <el-col :span="!isOpen ? 12 : 20" class='subMenu' v-if="!isOpen && subTitle!='首页'" >
              <transition name='aniFadeInout'>
                <ul class="sub-menu" v-if="isOpenSubMenu" >
                  <li class="sub-menu-title">{{subTitle}}</li>
                  <template v-if="isTwo">
                      <el-menu :default-active="''+0" class="el-menu-vertical-demo" background-color="#fff"  text-color="#606266" active-text-color="#ffd04b" v-show="isTwo">
                            <el-submenu v-for="(item,index) in subList" :index="''+index" :key="index">
                              <template slot="title">
                                  <span>{{item.title }}</span>
                              </template>
                              <el-menu-item v-for="(subItem,index) in item.subList" :index="item.title+'-'+index" :key="index">
                                  <router-link class="sub-menu-list" tag='li' :to='subItem.path'>{{subItem}}
                                      {{ subItem.title }}
                                  </router-link>
                              </el-menu-item>
                            </el-submenu>
                      </el-menu>
                  </template>
                    <template v-else>
                      <router-link class="sub-menu-list"
                          tag='li'
                          :to='item.path'
                          :key='index'
                          v-if="!item.hide"
                          v-for="(item,index) in subList"

                      >
                          {{ item.title}}
                      </router-link>
                      <el-menu :default-active="''+defaultIndex" class="el-menu-vertical-demo"
                                background-color="#fff" text-color="#606266"
                                active-text-color="#ffd04b" v-else-if="item.isSub">
                          <el-submenu :index="''+index" :key="index" class="el-menu-vertical-demo" >
                              <template slot="title">
                                  <svg-icon icon-class="next" class="el-submenu__icon-arrow"></svg-icon>
                                  <span class="f_s_12">{{item.title}}</span>
                              </template>
                          </el-submenu>
                      </el-menu>
                  </template>
                  <div class="toggle-subMenu"  v-if="isOpenSubMenu" @click="toggle('isOpenSubMenu')" :class="{'toggle-subMenuRight' : !isOpenSubMenu}">
                      <svg-icon icon-class="submenu"></svg-icon>
                      </div>
                    <!-- <div class="toggle-subMenu toggle-subMenu-aside" v-if="subMenuShow"  @click="toggle('isOpenSubMenu')" :class="{ 'toggle-subMenuLeft' :isOpen && !isOpenSubMenu ,'toggle-subMenuRight': !isOpen && !isOpenSubMenu}">
                      <svg-icon icon-class="submenu" style="transform: rotate(180deg);" v-if="!isOpenSubMenu" ></svg-icon>
                    </div> -->
                  </ul>
                </transition>
              </el-col>
           </el-row>
        </div>

      </el-aside>
    </div>
    <!-- <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu> -->
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import ScrollBar from "@/components/ScrollBar";
import list from "@/baseConfig/list";
import systemlist from "@/baseConfig/systemlist";
import homelist from "@/baseConfig/homelist";
export default {
  methods: {
    toggle(el) {
      if (el == "isOpen") {
        this.isOpen = !this.isOpen;
      }
      if (el == "isOpenSubMenu") {
        this.isOpenSubMenu = !this.isOpenSubMenu;
      }
    },
    handleSelect(index) {
      console.log(index);
      sessionStorage.setItem("Index", index);
    },
    showListDetail(index) {
      this.isTwo = false;
      this.subTitle =
        this.navListTwo[index].label || this.navListTwo[index].name;
      if (this.subTitle == "首页") {
        this.isOpenSubMenu = false;
      } else {
        this.isOpenSubMenu = true;
      }
      let asideList = this.navListTwo[index].subList;
      this.subList = asideList[0].subList ? asideList[0].subList : [];
      this.$router.push(this.subList[0].path);
    },
    isTab() {
      this.routerName = this.$route.matched[0].name;
      if (this.subTitle == "") {
        this.isOpenSubMenu = false;
      }
    }
  },

  components: { SidebarItem, ScrollBar },
  data() {
    return {
      isOpen: false,
      isOpenSubMenu: true,
      subList: "",
      subTitle: "",
      isTwo: true,
      aisdeHide: false,
      routerName: "",
      metaDepend: "",
      subMenuShow: false,
      defaultIndex: "0-0",
      activeIndex: 0,
      isCollapse: false,
      navListTwo: [
        {
          name: "首页",
          id: "hop",
          subList: homelist
        },
        {
          name: "产品/销售品管理",
          id: "psm",
          subList: list
        },
        {
          name: "销售管理",
          id: "smg",
          subList: list
        },
        {
          name: "客户管理",
          id: "cmm",
          subList: list
        },
        {
          name: "财务管理",
          id: "fcm",
          subList: list
        },
        {
          name: "服务开通",
          id: "fop",
          subList: list
        },
        {
          name: "一点开通管理",
          id: "opo",
          subList: list
        },
        {
          name: "系统管理",
          id: "smg1",
          subList: systemlist
        }
      ]
    };
  },
  computed: {
    sideBarWidth: function() {
      let widthValue;
      if (this.isOpenSubMenu && !this.isOpen) {
        widthValue = 350;
      } else if (!this.isOpen && !this.isOpenSubMenu) {
        widthValue = 175;
      } else if (this.isOpenSubMenu && this.isOpen) {
        widthValue = 51;
      } else {
        widthValue = 51;
      }
      this.$emit("paddingValue", widthValue);
      return widthValue;
    },
    ...mapGetters(["permission_routers", "sidebar"])
    // isCollapse() {
    //   return !this.sidebar.opened;
    // }
  },
  watch: {
    $route: "isTab"
  },
  mounted: function() {
    this.isTab();
  }
};
</script>
// #069ad1
<style lang="scss" scoped="scoped">
@import "src/styles/variables.scss";
$subMenuBackground: rgb(0, 132, 255);
$subMenuTitleBg: rgb(0, 132, 255);
$mainBackground: rgb(0, 132, 255);
$navBackground: #039;
$navDefaultColor: #d5e0e9;
$headerBackground: #069ad1;
$navActive: #e2d34f;
$subMenuListTitle: 45px;
$subMenuListHeight: 36px;
$elItemHeight: 45px;
.el-menu-vertical-demo {
  border-right: solid 0;
  height: auto !important;
}
#app .sidebar-container .svg-icon {
  margin-right: 0;
}
.side-name {
  margin-left: 15px;
  font-weight: 600;
  font-size: 14px;
}
.sideBar {
  position: relative;
  .el-aside {
    width: 350px !important;
    height: 100%;
    z-index: 3;
    overflow: hidden;
  }
  .aside-flex {
    /*display: flex;*/
    height: 100%;
    .f_s_12 {
      font-size: 12px;
      padding-left: 3px;
    }
    .sub-menu {
      background-color: $subMenuBackground;
      text-align: left;
      padding: 0;
      li {
        list-style-type: none;
        font-size: 12px;
      }
      .sub-menu-title {
        height: $subMenuListTitle;
        line-height: $subMenuListTitle;
        background-color: $subMenuTitleBg;
        color: #fff;
        font-weight: bold;
        height: 45px;
        line-height: 45px;
      }
      .sub-menu-list {
        height: $subMenuListHeight;
        line-height: $subMenuListHeight;
        background-color: $mainBackground;
        height: 45px;
        color: #fff;
        line-height: 45px;
        &:hover {
          cursor: pointer;
          background-color: #eee;
          color: #666;
        }
      }
      .router-link-active {
        background-color: $mainBackground;
      }
    }
  }
  .aside-width {
    background-color: $navBackground;
  }
  .aside-width:not(.el-menu--collapse) {
    width: 120px;
  }

  .el-menu {
    background: $navBackground;
  }

  .el-menu-item {
    height: $elItemHeight;
    line-height: $elItemHeight;
    font-size: 12px;
    color: $navDefaultColor;
    background-color: $navBackground;
    i {
      color: $navDefaultColor;
    }
    &visited,
    &focus,
    &:hover,
    &:active {
      background-color: $headerBackground;
      color: $navActive;
      border: none;
      outline: none;
      i {
        background-color: $headerBackground;
        color: $navActive;
        border: none;
      }
    }
    .aside-icon {
      font-size: 16px;
      margin-left: -3px;
    }
  }
  .is-active {
    background-color: $headerBackground;
    color: $navActive;
    border: none;
    i {
      background-color: $headerBackground;
      color: $navActive;
    }
  }
  .el-menu--collapse {
    width: 50px;
  }
  .toggle-subMenu {
    font-size: 60px;
    position: absolute;
    right: 0;
    text-align: right;
    width: 39px;
    top: 50%;
    overflow: hidden;
    cursor: pointer;
    z-index: 999;
  }
  .toggle-subMenu-aside {
    top: calc(50% + 45px);
  }
  .toggle-subMenuLeft {
    left: 30px;
    position: fixed;
  }
  .toggle-subMenuRight {
    left: 100px;
    position: fixed;
  }
  .p_l_20 {
    padding-left: 20px;
  }
}
</style>
<style>
.sideBar .el-menu > .el-submenu > .el-submenu__title > .el-submenu__icon-arrow {
  right: auto;
  margin-top: -4px;
  left: 10px;
}
.sub-menu > li {
  padding-left: 23px;
}
.sideBar .el-menu > .el-submenu > .el-submenu__title {
  height: 36px;
  line-height: 36px;
}
.sideBar .el-menu > .el-submenu > .el-submenu__title {
  height: 36px;
  line-height: 36px;
}

.sideBar .el-menu > .el-submenu > .el-menu > .el-menu-item {
  height: 36px;
  line-height: 36px;
  padding: 0px !important;
  min-width: 110px;
  color: #666 !important;
}
.sideBar i.el-icon-arrow-down {
  display: none;
}

.aside-flex .el-row,
.aside-flex .el-col,
.aside-flex .el-col ul {
  height: 100%;
}

.aside-flex .subMenu,
.aside-flex .subMenu ul {
  z-index: 999;
}

.aside-flex .Menu,
.aside-flex .Menu ul {
  z-index: 10000;
}
/*.sideBar .el-icon-arrow-down:before{content: "\25BC";}
    .sideBar .el-icon-arrow-down{font-size: 6px;color: #d6deec;}*/
</style>
<style scoped="scoped">
.aniFadeInout-enter-active {
  animation: slideOut 0.3s;
}

.aniFadeInout-leave-active {
  animation: slideOut 0.2s reverse;
}

.fadeIn-enter {
  animation: fadeIn 2s;
}

.fadeIn-leave {
  animation: fadeIn 2s reverse;
}

@keyframes slideOut {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 110px;
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    left: 30px;
  }
  to {
    left: 100px;
  }
}
</style>
