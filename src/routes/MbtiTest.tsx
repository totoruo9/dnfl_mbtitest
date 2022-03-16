import { ReactEventHandler, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import styled, { StyledComponent } from "styled-components";
import { resultDataAtom, selectAnswerAtom } from "../atom";
import Container from "../components/Container";
import QandAComponent from "../components/QandAComponent";
import { questionData } from "../data";

function MbitTest(){
    const [currentState, setCurrentState] = useState(0);
    const getData = questionData[currentState];
    const [resultData, setResultData] = useRecoilState(resultDataAtom);
    const [selectAnswer, setSelectAnswer] = useRecoilState(selectAnswerAtom);
    const navigate = useNavigate();

    const onNextQuestion = () => {
        if(selectAnswer === "") {
            alert("답변을 먼저 선택해 주세요");
            return;
        };
        if(currentState >= questionData.length -1) {
            setResultData(prev => [selectAnswer, ...prev]);
            alert("결과값으로 넘어갑니다~~");
            navigate("/mbtitest/result/A");
            return;
        }
        setCurrentState(prev => ++prev);
        setResultData(prev => [selectAnswer, ...prev]);
        setSelectAnswer("");
    }

    return(
        <Container title={getData.question}>
            <QandAComponent getData={getData} />
            <button>이전질문</button>
            <button onClick={onNextQuestion}>다음질문</button>
        </Container>
    )
}

export default MbitTest;