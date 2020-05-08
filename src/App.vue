<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view v-if="isRouterAlive" />
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang="less">
a, address, b, big, blockquote, body, center, cite, code, dd, del, div, dl, dt, em, fieldset, font, form, h1, h2, h3, h4, h5, h6, html, i, iframe, img, ins, label, legend, li, ol, p, pre, small, span, strong, u, ul, var {
    margin: 0;
    padding: 0;
}
body {
    background: #fff none repeat scroll 0 0;
    color: #666;
    font-size: 14px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
a {
  text-decoration: none;
  color: #666;
}
</style>
