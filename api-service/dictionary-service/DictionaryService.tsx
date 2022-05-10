import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const dictionaryCreate = APIRoutes.createDictionary();
const allDictionaries = APIRoutes.showDictionaries();
const deleteDictionary = APIRoutes.deleteDictionary();
const DictionaryService = {
    createDictionary: async (name : string) => APIService.post<any>(dictionaryCreate,name),
    getDictionaries: async () => APIService.get<any>(allDictionaries),
    deleteDictionary: async (id : number) => APIService.delete(`${deleteDictionary}/${id}`)
}

export default DictionaryService;