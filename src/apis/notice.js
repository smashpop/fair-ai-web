import request from '@/utils/request'
import requestStorage from '@/utils/requestStorage'
import fileDownload from 'js-file-download'

export function fetchList(data) {
  return request({
    url: '/ai-notice-page',
    method: 'post',
    data
  })
}

export function fetchLastList(data) {
  return request({
    url: '/ai-notice-last',
    method: 'post',
    data
  })
}

export function fetchCardList(data) {
  return request({
    url: '/ai-notice-card',
    method: 'post',
    data
  })
}


export function searchList(data) {
  return request({
    url: '/ai-notice-search',
    method: 'post',
    data
  })
}

export function fileUploadApi(data) {
  console.log('fileUploadApi=', data)
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
