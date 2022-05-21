import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

import AllDictionaries from './AllDictionaries';
import { createStackNavigator } from "@react-navigation/stack";
import NewWordScreen from './NewWordScreen';
import * as navigation from '../../navigation/Navigation'
import BackButton from '../Buttons/BackButton';

const CurrentDictionary = ({ props }: any) => {
    const [dictionary, setDictionary] = useState<Dictionary>();
  

    useEffect(() => {
        
        setDictionary(props.route.params.dictionary[0])
    }, [])

    const addNewWord = () => {
        navigation.navigate("NewWordScreen", { dictionary })
    }
    return (
        <View>
            <BackButton/>
            <View style={[styles.container]}>
                <Text style={styles.text}>Dictionary</Text>
                <Text>{dictionary?.name}</Text>
                <Text>{dictionary?.count_word}</Text>
                <TouchableOpacity onPress={() => addNewWord()}  >
                    <Text>Add word</Text>
                </TouchableOpacity>
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

    text: {
        alignSelf: 'center',
        fontSize: 20
    },

    input: {}
})
export default CurrentDictionary;

