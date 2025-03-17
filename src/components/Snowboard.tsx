
import {StyledButton, StyledImage} from "./ui-components/styles.ts";
import {useState} from "react";



export default function Snowboard() {
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
            <p> This is an image of me during Thanksgiving break 2024. I am posing with my friends at Beaver Creek ski resort. My friend Braedon(right side) and
            I decided to try snowboarding for the first time. </p>
            <StyledImage
                src = "snowboard.png"
                alt ="image of me as a snowboarding in colorado"/>



            <div style = {{display: display}}>
                <p> Despite our happy demeanor, I would find myself falling or crashing every 30 seconds. I had never skied or
                snowboarding in my life before, let alone been anywhere near a ski resort. The first day was very challenging for me
                and I frequently felt frustrated in my lack of snowboarding ability. However, This image highlights the positive aspects
                of this experience. It may have been difficult and frustrating but ultimately I think it was worth it. I may have
                gotten bruises, whiplash, and covered in snow, but I also had fun trying something new with my my friends.</p>
            </div>
        </>
    )
}
