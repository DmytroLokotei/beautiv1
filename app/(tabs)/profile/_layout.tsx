import { Stack, Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="notifications" />
            <Stack.Screen name="personal_info" />
            <Stack.Screen name="settings" />
        </Stack>
    )
}