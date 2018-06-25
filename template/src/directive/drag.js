import Vue from 'vue'
Vue.directive('dialogdrag',function (el,binding) {
  let eles = el.querySelectorAll('.el-dialog__header');
  var target = null;
  var left = 0;
  var top = 0;
  function moveFn($event){
    target.style.marginLeft =$event.clientX - left +'px';
    target.style.marginTop = $event.clientY - top +'px';
  }
  eles.forEach((ele)=>{
    ele.addEventListener('mousedown',function($event){
      //记录margin-left、margin-top;
      target = $event.currentTarget.parentNode;//currentTarget与target
      target.style.cursor="move";
      left = $event.clientX - parseFloat(window.getComputedStyle(target).marginLeft);
      top = $event.clientY - parseFloat(window.getComputedStyle(target).marginTop);

      document.addEventListener('mousemove',moveFn,true)
      document.addEventListener('mouseup',function($event){
        target.style.cursor="default";
        //取消move事件；
        document.removeEventListener('mousemove',moveFn,true)
      },true)
    },true);
  });


  if(binding.value && binding.value.visible == true){
    //绑定了值并且对话框状态为打开时
    //重置对话框的位置为默认
    let dialog = el.querySelector('.el-dialog');
    //获取宽度、marginTop
    var width = dialog.style.width;
    dialog.removeAttribute('style');
    //重新赋值
    dialog.style.width = width;
    dialog.style.marginTop = '15vh';
  }
})
