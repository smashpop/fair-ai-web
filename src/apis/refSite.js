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

export function fetchListAll() {
  return request({
    url: '/ai-refsite',
    method: 'get'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-refsite-search',
    method: 'post',
    data
  })
}
