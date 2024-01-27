import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-article-page',
    method: 'post',
    data
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-article',
    method: 'get',
    data
  })
}

export function createArticleApi(data) {
  return request({
    url: '/ai-article',
    method: 'post',
    data
  })
}

export function updateArticleApi(data) {
  return request({
    url: '/ai-article',
    method: 'put',
    data
  })
}

export function deleteArticleApi(id) {
  return request({
    url: `/ai-article/${id}`,
    method: 'delete'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-article-search',
    method: 'post',
    data
  })
}
