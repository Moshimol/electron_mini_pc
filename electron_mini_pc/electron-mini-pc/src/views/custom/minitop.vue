<template>
  <div class="top-header">
    <i class="iconfont icon-file-open"></i>
    <i class="iconfont icon-setting" v-on:tap="settingApp"></i>
    <el-select
      v-model="value"
      placeholder="请选择"
      style="padding-left:10px;"
      :span="24"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :default-first-option="true"
      >
      </el-option>
    </el-select>
    <div class="right-icon">
      <i class="iconfont icon-shuaxin font-right"></i>
      <i class="iconfont icon-play font-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "miniTop",
  components: {},
  data() {
    return {
      options: [
        {
          value: "normal",
          label: "普通编译"
        },
        {
          value: "upload",
          label: "上传"
        },
        {
          value: "send_phone",
          label: "发送到手机"
        }
      ],
      value: ""
    };
  },
  computed: {},
  method: {
    // 打开文件
    openFile: function() {},
    // 设置APP
    settingApp: function() {
      this.$router.push({ path: "/about" });
    },
    // 刷新该页面
    refresh: function() {},
    // 执行编译
    compileApp: function() {}
  }
};
</script>

<style scoped>
.top-header {
  position: relative;
  z-index: 2;
  font-size: 0;
  background: white;
  height: 40px;
  width: 100%;
}
.top-header .iconfont {
  font-size: 25px;
  position: relative;
  top: 5px;
}
.icon-setting {
  padding-left: 10px;
}
.right-icon {
  float: right;
  position: relative;
  right: 0px;
}
.font-right {
  padding-right: 10px;
}
</style>
