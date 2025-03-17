
import './App.css'
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/Home.tsx";
import Header from "./components/Header.tsx";
import styled from "styled-components";

const StyledWrapper = styled.div`
    
`
function Root(){
    return (
        <StyledWrapper>
            <Header />
            <Routes>
                <Route path = {`/*`} element ={<Home/>} />
            </Routes>

        </StyledWrapper>
    )
}

const router = createBrowserRouter([{path : "*", Component: Root  }  ])


export default function App(){


    return <RouterProvider router={router} />;


}
