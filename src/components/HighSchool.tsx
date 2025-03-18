
import {StyledButton, StyledImage, StyledDescription} from "./ui-components/styles.ts";
import {useState} from "react";




export default function HighSchool() {
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

            <StyledDescription>  This is an image of me during my high school graduation in May 2022. I am posing with my older brother Jack and my parents</StyledDescription>
            <StyledImage
                src = "graduation.png"
                alt ="image of me after graduating high school"/>



            <div style = {{display: display}}>
                <p> What is not shown through this photo is how I felt during this moment. My mind was filled with a mixture of excitement, accomplishment, fear,
                regret, and uncertainty. I may have just graduated high school, but I was also worrying about what college I was going to, which people I had to
                speak to before I no longer had the chance, and all the things I never got do do while I was still in high school. </p>
            </div>
        </>
    )
}
