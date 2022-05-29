import CreateCourseTest from "../src/components/screens/Courses/CreateCourseTest";
import APIConfig from "./APIConfig";

const APIRoutes = {
    getLoginUrl: () => APIConfig.URL + "api/users/login",
    getSignUpUrl: () => APIConfig.URL + "/api/users",
    getCurrentUser: () => APIConfig.URL + "user",
    createDictionary: () => APIConfig.URL + 'english_dictionary',
    showDictionaries: () => APIConfig.URL + 'english_dictionary/index',
    deleteDictionary: () => APIConfig.URL + 'english_dictionary',
    Word: () => APIConfig.URL + 'word',
    // Courses 

    //all course
    getCourses: () => APIConfig.URL + 'course/index',
    createCourse: () => APIConfig.URL + 'course',
    deleteCourse: () => APIConfig.URL + 'course',
    getPendingCourses: () => APIConfig.URL + 'course/pending_courses',
    passCourse:() => APIConfig.URL + 'course/pass_course',
    //user course

    createUserCourse: () => APIConfig.URL + 'user_course',
    getUserCourse: () => APIConfig.URL + 'user_course/all_user_courses',
    deleteUserCourse:() => APIConfig.URL + 'user_course',

    createCourseTest:() => APIConfig.URL + 'course_test',
    getCourseTest:() => APIConfig.URL + 'course_test/index',
    deleteCourseTest:() => APIConfig.URL + 'course_tests',

    createCourseTestWord:() => APIConfig.URL + 'test_word',
    getCourseTestWord:() => APIConfig.URL + 'course_test_word/index',
    deleteCourseTestWord:() => APIConfig.URL + 'test_word',
   
 }

export default APIRoutes;