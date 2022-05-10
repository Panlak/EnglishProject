import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PersonalCabinetTabs from "./PersonalCabinetTabs";
import SettingsScreen from "./SettingsScreen";
const Stack = createStackNavigator();

const SettingsTabs = () => {
    return(<Stack.Navigator>
        <Stack.Screen
            name = "SettingsScreen"
            component={SettingsScreen}
        />
        <Stack.Screen
            name = "PersonalCabinet"
            component={PersonalCabinetTabs}
        />
    </Stack.Navigator>);
}
export default SettingsTabs;