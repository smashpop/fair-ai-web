import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/ai-suggest-category-list',
    method: 'get'
  })
}
