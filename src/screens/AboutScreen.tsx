import { useNavigation } from "@react-navigation/native";
import React from "react"
import { View, Text } from "react-native"
import { MyButton } from "../components/MyButton";
import { Navigation } from "../navigation/Navigation";
import { AboutStackScreenProps } from "../navigation/types";

export const AboutScreen: React.VFC = () => {
    const navigation = useNavigation<AboutStackScreenProps['navigation']>();

    return (
        <View style={{ padding: 20, display: 'flex', alignItems: 'center'}}>
            <Text>AboutScreen</Text>
            <MyButton label={'Go to Home'} onPress={() => navigation.navigate(Navigation.Home)}/>
            <MyButton label={'Go back'} onPress={() => navigation.goBack()}/>
            <MyButton label={'Pop 1 screen from the stack'} onPress={() => navigation.pop()}/>
            <MyButton label={'Pop 1 screen from the stack bis'} onPress={() => navigation.pop(1)}/>
            <MyButton label={'Pop 2 screens from the stack'} onPress={() => navigation.pop(2)}/>
            <MyButton label={'Push 1 screen'} onPress={() => navigation.push(Navigation.Home)}/>
        </View>
    )
}