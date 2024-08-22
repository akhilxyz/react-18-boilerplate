import { http } from "@/utils/http";
import { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

export abstract class APIService {
  protected headers: any = {};

  setRefreshToken(token: string) {
    Cookies.set('refreshToken', token, { expires: 30 });
  }

  loginOut() {
    window.localStorage.clear()
    window.location.reload()
    window.location.href = `${window.location.origin}/login`
  }

  getRefreshToken() {
    return Cookies.get('refreshToken');
  }

  purgeRefreshToken() {
    Cookies.remove('refreshToken', { path: '/' });
  }

  setAccessToken(token: string) {
    Cookies.set('accessToken', token, { expires: 30 });
  }

  getAccessToken() {
    return Cookies.get('accessToken');
  }

  purgeAccessToken() {
    Cookies.remove('accessToken', { path: '/' });
  }

  getHeaders() {
    return {
      'api-access-token': this.getAccessToken(),
      // Authorization: `Bearer ${this.getAccessToken()}`,
    };
  }

  get(url: string, config: AxiosRequestConfig = {}): Promise<any> {
    return http({
      method: 'get',
      url,
      headers: this.getAccessToken() ? this.getHeaders() : {},
      ...config,
    });
  }

  post(url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<any> {
    return http({
      method: 'post',
      url,
      data,
      headers: this.getAccessToken() ? this.getHeaders() : {},
      ...config,
    });
  }

  put(url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<any> {
    return http({
      method: 'put',
      url,
      data,
      headers: this.getAccessToken() ? this.getHeaders() : {},
      ...config,
    });
  }

  patch(url: string, data: any = {}, config: AxiosRequestConfig = {}): Promise<any> {
    return http({
      method: 'patch',
      url,
      data,
      headers: this.getAccessToken() ? this.getHeaders() : {},
      ...config,
    });
  }

  delete(url: string, data?: any, config: AxiosRequestConfig = {}): Promise<any> {
    return http({
      method: 'delete',
      url,
      data,
      headers: this.getAccessToken() ? this.getHeaders() : {},
      ...config,
    });
  }

  request(config: AxiosRequestConfig = {}) {
    return http(config);
  }
}