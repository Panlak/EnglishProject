import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { useCallback, useEffect, useState } from 'react';
import Course from '../../../../models/course/Course';
import CourseService from '../../../../api-service/course-service/CourseService';
import BackButton from '../../Buttons/BackButton';
import * as navigation from '../../../navigation/Navigation' 
import CourseTest from '../../../../models/course/CourseTest';
import CourseTestsService from '../../../../api-service/course-test/CourseTestsService';



const PendingCourses = () => {

    const [courses, setCourses] = useState<Course[]>();
  

    const openCourse = (course_id: number) => {
        const course = courses?.filter(cour => cour?.id === course_id)[0];
        
        if(course != null && course != undefined)
        {
            navigation.navigate('PendingCourseScreen', course)
        }

    }
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        CourseService.getPendingCourses().then((res: any) => {
            setCourses(res.data);
        }).then(() => setRefreshing(false))

    }, []);


    useEffect(() => {
        CourseService.getPendingCourses().then((res: any) => {

            setCourses(res.data);
           
        })
    }, []);

    return (
        <View style={{ backgroundColor: '#87DBFF', flex: 1 }}>
            <BackButton />
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View>
                    <View style={styles.CourseBlocks}>
                        <Text style={styles.header}>Hello Admin</Text>
                        {
                            (courses?.length !== 0)
                                ?
                                courses?.map((item) => (
                                    <View >
                                        <View style={styles.CourseBlock} >
                                            <View>
                                                <Text style={styles.courseDifficulty}>Difficulty: {item?.difficulty}</Text>
                                                <TouchableWithoutFeedback key={item!.id} onPress={() => openCourse(item!.id)}>
                                                    <View>
                                                        <Text style={styles.courseName}>{item?.name}</Text>
                                                        <Text style={styles.courseDescription}>Description: {item?.description.slice(0, 100) + "......."}</Text>
                                                    </View>
                                                </TouchableWithoutFeedback>
                                            </View>
                                          
                                        </View>
                                    </View>
                                ))
                                :
                                <View><Text>No pending courses</Text></View>
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );


}
export default PendingCourses;

const styles = StyleSheet.create({

    buttonsActionStyle: {
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

