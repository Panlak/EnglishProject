import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CourseService from '../../../../api-service/course-service/CourseService';
import Course from '../../../../models/course/Course';

import BackButton from '../../Buttons/BackButton';

import * as navigation from '../../../navigation/Navigation';
import UserModel from '../../../../models/user/UserModel';
import StorageManager from '../../storage/StorageManager';

const CurrentUserCourse = ({ props }: any) => {


    const [course, setCourse] = useState<Course>(props.route.params.props.Currentcourse[0]);
    const [isUserCourse, setUserCourse] = useState<boolean>();
    const [user, setUser] = useState<UserModel>()
    const CheckUserCourse = () => {
        CourseService.getUserCourse().then(async (res: any) => {
            const course = res.data.user_course?.filter((cour: any) => cour.user_course.course_id === props.route.params.props.Currentcourse[0].id)
            setUserCourse(course?.length == 0)
            //changes
        })
    }

    const DeleteCourse = (course_id: number) => {
        CourseService.deleteCourse(course_id).then(res => {
            navigation.goBack();
        })
    }

    useEffect(() => {
        StorageManager.getAuthData().then(res => {
            setUser(res)
        })

        CheckUserCourse()
    }, [])


    const joinCourse = () => {

        CourseService.createUserCourse(course as Course).then((res: any) => {
            CheckUserCourse()
        });
    }


    const userCourseScreen = () => {
        navigation.navigate("UserCourses")
    }

    return (
        <View style={{ backgroundColor: '#87DBFF', flex: 1 }}>
            <BackButton />
            <View>
                <View style={styles.CourseBlocks}>


                    <View style={styles.CourseBlock}>
                        <Text style={styles.courseDifficulty}>Difficulty: {course?.difficulty}</Text>
                        <Text style={styles.courseName}>{course?.name}</Text>
                        <Text style={styles.courseDescription}>Description: {course?.description}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontSize:20, color: 'black'}}>More Information About Course:</Text>
                </View>
                <View >
                    {
                        (isUserCourse) ?

                            <View><Text style={{fontSize:20, color: 'black'}}>Want to join?</Text></View>
                            :
                            <View><Text style={{fontSize:20, color: 'black'}}>Already in course</Text></View>
                    }

                    <View style={styles.buttonsBlock}>
                        {
                            (isUserCourse) ?


                                <TouchableOpacity style={styles.createCourseButton} onPress={() => joinCourse()}>
                                    <Text style={{ color: 'white', fontSize: 18 }}>Join Course</Text>
                                </TouchableOpacity >

                                :
                                <View>

                                    <TouchableOpacity style={styles.createCourseButton} onPress={() => userCourseScreen()}>
                                        <Text style={{ color: 'white', fontSize: 18 }}>Go to Your Courses</Text>
                                    </TouchableOpacity >

                                </View>
                        }



                        {(user?.role == 1) ?
                            <TouchableOpacity style={styles.createCourseButton} onPress={() => DeleteCourse(course?.id)}>
                                <Text style={{ color: 'white', fontSize: 18 }}>Delete Course</Text>
                            </TouchableOpacity >
                            : <View></View>

                        }

                    </View>


                </View>

            </View>

        </View>
    );
}

export default CurrentUserCourse;

const styles = StyleSheet.create({

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
        fontSize: 15,

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



});
