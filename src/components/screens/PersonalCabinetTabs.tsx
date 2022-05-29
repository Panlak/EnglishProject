import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DictionaryScreen from "./DictionaryScreen";
import PersonalCabinet from './PersonalCabinet';
import DictionaryTabs from './DictionaryTabs';
import CourseTabs from './Courses/CourseTabs';
import PendingCourses from './Courses/PendingCourses';
import PendingCourseTabs from './Courses/PendingCoursesTabs';
const Stack = createStackNavigator();

const PersonalCabinetTabs = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Personal Cabinet"
                component={PersonalCabinet}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Dictionary"
                component={DictionaryTabs}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Courses"
                component={CourseTabs}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="PendingCourses"
                component={PendingCourseTabs}

                options={{
                    headerShown: false,
                }}
            />


        </Stack.Navigator>);
}
export default PersonalCabinetTabs;