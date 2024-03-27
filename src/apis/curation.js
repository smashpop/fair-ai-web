import request from '@/utils/request'

export function fetchData(id) {
  return request({
    url: `/ai-curation/${id}`,
    method: 'get'
  })
}
export function fetchList() {
  return request({
    url: '/ai-curation',
    method: 'get'
  })
}

export function createCurationApi(data) {
  return request({
    url: '/ai-curation',
    method: 'post',
    data
  })
}

export function updateCurationApi(data) {
  return request({
    url: '/ai-curation',
    method: 'put',
    data
  })
}

export function deleteCurationApi(id) {
  return request({
    url: `/ai-curation/${id}`,
    method: 'delete'
  })
}
