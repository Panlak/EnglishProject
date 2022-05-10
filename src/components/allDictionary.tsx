import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import AuthService from '../../api-service/auth-service/AuthService';
import DictionaryService from '../../api-service/dictionary-service/DictionaryService'
import CustomButton from '../../navigation/screens/CustomButton';
import { IconButton } from '../../navigation/screens/IconButton';

const allDictionary = ({ navigation }: { navigation: any}) =>{
    const [dictionaries, setDictionaries] = useState<any>();
   
    
    DictionaryService.getDictionaries().then((res) =>{
        setDictionaries(res)
    })
       
    return(
        <View>
            <IconButton name='close' onPress={() => navigation.pop()}/>
            <Text>Dictionaries</Text>
            <Text>{dictionaries}</Text>
        </View>
    );
}

export default allDictionary;