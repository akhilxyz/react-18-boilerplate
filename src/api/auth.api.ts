import { APIService } from "./service.api";

class AuthApi extends APIService {
    loginOut() {
        window.localStorage.clear()
        window.location.reload()
        window.location.href = `${window.location.origin}/login`
    }
}

export const authApi = new AuthApi();

