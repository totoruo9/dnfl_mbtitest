import { useParams } from "react-router";
import Container from "../components/Container";

function TestResult(){
    const params = useParams();
    return (
        <Container title={`당신의 타입은? ${params.result}`}>
            tetete
        </Container>
    )
}

export default TestResult;