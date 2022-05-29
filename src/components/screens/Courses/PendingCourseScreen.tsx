import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import CustomButton from '../CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import StorageManager from '../../storage/StorageManager';
import User from '../../../../models/user/LoginModel';
import AsyncStorage from '@react-native-community/async-storage';
import UserModel from '../../../../models/user/UserModel';
import BackButton from '../../Buttons/BackButton';
import Course from '../../../../models/course/Course';
import CourseService from '../../../../api-service/course-service/CourseService';
import UserCourse from '../../../../models/course/UserCourse';

import * as navigation from '../../../navigation/Navigation';
import CourseTestsService from '../../../../api-service/course-test/CourseTestsService';
import CourseTest from '../../../../models/course/CourseTest';
import CourseTestWordService from '../../../../api-service/course-word-test-service/CourseTestWordService';
import TestWord from '../../../../models/course/TestWord';
const PendingCourseScreen = (props: any) => {


    const [course, setCourse] = useState<Course>(props.props.route.params);
    const [courseTests, setCourseTests] = useState<CourseTest[]>();
    const [courseTestWords, setCourseTestWords] = useState<TestWord[]>();
    useEffect(() => {

        CourseTestsService.getCourseTest(props.props.route.params.id).then((res: any) => {

            setCourseTests(res.data)


            res.data.map((item: any) => (
                CourseTestWordService.getCourseTest(item.id).then((res: any) => {
                    setCourseTestWords(res.data)
                })
            ))
        })
    }, []);


    const passCourse = (course_id: number) => {
        CourseService.passCourse(course_id).then(res => {
            navigation.goBack();
        })
    }
    const deleteCourse = (course_id: number) => {
        CourseService.deleteCourse(course_id).then(res => {
            navigation.goBack();
        })
    }

    return (
        <View style={{ backgroundColor: '#87DBFF', flex: 1 }}>
            <ScrollView>
                <View>
                    <BackButton />
                    <View style={styles.CourseBlocks}>
                        <Text style={styles.header}>Pending Course</Text>


                        <View style={styles.CourseBlock}>

                            <View>
                                <Text style={styles.courseName}>{course?.name}</Text>
                                <Text style={styles.courseDescription}>Description: {course?.description.slice(0, 100) + "..........."}</Text>
                                <Text style={styles.courseDifficulty}>Difficulty: {course?.difficulty}</Text>
                            </View>

                        </View>
                        <View>
                            <Text style={styles.header}>Tests Course</Text>
                            {
                                courseTests?.map((item) => (
                                    <View style={styles.CourseBlock}>
                                        <Text style={styles.textColorTests}>Name: {item.name}</Text>
                                        <Text style={styles.textColorTests}>Desc: {item.description}</Text>
                                        <Text style={[styles.textColorTests, { marginTop: 20 }]}>Text:</Text>
                                        <View style={styles.textAreaTest}>
                                            <Text style={styles.textColor}>{item.text}</Text>
                                        </View>

                                    </View>
                                ))

                            }
                            <Text style={styles.header}>Words Tests Course</Text>

                            <ScrollView style={{ height: 100 }} nestedScrollEnabled={true}>
                                {courseTestWords?.map((item) => (
                                    <View key={item.id} style={styles.wordsArae}>
                                        <Text>{item.word}</Text>
                                    </View>
                                ))
                                }
                            </ScrollView>


                        </View>

                    </View>
                    <View style={styles.buttonsBlock}>
                        <TouchableOpacity style={styles.createCourseButton} onPress={() => passCourse(course?.id)}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Pass course</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.createCourseButton} onPress={() => deleteCourse(course?.id)}>
                            <Text style={{ color: 'white', fontSize: 18 }}>Delete course</Text>
                        </TouchableOpacity >
                    </View>
                </View>

            </ScrollView>
        </View>
    );
}
export default PendingCourseScreen;

const styles = StyleSheet.create({
    textColorTests: {
        color: 'black',
        fontSize: 20
    },
    textColor: {
        color: 'black'
    },
    wordsArae: {
        borderWidth:1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: 'white'
    },

    textAreaTest: {
        backgroundColor: 'white',
        padding: 10,

    },

    buttonsBlock: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },


    courseDifficulty: {
        fontSize: 15,

        fontWeight: "bold",
        color: 'black',
    },
    courseName: {
        fontSize: 20,

        fontWeight: "bold",
        color: 'black',

    },
    courseDescription: {
        fontSize: 14,

        fontWeight: "400",
        color: 'black',
    },
    leaveCourseButton: {
        alignSelf: 'center',
        backgroundColor: '#FA2F5F',
        padding: 10,
        borderRadius: 10,
    },
    header: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center'
    },
    createCourseButton: {
        alignSelf: 'center',
        backgroundColor: '#1CDCA9',
        padding: 15,
        borderRadius: 10,
    },

    CourseBlock: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'lightblue',
        marginTop: 5,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 1,


    },
    CourseBlocks: {
        backgroundColor: '#78B3F6',
        padding: 10
    },
    colorText: {
        color: 'black'
    },


    // Own course Styles

    ownCourseContainer: {
        marginTop: 20
    },

    ownCourseHeader: {
        alignSelf: 'center',
        fontSize: 20,

    },
    ownCourseDescription: {
        padding: 10,
        fontSize: 18

    },
    ownCourse: {
        alignSelf: 'center',
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
    },

});

