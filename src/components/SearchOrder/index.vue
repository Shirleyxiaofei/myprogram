<template>
  <div class="search_order">
    <searchOrder></searchOrder>
    <div class="line10"></div>
    <mySale></mySale>
    <saleApproved></saleApproved>
    <selectPaddingSale></selectPaddingSale>
    <paddingOrder></paddingOrder>
  </div>
</template>
<script>
import searchOrder from "./components/searchOrder";
import mySale from "./components/mySale";
import saleApproved from "./components/saleApproved";
import selectPaddingSale from "./components/selectPaddingSale";
import paddingOrder from "./components/paddingOrder";
export default {
  name: "search",
  components: {
    searchOrder,
    mySale,
    saleApproved,
    selectPaddingSale,
    paddingOrder
  }
};
</script>
<style>
.line10 {
  height: 10px;
  width: 100%;
}
</style>