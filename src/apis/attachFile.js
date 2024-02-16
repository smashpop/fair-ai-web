import request from '@/utils/request'

export function createAttachFileApi(data) {
  return request({
    url: '/ai-attach-file',
    method: 'post',
    data
  })
}

export function deleteAttachFileApi(id) {
  return request({
    url: `/ai-attach-file/${id}`,
    method: 'delete'
  })
}
