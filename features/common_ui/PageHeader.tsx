import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle, Text, Image, TouchableOpacity } from "react-native";

export type PageHeaderProps = {
    title?: string;
    hasBackButton?: boolean;
};

export function PageHeader(
    {
        children,
        viewStyle,
        title,
        hasBackButton
    }: PropsWithChildren
        & { viewStyle: StyleProp<ViewStyle> }
        & PageHeaderProps
) {
    return (
        <View
            style={[viewStyle,
                {
                    backgroundColor: '#FDEBF6',
                    width: "100%",
                    flexDirection: "column",
                    paddingLeft: 10,
                    paddingRight: 10
                }]}
        >
            <View
                style={{ flex: 1, flexDirection: "row" }}
            >
                {hasBackButton && (
                    <TouchableOpacity
                        onPress={() => {
                            router.back()
                        }}
                        style={{ backgroundColor: 'white', borderRadius: '50%', padding: 5, width: 20, height: 20, justifyContent: "center", alignItems: "center" }}
                    >
                        <FontAwesome size={15} name="chevron-left" color="#1E212B" />
                    </TouchableOpacity>
                )}


                <Text
                    style={[
                        { color: 'blue', flex: 1, alignContent: "center", textAlign: "center" },
                        { paddingStart: hasBackButton ? 0 : 20 }
                    ]}
                >
                    {title}
                </Text>
                <Image
                    source={require('@/assets/images/user_avatar_default.png')}
                    style={{ width: 20, height: 20 }}
                />
            </View>
            {children}

        </View>
    )
}