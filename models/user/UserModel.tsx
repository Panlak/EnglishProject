type UserModel = {
    id: number,
    email: string,
    passed_course: number,
    ratting: number,
    knowledge_lvl:{
        id: number,
        name: string
    }

} 

export default UserModel;