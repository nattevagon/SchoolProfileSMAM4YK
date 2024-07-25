import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Achievement, AddAlumniForm, Agenda, AlQuran, Announcement, CriticismSuggestions, ELearning, Extracurricular, Gallery, GalleryDetail, History, Home, Infrastucture, Location, News, NewsDetail, OrganizationalStructure, PageNotFound, SchoolResidents, VisionMission } from "pages"
import { Footer, Header, PopUpMenu } from "components"
import "./App.scss"
import 'assets/scss/style.scss'
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
                        <Route exact path="/" element={<Home onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/vision-mission" element={<VisionMission onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/organizational-structure" element={<OrganizationalStructure onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/history" element={<History onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/extracurricular" element={<Extracurricular onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/infrastucture" element={<Infrastucture onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/school-residents/*" element={
                            <Routes>
                                <Route exact index element={
                                    <SchoolResidents onMenu={(value) => handleSetMenu(value)} />
                                } />
                                <Route exact path="add-alumni" element={
                                    <AddAlumniForm onMenu={(value) => handleSetMenu(value)} />
                                } />
                            </Routes>
                        } />
                        <Route exact path="/achievement" element={<Achievement onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/about" element={<About onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/gallery/*" element={
                            <Routes>
                                <Route exact index element={
                                    <Gallery onMenu={(value) => handleSetMenu(value)} />
                                } />
                                <Route exact path=":id" element={
                                    <GalleryDetail onMenu={(value) => handleSetMenu(value)} />
                                } />
                            </Routes>
                        } />
                        <Route exact path="/agenda" element={<Agenda onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/announcement" element={<Announcement onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/criticism-suggestions" element={<CriticismSuggestions onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/news/*" element={
                            <div className="news-page">
                                <div className="top-section">
                                    <img src={BackgroundNews} alt="BackgroundNews" />
                                </div>
                                <div className="bottom-section">
                                    <Routes>
                                        <Route exact index element={
                                            <News onMenu={(value) => handleSetMenu(value)} />
                                        } />
                                        <Route exact path=":id" element={
                                            <NewsDetail onMenu={(value) => handleSetMenu(value)} />
                                        } />
                                    </Routes>
                                </div>
                            </div>
                        }
                        />
                        <Route exact path="/elearning" element={<ELearning onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/alquran" element={<AlQuran onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="/location" element={<Location onMenu={(value) => handleSetMenu(value)} />} />
                        <Route exact path="*" element={<PageNotFound />} />
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