import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About, Achievement, AddAlumniForm, Agenda, AlQuran, Announcement, CriticismSuggestions, ELearning, Extracurricular, Gallery, GalleryDetail, History, Home, Infrastucture, Location, News, NewsDetail, OrganizationalStructure, PageNotFound, SchoolResidents, VisionMission } from "pages"
import { Footer, Header } from "components"
import "./App.scss"
import 'assets/scss/style.scss'
import { BackgroundNews } from "assets"

function App() {
    const [menu, setMenu] = useState("")

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <BrowserRouter>
            <div className="main">
                <Header menu={menu} />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home onMenu={(value) => setMenu(value)} />} />
                        <Route path="/vision-mission" element={<VisionMission onMenu={(value) => setMenu(value)} />} />
                        <Route path="/organizational-structure" element={<OrganizationalStructure onMenu={(value) => setMenu(value)} />} />
                        <Route path="/history" element={<History onMenu={(value) => setMenu(value)} />} />
                        <Route path="/extracurricular" element={<Extracurricular onMenu={(value) => setMenu(value)} />} />
                        <Route path="/infrastucture" element={<Infrastucture onMenu={(value) => setMenu(value)} />} />
                        <Route path="/school-residents" element={<SchoolResidents onMenu={(value) => setMenu(value)} />} />
                        <Route path="/school-residents/add-alumni" element={<AddAlumniForm onMenu={(value) => setMenu(value)} />} />
                        <Route path="/achievement" element={<Achievement onMenu={(value) => setMenu(value)} />} />
                        <Route path="/about" element={<About onMenu={(value) => setMenu(value)} />} />
                        <Route path="/gallery/*" element={
                            <Routes>
                                <Route index element={
                                    <Gallery onMenu={(value) => setMenu(value)} />
                                } />
                                <Route path=":id" element={
                                    <GalleryDetail onMenu={(value) => setMenu(value)} />
                                } />
                            </Routes>
                        } />
                        <Route path="/agenda" element={<Agenda onMenu={(value) => setMenu(value)} />} />
                        <Route path="/announcement" element={<Announcement onMenu={(value) => setMenu(value)} />} />
                        <Route path="/criticism-suggestions" element={<CriticismSuggestions onMenu={(value) => setMenu(value)} />} />
                        <Route path="/news/*" element={
                            <div className="news-page">
                                <div className="top-section">
                                    <img src={BackgroundNews} alt="BackgroundNews" />
                                </div>
                                <div className="bottom-section">
                                    <Routes>
                                        <Route index element={
                                            <News onMenu={(value) => setMenu(value)} />
                                        } />
                                        <Route path=":id" element={
                                            <NewsDetail onMenu={(value) => setMenu(value)} />
                                        } />
                                    </Routes>
                                </div>
                            </div>
                        }
                        />
                        <Route path="/elearning" element={<ELearning onMenu={(value) => setMenu(value)} />} />
                        <Route path="/alquran" element={<AlQuran onMenu={(value) => setMenu(value)} />} />
                        <Route path="/location" element={<Location onMenu={(value) => setMenu(value)} />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
                <Footer
                    isLightMode={menu !== "Home"}
                />
            </div>
        </BrowserRouter>
    )
}

export default App