import { useRecoilState } from "recoil";
import styled from "styled-components";
import { resultDataAtom, selectAnswerAtom, selectQuestionAtom } from "../atom";
import { questionData } from "../data";

const SBtnWrap = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;

    button {
        width: 50%;
        height: 56px;
        border: 0;
        background: ${props => props.theme.colors.gray_700};
        font-size: 20px;

        &:last-child {
            background: ${props => props.theme.colors.main};
            color: ${props => props.theme.colors.black};
        }
    }
`;


function QandABottom(){
    const [selectAnswer, setSelectAnswer] = useRecoilState(selectAnswerAtom);
    const [resultData, setResultData] = useRecoilState(resultDataAtom);
    const [selectQuestion, setSelectQuestion] = useRecoilState(selectQuestionAtom);
    
    const onNextQuestion = () => {
        if(selectAnswer === "") {
            alert("답변을 먼저 선택해 주세요");
            return;
        };
        if(selectQuestion >= questionData.length -1) {
            setSelectQuestion(prev => ++prev);
            setResultData(prev => [...prev, selectAnswer]);
            return;
        };
        setSelectQuestion(prev => ++prev);
        setResultData(prev => [...prev, selectAnswer]);
        setSelectAnswer("");
    };

    const onPrevQustion = () => {
        setSelectQuestion(prev => --prev);
        setSelectAnswer("");
        setResultData(prev => prev.filter((item, index) => index < resultData.length -1));
    }

    return(
        <SBtnWrap>
            <button onClick={onPrevQustion} disabled={selectQuestion !== 0 ? false : true}>이전질문</button>
            <button onClick={onNextQuestion}>다음질문</button>
        </SBtnWrap>
    );
};

export default QandABottom;