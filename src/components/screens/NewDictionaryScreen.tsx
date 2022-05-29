import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import CustomButton from './CustomButton';
import DictionaryService from '../../../api-service/dictionary-service/DictionaryService';
import BackButton from '../Buttons/BackButton';
import { Input } from 'react-native-elements';
import * as navigation from '../../navigation/Navigation'
const NewDictionaryScreen = () => {
    
    const [name, setName] = useState<any>();
   
    const create = () =>{
        
        DictionaryService.createDictionary(name)
        
        navigation.goBack();
    }
    
    return(

        <View style={{ backgroundColor: '#87DBFF', flex: 1 }}>
            <BackButton />
            <View>
                <Input
                    placeholder='Dictionary Name'
                    style={styles.inputStyles}
                    autoCompleteType={""}
                    onChangeText={name => setName({name})}
                    value={name} />

            
                <CustomButton text="Create" onPress={() => create()} />
            </View>


        </View>

    );
}
const styles = StyleSheet.create({
    inputStyles: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,

    },
})

export default NewDictionaryScreen;