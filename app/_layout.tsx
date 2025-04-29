import { router, Stack } from "expo-router";
import { useEffect, useState } from 'react';
import { EmitWhenAllDependenciesLoaded } from "@/features/splash/appLoadingHelper";
import { getActiveSession } from "@/features/session/ActiveSession";

export default function RootLayout() {

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
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="RegistrationScreen" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
