import { ReactNode } from "react";
import styled from "styled-components";

const SContainer = styled.div`
    max-width: 500px;
    width: 100%;
`;

const Header = styled.header`
    width: 100%;
    padding: 20px;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.colors.gray_100};

    h1 {
        font-size: 32px;
        font-weight: 700;
        color: ${props => props.theme.colors.gray_900}
    }
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

interface IConainer {
    title: string,
    children: ReactNode
}

function Container({title, children}:IConainer){
    return (
        <SContainer>
            <Header>
                <h1>{title}</h1>
            </Header>
            <Main>
                {children}
            </Main>
        </SContainer>
    );
}

export default Container;