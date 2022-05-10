import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

const Axios = axios.create({ timeout: 20000 });

Axios.interceptors.request.use(
    async (req: any) => {
        const token =  await AsyncStorage.getItem("userToken");

        if (token) {
            req.headers.Authorization = "Bearer " + token;
        }

        return req;
    },

    async (error: any) => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    async (response) => {
        return response;
    },
);

export default Axios;