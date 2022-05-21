import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../../auth/AuthContext";


const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    return(
            <TouchableOpacity
                style = {
                   [styles.container]
                }                
                onPress={() => {
                    logout();
                }}
            >
                <Text style = {styles.logoutText}>
                    Log out
                </Text>
            </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    container: {
        width: '50%',
        backgroundColor: 'green',
        padding: 15,
        marginVertical: 5,  
        
        alignItems: 'center',
        borderRadius: 5,
    },

    logoutText: {
        color: 'white',
    }

});
export default LogoutButton;