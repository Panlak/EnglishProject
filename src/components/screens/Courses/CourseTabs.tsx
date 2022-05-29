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
const Stack = createStackNavigator();

const CourseTabs = () => {
    return (
        <Stack.Navigator>


            <Stack.Screen
                name="Courses"
                component={UserCourseScreeen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="NewCourse"
                component={NewCourse}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="CourseTests"

                options={{
                    headerShown: false,
                }}
            >
                {
                    (props: any) => {

                        return (

                            <CreateCourseTest props={props} />
                        )
                    }
                }
            </Stack.Screen>
            <Stack.Screen
                name="TestWordScreen"

                options={{
                    headerShown: false,
                }}
            >
                {
                    (props: any) => {

                        return (

                            <TestWordScreen props={props} />
                        )
                    }
                }
            </Stack.Screen>
            <Stack.Screen
                name="ResultCourseScreen"

                options={{
                    headerShown: false,
                }}
            >
                {
                    (props: any) => {

                        return (

                            <ResultCourseScreen props={props} />
                        )
                    }
                }
            </Stack.Screen>


            
           


        </Stack.Navigator>);


}
export default CourseTabs;