import * as React from 'react';
import { View, Text } from 'react-native';
import CustomButton from './CustomButton';
import LogoutButton from './LogoutButton';

const SettingsScreen = ({ navigation } : any) => {
    return (
        <View style={{ flex: 1, alignItems: 'center' }} >
           <CustomButton onPress={() => navigation.navigate("PersonalCabinet")}  text = {"Personal Cabinet"}/>
           <LogoutButton/> 
        </View>
    );
}
export default SettingsScreen;