import React, { useEffect, useRef, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PersonalCabinetTabs from "./PersonalCabinetTabs";
import SettingsScreen from "./SettingsScreen";
import PersonalInformation from './PersonalInformation';
import HomeScreen from './HomeScreen';
import CourseScreen from './Courses/CurrentUserCourse';
import StorageManager from '../storage/StorageManager';
import UserModel from '../../../models/user/UserModel';
import Course from '../../../models/course/Course';
import UserCourse from '../../../models/course/UserCourse';
import CourseService from '../../../api-service/course-service/CourseService';
import UserCourseScreeen from './Courses/UserCoursesScreeen';
import NewCourse from './Courses/NewCourse';
import CourseTabs from './Courses/CourseTabs';
const Stack = createStackNavigator();

const HomeTabs = () => {
    return (<Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="CurrentUserCourse"

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


        <Stack.Screen
            name="UserCourses"
            component={UserCourseScreeen}
            options={{
                headerShown: false,
            }}
        />

     <Stack.Screen
            name="NewCourse"
            component={CourseTabs}
            options={{
                headerShown: false,
            }}
        />

    </Stack.Navigator>);
}
export default HomeTabs;