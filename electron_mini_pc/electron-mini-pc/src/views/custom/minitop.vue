<template>
  <div class="top-header"></div>
</template>
<script>
export default {
  name: "miniTop",
  components: {},
  data() {
    return {
      index: 1
    };
  },
  computed: {},
  method: {}
};
</script>

<style scoped>
.header {
  position: relative;
  z-index: 2;
  font-size: 0;
  box-shadow: 0 2px 10px 0 rgba(52, 52, 52, 0.1);
  background: red;
}
</style>
