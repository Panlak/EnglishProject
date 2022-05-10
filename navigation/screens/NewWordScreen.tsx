import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import CustomButton from './CustomButton';
import DictionaryService from '../../api-service/dictionary-service/DictionaryService';
import WordService from '../../api-service/word-service/WordService';
import Word from '../../models/words/WordModel';
const NewWordScreen = ({props}: any) => {

    const [word, setName] = useState<any>();
    const [translate, setTranslate] = useState<any>();
    const create = () => {
        const english_dictionary_id = props.route.params.dictionary.id
        const wordCreate: Word = {
            word:
            {
                word_name: word,
                translate: translate,
                english_dictionary_id: english_dictionary_id
            }
        };

        WordService.createWord(wordCreate);
     
    }

    return (
        <View >
            <Text>Name Dictionary</Text>
            <TextInput
                onChangeText={word => setName({ word })}
            />
            <TextInput
                onChangeText={translate => setTranslate({ translate })}
            />
            <CustomButton text="Create" onPress={() => create()} />
        </View>
    );
}

export default NewWordScreen;