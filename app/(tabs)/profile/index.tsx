import { AppScreenContainer } from '@/features/common_ui/AppScreenContainer';
import ButtonRightArrow from '@/features/common_ui/ButtonRightArrow';
import LineDivider from '@/features/common_ui/LineDivider';
import { getActiveSession } from '@/features/session/ActiveSession';
import SessionFileStorage from '@/features/session/SessionFileStorage';
import { MenuItemView } from '@/features/settings/MenuItem';
import { router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tab() {

    const userData = getActiveSession().userData;

    return (
        <AppScreenContainer style={styles.container}>
            <Text>My profile</Text>
            <Text>Hi! {userData?.email}</Text>

            <MenuItemView name='Personal info' iconName="user-o" onPress={() => {
                router.navigate("/(tabs)/profile/personal_info")
            }} />
            <LineDivider type='blue' />
            <MenuItemView name='Notification' iconName="bell-o" onPress={() => {
                router.navigate("/(tabs)/profile/notifications")
            }} />
            <LineDivider type='blue' />
            <MenuItemView name='Settings' iconName="gear" onPress={() => {
                router.navigate("/(tabs)/profile/settings")
            }} />
            <LineDivider type='blue' />
            <MenuItemView name='Support' iconName="user-o" onPress={() => { }} />

            <View style={{ flex: 1 }} />
            <MenuItemView name='Log out' iconName="user-o" onPress={() => {
                new SessionFileStorage().wipeUserData()
                router.replace("/LoginScreen")
            }} />
            <LineDivider type='blue' />
            <MenuItemView name='Delete account' iconName="user-o" onPress={() => { }} />
        </AppScreenContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});