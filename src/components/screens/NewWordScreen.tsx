import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import CustomButton from './CustomButton';
import Word from '../../../models/words/WordModel';
import WordService from '../../../api-service/word-service/WordService';
import BackButton from '../Buttons/BackButton';
import { Input } from 'react-native-elements';
import * as navigation from '../../navigation/Navigation'
const NewWordScreen = ({ props }: any) => {

    const [word, setName] = useState<any>();
    const [translate, setTranslate] = useState<any>();
    const create = () => {
        const english_dictionary_id = props.route.params.dictionary.id
        const wordCreate: Word = {
            word:
            {
                id: 0,
                word_name: word,
                translate: translate,
                english_dictionary_id: english_dictionary_id
            }
        };

        WordService.createWord(wordCreate);
        navigation.goBack();
    }

    return (
        <View style={{ backgroundColor: '#87DBFF', flex: 1 }}>
            <BackButton />
            <View>
                <Input
                    placeholder='Word Name'
                    style={styles.inputStyles}
                    autoCompleteType={""}
                    onChangeText={word => setName({ word })}
                    value={word} />

                <Input
                    placeholder='Translate'
                    style={styles.inputStyles}

                    autoCompleteType={""}
                    onChangeText={translate => setTranslate({ translate })}
                    value={translate} />

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


export default NewWordScreen;