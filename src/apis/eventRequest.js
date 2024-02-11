import request from '@/utils/request'
import requestStorage from '@/utils/requestStorage'
import fileDownload from 'js-file-download'

export function fetchList(data) {
  return request({
    url: '/ai-event-request-page',
    method: 'post',
    data
  })
}

export function fetchLastList(data) {
  return request({
    url: '/ai-event-request-last',
    method: 'post',
    data
  })
}

export function fetchCardList(data) {
  return request({
    url: '/ai-event-request-card',
    method: 'post',
    data
  })
}

export function createEventRequestApi(data) {
  return request({
    url: '/ai-event-request',
    method: 'post',
    data
  })
}


export function deleteEventRequestApi(id) {
  return request({
    url: `/ai-event-request/${id}`,
    method: 'delete'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-event-request-search',
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

export function fileDownloadApi(file) {
  console.log('fileDownloadApi=', file)

  requestStorage({
    responseType: 'blob',
    url: `/file/download/${file.filename}`,
    method: 'get'
  }).then((res) => {
    fileDownload(res.data, file.originalname)
  })
}
