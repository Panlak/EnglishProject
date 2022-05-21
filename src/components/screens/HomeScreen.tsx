import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import Component from '../storage/CurrentUser';
import { useEffect, useState } from 'react';
import CurrentUser from '../storage/CurrentUser';
import StorageManager from '../storage/StorageManager';
import UserModel from '../../../models/user/UserModel'
import CourseService from '../../../api-service/course-service/CourseService';
import Course from '../../../models/course/Course';
import BackButton from '../Buttons/BackButton';





const HomeScreen = ({ navigation }: any) => {

    const [courses, setCourses] = useState<Course[]>();
    const [user, setUser] = useState<UserModel>();


    const openCourse = (course_id : number) =>{
        const course = courses?.filter(cour => cour?.id === course_id)
        navigation.navigate("CurrentCourse",course)
    }


    useEffect(() => {
        CourseService.getCourse().then((res: any) => {
            StorageManager.getAuthData().then(res => {
                setUser(res)
            })
            setCourses(res.data);
        })
    }, []);
    
    return (
        <View style={{ backgroundColor: '#87DBFF', flex: 1 }}>
            <View>
                <View style={styles.CourseBlocks}>
                    <Text style={styles.header}>Hello Student</Text>
                    {
                        (courses?.length !== 0)
                            ?
                            courses?.map((item) => (
                                <View key={item!.id}>
                                    <View style={styles.CourseBlock}>
                                    <Text style = {styles.courseDifficulty}>Difficulty: {item.difficulty}</Text>
                                        <TouchableWithoutFeedback onPress={() => openCourse(item!.id)}>
                                            <View>
                                                <Text style={styles.courseName}>{item?.name}</Text>
                                                <Text style={styles.courseDescription}>Description: {item?.description.slice(0, 100) + "..........."}</Text>

                                            </View>
                                        </TouchableWithoutFeedback>

                                    </View>
                                </View>
                            ))
                            :
                            <View>You don't have courses</View>
                    }
                </View>
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

export default HomeScreen;