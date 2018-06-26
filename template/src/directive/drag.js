import Vue from 'vue'
let LEFT;
let TOP;

Vue.directive('dialogdrag',{
  inserted(el,binding){
    let container = el.querySelector(binding.value.container);
    let target = el.querySelector(binding.value.target);


    let temContainerWidth = getComputedStyle(container).width;
    let temHtmlWidth = getComputedStyle(document.firstElementChild).width;
    if(temContainerWidth.indexOf('%') != -1){
      //百分值
      LEFT = (
        parseFloat(temHtmlWidth) -
        parseFloat(temHtmlWidth) * temContainerWidth.substring(0,temContainerWidth.length-1)/100
      )/2;
    }else if(temContainerWidth.indexOf('px') != -1){
      //像素值
      LEFT = (
        parseFloat(temHtmlWidth) -
        parseFloat(temContainerWidth)
      )/2;
    }else{
      //其他值
      throw ('对话框容器宽度只能为像素或百分比！')
    }
    console.log(temContainerWidth);
    console.log(temHtmlWidth);
    //
    let temMarginTop = getComputedStyle(container).marginTop;
    if(temMarginTop && temMarginTop.indexOf('px') != -1){
      //不为空并且以像素为单位
      TOP = parseFloat(temMarginTop);
    }else{
      throw ('请设置对话框容器上边距margin-top并以像素为单位！')
    }
    console.log(LEFT)
    //删除对话容器的行内样式（marginleft,margintop,marginbottom,marginrigth）;
    delete container.style.marginTop;
    delete container.style.marginLeft;
    delete container.style.marginRight;
    delete container.style.marginBottom;
    delete container.style.margin;
    //赋值给marginTop;marginLeft;
    container.style.marginTop = TOP+'px';
    container.style.marginLeft = LEFT+'px';

    //事件监听
    target.addEventListener('mousedown',function(event){
      //获取鼠标距离对话框容器的左上边距
      let leftValue = event.clientX - parseFloat(getComputedStyle(container).marginLeft);
      let topValue = event.clientY - parseFloat(getComputedStyle(container).marginTop);
      document.addEventListener('mousemove',moveFn,true)
      document.addEventListener('mouseup',upFn,true)
      function moveFn(event){
        console.log('还在移动')
        target.style.cursor = 'move';
        container.style.marginLeft = (event.clientX-leftValue)+'px';
        container.style.marginTop = (event.clientY-topValue)+'px';

      }
      function upFn(event){
        target.style.cursor = 'default';
        document.removeEventListener('mousemove',moveFn,true);
        //document.removeEventListener('mouseup',upFn);
      }
    })
  },
  componentUpdated(el,binding){
    if(binding.value.dialogVisible){
      //打开时还原对话框位置
      el.querySelector(binding.value.container).style.marginTop = TOP+'px';

      el.querySelector(binding.value.container).style.marginLeft = LEFT+'px';

    }
  }
})
