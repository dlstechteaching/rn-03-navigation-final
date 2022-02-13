import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, Text } from "react-native"
import { MyButton } from "../components/MyButton";
import { Navigation } from "../navigation/Navigation";
import { HomeStackScreenProps } from "../navigation/types";

export const HomeScreen: React.VFC = () => {
    const navigation = useNavigation<HomeStackScreenProps['navigation']>();
    return (
        <View style={{ padding: 20, display: 'flex', alignItems: 'center'}}>
            <Text>HomeScreen</Text>
            <MyButton label={'Go to settings'} onPress={() => navigation.navigate(Navigation.Settings, { userId: '123'})}/>
        </View>
    )
}