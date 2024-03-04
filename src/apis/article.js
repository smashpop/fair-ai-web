import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-article-page',
    method: 'post',
    data
  })
}

export function fetchLastList() {
  return request({
    url: '/ai-article-last',
    method: 'get'
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-article',
    method: 'get',
    data
  })
}

export function searchList(data) {
  return request({
    url: '/ai-article-search',
    method: 'post',
    data
  })
}
