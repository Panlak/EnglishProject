import APIConfig from "./APIConfig";

const APIRoutes = {
    getLoginUrl: () => APIConfig.URL + "api/users/login",
    getSignUpUrl: () => APIConfig.URL + "/api/users",
    getCurrentUser: () => APIConfig.URL + "user",
    createDictionary: () => APIConfig.URL + 'english_dictionary',
    showDictionaries: () => APIConfig.URL + 'english_dictionary/index',
    deleteDictionary: () => APIConfig.URL + 'english_dictionary',
    Word: () => APIConfig.URL + 'word'
}

export default APIRoutes;