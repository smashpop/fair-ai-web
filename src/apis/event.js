import request from '@/utils/request'
import requestStorage from '@/utils/requestStorage'

export function fetchEvent(id) {
  return request({
    url: `/ai-event/${id}`,
    method: 'get'
  })
}

export function fetchEventList() {
  return request({
    url: '/ai-event-list',
    method: 'get'
  })
}

export function fetchList(data) {
  return request({
    url: '/ai-event-page',
    method: 'post',
    data
  })
}

export function fetchLastList(data) {
  return request({
    url: '/ai-event-last',
    method: 'post',
    data
  })
}

export function fetchCardList(data) {
  return request({
    url: '/ai-event-card',
    method: 'post',
    data
  })
}

export function searchList(data) {
  return request({
    url: '/ai-event-search',
    method: 'post',
    data
  })
}

export function fileUploadApi(data) {
  return requestStorage({
    url: '/file/upload',
    method: 'post',
    data
  })
}
