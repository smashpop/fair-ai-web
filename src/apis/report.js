import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/ai-report-page',
    method: 'post',
    data
  })
}

export function fetchListAll(data) {
  return request({
    url: '/ai-report',
    method: 'get',
    data
  })
}

export function createReportApi(data) {
  return request({
    url: '/ai-report',
    method: 'post',
    data
  })
}

export function updateReportApi(data) {
  return request({
    url: '/ai-report',
    method: 'put',
    data
  })
}

export function deleteReportApi(id) {
  return request({
    url: `/ai-report/${id}`,
    method: 'delete'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-report-search',
    method: 'post',
    data
  })
}
