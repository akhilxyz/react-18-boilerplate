export enum requestContentTypeEnum {
  // json
  JSON = 'application/json;charset=UTF-8',
  // json
  TEXT = 'text/plain;charset=UTF-8',
  // form-data
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data 
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
}

export enum responseCodeEnum {
  'SUCCESS_CODE' = 200,
  'LOGIN_CODE' = -1,
  'ERROR_CODE' = -2,
}

export enum requestConfigEnum {
  'BASE_URL' = '/proxy',
  'TIME_OUT' = 20000,
  'TOKEN_NAME' = 'Authorization',
}

export enum ApiUrlConfig {
  LOCAL = 'http://localhost:8080/v1',
  DEV = 'dev',
  PROD = 'prod',
}
