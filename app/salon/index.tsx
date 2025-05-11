import { AppScreenContainer } from '@/features/common_ui/AppScreenContainer';
import { PageHeader } from '@/features/common_ui/PageHeader';
import HttpClient from '@/features/network/HttpClient';
import { AppUrl } from '@/features/network/Urls';
import { SalonServiceUiModel } from '@/features/salon/models';
import { handleSalonsServicesResponce } from '@/features/salon/SalonServiceJsonParser';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export function navigateToSalonDetails(id: number, salonName: string) {
    router.navigate({
        pathname: '/salon',
        params: { salonId: id, salonName: salonName }
    })
}

export type SalonScreenParams = {
    salonId: number;
    salonName: string;
}

export default function Screen() {
    const screenArguments = useLocalSearchParams<SalonScreenParams>();
    const [servicesResponce, setServicesResponce] = useState<SalonServiceUiModel[]>();

    useEffect(() => {
        // update data non-bloking
        const params = new URLSearchParams();
        params.append('salon_id', screenArguments.salonId.toString());
        new HttpClient().getRequest(
            AppUrl.salonServices,
            (data) => {
                const services = handleSalonsServicesResponce(data);
                setServicesResponce(services);
            },
            params
        )
    }, []);

    return (
        <AppScreenContainer style={styles.container}>
            <PageHeader
                hasBackButton={true}
                viewStyle={{}}
                title={screenArguments.salonName}>
            </PageHeader>
            <Text>Single Salon Details view</Text>
            <Text>salonId = {screenArguments.salonId}</Text>
            <FlatList
                contentContainerStyle={{ justifyContent: "space-evenly" }}
                data={servicesResponce}
                numColumns={1}
                renderItem={listItem =>
                    <ServiceCardView
                        id={listItem.item.id}
                        name={listItem.item.name}
                        onClick={() => {

                        }}
                    />
                }
                keyExtractor={item => item.id.toString()}
            />
        </AppScreenContainer>
    );
}

type ServiceCardProps = {
    id: number;
    name: string;
    onClick: () => void
};

function ServiceCardView({ id, name, onClick }: ServiceCardProps) {
    return (
        <TouchableOpacity
            onPress={() => { onClick() }}
            style={{ backgroundColor: 'red' }}
        >
            <Text style={{ color: 'blue' }}>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});