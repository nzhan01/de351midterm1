
import styled from 'styled-components';


const StyledContainer = styled.div`

    display: flex;
    flex-direction: row;
   
`;

const StyledImage = styled.img`
    width: 20%;
    height: auto;
    display: block;
    margin: auto;
    padding: calc(1vh);
`;

const StyledText = styled.div`
    display: inline-block;
    vertical-align: middle;
    line-height: 25px;
    padding: calc(1vh);
    margin: calc(1vh);
    
`

export default function Explanation() {

    return(



        <StyledContainer>
            <StyledImage src = "anything_album.png" alt = "album cover of adrienne Lenker's anything album"/>
            <StyledText>
                <p>
                    No one will ever know you the way you know yourself. it's impossible to translate your entire experience into words or pictures. you could spend a lifetime speaking, writing your emotions,
                    but no matter how carefully you choose your words, they’ll always fall short.
                    Even when someone listens, with all their heart, they could only grasp a fraction of what it truly means to be you. Language is limited, but human experience is infinite.
                    Every memory you’ve ever had, every feeling, those are all yours.
                </p>
            </StyledText>

        </StyledContainer>
    )


}