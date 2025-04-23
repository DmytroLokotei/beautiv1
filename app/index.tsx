import { Text, View } from "react-native";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import SplashView from "@/features/splash/SplashView";
import { Link } from "expo-router";

// this is first screen on app open
// A representation os 'Splash' screen
export default function Index() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      // redirect user to corresponding screen 

    }
  }, [loaded]);
  
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
