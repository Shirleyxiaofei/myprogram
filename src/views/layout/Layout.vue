<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <navbar class="navbar"></navbar>

    <div class="main-container">
      <sidebar class="sidebar-container"></sidebar>

      <!-- <tags-view></tags-view> -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from "./components";

export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
#app .sidebar-container {
  margin-top: 49px;
  width: 300px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #069ad1;
  //  background-color: #429efd;
  color: #fff;
  z-index: 300;
}
.app-main {
  margin-top: 49px;
  overflow-y: auto;
}
</style>
