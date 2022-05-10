import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import CustomButton from './CustomButton';
import DictionaryService from '../../api-service/dictionary-service/DictionaryService';
const NewDictionaryScreen = ({ navigation } : any) => {
    
    const [name, setName] = useState<any>();
   
    const create = () =>{
        DictionaryService.createDictionary(name)

    }
    
    return(
        <View >
            <Text>Name Dictionary</Text>
            <TextInput 
                onChangeText={name => setName({name})}
            />
        <CustomButton text= "Create" onPress={create}/> 
    </View>
    );
}

export default NewDictionaryScreen;