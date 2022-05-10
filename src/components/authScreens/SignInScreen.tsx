import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, useWindowDimensions, Linking, TouchableOpacity, TextInput } from 'react-native';
import LoginButton from '../../../navigation/screens/LoginButton';
import CustomButton from '../../../navigation/screens/CustomButton';
import * as navigation from '../../navigation/Navigation';
import Input from '../../../navigation/screens/Input';
import COLORS from '../../const/colors';
import Loader from '../Loader';



const SignInScreen = () => {


  const [inputs, setInputs] = React.useState({ email: '', password: '' });

  const [errors, setErrors] = React.useState<any>();

  const handleOnchange = ( text : any, input : any ) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = ( error : any, input: any  ) => {
    setErrors((prevState : any) => ({ ...prevState, [input]: error }));
  };

  const [loading, setLoading] = React.useState(false);


  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
    <Loader visible={loading} />
    <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
      <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: 'bold' }}>
        Log In
      </Text>
      <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
        Enter Your Details to Login
      </Text>
      <View style={{ marginVertical: 20 }}>
        <Input
          onChangeText={(text : any) => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          iconName="email-outline"
          label="Email"
          placeholder="Enter your email address"
          error={errors.email}
        />
        <Input
          onChangeText={(text : any) => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          iconName="lock-outline"
          label="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
        />
     
        <Text
          onPress={() => navigation.navigate('RegistrationScreen')}
          style={{
            color: COLORS.black,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
          }}>
          Don't have account ?Register
        </Text>
      </View>
    </View>
  </SafeAreaView>

   
  )
}

const styles = StyleSheet.create({

  container: {
    marginTop: 50
  },

  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 16
  }
})

export default SignInScreen;