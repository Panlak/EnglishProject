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
import DropdownComponent from './DropDown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ResultCourse from '../../../../models/course/ResultCourse';
import CourseTestsService from '../../../../api-service/course-test/CourseTestsService';
import CourseTestWordService from '../../../../api-service/course-word-test-service/CourseTestWordService';
import TestWord from '../../../../models/course/TestWord';

import * as navigation from '../../../navigation/Navigation';

const ResultCourseScreen = ({ props }: any) => {

    const [word, setWord] = useState<TestWord>({ id: 0, word: '' });
    const [course, setCourse] = useState<Course>(props.route.params.course)
    const [words, setWords] = useState<TestWord[]>(props.route.params.testWord)
    const [test, setTest] = useState<CourseTest>(
        {
            name: props.route.params.courseTest.name,
            description: props.route.params.courseTest.description,
            text: props.route.params.changeText,
            
        } as CourseTest);
    const [isFocus, setIsFocus] = useState(false);

    const [text, setText] = useState<string>(props.route.params.text);

    const [dataInfo, setDataInfo] = useState<{ label: string; value: number; }[]>([]);


    const saveAndCreate = () => {
        CourseService.createCourse(course).then((res: any) =>{

            CourseTestsService.createCourseTest({
                name: props.route.params.courseTest.name,
                description: props.route.params.courseTest.description,
                text: props.route.params.changeText,
                course: res.data
            } as CourseTest).then(res =>{
                
                words.forEach(item =>{

                   
                    CourseTestWordService.createCourseTest(item).then(res =>{
        
                    })
                })
                navigation.navigate("HomeScreen")
            })
    
        })
       
        
       

    }


    useEffect(() => {
        console.warn(props.route.params)

        
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>You finish create your course check before again before create thank you</Text>

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
                        <Text style={{ fontSize: 20, color: 'black' }}>Before text</Text>
                        <View style={{ marginTop: 30, backgroundColor: 'white', borderRadius: 10, marginBottom: 20, padding: 10 }}>

                            <Text style={styles.courseInfo}>{props.route.params.courseTest.text}</Text>

                        </View>
                        <Text style={{ fontSize: 20, color: 'black' }}>After text</Text>
                        <View style={{ marginTop: 30, backgroundColor: 'white', borderRadius: 10, marginBottom: 20, padding: 10 }}>

                            <Text style={styles.courseInfo}>{props.route.params.changeText}</Text>

                        </View>
                    </ScrollView>



                    <View>

                        <Text style={{ fontSize: 20, color: 'black' }}>Test Words</Text>
                        <ScrollView style={styles.wordsArray} nestedScrollEnabled={true}>
                            <View style={styles.wordsStyle}>
                                {words?.map((item: TestWord) => (
                                    <Text style={styles.currentWord}>{item.word}</Text>

                                ))}

                            </View>


                        </ScrollView>
                    </View>


                    <View style={styles.buttonsActionStyle}>

                        <TouchableOpacity style={styles.createCourseButton} onPress={() => saveAndCreate()}>
                            <Text style={{ color: 'white', fontSize: 20 }}>Create</Text>
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


export default ResultCourseScreen;