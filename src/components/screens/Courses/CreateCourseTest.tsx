import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CustomButton from '../CustomButton';
import BackButton from '../../Buttons/BackButton';
import Course from '../../../../models/course/Course';
import CourseService from '../../../../api-service/course-service/CourseService';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import CourseTest from '../../../../models/course/CourseTest';
import * as navigation from '../../../navigation/Navigation';


const CreateCourseTest = ({ props }: any) => {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [course, setCourse] = useState<Course>();
    const [text, setText] = useState<string>("");
    const create = () => {
        const courseTest = {

            name: name,
            description: description,
            text: text,
            course: course
        } as CourseTest;

        navigation.navigate("TestWordScreen", courseTest);
    }

    useEffect(() => {
        setCourse(props.route.params)
    }, [])



    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>Hello Student right here you can create your course TEST.</Text>
                    <View style={{ backgroundColor: 'white', borderRadius: 10, borderWidth: 2 }}>
                        <Text style={styles.courseInfoLabel}>Course Name</Text>
                        <Text style={styles.courseInfo}>{course?.name}</Text>
                        <Text style={styles.courseInfoLabel}>Course Difficulty</Text>
                        <Text style={styles.courseInfo}>{course?.difficulty}</Text>
                        <Text style={styles.courseInfoLabel}>Course Description</Text>
                        <Text style={styles.courseInfo}>{course?.description}</Text>
                    </View>


                    <View>
                        <Input
                            placeholder='Name Test'
                            style={styles.inputStyles}
                            autoCompleteType={""}
                            onChangeText={name => setName(name)}
                            value={name} />

                        <Input
                            placeholder='Description'
                            style={styles.inputStyles}
                            autoCompleteType={""}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={description => setDescription(description)}
                            value={description}

                        />

                        <Input
                            placeholder='TEST TEXT'
                            style={styles.inputStyles}
                            autoCompleteType={""}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={text => setText(text)}
                            value={text}
                        />


                    </View>



                    <TouchableOpacity style={styles.createCourseButton} onPress={() => create()}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Next step</Text>
                    </TouchableOpacity >
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

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
    }
});


export default CreateCourseTest;