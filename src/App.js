import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Gallery, Home, Location } from "pages"
import { Footer, Header } from "components"
import "./App.scss"
import 'assets/scss/style.scss'

function App() {
    const [menu, setMenu] = useState("")
    const [subMenu, setSubMenu] = useState("")

    useEffect(() => {
    }, []);


    return (
        <BrowserRouter>
            <div className="main">
                <Header/>
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/Gallery" element={<Gallery/>} />
                        <Route path="/Location" element={<Location/>} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App