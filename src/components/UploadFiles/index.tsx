import type { UploadFile } from 'antd'
import { Image, Upload, message } from 'antd'
import React, { useEffect, useState } from 'react'
import type { ReactElement } from 'react'
import './index.scss'

function validFileType(url = '') {
  const fileSuffix = url.split('.').pop()?.toLocaleLowerCase() || ''
  if (['png', 'jpg', 'jpeg', 'bmp', 'gif'].includes(fileSuffix))
    return 'image'
  if (['mp4', 'm2v', 'mkv', 'mov', '3gp'].includes(fileSuffix))
    return 'video'
  else return ''
}

interface UploadFileProps {
  maxCount?: number 
  value?: string //  url string
  fileSize?: number //  5G
  accept?: 'image/*' | 'video/*' | 'image/*,video/*' //
  width?: number //  120
  height?: number // 120
  title?: string //
  borderRadius?: number // 8
  onChange?: (url: string) => void
}

const UploadFiles: React.FC<UploadFileProps> = (props) => {
  const {
    maxCount = 1,
    value = '',
    fileSize = 1024 * 5,
    accept = 'image/*',
    title = 'upload file',
    width = 120,
    height = 120,
    borderRadius = 8,
    onChange = () => ({}),
  } = props

  const list: UploadFile[] = value.split(',').filter(item => item).map((item) => {
    return {
      uid: item,
      name: item,
      status: 'done',
      url: item,
    }
  })

  const [fileList, setFileList] = useState<UploadFile[]>(list)

  const [mount, setMount] = useState(false)

  useEffect(() => {
    if (mount)
      onChange(fileList.map(item => item.url).join(','))
    else setMount(true)
  }, [fileList, mount, onChange])

  async function customRequest(file: any) {
    console.log(file)
    const { url } = await Promise.resolve({
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    })
    setFileList(prevState => ([...prevState, { uid: url, name: url, status: 'done', url }]))
  }

  function beforeUpload(file: File): Promise<File> {
    return new Promise((resolve, reject) => {
      const { size, type } = file
      //
      if ((size / 1024 / 1024) > fileSize) {
        message.error(`file size should be ${fileSize}M！`)
        reject(new Error(`file size should be ${fileSize}M！`))
      }
      //
      const flag = (accept === 'image/*' && type.toLocaleLowerCase().includes('image'))
        || (accept === 'video/*' && type.toLocaleLowerCase().includes('video'))
        || (accept === 'image/*,video/*' && (type.toLocaleLowerCase().includes('image') || type.toLocaleLowerCase().includes('video')))
      if (!flag) {
        message.error('invalid format')
        reject(new Error('invalid format！'))
      }
      resolve(file)
    })
  }

  function onRemove(url?: string) {
    setFileList(fileList.filter(item => item.url !== url))
  }

  const uploadPrpos = {
    customRequest,
    beforeUpload,
    fileList,
    multiple: true,
    maxCount,
    accept,
    listType: 'picture-card' as any,
    itemRender: (_originNode: ReactElement, file: UploadFile) => {
      return (
        <div className="file-wrapper">
          {validFileType(file.url) === 'video'
            ? (
              <video
                controls
                style={{ borderRadius }}
                width={width}
                height={height}
              >
                <source src={file.url} type="video/mp4" />
                <source src={file.url}type="video/ogg" />
              </video>
              )
            : (
              <Image
                style={{ borderRadius }}
                width={width}
                height={height}
                src={file.url}
              />
              )}
          <svg className="remove-icon" onClick={() => onRemove(file.url)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
            <path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
          </svg>
        </div>
      )
    },
  }
  return (
    <Upload {...uploadPrpos} className="upload-files">
      {fileList.length === maxCount
        ? null
        : (
          <div style={{
            width,
            height,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <span>{ title }</span>
          </div>
          )}
    </Upload>
  )
}

export default UploadFiles
