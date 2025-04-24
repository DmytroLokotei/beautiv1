import { Text, View } from "react-native";
import { router } from 'expo-router';
import { useState, useEffect } from 'react';
import SplashView from "@/features/splash/SplashView";
import { Link } from "expo-router";
import { getActiveSession } from "@/features/session/ActiveSession";
import { EmitWhenAllDependenciesLoaded } from "@/features/splash/appLoadingHelper";

// this is first screen on app open
// A representation os 'Splash' screen
export default function Index() {

  let [allLoaded, setAllLoaded] = useState(false)
  EmitWhenAllDependenciesLoaded(() => { setAllLoaded(true) })


  useEffect(() => {
    if (allLoaded) {
      // redirect user to corresponding screen 
      console.log("getActiveSession:");
      console.log(getActiveSession());
      if (getActiveSession().userData?.authToken != null) {
        router.replace("/(tabs)/profile");
      }
    }
  }, [allLoaded]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/LoginScreen">View Login</Link>
      <Text>It a Splash screen</Text>
      <SplashView />
    </View>
  );
}
