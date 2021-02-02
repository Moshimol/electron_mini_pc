<template>
  <el-container id="app" class="container">
    <el-header height="30px">
      <mini-top></mini-top>
    </el-header>
    <el-main>底部内容的显示</el-main>
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
.container {
  padding: 0px;
}
</style>
