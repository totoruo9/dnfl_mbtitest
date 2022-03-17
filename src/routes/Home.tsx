import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";

const SLink = styled(Link)`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    height: 56px;
    background: ${props => props.theme.colors.gray_100};
    border-radius: 8px;
    margin-bottom: 8px;
    transition: .3s;

    &:hover {
        background: ${props => props.theme.colors.main};
        color: ${props => props.theme.colors.gray_900};
    }
`;

function Home(){
    return(
        <>
            <Container title="Home">
                <SLink to="/mbtitest">MBTI TEST</SLink>
                <SLink as="a" target="_blank" href="https://page.stibee.com/archives/132892">뜨브뜨 구독하기</SLink>
            </Container>
        </>
    )
}

export default Home;