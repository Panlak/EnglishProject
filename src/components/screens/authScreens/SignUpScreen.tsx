import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import axios from 'axios'
import AuthService from '../../../../api-service/auth-service/AuthService';
import LoginModel from '../../../../models/user/LoginModel';
import AsyncStorage from '@react-native-community/async-storage';

import CustomButton from '../CustomButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as navigation from '../../../navigation/Navigation';

  const SignUpScreen = () => {
  const [email, setUserEmail] = useState<string>("");
  const [password, setUserPassword] = useState<string>("");

  const registration = async () => {
   
    var Email = email;
    var Password = password;

    var userModel: LoginModel =
    {
      user: {
        email: Email,
        password: Password
      }
    };

    await AuthService.SignUp(userModel).then(async (res: any) => {
      console.warn(res)
    }).catch(err =>{
      console.warn(err)
    })
    navigation.navigate('Login')

  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.headerInfo}>
        <Image source={require('../../../../photos/Logo.png')} style={{ width: 100, height: 200, }} />
        <Text style={styles.headerText}>English Right Now</Text>
      </View>
      <Text style={{ padding: 20, color: 'white', fontSize: 25, alignSelf: 'center' }}>Hello Student can you SIGN UP?</Text>
      <View style={styles.labelsAndInputs}>
        <Ionicons style={styles.closeIcon} size={20} name='close' onPress={() => navigation.goBack()} />
        <View>
          <Text style={styles.labels}>Login</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={username => setUserEmail(username)}
          />
        </View>
      </View>
      <View style={styles.labelsAndInputs}>
        <View>
          <Text style={styles.labels}>Password</Text>
          <TextInput
            style={styles.inputs}
            onChangeText={password => setUserPassword(password)}
            secureTextEntry={true}
          />
        </View>

      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => registration()} style={[styles.buttonSignUp]}>
          <Text style={{ color: 'white', fontSize: 18 }}>Sign Up</Text>
        </TouchableOpacity >
      </View>
      <View style={styles.fotter}>

      </View>
    </View>
  )

}

const styles = StyleSheet.create({

  header: {
    width: '100%',
    backgroundColor: '#4AD3E3',
    borderColor: 'white',
    borderWidth: 2,
    opacity: 1,
    height: '100%',
    borderRadius: 70,
    position: 'absolute',
    bottom: 600,
    zIndex: 0
  },

  fotter: {
    width: '100%',
    backgroundColor: '#4AD3E3',
    borderColor: 'white',
    borderWidth: 2,
    opacity: 1,
    height: '10%',
    borderRadius: 70,
    position: 'absolute',
    top: 750,
    zIndex: 0
  },


  headerText: {
    color: 'white',
    fontSize: 30,
    padding: 20
  },

  headerInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex: 1
  },

  labelsAndInputs: {
    alignItems: 'center',
  },

  container: {

    backgroundColor: '#319ED8',
    flex: 1,

  },
  labels: {
    color: 'white',
    fontSize: 20
  },
  buttons: {
    marginTop: 10,
    alignItems: 'center',
  },
  inputs: {
    backgroundColor: 'white',
    width: 350,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 18,
    marginTop: 10,
  },
  buttonSignUp: {
    width: 300,

    padding: 15,
    marginVertical: 5,
    borderColor: 'white', borderWidth: 2,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#4AD3E3'
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 6,
    color: 'white',
    fontSize: 30,
  }
})

export default SignUpScreen;