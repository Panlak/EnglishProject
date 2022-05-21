import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import AuthService from '../../../api-service/auth-service/AuthService';
import UserService from '../../../api-service/user-service/UserService'
import User from '../../../models/user/LoginModel';

const CurrentUser = () =>{
   
    const [user, setUser] = useState<any>();
    
    useEffect(() => {
        UserService.GetUser().then((res) =>{
            setUser(res.data);
        }).catch((err) =>{
            console.warn(err);
        })
    }, []);

    return user
}

export default CurrentUser;