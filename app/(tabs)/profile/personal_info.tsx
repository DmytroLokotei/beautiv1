import { handleUserInfoResponse } from '@/features/auth/userInfoUseCase';
import { AppScreenContainer } from '@/features/common_ui/AppScreenContainer';
import { PageHeader } from '@/features/common_ui/PageHeader';
import HttpClient from '@/features/network/HttpClient';
import { AppUrl } from '@/features/network/Urls';
import { getActiveSession } from '@/features/session/ActiveSession';
import { useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Screen() {

    useEffect(() => {
        // update data non-bloking
        new HttpClient().getRequest(
            AppUrl.userInfo,
            (responce) => {
                if (responce.status == 200) {
                    const root = JSON.parse(responce.data);
                    handleUserInfoResponse(root);
                }
            }
        )
    }, []);
    const userMeta = getActiveSession().userData?.meta;

    return (
        <AppScreenContainer style={styles.container}>
            <PageHeader
                hasBackButton={true}
                viewStyle={{}}
                title='Personal Info'>
            </PageHeader>
            <Text>First name: {userMeta?.firstName}</Text>
            <Text>phone number: {userMeta?.phoneNumber}</Text>
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