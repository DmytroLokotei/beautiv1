import { getActiveSession, UserData } from "../session/ActiveSession";
import { router } from 'expo-router';
import SessionFileStorage from "../session/SessionFileStorage";
import HttpClient from "../network/HttpClient";
import { handleUserInfoResponse } from "./userInfoUseCase";
import { AppUrl } from "../network/Urls";

export function handleLoginResponse(root: LoginJsonResponse | ErrorLoginJsonResponse) {
    const errors = (root as ErrorLoginJsonResponse).errors;
    if (errors != null) {
        // TODO: handle errors on UI
        alert(JSON.stringify(errors));
        return
    }
    const responce = root as LoginJsonResponse
    const session = getActiveSession()
    session.userData = new UserData()
    session.userData.authToken = responce.auth_token;
    session.userData.id = responce.data.id;
    session.userData.email = responce.data.email;
    session.userData.role = responce.data.role;

    new SessionFileStorage().saveUserData();
    HttpClient.updateToken(responce.auth_token);

    // update data non-bloking
    new HttpClient().getRequest(
        AppUrl.userInfo,
        (responce) => {
            if (responce.status == 200) {
                const root = JSON.parse(responce.data);
                handleUserInfoResponse(root);
            }
        }
    )

    // redirect to profile screen as user successfully logged in
    router.replace('/(tabs)/profile');
}

type LoginJsonResponse = {
    auth_token: string,
    data: {
        email: string,
        id: number,
        name: string,
        role: string,
    },
    message: string
}

type ErrorLoginJsonResponse = {
    message: string,
    errors: Array<object>
}

