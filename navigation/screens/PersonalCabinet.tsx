import * as React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import CustomButton from './CustomButton';

const PersonalCabinet = ({ navigation } : any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <CustomButton text= "Dictionary" onPress={() => navigation.navigate('Dictionary')} /> 
        </View>
    );
};   
export default PersonalCabinet;