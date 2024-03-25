import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/ai-popular',
    method: 'get'
  })
}

export function createPopularApi(data) {
  return request({
    url: '/ai-popular',
    method: 'post',
    data
  })
}

export function updatePopularApi(data) {
  return request({
    url: '/ai-popular',
    method: 'put',
    data
  })
}

export function deletePopularApi(id) {
  return request({
    url: `/ai-popular/${id}`,
    method: 'delete'
  })
}
