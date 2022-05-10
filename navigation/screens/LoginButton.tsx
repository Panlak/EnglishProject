import React, { useContext, useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { AuthContext } from '../../src/auth/AuthContext';


type LoginButtonProps = {
    email: string,
    password: string,
}
const CustomButton  = (props: LoginButtonProps) => {

    const { login } = useContext(AuthContext);

    return(
        <View>
            <TouchableOpacity  onPress={() => login(props.email, props.password)} style={[styles.container]}>
                <Text>SignIn</Text>
            </TouchableOpacity >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      
        width: '100%',
        
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3'
    },

    container_TERTIARY: {},

    text: {
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY:{
        color: 'gray'
    }
});


export default CustomButton;