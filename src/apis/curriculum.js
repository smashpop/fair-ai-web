import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-curriculum-page',
    method: 'post',
    data
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-curriculum',
    method: 'get',
    data
  })
}

export function createCurriculumApi(data) {
  return request({
    url: '/ai-curriculum',
    method: 'post',
    data
  })
}

export function updateCurriculumApi(data) {
  return request({
    url: '/ai-curriculum',
    method: 'put',
    data
  })
}

export function deleteCurriculumApi(id) {
  return request({
    url: `/ai-curriculum/${id}`,
    method: 'delete'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-curriculum-search',
    method: 'post',
    data
  })
}
