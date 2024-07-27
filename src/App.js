import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Achievement, AddAlumniForm, Agenda, AlQuran, Announcement, CriticismSuggestions, ELearning, Extracurricular, Gallery, GalleryDetail, History, Home, Infrastucture, Location, News, NewsDetail, OrganizationalStructure, PageNotFound, SchoolResidents, VisionMission } from "pages"
import { Footer, Header, PopUpMenu } from "components"
import "./App.scss"
import "assets/scss/style.scss"
import { BackgroundNews } from "assets"

function App() {
    const [menu, setMenu] = useState("")
    const [isPopUpMenu, setPopUpMenu] = useState(false)

    const handleSetMenu = (menu) => {
        window.scrollTo(0, 0);
        setPopUpMenu(false)
        setMenu(menu)
    }

    return (
        <BrowserRouter>
            <div className="main">
                <Header
                    menu={menu}
                    onShowPopUpMenu={() => setPopUpMenu(!isPopUpMenu)}
                />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/vision-mission" element={<VisionMission onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/organizational-structure" element={<OrganizationalStructure onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/history" element={<History onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/extracurricular" element={<Extracurricular onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/infrastucture" element={<Infrastucture onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/school-residents/*" element={
                            <Routes>
                                <Route index element={
                                    <SchoolResidents onMenu={(value) => handleSetMenu(value)} />
                                } />
                                <Route path="add-alumni" element={
                                    <AddAlumniForm onMenu={(value) => handleSetMenu(value)} />
                                } />
                            </Routes>
                        } />
                        <Route path="/achievement" element={<Achievement onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/about" element={<About onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/gallery/*" element={
                            <Routes>
                                <Route index element={
                                    <Gallery onMenu={(value) => handleSetMenu(value)} />
                                } />
                                <Route path=":id" element={
                                    <GalleryDetail onMenu={(value) => handleSetMenu(value)} />
                                } />
                            </Routes>
                        } />
                        <Route path="/agenda" element={<Agenda onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/announcement" element={<Announcement onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/criticism-suggestions" element={<CriticismSuggestions onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/news/*" element={
                            <div className="news-page">
                                <div className="top-section">
                                    <img src={BackgroundNews} alt="BackgroundNews" />
                                </div>
                                <div className="bottom-section">
                                    <Routes>
                                        <Route index element={
                                            <News onMenu={(value) => handleSetMenu(value)} />
                                        } />
                                        <Route path=":id" element={
                                            <NewsDetail onMenu={(value) => handleSetMenu(value)} />
                                        } />
                                    </Routes>
                                </div>
                            </div>
                        }
                        />
                        <Route path="/elearning" element={<ELearning onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/alquran" element={<AlQuran onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="/location" element={<Location onMenu={(value) => handleSetMenu(value)} />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
                <Footer
                    isLightMode={menu !== "Home"}
                />
            </div>
            <PopUpMenu
                isShow={isPopUpMenu}
                onShow={(value) => setPopUpMenu(value)}
            />
        </BrowserRouter>
    )
}

export default App