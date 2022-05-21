type UserCourse = {
    user_course:{
        id : number,
        user_id: number,
        course_id: number,
        passed: number
    },
    course:{
        id: number,
        name: string,
        description : string,
        difficulty : string,
    }
}
export default UserCourse;