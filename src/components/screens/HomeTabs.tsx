import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PersonalCabinetTabs from "./PersonalCabinetTabs";
import SettingsScreen from "./SettingsScreen";
import PersonalInformation from './PersonalInformation';
import HomeScreen from './HomeScreen';
import CourseScreen from './CourseScreen';
const Stack = createStackNavigator();

const HomeTabs = () => {
    return(<Stack.Navigator>
        <Stack.Screen
            name = "HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
       <Stack.Screen
            name = "CurrentCourse"
           
            options={{
                headerShown: false,
            }}
        >
            {
                    (props: any) => {

                        return (
                            <CourseScreen props={props} />
                        )
                    }
                }    
        </Stack.Screen> 

    </Stack.Navigator>);
}
export default HomeTabs;