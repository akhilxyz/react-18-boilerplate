import { http } from "@/utils/http";
import { APIService } from "./service.api";

class WalletApi extends APIService {
    blockchainList() {
        return http.get('/blockchains');
    }

    crosschainList() {
        return http.get('/crosschains');
    }

    rampsList({ query }: { query?: any }) {
        return http.get(`/ramps?type=${query}`);
    }
}

export const walletApi = new WalletApi();