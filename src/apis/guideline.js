import request from '@/utils/request'

export function fetchNationList(data) {
  return request({
    url: '/ai-guideline-nation',
    method: 'post',
    data
  })
}

export function fetchOrganizationList(data) {
  return request({
    url: '/ai-guideline-organization',
    method: 'post',
    data
  })
}

