import AsyncStorage from "@react-native-community/async-storage";
import AuthenticationResult from "../../../models/authentication-models/AuthenticationResult";


const StorageManager = {
    setAuthData: (data: AuthenticationResult) => {
        AsyncStorage.setItem("userToken", data.user.token);
        AsyncStorage.setItem("user", JSON.stringify(data.user));
    },

    deleteAuthData: async () => {
        const promises: Promise<void>[] = [];

        promises.push(AsyncStorage.removeItem("userToken"));
        promises.push(AsyncStorage.removeItem("user"));

        await Promise.all(promises);
    },
}

export default StorageManager;