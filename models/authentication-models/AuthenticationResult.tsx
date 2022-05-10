import User from "../../models/user/UserModel";

interface AuthenticationResult{
    user: {
        email  : string
        token : string
    }
}

export default AuthenticationResult;