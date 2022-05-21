import React from 'react';
import { StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as navigation from '../../navigation/Navigation'

const BackButton  = () => {
    return(
        <Ionicons style={styles.closeIcon} size={30} name='arrow-back-outline' onPress={() => navigation.goBack()} />
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        top: 0,
        left: 0,
        color: 'black',
        fontSize: 40,
    },
});

export default BackButton;