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
    //user course

    createUserCourse: () => APIConfig.URL + 'user_course',
    getUserCourse: () => APIConfig.URL + 'user_course/index',
    deleteUserCourse:() => APIConfig.URL + 'user_course'
}

export default APIRoutes;