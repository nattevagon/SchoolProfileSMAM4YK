import React, { useEffect } from 'react'
import { Container } from "react-bootstrap"
import "./organizationalStructure.scss"

export default function OrganizationalStructure(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
        props.onMenu("Profile")
    }, [])

    return (
        <div className="organizational-structure-page">
            <Container className="page-section">
                <h2 className="page-title">Bagan Struktur Organisasi</h2>
                <div className="content-chart">
                    <table class="org-chart">
                        <tr>
                            <td colspan="5"></td>
                            <td colspan="2" class="parent">
                                <div className="wrap-item">
                                    <div className="name">Hj. Tri Suryani, M.Pd</div>
                                    <div className="title">Kepala Sekolah</div>
                                </div>
                            </td>
                            <td colspan="5"></td>
                        </tr>
                        <tr>
                            <td colspan="6" className="line-border-right"></td>
                            <td colspan="6"></td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td colspan="2" rowSpan="2" class="child">
                                <div className="wrap-item need-to-align">
                                    <div className="name">Satono</div>
                                    <div className="title">Kepala Tata Usaha</div>
                                </div>
                            </td>
                            <td colspan="1" className="line-border-right line-border-bottom"></td>
                            <td colspan="1" className="line-border-bottom"></td>
                            <td colspan="2" rowSpan="2" class="child">
                                <div className="wrap-item need-to-align">
                                    <div className="name">Hapsoro Noor Adianto</div>
                                    <div className="title">Bendahara</div>
                                </div>
                            </td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td colspan="6" className="line-border-right"></td>
                            <td colspan="6"></td>
                        </tr>
                        <tr>
                            <td colspan="6" className="line-border-right"></td>
                            <td colspan="6"></td>
                        </tr>
                        <tr>
                            <td colspan="1" className="line-border-right"></td>
                            <td colspan="3" className="line-border-right line-border-top"></td>
                            <td colspan="2" className="line-border-top"></td>
                            <td colspan="2" className="line-border-right line-border-top"></td>
                            <td colspan="3" className="line-border-right line-border-top"></td>
                            <td colspan="1"></td>
                        </tr>
                        <tr>
                            <td colspan="2" class="child">
                                <div className="wrap-item">
                                    <div className="name">Titik Ismiyanti, S.Pd</div>
                                    <div className="title">WAKA Kurikulum</div>
                                </div>
                            </td>
                            <td colspan="1"></td>
                            <td colspan="2" class="child">
                                <div className="wrap-item">
                                    <div className="name">Soegiantoro, S.Pd</div>
                                    <div className="title">WAKA Kesiswaan</div>
                                </div>
                            </td>
                            <td colspan="1"></td>
                            <td colspan="1"></td>
                            <td colspan="2" class="child">
                                <div className="wrap-item">
                                    <div className="name">Ari Wibowo, S.Pd</div>
                                    <div className="title">WAKA Sarpras</div>
                                </div>
                            </td>
                            <td colspan="1"></td>
                            <td colspan="2" class="child">
                                <div className="wrap-item">
                                    <div className="name">Puji Kurniawan, S.Sos.I</div>
                                    <div className="title">WAKA Humas</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4" className="line-border-right"></td>
                            <td colspan="8"></td>
                        </tr>
                        <tr>
                            <td colspan="3"></td>
                            <td colspan="2" class="grand-child">
                                <div className="wrap-item">
                                    <div className="name">Hidayat Kurniawan, S.Pd</div>
                                    <div className="title">Koordinator BK</div>
                                </div>
                            </td>
                            <td colspan="7"></td>
                        </tr>
                    </table>
                </div>
            </Container>
        </div>
    )
}
