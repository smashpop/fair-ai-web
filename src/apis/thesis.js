import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-thesis-page',
    method: 'post',
    data
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-thesis',
    method: 'get',
    data
  })
}

export function createThesisApi(data) {
  return request({
    url: '/ai-thesis',
    method: 'post',
    data
  })
}

export function updateThesisApi(data) {
  return request({
    url: '/ai-thesis',
    method: 'put',
    data
  })
}

export function deleteThesisApi(id) {
  return request({
    url: `/ai-thesis/${id}`,
    method: 'delete'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-thesis-search',
    method: 'post',
    data
  })
}
