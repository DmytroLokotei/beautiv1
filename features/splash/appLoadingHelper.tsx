import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import SessionFileStorage from '../session/SessionFileStorage';


export function EmitWhenAllDependenciesLoaded(onAllLoaded: () => void) {

    // load fonts
    const [fontsLoaded] = useFonts({
        SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    })

    // restore last user data
    let [userSessionRestored, setUserSessionRestored] = useState(false)
    useEffect(() => {
        const restorer = new SessionFileStorage()
        console.log("restoreAll");
        restorer.restoreAll().then(() => {
            setUserSessionRestored(true)
        })
    }, []);

    //listen computed value
    useEffect(() => {
        if (fontsLoaded && userSessionRestored) {
            console.log("onAllLoaded");
            onAllLoaded()
        }
    }, [fontsLoaded, userSessionRestored]);

    console.log("EmitWhenAllDependenciesLoaded");

}