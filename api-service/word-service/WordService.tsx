import Word from "../../models/words/WordModel";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const wordCreate = APIRoutes.Word();
const allWords = APIRoutes.Word();
const deleteWord = APIRoutes.Word();
const WordService = {
    createWord: async (word : Word) => APIService.post<any>(wordCreate,word),
    getWords: async  (dict_id:number) => APIService.get<any>(`${allWords}/${dict_id}`),
    deleteWord: async (id : number) => APIService.delete(`${deleteWord}/${id}`)
}

export default WordService;