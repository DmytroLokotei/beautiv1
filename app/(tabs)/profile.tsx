import ButtonRightArrow from '@/features/common_ui/ButtonRightArrow';
import { getActiveSession } from '@/features/session/ActiveSession';
import SessionFileStorage from '@/features/session/SessionFileStorage';
import { router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tab() {

    const userData = getActiveSession().userData;

    return (
        <View style={styles.container}>
            <Text>A Profile Tab Content</Text>
            <Text>Hi! {userData?.email}</Text>
            <ButtonRightArrow
                text='wipe all data'
                type='blue'
                onPressCallback={() => {
                    new SessionFileStorage().wipeUserData()
                    router.replace("/LoginScreen")
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});