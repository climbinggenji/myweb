<template>
  <div id="nav">
    <div class="contain">
      <div class="name">
        <router-link to="/">
          Lucifer
          <i class="el-icon-info"></i>
        </router-link>
      </div>
      <div class="btn">
        <span class="btn-item" :class="{btnActive: active === 'Home'}">
          <router-link to="/">首页</router-link>
        </span>
        <span class="btn-item" :class="{btnActive: active === 'Resume'}">
          <router-link to="/Resume">个人简历</router-link>
        </span>
        <span class="btn-item" :class="{btnActive: active === 'Contact'}">
          <router-link to="/Contact">联系方式</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    active() {
        return this.$route.name
    }
  }
};
</script>

<style lang="less" scoped>
#nav {
  background-color: #222222;
  height: 50px;
  .contain {
    width: 1080px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .name {
      font-size: 18px;
      font-weight: 600;
      line-height: 50px;
    }
    .btn {
      display: flex;
      &-item {
        font-size: 14px;
        line-height: 50px;
        padding: 0 15px;
      }
      &Active {
        background-color: #000;
      }
    }
  }
}
a {
  text-decoration: none;
  color: #9d9d9d;
  &:hover {
    color: #ffffff;
  }
}
</style>