import { AppScreenContainer } from '@/features/common_ui/AppScreenContainer';
import { PageHeader } from '@/features/common_ui/PageHeader';
import { getActiveSession } from '@/features/session/ActiveSession';
import { Text, StyleSheet } from 'react-native';

export default function Tab() {

    const userData = getActiveSession().userData;

    return (
        <AppScreenContainer style={styles.container}>
            <PageHeader
                hasBackButton={true}
                viewStyle={{}}
                title='Settings'>
            </PageHeader>
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