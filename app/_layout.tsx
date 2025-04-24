import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack screenOptions={ {headerShown: false} }>
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="RegistrationScreen" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
