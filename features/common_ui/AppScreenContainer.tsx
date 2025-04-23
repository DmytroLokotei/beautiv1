import { PropsWithChildren } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function AppScreenContainer(
    { children, style }: PropsWithChildren & { style: StyleProp<ViewStyle> }
) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={[styles.allWrap, style]}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    allWrap: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})