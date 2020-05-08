<template>
  <div id="contact">
    <h1>联系方式</h1>
    <el-divider></el-divider>
    <p>邮箱：786924514@qq.com</p>
    <el-divider></el-divider>
    <p>电话：17665234596（非诚勿扰）</p>
    <el-divider></el-divider>
    <p>github仓库：<a href="https://github.com/climbinggenji?tab=repositories">前往我的github</a></p>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#contact {
    width: 1080px;
    margin: 15px auto;
    a {
      text-decoration: underline;
      &:hover {
        color: #41b883;
      }
    }
}
</style>