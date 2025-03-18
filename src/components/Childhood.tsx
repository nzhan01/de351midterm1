

import {StyledButton, StyledImage, StyledDescription} from "./ui-components/styles.ts";
import {useState} from "react";



export default function Childhood() {
    const [display, setDisplay] = useState('none')

    const [buttonText, setButtonText] = useState('Show')

    function toggle() {
        if (display === 'none') {
            setDisplay('block')
            setButtonText('Hide')
        } else {
            setDisplay('none')
            setButtonText('Show')
        }

    }
    return (


        <>
            <h2>
                <StyledButton onClick={toggle}>{buttonText}</StyledButton>
            </h2>

            <StyledDescription> This is an image of me somewhere between the ages of 3-5. I am posing by the water in a city in China </StyledDescription>
            <StyledImage
                src = "childphoto.png"
                alt ="image of me as a child in china"/>



            <div style = {{display: display}}>
                <p> I cannot recall much if anything at all about this photograph. I know it was taken in china but I don't remember
                    when I was there and with who. The truth is I do not even know the other person in this photo. They could be a relative
                    or simply a friend of my parents.
                </p>
                <br/>
                <p>
                   Despite not knowing anything about this photo, I used it to create a <i>story</i> of my childhood and what I was
                    like as a kid.
                </p>
            </div>
        </>
    )
}