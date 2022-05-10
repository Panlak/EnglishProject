import React, {Component, useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import {IconButton} from './IconButton';
import axios from 'axios'
import AuthService from '../../api-service/auth-service/AuthService';
import LoginModel from '../../models/user/LoginModel';
import AsyncStorage from '@react-native-community/async-storage';
interface IProps {
  navigation: any
}
interface IState {
  username: any
  password: any
}
const baseUrl = 'http://10.0.2.2:3030';
export default class SignUpScreen extends React.Component<IProps,IState>{
   
    constructor(props: IProps) {
      super(props);
  
      this.state = {
        username: '',
        password: '',
      };
    }
    registration = async () => {

        var Email = this.state.username;
        var Password = this.state.password;
        console.warn(`${this.state.username} ${this.state.password}`)
        var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        };

        var userModel : LoginModel =
        {
          user:{
            email: Email,
            password: Password
          }
        };

        await AuthService.SignUp(userModel).then(async (res : any) =>{
          console.warn(res)
        })
        this.props.navigation.navigate('Login')
      
    }
    
    render(){return(
    <View >
        <IconButton  style={styles.closeIcon} name='close' onPress={() => this.props.navigation.pop()}/>
   
            <Text style={styles.container}>Login</Text>
            <TextInput 
            onChangeText={username => this.setState({username})}
                
            />
            <Text>Password</Text>
            <TextInput 
               onChangeText={password => this.setState({password})}
               secureTextEntry={true}
            />

        <CustomButton text= "Sign Up" onPress={this.registration} /> 
        
    </View>
    )}
}

const styles = StyleSheet.create({

    container: {
        marginTop: 50
    },

    closeIcon: {
        position: 'absolute',
        top: 10,
        right:16
    }
})
