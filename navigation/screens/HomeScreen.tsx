import * as React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import Component from "../../src/components/Component"
export default function HomeScreen({ navigation }: { navigation: any}) {

   

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Component/>
        </View>
    );
}   