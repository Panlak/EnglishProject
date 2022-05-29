import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CustomButton from '../CustomButton';
import BackButton from '../../Buttons/BackButton';
import Course from '../../../../models/course/Course';
import CourseService from '../../../../api-service/course-service/CourseService';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import CourseTest from '../../../../models/course/CourseTest';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ResultCourse from '../../../../models/course/ResultCourse';

import * as navigation from '../../../navigation/Navigation';
import TestWord from '../../../../models/course/TestWord';

const TestWordScreen = ({ props }: any) => {

    const [word, setWord] = useState<TestWord>({ id: 0, word: ''});
    const [course, setCourse] = useState<Course>()
    const [words, setWords] = useState<TestWord[]>([])
    const [test, setTest] = useState<CourseTest>(
        {
            name: props.route.params.name,
            description: props.route.params.description,
            text: props.route.params.text
        } as CourseTest);
    const [isFocus, setIsFocus] = useState(false);

    const [text, setText] = useState<string>(props.route.params.text);

    const [dataInfo, setDataInfo] = useState<{ label: string; value: number; }[]>([]);

    const renderLabel = () => {
        if (word || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    const addWord = () => {
        
        if(words.includes(word)){
            return
        }
        
        setWords(words => [...words, word]);

        setText(text?.split(' ').map((item, k) => (
            
            item = (k == word.id && item != `(${item})`) ? `(${item})` : item
        )).join(" "))
        
    }

    const nextStep = () => {

        const courseResult = {
            testWord: words,
            changeText: text,
            courseTest: test,
            course: course
        } as ResultCourse


        navigation.navigate("ResultCourseScreen",courseResult)
    }


    useEffect(() => {
        let data = test.text.split(' ').map((k, item) => (
            {
                label: k,
                value: item
            }
        ))
        setDataInfo(data)
        setCourse(props.route.params.course)
        console.warn(props.route.params)
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>Hello Student right here you can create your course TEST.</Text>

                    <View style={{ backgroundColor: 'white', borderRadius: 10, borderWidth: 2, marginBottom: 20 }}>
                        <Text style={styles.courseInfoLabel}>Course Name</Text>
                        <Text style={styles.courseInfo}>{course?.name}</Text>
                        <Text style={styles.courseInfoLabel}>Course Difficulty</Text>
                        <Text style={styles.courseInfo}>{course?.difficulty}</Text>
                        <Text style={styles.courseInfoLabel}>Course Description</Text>
                        <Text style={styles.courseInfo}>{course?.description}</Text>
                    </View>

                    <ScrollView nestedScrollEnabled={true}>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, borderWidth: 2, marginBottom: 20 }}>
                            <Text style={styles.courseInfoLabel}>Test Name</Text>
                            <Text style={styles.courseInfo}>{test?.name}</Text>
                            <Text style={styles.courseInfoLabel}>Description</Text>
                            <Text style={styles.courseInfo}>{test?.description}</Text>

                        </View>
                        <View style={{ marginTop: 30, backgroundColor: 'white', borderRadius: 10, marginBottom: 20, padding: 10 }}>

                            <Text style={styles.courseInfo}>{text}</Text>

                        </View>
                    </ScrollView>
                    <View>
                        <ScrollView style={styles.wordsArray} nestedScrollEnabled={true}>
                            <View style={styles.wordsStyle}>
                                {words?.map((item: TestWord) => (
                                    <Text style={styles.currentWord}>{item.word}</Text>

                                ))}

                            </View>


                        </ScrollView>
                    </View>
                    <View>
                        {renderLabel()}
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={dataInfo}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={word}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={(item: any) => {

                                setWord(
                                    {
                                        id: item.value,
                                        word: item.label
                                    }
                                );

                                setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign
                                    style={styles.icon}
                                    color={isFocus ? 'blue' : 'black'}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />

                    </View>

                    <View style={styles.buttonsActionStyle}>
                        <TouchableOpacity style={styles.createCourseButton} onPress={() => addWord()}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Create Word</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.createCourseButton} onPress={() => nextStep()}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Next step</Text>
                        </TouchableOpacity >
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    currentWord: {
        color: 'black',
        fontSize: 18,
    },


    wordsStyle: {
        alignItems: 'center'
    },

    buttonsActionStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    wordsArray: {
        height: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1
    },

    courseInfoLabel: {
        fontSize: 18,
        color: 'black'
    },
    courseInfo: {
        fontSize: 16,
        color: 'black'
    },

    title: {
        fontSize: 25,
        color: 'black',
        alignSelf: 'center',
        padding: 30
    },

    container: {
        backgroundColor: '#87DBFF',
        flex: 1
    },

    inputLabel: {
        fontSize: 18,
        color: 'black'
    },

    inputStyles: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10
    },

    createCourseButton: {
        alignSelf: 'center',
        backgroundColor: '#1CDCA9',
        padding: 15,
        borderRadius: 10,
    },


    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
    }
});


export default TestWordScreen;