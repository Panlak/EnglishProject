import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

import AllDictionaries from './AllDictionaries';
import CustomButton from './CustomButton';
import BackButton from '../Buttons/BackButton';

const DictionaryScreen = ({ navigation } : any) =>{
 
    return(
        <View >
            <BackButton/>
            <View style = {[styles.container]}>
                
                <CustomButton text= "Create new Ditionary" onPress={() => navigation.navigate("New Dictionary Screen")} /> 
                <Text style = {styles.text}>Dictionaries</Text>
                <AllDictionaries navigation = {navigation}/>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,   
    },

    text:{
        alignSelf: 'center',
        fontSize: 20
    },

    input: {}
})
export default DictionaryScreen;

