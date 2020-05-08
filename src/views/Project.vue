<template>
  <div id="project">
      <h1>pc端项目</h1>
      <el-divider></el-divider>
      <div class="content">
        <div class="item">
          <div class="img">
            <router-link to="/snake" >
              <img src="./../assets/images/snake.png">
            </router-link>
          </div>
          <div class="text"><router-link to="/snake" >贪吃蛇 -canvas</router-link></div>
        </div>
        <div class="item">
          <div class="img">
            <a href="https://github.com/climbinggenji/practice">
              <img src="./../assets/images/imyfone.png">
            </a>
          </div>
          <div class="text"><span><a href="https://github.com/climbinggenji/practice">imyfone Back</a></span></div>
        </div>
        <div class="item">
          <div class="img">
            <router-link to="/echarts-lolsth" >
              <img src="./../assets/images/echarts.png">
            </router-link>
          </div>
          <div class="text"><router-link to="/echarts-lolsth">echarts图</router-link></div>
        </div>
        <div class="item">
          <div class="img">
            <router-link to="/error" >
              <img src="./../assets/images/echarts.png">
            </router-link>
          </div>
          <div class="text"><router-link to="/error">后台管系统</router-link></div>
        </div>
      </div>
      <el-divider></el-divider>
      <h1>移动端项目</h1>
      <el-divider></el-divider>
      <div class="content">
        <div class="item">
          <div class="img">
            <router-link to="/error" >
              <img src="./../assets/images/echarts.png">
            </router-link>
          </div>
          <div class="text"><router-link to="/error">垃圾分类uni-app</router-link></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    toSnake() {
      this.$router.push('/snake')
    }
  },
};
</script>

<style lang="less" scoped>
#project {
  width: 1080px;
  margin: 10px auto;
  
  .content {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 25%;
      text-align: center;
      margin-top: 20px;

      .img {
        height: 200px;
        width: 200px;
        margin: 0 auto;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          cursor: pointer;
          transition: all 1s;
  
          &:hover {
            transform: scale(1.2)
          }
        }
      }

      .text {
        margin-top: 10px;
        
        a:hover {
          cursor: pointer;
          text-decoration: underline;
          color: #41b883;
        }
      }
    }
  }
}
</style>