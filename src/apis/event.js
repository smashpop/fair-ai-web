import request from '@/utils/request'
import requestStorage from '@/utils/requestStorage'

export function fetchEventList() {
  return request({
    url: '/ai-event-list',
    method: 'get'
  })
}

export function fetchEventList2() {
  return request({
    url: '/ai-event-list2',
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

export function createEventApi(data) {
  return request({
    url: '/ai-event',
    method: 'post',
    data
  })
}

export function updateEventApi(data) {
  return request({
    url: '/ai-event',
    method: 'put',
    data
  })
}

export function deleteEventApi(id) {
  return request({
    url: `/ai-event/${id}`,
    method: 'delete'
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
