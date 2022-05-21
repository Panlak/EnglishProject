import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import Course from '../../../models/course/Course';
import BackButton from '../Buttons/BackButton';
import CustomButton from './CustomButton';
import LogoutButton from './LogoutButton';

const CourseScreen = ({ props }: any) => {

    const [course, setCourse] = useState<Course>();
    useEffect(() => {
        
        setCourse(props.route.params[0])

        
    }, [])


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
                    <Text>More Information About Course:</Text>
                </View>
                <TouchableOpacity style={styles.createCourseButton}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Create Course</Text>
                </TouchableOpacity >

            </View>

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
export default CourseScreen;