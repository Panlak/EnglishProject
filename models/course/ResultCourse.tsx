import Course from "./Course"
import CourseTest from "./CourseTest"
import TestWord from "./TestWord"

type ResultCourse = {
    testWord : TestWord[]
    courseTest: CourseTest,
    course: Course,
    changeText: string
}

export default ResultCourse;