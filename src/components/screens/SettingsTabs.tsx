import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PersonalCabinetTabs from "./PersonalCabinetTabs";
import SettingsScreen from "./SettingsScreen";
import PersonalInformation from './PersonalInformation';
const Stack = createStackNavigator();

const SettingsTabs = () => {
    return(<Stack.Navigator>
        <Stack.Screen
            name = "SettingsScreen"
            component={SettingsScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name = "PersonalInformation"
            component={PersonalInformation}
            options={{
                headerShown: false,
            }}
        />

    </Stack.Navigator>);
}
export default SettingsTabs;