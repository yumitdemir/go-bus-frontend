import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router, RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import './index.css'
import {QueryClient, QueryClientProvider,} from "@tanstack/react-query";
import {AuthContextProvider} from "./context/AuthContext.jsx";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <QueryClientProvider client={queryClient}>

            <AuthContextProvider>
                <RouterProvider router={router}/>
            </AuthContextProvider>

        </QueryClientProvider>

    </React.StrictMode>,
)
