import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../CustomButton';
import BackButton from '../../Buttons/BackButton';
import Course from '../../../../models/course/Course';
import CourseService from '../../../../api-service/course-service/CourseService';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';



const NewCourse = ({ navigation }: any) => {

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [difficulty, setDifficulty] = useState<string>("");
    
    const create = () => {

        const cours: Course = {
            id: 0,
            name: name,
            description: description,
            difficulty: difficulty,
            prod: 0
        };
      
        navigation.navigate("CourseTests", cours);
    }

    return (
        <View style={styles.container}>
            <BackButton />
            <View>
                <Text style={styles.title}>Hello Student right here you can create your own course.</Text>
                <View>
                    <Input
                        placeholder='Name Course'
                        style={styles.inputStyles}
                        autoCompleteType={""}
                        onChangeText={name => setName(name)}
                        value={name} />

                    <Input
                        placeholder='Difficulty'
                        style={styles.inputStyles}

                        autoCompleteType={""}
                        onChangeText={difficulty => setDifficulty(difficulty)}
                        value={difficulty} />

                    <Input
                        placeholder='Description'
                        style={styles.inputStyles}
                        autoCompleteType={""}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={description => setDescription(description)}
                        value={description}

                    />
                </View>


                
                <TouchableOpacity style={styles.createCourseButton} onPress={() => create()}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Next step</Text>
                </TouchableOpacity >
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    title:{
        fontSize:25,
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

    },
    
    createCourseButton:{
        alignSelf: 'center',
        backgroundColor: '#1CDCA9',
        padding: 15,
        borderRadius: 10,
    }
});


export default NewCourse;