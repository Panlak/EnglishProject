import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
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
const UserCourseScreeen = () => {

    const [courses, setCourse] = useState<UserCourse[]>();

    useEffect(() => {
        CourseService.getUserCourse().then((res: any) => {
            setCourse(res.data.user_course)
        })
    }, []);

    const leaveFromCourse = (course_id : number) => {
        CourseService.deleteUserCourse(course_id).then((res : any)=>{
            setCourse(courses?.filter(cours => cours?.course.id != course_id))
        })
    } 

    const createCourse = () =>{
        navigation.navigate("NewCourse")
    }

    return (
        <View style={{ backgroundColor: '#87DBFF', flex: 1 }}>
            <View>
                <BackButton />
                <View style={styles.CourseBlocks}>
                    <Text style={styles.header}>Your Courses</Text>
                    {
                        (courses?.length !== 0 )
                            ?
                            courses?.map((item) => (
                                <View  key={item!.course.id} style={styles.CourseBlock}>
                                    <TouchableWithoutFeedback onPress={() => console.warn("sfa")}>
                                        <View>
                                            <Text style={styles.courseName}>{item?.course.name}</Text>
                                            <Text style={styles.courseDescription}>Description: {item?.course.description.slice(0, 100) + "..........."}</Text>
                                            <Text style={styles.courseDifficulty}>Difficulty: {item?.course.difficulty}</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    <TouchableOpacity style={styles.leaveCourseButton} onPress={() => leaveFromCourse(item.course.id)}>
                                        <Text style={{ color: 'white', fontSize: 18 }}>Leave Course</Text>
                                    </TouchableOpacity >
                                </View>
                            ))
                            :
                            <View><Text>You don't have courses</Text></View>
                    }
                </View>
            </View>

            <View style={styles.ownCourseContainer}>
                <View >
                    <Text style={styles.ownCourseHeader}>Create Your Own Course</Text>
                    <Text style={styles.ownCourseDescription}>Hello Student here you can create own course where another
                        people can pass it of course if it passes the administrator check</Text>
                </View>
                <TouchableOpacity style={styles.createCourseButton} onPress={() => createCourse()}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Create Course</Text>
                </TouchableOpacity >

            </View>
        </View>
    );
}


const styles = StyleSheet.create({

    courseDifficulty:{
        fontSize: 15,
        
        fontWeight: "bold",
        color: 'black',
    },
    courseName:{
        fontSize: 20,
        
        fontWeight: "bold",
        color: 'black',

    },
    courseDescription:{
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

export default UserCourseScreeen;