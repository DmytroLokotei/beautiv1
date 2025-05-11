import HttpClient from '@/features/network/HttpClient';
import { AppUrl } from '@/features/network/Urls';
import { SalonUiModel } from '@/features/salon/models';
import { handleSalonsSearchResponce } from '@/features/salon/SalonJsonParser';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { navigateToSalonDetails } from '../salon';

export default function Tab() {
    const [searchInput, setSearchInput] = useState("");
    const [searchResponce, setSearchResponce] = useState<SalonUiModel[]>();
    useEffect(() => {
        doSearchRequest()
    }, [searchInput]);

    const doSearchRequest = () => {
        new HttpClient().getRequest(
            AppUrl.allSalons,
            (data) => {
                const salons = handleSalonsSearchResponce(data);
                setSearchResponce(salons);
            }
        )
    }

    return (
        <View style={styles.container}>
            <Text>A Search Tab Content</Text>
            <TextInput
                onChangeText={(text) => { setSearchInput(text) }}
                placeholder="Search"
                style={{ backgroundColor: 'white', borderRadius: 15, padding: 10 }}
            />
            <FlatList
                contentContainerStyle={{ justifyContent: "space-evenly" }}
                data={searchResponce}
                numColumns={1}
                renderItem={listItem =>
                    <SalonCardView
                        id={listItem.item.id}
                        name={listItem.item.name}
                        onBookClick={() => {
                            navigateToSalonDetails(listItem.item.id, listItem.item.name);
                        }}
                    />
                }
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const salonUiModels: SalonUiModel[] = [];

type SalonCardProps = {
    id: number;
    name: string;
    onBookClick: () => void
};

function SalonCardView({ id, name, onBookClick }: SalonCardProps) {
    return (
        <TouchableOpacity
            onPress={() => { onBookClick() }}
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