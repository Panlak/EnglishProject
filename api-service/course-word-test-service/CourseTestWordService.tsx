import CourseTest from "../../models/course/CourseTest";
import TestWord from "../../models/course/TestWord";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";
//all course
const createCourseTestWord = APIRoutes.createCourseTestWord();
const getCourseTestWords = APIRoutes.getCourseTestWord();
const deleteCourseTestWord = APIRoutes.deleteCourseTestWord();
//user course


const CourseTestWordService = {
    
    getCourseTest: async (testcourse_id : number) => APIService.get(`${getCourseTestWords}/${testcourse_id}`),
    createCourseTest: async (testWord : TestWord) => APIService.post<any>(createCourseTestWord,testWord),
    deleteCourseTest: async (id : number) => APIService.delete(`${deleteCourseTestWord}/${id}`),


}

export default CourseTestWordService;