
import {StyledButton, StyledImage} from "./ui-components/styles.ts";
import {useState} from "react";



export default function Childhood() {
    const [display, setDisplay] = useState('block')

    const [buttonText, setButtonText] = useState('Hide')

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
            <p> This is an image of me somewhere between the ages of 3-5. I am posing by the water in a city in China</p>
            <StyledImage
                src = "childphoto.png"
                alt ="image of me as a child in china"/>



            <div style = {{display: display}}>

            </div>
        </>
    )
}
