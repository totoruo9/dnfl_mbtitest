import { atom } from "recoil";

export const resultDataAtom = atom({
    key: "resultData",
    default: [""]
});

export const selectAnswerAtom = atom({
    key: "selectAnwer",
    default:""
});