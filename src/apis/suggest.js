import request from '@/utils/request'
import requestStorage from '@/utils/requestStorage'
import fileDownload from 'js-file-download'

export function fetchList(data) {
  return request({
    url: '/ai-suggest-page',
    method: 'post',
    data
  })
}

export function fetchLastList(data) {
  return request({
    url: '/ai-suggest-last',
    method: 'post',
    data
  })
}

export function fetchCardList(data) {
  return request({
    url: '/ai-suggest-card',
    method: 'post',
    data
  })
}

export function createSuggestApi(data) {
  return request({
    url: '/ai-suggest',
    method: 'post',
    data
  })
}

export function updateSuggestApi(data) {
  return request({
    url: '/ai-suggest',
    method: 'put',
    data
  })
}

export function deleteSuggestApi(id) {
  return request({
    url: `/ai-suggest/${id}`,
    method: 'delete'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-suggest-search',
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
