import request from '@/utils/request'
import requestStorage from '@/utils/requestStorage'
import fileDownload from 'js-file-download'

export function fetchList(data) {
  return request({
    url: '/ai-card',
    method: 'get',
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
