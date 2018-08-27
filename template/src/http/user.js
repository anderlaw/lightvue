import service from './config'

export function getUser(){
  return service({
    method: 'get',
    url: '/user',
    data:{
    }
  })
}
