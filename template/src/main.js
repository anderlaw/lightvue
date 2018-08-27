//core package
import Vue from 'vue'
import App from './App'
import router from './router'

//ui package
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


//invokes & configs
Vue.use(ElementUI);
Vue.config.productionTip = false

import service from './http/config'
service.defaults.baseURL = httpBaseURL;

//mode
switch(process.env.NODE_ENV){
  case 'development':
  break;
  case 'prodution':
  break;
  case 'test':
  break;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
