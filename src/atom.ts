import { atom } from "recoil";

export const resultDataAtom = atom({
    key: "resultData",
    default: [""]
});

export const selectAnswerAtom = atom({
    key: "selectAnwer",
    default:""
});

export const selectQuestionAtom = atom({
    key: "selectQuestion",
    default: 0
})