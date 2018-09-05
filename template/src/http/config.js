import axios from 'axios'
let service = axios.create({
  timeout:7000,
  //headers:{ 'Access-Control-Allow-Origin': '*' }, //自定义请求头
  //method:'get',//默认是get
  //设置baseUR，便于传递相对 URL，在main.js里配置。
  transformRequest:[function(data){
    //对data进行任意转换处理
    function toFormData(data){
      let resData = "";
      for(let name in data){
        resData += encodeURIComponent(name)+"="+encodeURIComponent(data[name])+"&"
      }
      //去除后面多余的&
      return resData.substring(0,resData.length-1);
    }
    return toFormData(data)
    // return JSON.stringify(data);
  }],
  // params: {
  //   ID: '何泽兵'
  // },//与请求一起发送的 URL 参数
  // data: {
  //   firstName: 'Fred'
  // },//作为请求主体被发送的数据

  transformResponse:[function(data){
    //此处打印数据
    //console.log('接收的数据',data)

    //由于mockjs 返回的json字符串，此处需要解析

    return JSON.parse(data);
  }],
  responseType: 'application/json',//默认是json
  contentType: 'application/x-www-form-urlencoded',//form表单形式


});
//添加请求拦截器
service.interceptors.request.use(function (config) {
  return config;
}, function (err) {
  return Promise.reject(err);
});

//添加相应拦截器
service.interceptors.response.use(function (res) {
  res.headers['Access-Control-Allow-Origin'] = "*";
  //console.log(res);
  return res;
}, function (error) {
  //let msg = error.response;
  //console.log(JSON.stringify(error));

  //全局处理异常
  return Promise.reject(error);//如果返回，会再进入实例的catch回调中。
});
export default service;


