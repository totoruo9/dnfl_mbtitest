import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { resultDataAtom } from "../atom";

function QandAResult(){
    const [resultData, setResultData] = useRecoilState(resultDataAtom);
    const navigate = useNavigate();

    interface IResult {
        [index: string]: number;
    }

    const getResultData = () => {
        const result:IResult = {};
        resultData.forEach((item) => {
            result[item] = (result[item] || 0) + 1;
        });

        const resultKey = Object.keys(result);

        return resultKey.reduce((prevValue, currentValue, index) => {
            if(result[prevValue] > result[currentValue]){
                return prevValue
            } else {
                return currentValue
            }
        }, "");
    };

    const onClick= () => {
        navigate(`/mbtitest/result/${getResultData()}`);
    }

    return(
        <button onClick={onClick}>결과 확인</button>
    )
};

export default QandAResult;