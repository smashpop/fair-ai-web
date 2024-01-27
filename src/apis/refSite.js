import request from '@/utils/request'

export function getMetaDataApi(data) {
  console.log('getMetaDataApi data=', data)

  return request({
    url: '/ai-refsite-url',
    method: 'post',
    data
  })
}

export function fetchList(data) {
  return request({
    url: '/ai-refsite-page',
    method: 'post',
    data
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-refsite',
    method: 'get',
    data
  })
}

export function createRefSiteApi(data) {
  return request({
    url: '/ai-refsite',
    method: 'post',
    data
  })
}

export function updateRefSiteApi(data) {
  return request({
    url: '/ai-refsite',
    method: 'put',
    data
  })
}

export function deleteRefSiteApi(id) {
  return request({
    url: `/ai-refsite/${id}`,
    method: 'delete'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-refsite-search',
    method: 'post',
    data
  })
}
