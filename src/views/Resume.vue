<template>
  <div id="resume">
    <h1>个人简历</h1>
    <el-alert type="warning">对我有兴趣？<a :href="'../static/file/lengcan.pdf'" download="冷灿_Web前端.pdf">下载详细附件简历 ==></a></el-alert>
    <el-divider></el-divider>
    <div class="content">
      <div class="person">
        <div class="left">
          <img src="./../assets/images/zjz.jpg" />
        </div>
        <div class="right">
          <p>
            <span class="name">冷灿</span> 男
          </p>
          <p>应聘岗位： 前端工程师</p>
          <p>工作年限： 3年</p>
        </div>
      </div>
      <div class="info content-item">
        <div class="header">
          <i class="el-icon-s-custom"></i> 基本资料
        </div>
        <div class="info-content">
          <div class="left">
            <p>年龄： 26</p>
            <p>户籍： 湖南常德</p>
            <p>电话： 17665234596</p>
          </div>
          <div class="right">
            <p>现居地： 深圳</p>
            <p>婚姻状况： 未婚</p>
            <p>目前状况： 随时可以就职</p>
          </div>
        </div>
      </div>
      <div class="skills content-item">
        <div class="header">
          <i class="el-icon-s-help"></i> 专业技能
        </div>
        <div class="skills-content">
          <p>1. 精通 HTML CSS,熟练掌握 DIV+CSS 布局模式；</p>
          <p>2. 熟练掌握 HTML5、CSS3、Javascript、es6 等前端基础技术；</p>
          <p>3. 熟练掌握 vue 技术栈、vue-cli、vuex、vue-router、axios等；</p>
          <p>4. 熟练使用 vue 模块化开发及组件封装，有良好的代码规范习惯；</p>
          <p>5. 熟悉 JQuery、Bootstrap 等前端框架；</p>
          <p>6. 熟悉 mpvue 以及微信小程序，熟悉并且能使用 uni-app 进行多平台开发；</p>
          <p>7. 熟悉 canvas 动画，能够运用 canvas 完成动画效果，熟悉 echarts 等图表插件；</p>
          <p>8. 熟悉 Photoshop 的基本操作，能根据设计稿快速还原网页及其效果；</p>
          <p>9. 了解 webpack 以及代码管理工具 git，了解 electron-vue，有桌面端开发经验；</p>
          <p>10. 了解 node.js ,mock.js 能够适应前后端分离开发；</p>
        </div>
      </div>
      <div class="work content-item">
        <div class="header">
          <i class="el-icon-s-cooperation"></i> 工作经历
        </div>
        <div class="work-content">
          <p>2018.8-2019.8 东莞佳油网络科技有限公司 web前端开发工程师</p>
          <p>2016.8-2018.6 东莞登特网络科技有限公司 web前端开发工程师</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
};
</script>

<style lang="less" scoped>
#resume {
  width: 1080px;
  margin: 15px auto;

  h1 {
    margin-bottom: 20px;
  }

  .content {
    p {
      font-size: 14px;
      line-height: 30px;
    }

    .header {
      font-size: 18px;
      line-height: 40px;

      i {
        font-size: 24px;
      }
    }

    &-item {
      border: 1px #eeeeee solid;
      border-top: none;
    }

    .person {
      height: 300px;
      background-color: #fafafa;
      display: flex;
      align-items: center;

      .left {
        margin: 0 100px;

        img {
          width: 180px;
          height: 230px;
        }
      }

      .right {
        .name {
          font-size: 20px;
          font-weight: 600;
        }

        p {
          line-height: 60px;
        }
      }
    }

    .info {
      padding: 30px;

      &-content {
        display: flex;

        .right {
          flex-grow: 1;
        }

        .left {
          flex-grow: 1;
        }
      }
    }

    .skills {
      padding: 30px;
    }

    .work {
      padding: 30px;
    }
  }
}
</style>