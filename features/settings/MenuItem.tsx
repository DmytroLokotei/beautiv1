import React from 'react';
import { TouchableOpacity, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

export type MenuItemProps = {
    name: string;
    iconName: "user-o" | "bell-o" | "gear"; // TODO: Fix field type
    onPress: () => void
};

export function MenuItemView({ name, iconName, onPress }: MenuItemProps) {

    return (
        <TouchableOpacity
            onPress={() => {
                onPress()
            }}
            style={{
                flexDirection: "row",
                flex: 1,
                width: '100%',
                padding: 8
            }}
        >
            <FontAwesome size={19} name={iconName} color="#1E212B" />
            <Text style={{
                color: "#1E212B",
                fontSize: 16,
                flex: 1,
                marginLeft: 8
            }}
            >
                {name}
            </Text>

            <Entypo size={19} name="chevron-thin-right" color="#5168EA" />
        </TouchableOpacity>
    );
}