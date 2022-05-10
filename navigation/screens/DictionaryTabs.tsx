import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DictionaryScreen from "./DictionaryScreen";
import PersonalCabinet from './PersonalCabinet';
import NewDictionaryScreen from './NewDictionaryScreen';
import CurrentDictionary from './CurrentDictionaryScreen';
import { View } from 'react-native';
import NewWordScreen from './NewWordScreen';
import * as navigation from '../../src/navigation/Navigation'
const Stack = createStackNavigator();

const DuctionaryTabs = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dictionary"
                component={DictionaryScreen}
            />
            <Stack.Screen
                name="New Dictionary Screen"
                component={NewDictionaryScreen}
            />
            <Stack.Screen
                name="NewWordScreen"
            >
                {
                    (props: any) => {

                        return (
                            <NewWordScreen props={props} />
                        )
                    }
                }
            </Stack.Screen>
            <Stack.Screen
                name="CurrentDictionary"

            >
                {
                    (props: any) => {

                        return (
                            <CurrentDictionary props={props} />
                        )
                    }
                }
            </Stack.Screen>


        </Stack.Navigator>);
}
export default DuctionaryTabs;