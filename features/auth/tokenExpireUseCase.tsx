import HttpClient from "../network/HttpClient";
import { AppUrl } from "../network/Urls";
import { handleUserInfoResponse } from "./userInfoUseCase";

export function tokenSync(): Promise<Boolean> {
    return new Promise<Boolean>(
        (resolve, reject) => {
            new HttpClient().getRequest(
                AppUrl.userInfo,
                (responce) => {
                    if (responce.status != 200) {
                        // token is expired
                        resolve(false);
                    } else {
                        handleUserInfoResponse(JSON.parse(responce.data))
                        resolve(true);
                    }
                }
            )
        }
    );
}

