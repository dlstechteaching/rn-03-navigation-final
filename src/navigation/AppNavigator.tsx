import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from "../screens/AboutScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { Navigation } from "./Navigation";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName={Navigation.Home}>
            <Stack.Screen name={Navigation.Home} component={HomeScreen} options={{ title: 'Home' }}/>
            <Stack.Screen name={Navigation.Settings} component={SettingsScreen} />
            <Stack.Screen name={Navigation.About} component={AboutScreen} />
        </Stack.Navigator>
    )
}