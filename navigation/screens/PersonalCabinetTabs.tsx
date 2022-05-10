import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DictionaryScreen from "./DictionaryScreen";
import PersonalCabinet from './PersonalCabinet';
import DictionaryTabs from './DictionaryTabs';
const Stack = createStackNavigator();

const PersonalCabinetTabs = () => {
    return(
    <Stack.Navigator>
         <Stack.Screen
            name = "Personal Cabinet"
            component={PersonalCabinet}
        />   
        <Stack.Screen
            name = "Dictionary"
            component={DictionaryTabs}
        />   
    </Stack.Navigator>);
}
export default PersonalCabinetTabs;