import { getActiveSession, UserMeta } from "../session/ActiveSession";
import SessionFileStorage from "../session/SessionFileStorage";

export function handleUserInfoResponse(root: UserInfoJsonResponse | ErrorJsonResponse) {
    const errors = (root as ErrorJsonResponse).errors;
    if (errors != null) {
        // TODO: handle errors on UI
        alert(JSON.stringify(errors));
        return
    }
    const responce = root as UserInfoJsonResponse
    const session = getActiveSession()
    const userData = session.userData;
    if (userData == null) {
        alert('No session while updating user meta data');
        return;
    }
    const sessionMeta = userData.meta;
    if (sessionMeta == null) {
        userData.meta = new UserMeta(); 
        alert('No session meta while updating user meta data');
        return;
    }
    sessionMeta.firstName = responce.data.metas.first_name;
    sessionMeta.lastName = responce.data.metas.last_name;
    sessionMeta.age =  parseInt(responce.data.metas.age);
    sessionMeta.phoneNumber = responce.data.metas.phone_number;
    new SessionFileStorage().saveUserData();
}

type UserInfoJsonResponse = {
    data: {
        metas: {
            first_name: string,
            last_name: string,
            phone_number: string,
            age: string,
            gender: string,
        }
    },
    message: string
}

type ErrorJsonResponse = {
    message: string,
    errors: Array<object>
}

