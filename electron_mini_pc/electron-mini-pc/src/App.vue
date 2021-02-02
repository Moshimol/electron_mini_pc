<template>
  <el-container id="app" class="container">
    <el-header height="100%">
      <mini-top></mini-top>
    </el-header>
    <el-main>内容显示</el-main>
  </el-container>
</template>

<script>
import miniTop from "@views/custom/minitop.vue";

export default {
  name: "app",
  components: { miniTop },
  data() {
    return {
      index: 0
    };
  },
  computed: {},
  method: {}
};
</script>
<style>
@import "./assets/iconfont/iconfont.css";

.container {
  padding: 0px;
}
.el-header,
.el-main {
  padding: 0 !important;
}
</style>
