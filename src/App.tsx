
import './App.css'
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import styled from "styled-components";
import Childhood from "./components/Childhood.tsx";
import HighSchool from "./components/HighSchool.tsx";
import Snowboard from "./components/Snowboard.tsx";
import Explanation from "./components/Explanation.tsx";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;

   
`

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px auto;
    background-color: floralwhite;
    padding: 30px;
    border-radius: 6px;

`;

/*

 */
function Root(){
    return (
        <StyledWrapper>
            <Header />
            <Routes>
                <Route path = {`/*`} element ={<Home/>} />

            </Routes>

            <StyledContainer>
                <Childhood />
                <br/>
                <br/>
                <br/>

                <HighSchool/>
                <br/>
                <br/>
                <br/>
                <Snowboard />
                <br/>
                <br/>
                <br/>
                <Explanation/>
            </StyledContainer>

        </StyledWrapper>
    )
}

const router = createBrowserRouter([{path : "*", Component: Root  }  ])


export default function App(){


    return <RouterProvider router={router} />;


}
