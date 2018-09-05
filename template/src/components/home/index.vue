<template>
  <div>
    <h1 class="hello">
      Hello,world!
      <span style="font-size:12px;font-weight:normal;">--created by hezebing</span>
    </h1>
    <div>
      <span>F12查看http信息</span>
    </div>
  </div>
</template>
<script>
import { testHttp } from '@/http/test'
export default {
  mounted() {
    testHttp();
  }
}
</script>

<style>
@-webkit-keyframes animations{
    0%{-webkit-transform:translate(0px ,0px);opacity:0.3;}
    30%{-webkit-transform:translate(0px, 130px);opacity:1;}
    50%{-webkit-transform:translate(0 ,70px);opacity:0.9;}
    70%{-webkit-transform:translate(0px,100px);opacity:1;}
    90%{-webkit-transform:translate(0px, 130px);opacity:0.3;}
    100%{-webkit-transform:translate(0px ,130px);opacity:1;}
}
.hello{
  text-align:center;
  margin-top:100px;
  -webkit-transform:translate(0px ,130px);
  /* 持续时间、延迟时间 */
  -webkit-animation:animations 4s linear 0s;
}
</style>
