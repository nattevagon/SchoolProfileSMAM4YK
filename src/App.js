import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Gallery, Home, Location, PageNotFound, VisionMission } from "pages"
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
                <Header menu={menu}/>
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home onMenu={(value) => setMenu(value)}/>} />
                        <Route path="/gallery" element={<Gallery onMenu={(value) => setMenu(value)}/>} />
                        <Route path="/vision-mission" element={<VisionMission onMenu={(value) => setMenu(value)}/>} />
                        <Route path="/location" element={<Location/>} />
                        <Route path="*" element={<PageNotFound/>} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App