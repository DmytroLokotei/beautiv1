import { StyleSheet, View, Text, Image, ViewProps, TouchableOpacity } from 'react-native'
import React from 'react'

export type ButtonRightArrowProps = ViewProps & {
    text?: string;
    type?: "black" | "blue" | "inactive";
    onPressCallback?: () => void;
};

export function ButtonRightArrow({ text, type, onPressCallback, ...otherProps }: ButtonRightArrowProps) {
    let backgroundColorValue = '#1E212B';
    switch (type) {
        case "blue":
            backgroundColorValue = '#5168EA';
            break;
        case "inactive":
            backgroundColorValue = '#D1D1D6';
            break;
        default:
            break;
    }
    return (
        <TouchableOpacity
            onPress={() => { if (onPressCallback) { onPressCallback() } }}
            style={[styles.all_container, { backgroundColor: backgroundColorValue }]}
        >
            <Text style={styles.text}>{text}</Text>
            <View style={styles.chewron_container}>
                <Image
                    source={require('@/assets/images/chewron_right_black.svg')}
                    style={{ width: 20, height: 20 }}
                />
            </View>
        </TouchableOpacity >
    )
}

export default ButtonRightArrow

const styles = StyleSheet.create({
    all_container: {
        flexDirection: 'row',
        backgroundColor: '#1E212B',
        borderRadius: 14,
        width: '100%',
        padding: 5,
        position: 'relative',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        width: '100%',
        color: '#FDFDFD',
        marginStart: 5,
        fontWeight: 700,
        fontFamily: 'SpaceMono'
    },
    chewron_container: {
        backgroundColor: '#FDFDFD',
        borderRadius: '50%',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
});