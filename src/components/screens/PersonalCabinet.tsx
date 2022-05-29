import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from './CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import StorageManager from '../storage/StorageManager';
import User from '../../../models/user/LoginModel';
import AsyncStorage from '@react-native-community/async-storage';
import UserModel from '../../../models/user/UserModel';
import BackButton from '../Buttons/BackButton';





const PersonalCabinet = ({ navigation }: any) => {
    const [user, setUser] = useState<UserModel>();

    useEffect(() => {
        StorageManager.getAuthData().then(res => {
            setUser(res)
        })

    }, []);
    return (
        <View style={styles.container}>
            <View>

                <View >
                    <BackButton />
                    <View style={styles.profileInformation}>

                        <View style={styles.mainProfile}>

                            <Image style={{ height: 100, width: 100 }} source={require('../../../photos/man-300x300.png')} />

                            <View>
                                <Text style={styles.profileText}>{user?.email}</Text>
                                <Text style={styles.profileText}>English Level: {user?.knowledge_lvl.name} </Text>
                                <Text style={styles.profileText}>Role: {user?.role == 1 ? "Admin" : "User"}</Text>
                                <Text style={styles.profileText}>Courses passed: {user?.passed_course}</Text>
                                <Text style={styles.profileText}>Ratting: {user?.ratting}</Text>
                            </View>
                        </View>

                    </View>
                    <CustomButton text="Courses" onPress={() => navigation.navigate('Courses')} />
                    <CustomButton text="Dictionary" onPress={() => navigation.navigate('Dictionary')} />
                    {(user?.role == 1) ?
                        <CustomButton text="Pending Courses" onPress={() => navigation.navigate('PendingCourses')} />
                        : <View></View>
                    }
                </View>

            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#87DBFF'
    },
    profileText: {
        color: 'white',
        fontSize: 20
    },

    mainProfile: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    profileInformation: {
        display: 'flex',
        backgroundColor: '#38D8CE',


    },
    levelAccount: {
        alignSelf: 'center'
    }

});
export default PersonalCabinet;