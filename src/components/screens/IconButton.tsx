import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


export function IconButton({name, style, onPress} : any){
    return(
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
             <Ionicons name={name} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
       
    },

});