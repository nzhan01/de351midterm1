
import styled from 'styled-components';
import { Link } from "react-router";


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
        <>
            <StyledContainer>
                <StyledText>
                    <p> click the album cover!</p>
                </StyledText>

                <Link to={"https://open.spotify.com/album/2Qt8Z1LB3Fsrf6nhBNsvUJ"} >
                    <StyledImage src = "anything_album.png" alt = "album cover of adrienne Lenker's anything album" style = {{width:'105%'}} />
                </Link>

                <StyledText>
                    <p>
                        No one will ever know you the way you know yourself. it's impossible to translate your entire experience into words or pictures. you could spend a lifetime speaking, writing your emotions,
                        but no matter how carefully you choose your words, they’ll always fall short.
                        Even when someone listens with all their heart, they could only grasp a fraction of what it truly means to be you. Language is limited, but human experience is infinite.
                        Every memory you’ve ever had, every feeling, those are all yours.
                    </p>
                </StyledText>

            </StyledContainer>
        <br/>
            <StyledContainer>
                <StyledText>
                    <p>
                        Memory is incomplete. There are a million different moments that you simply will not remember.
                        Even experiences you once thought life-changing may become whispers of memory as you grow older.
                        But the memories that we actively <i>choose</i> to hold onto are the ones that shape us.
                    </p>
                </StyledText>

                <StyledImage src = "planet.png" alt = "colorful planet"/>

            </StyledContainer>
            <StyledContainer>
                <StyledImage src = "achilles_quote.png" alt = "achilles quote" style = {{width:'30%'}}/>
                <StyledText>
                    <p>

                        The beauty of memory is that it is not rigid.
                        How we choose to remember events impact the feelings they evoke.
                        This framing of memory gives us power over them.
                        An experience may have been terrible and harmful but we can <i>choose</i> to either forget it or describe it in a different way.

                    </p>
                </StyledText>
            </StyledContainer>
        </>



    )


}