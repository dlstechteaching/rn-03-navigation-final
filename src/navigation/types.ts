import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Navigation } from "./Navigation";

export type AppStackNavigatorParamList = {
    [Navigation.Home] : undefined;
    [Navigation.Settings] : {
        userId: '123'
    },
    [Navigation.About] : undefined
};

export type HomeStackScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.Home
>

export type SettingsStackScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.Settings
>

export type AboutStackScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.About
>