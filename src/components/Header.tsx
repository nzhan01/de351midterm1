import { Link } from "react-router";
import {styled} from "styled-components";

const StyledHeader = styled.header`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: #8d77ab;
    padding: 10px 0;
    align-items: center;
    margin-bottom: 50px;
`;

const Title = styled.h2`
    padding: 0.5rem;
    margin: 1rem;
    
`;

const StyledLink = styled(Link)`
    padding:0.25rem;
    margin: 0.25rem;
    color: white;
    
`;
const Styledh1 = styled.h1`
    font-size: calc(2px + 5vh);
`
;




export default function Header(){

    return(
        <StyledHeader>
            <Styledh1>Memory Box</Styledh1>
            <Title>
                <nav>
                    <StyledLink to={`/`}>Home</StyledLink>
                    <StyledLink to={`https://github.com/nzhan01/de351midterm1`}>Source Code</StyledLink>
                </nav>
            </Title>

        </StyledHeader>
    );
}