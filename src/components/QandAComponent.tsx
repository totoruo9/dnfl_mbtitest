import { ReactEventHandler, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectAnswerAtom } from "../atom";

interface IAnswerItem {
    checkSelect: boolean;
}

const AnswerItem = styled.div<IAnswerItem>`
    height: 56px;
    border-radius: 4px;
    background: ${props => props.checkSelect ? props.theme.colors.main : props.theme.colors.gray_100};
    color: ${props => props.checkSelect ? props.theme.colors.black : props.theme.colors.gray_700};
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 16px;
    cursor: pointer;
`;

interface IGetData {
    getData: {
        id: number;
        question: string;
        answer: {
            value: string;
            key: string;
        }[];
    }
    
}

function QandAComponent({getData}:IGetData){
    // const [selectAnswer, setSelectAnswer] = useState("");
    const [selectAnswer, setSelectAnswer] = useRecoilState(selectAnswerAtom);
    const onAnserItemClick:ReactEventHandler<HTMLElement> = (event) => {
        setSelectAnswer(event.currentTarget.dataset.key || "");
    }

    return(
        <>
            {getData.answer.map((item, index) => {
                return (
                    <AnswerItem onClick={onAnserItemClick} key={index+item.key+item.value} data-key={item.key} checkSelect={item.key === selectAnswer}>
                        {item.value}
                    </AnswerItem>
                )
            })}
        </>
    );
};

export default QandAComponent