import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DictionaryScreen from "./DictionaryScreen";
import PersonalCabinet from './PersonalCabinet';
import NewDictionaryScreen from './NewDictionaryScreen';
import CurrentDictionary from './CurrentDictionaryScreen';
import { View } from 'react-native';
import NewWordScreen from './NewWordScreen';
const Stack = createStackNavigator();

const DuctionaryTabs = () => {
    return (
        <Stack.Navigator>
            
            <Stack.Screen
                name="Dictionary"
                component={DictionaryScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="New Dictionary Screen"
                component={NewDictionaryScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
             options={{
                headerShown: false,
            }}
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
             options={{
                headerShown: false,
            }}
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