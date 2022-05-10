import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const user = APIRoutes.getCurrentUser();

const UserService = {
    GetUser: async () => APIService.get<any>(user),
}

export default UserService;