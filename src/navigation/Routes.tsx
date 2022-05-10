import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from '../../navigation/MainContainer';
import SignInScreen from '../../navigation/screens/SignInScreen';
import User from '../../models/user/UserModel'
import { navigate, navigationRef } from "./Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import AuthTabs from '../../navigation/screens/AuthTabs';

type AuthParamList = {
    AppTabs: undefined;
    SignIn: undefined;
    Exception: undefined;
    Login: undefined;
    Logout: undefined;
};


const Stack = createStackNavigator<AuthParamList>();

const Routes = () => {
    
    const {user} = useContext(AuthContext);

    const getAppTabs = () => {
        if (user === null as User)
        {
            return(
                <Stack.Screen
                    name="SignIn"
                    component={AuthTabs}
                    options={{
                        headerShown: false,
                    }}
                />
            );
        }
        return(
            <Stack.Screen
                name="AppTabs"
                component={MainContainer}
                options={{
                    headerShown: false,
                }}
            />
        );
    };
    
    const navigator = getAppTabs();

    return(
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {navigator}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;