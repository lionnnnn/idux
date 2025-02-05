/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

/**
 * @license
 * clone from https://github.com/react-component/upload/blob/master/src/request.ts
 */

import type { UploadProgressEvent, UploadRequestError, UploadRequestOption } from '../types'

type UploadReturnType = {
  abort: () => void
}

function getError(option: UploadRequestOption, xhr: XMLHttpRequest) {
  let msg: string
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`
  } else {
    msg = `fail to ${option.requestMethod} ${option.action} ${xhr.status}`
  }
  const err = new Error(msg) as UploadRequestError
  err.status = xhr.status
  err.method = option.requestMethod
  err.url = option.action
  return err
}

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }

  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

export default function upload(option: UploadRequestOption): UploadReturnType {
  const xhr = new XMLHttpRequest()

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e: UploadProgressEvent) {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100
      }
      option.onProgress!(e)
    }
  }

  const formData = new FormData()

  if (option.requestData) {
    Object.keys(option.requestData).forEach(key => {
      const value = option.requestData![key]
      if (Array.isArray(value)) {
        value.forEach(item => {
          formData.append(`${key}[]`, item)
        })
        return
      }

      formData.append(key, value as string | Blob)
    })
  }

  formData.append(option.name, option.file, option.file.name)

  xhr.onerror = function error() {
    option.onError?.(getError(option, xhr))
  }

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError?.(getError(option, xhr))
    }

    return option.onSuccess?.(getBody(xhr))
  }

  xhr.open(option.requestMethod, option.action, true)

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true
  }

  const headers = option.requestHeaders || {}

  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
  }

  Object.keys(headers).forEach(h => {
    if (headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h])
    }
  })

  xhr.send(formData)

  return {
    abort() {
      xhr.abort()
    },
  }
}
