import { useRecoilValue } from "recoil";
import { selectQuestionAtom } from "../atom";
import Container from "../components/Container";
import QandABottom from "../components/QandABottom";
import QandAComponent from "../components/QandAComponent";
import QandAResult from "../components/QandAResult";
import { questionData } from "../data";

function MbitTest(){
    const selectQuestion = useRecoilValue(selectQuestionAtom);
    const getData = questionData[selectQuestion];

    return(
        <Container title={getData?.question || "결과 보러가기"}>
            {
                selectQuestion !== questionData.length
                    ? <>
                        <QandAComponent getData={getData} />
                        <QandABottom />
                    </>
                    : <QandAResult />
            }
        </Container>
    )
}

export default MbitTest;