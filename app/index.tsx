import { Text, View } from "react-native";
import SplashView from "@/features/splash/SplashView";
import { Link } from "expo-router";
// this is first screen on app open
// A representation os 'Splash' screen
export default function Index() {


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
