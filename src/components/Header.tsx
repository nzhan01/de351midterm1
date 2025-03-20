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
    color: black;
    font-size: calc(2px + 3vh);
    background-color: white;
    border:  1px solid white;
    
`;
const Styledh1 = styled.h1`
    font-size: calc(2px + 8vh);
`
;




export default function Header(){

    return(
        <StyledHeader>
            <Styledh1>Memory Box</Styledh1>
            <Title>
                <nav>
                    <StyledLink to={`/`} style={{ textDecoration: 'none' }}>Home</StyledLink>
                    <StyledLink to={`https://github.com/nzhan01/de351midterm1`} style={{ textDecoration: 'none' }}><b>Source Code Here</b></StyledLink>
                </nav>

            </Title>
        <p>Inspired by what I've been learning in my web-development course, I wanted to apply my new skills in building a website from scratch using HTML, CSS, javascript.</p>
        </StyledHeader>
    );
}