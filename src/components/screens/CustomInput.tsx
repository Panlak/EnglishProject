import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placaholder, secureTextEntry} : any) => {
    return(
        <View>
            <TextInput
                placeholder={placaholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,   
    },
    input: {}
})

export default CustomInput;