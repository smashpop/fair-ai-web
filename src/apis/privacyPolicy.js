import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-privacy-policy-page',
    method: 'post',
    data
  })
}

export function createPrivacyPolicyApi(data) {
  return request({
    url: '/ai-privacy-policy',
    method: 'post',
    data
  })
}

export function updatePrivacyPolicyApi(data) {
  return request({
    url: '/ai-privacy-policy',
    method: 'put',
    data
  })
}

export function deletePrivacyPolicyApi(id) {
  return request({
    url: `/ai-privacy-policy/${id}`,
    method: 'delete'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-privacy-policy-search',
    method: 'post',
    data
  })
}
