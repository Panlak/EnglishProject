
interface AuthenticationResult{
    user: {
        email  : string
        knowledge_lvl : number
        token : string
    }
}

export default AuthenticationResult;