
export class ActiveSession {
    onboardingPassed = false
    userData: UserData | null = null
}

var _currentSession: ActiveSession | null = null; // private static

export function getActiveSession(): ActiveSession {
    if (_currentSession == null) {
        _currentSession = new ActiveSession()
    }
    return _currentSession!
}

export class UserData {
    authToken: string | null = null
    id: number = 0
    email: string = ""
    role: string = ""
    meta: UserMeta = new UserMeta()
}

export class UserMeta {
    firstName: string = ""
    lastName: string = ""
    phoneNumber: string = ""
    age: number = 0
    gender: string = ""
}