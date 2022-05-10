import Word from "../../models/words/WordModel";
import APIRoutes from "../APIRoutes";
import APIService from "../APIService";

const wordCreate = APIRoutes.Word();
const allWords = APIRoutes.Word();
const deleteWord = APIRoutes.Word();
const WordService = {
    createWord: async (word : Word) => APIService.post<any>(wordCreate,word),
    getWords: async () => APIService.get<any>(allWords),
    deleteWord: async (id : number) => APIService.delete(`${deleteWord}/${id}`)
}

export default WordService;