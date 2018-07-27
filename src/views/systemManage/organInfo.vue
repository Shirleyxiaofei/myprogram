<template>
  <div class="components-container" style="width:500px;">
    <el-button size="small" icon="el-icon-back" @click="goBack()" class="mb10">返回上一级</el-button>

    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="机构编码">
        <el-input v-model="formLabelAlign.name" ></el-input>
      </el-form-item>
      <el-form-item label="机构名称">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="机构类型">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="更新时间">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
    <el-button class="filter-item" @click="change()" type="primary">{{'编辑'}}</el-button>

  </div>
  

</template>

<script>
import BackToTop from '@/components/BackToTop'

export default {
  name: 'backToTop-demo',
  components: { BackToTop },
  data() {
  return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
  },
  methods:{
    change(){

    },
    goBack(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.placeholder-container div {
  margin: 10px;
}
.mb10 {
  margin-bottom: 20px;
}
</style>
