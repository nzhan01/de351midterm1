
import styled from "styled-components"
export default function Home() {

    const Styledh3 = styled.h3`
        display: flex;
        justify-content: center ;
    `
    const Styledp = styled.p`
        
        width: 100%;
        text-align: center ;
        
        `

    const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
        justify-content: center ;
        max-width: 80%;
    align-items: center;
        margin: 0 auto;

`;
    return (
        <StyledContainer>

        <h1>
            This website seeks to explore Prompt 10:
        </h1>


        <Styledp> In our last class before the break we will talk about how life stories are not the objectives accounts we typically assume.
            A life story is more often a carefully shaped narrative that is replete with strategic forgetting and skillfully spun meanings. This happens on large and small scales.
            It basically occurs in any form we use to tell stories about ourselves. Amazingly, it even happens with memories.
            There is something common to all of this that seems to help us to live better lives, tell the stories that we can live with, and or help us become the character we strive to be.
            As a result, the plasticity of our versions of life and memory may actually be useful. Talk about why this is true and how you see it as important. Provide examples that illustrate your take.
        </Styledp>
            <br/>

        <Styledh3>
            Below will be a series of images that represent different moments and stages of my life. Together, they act as
            a collection of memories. With each image there is an initial description that describes the image and its
            content in a positive light. However, by clicking the "show" button on the left, the real backstory of the image
            will be revealed.
        </Styledh3>


        </StyledContainer>
    )
}