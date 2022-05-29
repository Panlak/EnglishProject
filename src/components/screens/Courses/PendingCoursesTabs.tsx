import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DictionaryScreen from "../DictionaryScreen";
import PersonalCabinet from '../PersonalCabinet';
import DictionaryTabs from '../DictionaryTabs';
import UserCourseScreeen from './UserCoursesScreeen';
import NewCourse from './NewCourse';
import CreateCourseTest from './CreateCourseTest';
import TestWordScreen from './TestWordScreen';
import ResultCourseScreen from './ResultCourseScreen';
import PendingCourses from './PendingCourses';
import PendingCourseScreen from './PendingCourseScreen';
const Stack = createStackNavigator();

const PendingCourseTabs = () => {
    return (
        <Stack.Navigator>
            
            <Stack.Screen
                name="PendingCourses"
                component={PendingCourses}

                options={{
                    headerShown: false,
                }}
            />
                    
            <Stack.Screen
                name="PendingCourseScreen"
                options={{
                    headerShown: false,
                }}>
                {
                    (props: any) => {
                        return (
                            <PendingCourseScreen props={props} />
                        )
                    }
                }
            </Stack.Screen>



        </Stack.Navigator>);


}
export default PendingCourseTabs;