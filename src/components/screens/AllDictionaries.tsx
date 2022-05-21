import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DictionaryService from '../../../api-service/dictionary-service/DictionaryService'
import CustomButton from './CustomButton';

const AllDictionaries = ({ navigation }: any) => {
    const [dictionaries, setDictionaries] = useState<Dictionary[]>();

    const deleteDictionary = (id: number) => {
        DictionaryService.deleteDictionary(id)
        setDictionaries(dictionaries?.filter(dictionaries => dictionaries?.id != id))
    }

    const openDictionary = (id: number) => {
        const dictionary = dictionaries?.filter(dict => dict?.id === id)
        navigation.navigate("CurrentDictionary",{dictionary})
    }

    useEffect(() => {
        DictionaryService.getDictionaries().then((res) => {
            setDictionaries(res.data)
        });
    }, [])

    return (


        <View >
            {
                (dictionaries?.length !== 0)
                ?
                dictionaries?.map((item) => (
                        <View key={item!.id} style={[styles.container]} >
                            <TouchableWithoutFeedback onPress={() => openDictionary(item!.id)} >
                                <View style={styles.leftBlock}>
                                    <Text style={styles.text}>{item!.name}</Text>
                                    <Text style={styles.text}>Words: {item!.count_word}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.butons}>
                                <TouchableOpacity onPress={() => deleteDictionary} style={styles.editButton} >
                                    <Text style={styles.editButtonText}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteDictionary(item!.id)} style={styles.closeButton} >
                                    <Text style={styles.closeButtonText}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                ))
                :
                <Text>You don't have dictionaries</Text>
            }
        </View>


    );
}
const styles = StyleSheet.create({

    leftBlock: {
        width: '100%',
    },

    container: {
        backgroundColor: '#20B2AA',
        width: '90%',
        alignSelf: 'center',
        borderColor: '#e8e8e8',
        marginBottom: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    text: {
        padding: 10,
        color: 'white',
        fontSize: 20
    },
    butons: {
        alignSelf: 'center',

    },

    editButton: {
        backgroundColor: '#3498db',
        padding: 10,
        borderColor: 'white',
        borderRadius: 1,

    },
    closeButton: {

        borderColor: 'white',
        borderRadius: 1,
        backgroundColor: '#e74c3c',
        padding: 10

    },
    editButtonText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
    }
})
export default AllDictionaries;

