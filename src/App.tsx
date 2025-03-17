
import './App.css'
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";



function Root(){
    return (
        <>
            <Routes>
                <Route path = {`/*`} element ={<App/>} />

            </Routes>

        </>
    )
}

const router = createBrowserRouter([{path : "*", Component: Root  }  ])


export default function App(){


    return <RouterProvider router={router} />;


}
