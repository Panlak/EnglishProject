import APIRoutes from "../APIRoutes";
import APIService from "../APIService";
import UserModel from "../../models/user/RegisterModel";
import User from "../../models/user/UserModel"
import AuthenticationResult from "../../models/authentication-models/AuthenticationResult";

const login = APIRoutes.getLoginUrl();
const singup = APIRoutes.getSignUpUrl();
const currentUser = APIRoutes.getCurrentUser();

const AuthService = {
    Login: async (userModel : User) => APIService.post<any>(login,userModel),
    SignUp: async (userModel : User) => APIService.post<string>(singup,userModel),
    GetUser: async (token : string | null) => APIService.post<string>(currentUser,token),
}

export default AuthService;