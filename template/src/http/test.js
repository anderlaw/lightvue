import service from './config'

export function testHttp(){
  return service({
    method: 'post',
    url: '/solr/queryRelatedDocs',
    data:{
      id:'402880876589df04016589f465260007',
      pageNum:1,
      pageSize:10
    }
  })
}
