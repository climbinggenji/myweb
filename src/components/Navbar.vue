<template>
  <div id="nav">
    <div class="contain">
      <div class="name">
        <router-link to="/">
          pipil
          <i class="el-icon-info"></i>
        </router-link>
        <img :src="gitSrc" @mouseenter="gitHover(1)" @mouseleave="gitHover(0)" @click="toGithub()">
      </div>
      <div class="btn">
        <span class="btn-item" :class="{btnActive: active === 'Home'}">
          <router-link to="/">首页</router-link>
        </span>
        <span class="btn-item" :class="{btnActive: active === 'Project'}">
          <router-link to="/Project">我的作品</router-link>
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
    return {
      gitSrc: require('./../assets/images/github.png')
    };
  },
  mounted() {},
  computed: {
    active() {
        return this.$route.name
    }
  },
  methods: {
    gitHover(val) {
      if (val) {
        this.gitSrc = require('./../assets/images/github-select.png')
      } else {
        this.gitSrc = require('./../assets/images/github.png')
      }
    },
    toGithub() {
      window.open('https://github.com/climbinggenji?tab=repositories')
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
      display: flex;
      font-size: 18px;
      font-weight: 600;
      line-height: 50px;
      align-items: center;
      img {
        height: 32px;
        width: 32px;
        margin-left: 20px;
        cursor: pointer;
      }
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