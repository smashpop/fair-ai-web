import request from '@/utils/request'
import requestStorage from '@/utils/requestStorage'
import fileDownload from 'js-file-download'

export function fetchList(data) {
  return request({
    url: '/ai-faq-page',
    method: 'post',
    data
  })
}

export function fetchLastList(data) {
  return request({
    url: '/ai-faq-last',
    method: 'post',
    data
  })
}

export function fetchCardList(data) {
  return request({
    url: '/ai-faq-card',
    method: 'post',
    data
  })
}

export function createFaqApi(data) {
  return request({
    url: '/ai-faq',
    method: 'post',
    data
  })
}

export function updateFaqApi(data) {
  return request({
    url: '/ai-faq',
    method: 'put',
    data
  })
}

export function deleteFaqApi(id) {
  return request({
    url: `/ai-faq/${id}`,
    method: 'delete'
  })
}

export function searchList(data) {
  return request({
    url: '/ai-faq-search',
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
