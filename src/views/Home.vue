<template>
  <div class="home">
    <div class="text">
      <p class="text-normal">Hello, welcome to my personal website. My name is Lengcan.</p>
      <p class="text-normal">你好，欢迎来到我的个人网站。我叫冷灿。</p>
      <p class="text-large">A front Engineer</p>
      <p class="text-large">一个前端工程师</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  mounted() {}
};
</script>
<style lang="less" scoped>
.home {
  min-width: 1080px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  background: url('./../assets/images/bg.jpg') no-repeat;
  background-size: 100% 100%;

  align-items: center;
  .text {
    text-align: center;

    p {
      padding: 5px 0;
      background: linear-gradient(92deg, #f35626, #feab3a);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      animation: jianbian 60s infinite linear;
    }

    &-normal {
      font-size: 18px;
      font-weight: 600;
    }

    &-large {
      font-size: 90px;
      font-weight: 700;
    }
  }
}

@keyframes jianbian {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(-360deg);
  }
}
</style>
