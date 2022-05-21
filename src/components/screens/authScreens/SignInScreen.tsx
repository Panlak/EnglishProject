import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, Linking, TouchableOpacity, TextInput } from 'react-native';

import * as navigation from '../../../navigation/Navigation';
import CustomButton from '../CustomButton';
import LoginButton from '../LoginButton';



const SignInScreen = () => {
  const [email, setUserEmail] = useState<string>("");
  const [password, setUserPassword] = useState<string>("");
  const logo = require('../../../../photos/Logo.png')
  return (
    <View style={styles.container}>
    <View style={{width:'100%',backgroundColor:'#4AD3E3',borderColor:'white',borderWidth:2,opacity:1,height:'100%',borderRadius:70, position: 'absolute', bottom:600,zIndex:0}}>
        </View>
        <View style={styles.header}>
          <Image source={logo} style={{ width: 100, height: 200, }} />
          <Text style={styles.headerText}>English Right Now</Text>
        </View>
        <Text style={{padding:20, color: 'white', fontSize:25,alignSelf:'center'}}>Hello Student can you SIGN IN?</Text>
        <View style={styles.labelsAndInputs}>
          <View>
            <Text style={styles.labels}>Login</Text>
            <TextInput
              style={styles.inputs}
              value={email}
              onChangeText={email => setUserEmail(email)}

            />
          </View>
          <View>
            <Text style={styles.labels}>Password</Text>
            <TextInput
              style={styles.inputs}
              value={password}
              onChangeText={password => setUserPassword(password)}
              secureTextEntry
            />
          </View>
         
        </View>


        <View style={styles.buttons}>
          <LoginButton
            email={email}
            password={password}
          />
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={[styles.buttonSignUp]}>
            <Text style={{ color: 'white', fontSize: 18,fontWeight: '800' }}>Sign Up</Text>
          </TouchableOpacity >
        </View>
        
        <View style={{width:'100%',backgroundColor:'#4AD3E3',borderColor:'white',borderWidth:2,opacity:1,height:'10%',borderRadius:70, position: 'absolute', top:750,zIndex:0}}>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

  headerText: {
    color: 'white',
    fontSize: 30,
    padding:20
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    zIndex:1
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
    marginTop:10,
  },
  buttonSignUp: {
    width: 300,
   
    padding: 15,
    marginVertical: 5,
    borderColor:'white',borderWidth:2,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#4AD3E3'
  }
})

export default SignInScreen;