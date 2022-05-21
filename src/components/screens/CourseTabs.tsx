import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DictionaryScreen from "./DictionaryScreen";
import PersonalCabinet from './PersonalCabinet';
import DictionaryTabs from './DictionaryTabs';
import CourseScreeen from './UserCoursesScreeen';
const Stack = createStackNavigator();

const CourseTabs = () => {
    return(
    <Stack.Navigator>
         <Stack.Screen
            name = "Courses"
            component={CourseScreeen}
            options={{
                headerShown: false,
            }}
        />         
    </Stack.Navigator>);
}
export default CourseTabs;