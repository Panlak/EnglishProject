import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DictionaryScreen from "./DictionaryScreen";
import PersonalCabinet from './PersonalCabinet';
import NewDictionaryScreen from './NewDictionaryScreen';
import CurrentDictionary from './CurrentDictionaryScreen';
import { View } from 'react-native';
import NewWordScreen from './NewWordScreen';
import SignInScreen from './authScreens/SignInScreen';
import SignUpScreen from './authScreens/SignUpScreen';

const Stack = createStackNavigator();

const AuthTabs = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>);
}
export default AuthTabs;