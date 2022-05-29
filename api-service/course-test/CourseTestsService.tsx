import CourseTest from "../../models/course/CourseTest";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";
//all course
const createCourseTest = APIRoutes.createCourseTest();
const getCourseTest = APIRoutes.getCourseTest();
const deleteCourseTest = APIRoutes.deleteCourseTest();
//user course


const CourseTestsService = {
    
    getCourseTest: async (course_id :number) => APIService.get(`${getCourseTest}/${course_id}`),
    createCourseTest: async (courseTest : CourseTest) => APIService.post<any>(createCourseTest,courseTest),
    deleteCourseTest: async (id : number) => APIService.delete(`${deleteCourseTest}/${id}`),


}

export default CourseTestsService;