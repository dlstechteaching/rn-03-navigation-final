import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { MyButton } from "../components/MyButton";
import { Navigation } from "../navigation/Navigation";
import { SettingsStackScreenProps } from "../navigation/types";

export const SettingsScreen: React.VFC = () => {
    const navigation = useNavigation<SettingsStackScreenProps['navigation']>();
    const route = useRoute<SettingsStackScreenProps['route']>();

    const userId = route.params.userId;    

    return (
        <View style={{ padding: 20, display: 'flex', alignItems: 'center'}}>
            <Text>{ 'SettingsScreen with query param ' + userId}</Text>
            <MyButton label={'Go to about page'} onPress={() => navigation.navigate(Navigation.About)}/>
        </View>
    )
}