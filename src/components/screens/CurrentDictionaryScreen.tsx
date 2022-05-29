import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

import AllDictionaries from './AllDictionaries';
import { createStackNavigator } from "@react-navigation/stack";
import NewWordScreen from './NewWordScreen';
import * as navigation from '../../navigation/Navigation'
import BackButton from '../Buttons/BackButton';
import WordService from '../../../api-service/word-service/WordService';
import Word from '../../../models/words/WordModel';

const CurrentDictionary = ({ props }: any) => {
    const [dictionary, setDictionary] = useState<Dictionary>();
    const [words, setWords] = useState<Word[]>();
    const [index, setIndex] = useState<number>();
    useEffect(() => {


        WordService.getWords(props.route.params.dictionary[0].id).then(res => {


            setWords(res.data)

            setDictionary({
                id: props.route.params.dictionary[0].id,
                name: props.route.params.dictionary[0].name,
                count_word: (res.data?.length)
            } as Dictionary);
        }

        );


    }, [])

    const addNewWord = () => {
        navigation.navigate("NewWordScreen", { dictionary })
    }

    const deleteWord = (number: number) => {

        WordService.deleteWord(number)
        setWords(words?.filter((w: any) => w.id != number))
        setDictionary({
            id: props.route.params.dictionary[0].id,
            name: props.route.params.dictionary[0].name,
            count_word: (words!.length - 1)
        } as Dictionary);

    }
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        WordService.getWords(props.route.params.dictionary[0].id).then(res => {
            setWords(res.data)
        }). then(() => setRefreshing(false))
       
    }, []);
    return (
        <View style={{ backgroundColor: '#87DBFF', flex: 1 }}>
            <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <BackButton />
                <View style={[styles.container]}>
                    <View>
                        <Text style={{ color: 'black', fontSize: 18 }}>Dictionary name: {dictionary?.name}</Text>
                        <Text style={{ color: 'black', fontSize: 18 }}>Count word: {dictionary?.count_word}</Text>
                    </View>
                    <TouchableOpacity onPress={() => addNewWord()} style={{
                        alignSelf: 'center',
                        backgroundColor: '#1CDCA9',
                        padding: 30,
                        borderRadius: 10,
                    }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>Add word</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wordDictionary}>
                    {
                        words?.map((item: any) => (
                            <View key={item.id} style = {styles.wordBlock}>
                                <View style={{ padding: 20, backgroundColor: '#87DBFF', width: '50%' }}>


                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        Word: {item.word_name}
                                    </Text>
                                    <Text style={{ color: 'black', fontSize: 18 }}>
                                        Translate: {item.translate}
                                    </Text>

                                </View>
                                <TouchableOpacity onPress={() => deleteWord(item.id)} style={{
                                    alignSelf: 'center',
                                    backgroundColor: '#1CDCA9',
                                    padding: 30,
                                    borderRadius: 10,
                                }}  >
                                    <Text style={{ color: 'white', fontSize: 18 }}>Delete word</Text>
                                </TouchableOpacity>
                            </View>



                        ))
                    }

                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({

    wordDictionary: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: 20,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
    },
    wordBlock: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        padding: 10,
        justifyContent:'space-around'
    },
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    text: {
        alignSelf: 'center',
        fontSize: 20
    },

    input: {}
})
export default CurrentDictionary;

