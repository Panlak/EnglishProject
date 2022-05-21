import Course from "../../models/course/Course";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";
//all course
const allCourses = APIRoutes.getCourses();
const createCourse = APIRoutes.createCourse();
const deleteCourse = APIRoutes.deleteCourse();
//user course
const createUserCourse = APIRoutes.createUserCourse();
const userCourses = APIRoutes.getUserCourse();
const deleteUserCourse = APIRoutes.deleteUserCourse();

const CourseService = {
    
    getCourse: async () => APIService.get(allCourses),
    createCourse: async (course : Course) => APIService.post<any>(createCourse,course),
    deleteCourse: async (id : number) => APIService.delete(`${deleteCourse}/${id}`),

    createUserCourse: async (course : Course) => APIService.post(createUserCourse,course),
    getUserCourse: async () => APIService.get(userCourses),
    deleteUserCourse: async (id : number) => APIService.delete(`${deleteUserCourse}/${id}`)

}

export default CourseService;