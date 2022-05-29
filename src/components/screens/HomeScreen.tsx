import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import Component from '../storage/CurrentUser';
import { useCallback, useEffect, useState } from 'react';
import CurrentUser from '../storage/CurrentUser';
import StorageManager from '../storage/StorageManager';
import UserModel from '../../../models/user/UserModel'
import CourseService from '../../../api-service/course-service/CourseService';
import Course from '../../../models/course/Course';
import BackButton from '../Buttons/BackButton';
import UserCourse from '../../../models/course/UserCourse';
import WordService from '../../../api-service/word-service/WordService';





const HomeScreen = ({ navigation }: any) => {

    const [courses, setCourses] = useState<Course[]>();
 

    const openCourse = (course_id: number) => {
        const course = courses?.filter(cour => cour?.id === course_id);

        CourseService.getUserCourse().then((res: any) => {
            
            const cour =  res.data.user_course?.filter((cour: any) => cour.user_course.course_id === course_id)
          
            const props = {
               
                isUserCourse: cour?.length == 0,
                Currentcourse: course
                
            }

            navigation.navigate("CurrentUserCourse", { props })
        }) 

    }
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        CourseService.getCourse().then((res: any) => {
            setCourses(res.data);
        }). then(() => setRefreshing(false))
       
    }, []);

    
    useEffect(() => {
        CourseService.getCourse().then((res: any) => {
          
            setCourses(res.data);
        })
    }, []);

    return (
        <View style={{ backgroundColor: '#87DBFF', flex: 1 }}>
            <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            >
            <View>
                <View style={styles.CourseBlocks}>
                    <Text style={styles.header}>Hello Student</Text>
                    {
                        (courses?.length !== 0)
                            ?
                            courses?.map((item) => (
                                <View >
                                    <View style={styles.CourseBlock} >
                                        <Text style={styles.courseDifficulty}>Difficulty: {item?.difficulty}</Text>
                                        <TouchableWithoutFeedback key={item!.id}  onPress={() => openCourse(item!.id) }>
                                            <View>
                                                <Text style={styles.courseName}>{item?.name}</Text>
                                                <Text style={styles.courseDescription}>Description: {item?.description.slice(0, 100) + "..........."}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>

                                    </View>
                                </View>
                            ))
                            :
                            <View><Text>Site didn't have courses</Text></View>
                    }
                </View>
            </View>
            </ScrollView>
        </View>
    );


}
const styles = StyleSheet.create({

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

export default HomeScreen;