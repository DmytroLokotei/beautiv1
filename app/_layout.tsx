import { router, Stack } from "expo-router";
import { useEffect, useState } from 'react';
import { EmitWhenAllDependenciesLoaded } from "@/features/splash/appLoadingHelper";
import { getActiveSession } from "@/features/session/ActiveSession";
import { tokenSync } from '@/features/auth/tokenExpireUseCase';

export default function RootLayout() {

  let [allLoaded, setAllLoaded] = useState(false)
  EmitWhenAllDependenciesLoaded(() => { setAllLoaded(true) })

  useEffect(() => {
    if (allLoaded) {
      // redirect user to corresponding screen 
      if (getActiveSession().userData?.authToken != null) {
        // check if not expired 
        tokenSync().then((isNotExpired) => {
          if (isNotExpired) {
            router.replace("/(tabs)/profile");
          } else {
            router.replace("/LoginScreen");
          }
        })

      }
    }
  }, [allLoaded]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="RegistrationScreen" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="salon" />
    </Stack>
  );
}
