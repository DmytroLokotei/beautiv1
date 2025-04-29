import { getActiveSession, UserData } from "../session/ActiveSession";
import { router } from 'expo-router';
import SessionFileStorage from "../session/SessionFileStorage";

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

    new SessionFileStorage().saveUserData()

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

