<template>
  <div>
    <div class="title">
      机位申请系统 |
      <img src="~/assets/img/home/logo2.2.png" alt />
    </div>
    <div class="aside"></div>
    <div class="main">
      <div class="ICAO">
        <span>请输入机场四字码</span>
        <el-input v-model="input" placeholder="请输入机场四字码"></el-input>
        <span>请输入呼号</span>
        <el-input v-model="input" placeholder="请输入呼号"></el-input>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>

<style scoped lang="less">
.title {
  height: 80px;
  width: 100%;
  background-color: #409eff;
  color: rgba(255, 255, 255, 0.96);
  font-family: "Helvetica Neue";
  font-size: 24px;
  font-weight: 800;
  line-height: 78px;
  padding-left: 20px;
  img {
    height: 60px;
    position: absolute;
    top: 10px;
    left: 180px;
  }
}
.main {
  .ICAO {
    width: 300px;
    margin: auto;
  }
}
</style>
