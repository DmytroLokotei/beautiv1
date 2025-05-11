import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import SessionFileStorage from '../session/SessionFileStorage';
import HttpClient from '../network/HttpClient';
import { getActiveSession } from '../session/ActiveSession';


export function EmitWhenAllDependenciesLoaded(onAllLoaded: () => void) {

    // load fonts
    const [fontsLoaded] = useFonts({
        SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    })

    // restore last user data
    let [userSessionRestored, setUserSessionRestored] = useState(false)
    useEffect(() => {
        const restorer = new SessionFileStorage()
        restorer.restoreAll().then(() => {
            new HttpClient(); // init
            const authToken = getActiveSession().userData?.authToken;
            if (authToken != null) {
                HttpClient.updateToken(authToken);
            }
            setUserSessionRestored(true)
        })
    }, []);

    //listen computed value
    useEffect(() => {
        if (fontsLoaded && userSessionRestored) {
            onAllLoaded()
        }
    }, [fontsLoaded, userSessionRestored]);

}