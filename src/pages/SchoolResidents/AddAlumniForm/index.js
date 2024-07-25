import React, { useEffect, useState } from "react"
import { Container, Dropdown } from "react-bootstrap"
import { Breadcrumbs, Buttons, DatePickers, PopUpSuccess, TextFields } from "components"
import "./addAlumniForm.scss"
import { CalendarIcon, Chevron, ChevronReguler, ChevronSlider } from "assets"
import moment from "moment"

export default function AddAlumniForm(props) {
    const [name, setName] = useState("")
    const [graduationYear, setGraduationYear] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [additionalInfo, setAdditionalInfo] = useState("")
    const [cityOfBirth, setCityOfBirth] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [currentJob, setCurrentJob] = useState("")
    const [isPopUpSuccess, setPopUpSuccess] = useState(false)

    useEffect(() => {
        props.onMenu("Profile")
    }, [])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if (name === "name") {
            setName(value)
        }
        else if (name === "phone") {
            setPhone(value)
        }
        else if (name === "email") {
            setEmail(value)
        }
        else if (name === "address") {
            setAddress(value)
        }
        else if (name === "cityOfBirth") {
            setCityOfBirth(value)
        }
        else if (name === "currentJob") {
            setCurrentJob(value)
        }
        else if (name === "additionalInfo") {
            setAdditionalInfo(value)
        }
    }

    const handleSubmit = () => {
        console.log("submit")
        setPopUpSuccess(true)
    }

    const generateGraduationYear = () => {
        const startYear = 2001;
        const currentYear = new Date().getFullYear();
        const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => currentYear - i);

        return years
    }

    return (
        <Container className="add-alumni-page">
            <Breadcrumbs
                to={"/school-residents"}
                title="Kembali ke halaman Data Alumni"
            />
            <div className="add-alumni-header">
                <h2 className="title">Form Alumni SMA Muhammadiyah 4 Yogyakarta</h2>
                <p className="desc">Silahkan mengisi data alumni pada form dibawah, diharapkan data yang anda masukan adalah data yang valid</p>
            </div>
            <div className="add-alumni-content">
                <form className="form-add-alumni">
                    <TextFields
                        name="name"
                        label="Nama Lengkap"
                        type="text"
                        maxLength={14}
                        placeholder="Masukkan nama sesuai KTP"
                        value={name}
                        onChange={handleChange}
                    />
                    <Dropdown bsPrefix="wrap-graduation-year dropdown-item">
                        <Dropdown.Toggle bsPrefix="menu-item" as={'div'}>
                            <TextFields
                                className="graduation-year"
                                label="Tahun Lulus"
                                name="graduationYear"
                                placeholder="2001"
                                value={graduationYear}
                                type="none"
                                markLogo={ChevronSlider}
                            />
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                            bsPrefix="dropdown-menu default-scrollbar"
                            popperConfig={{
                                modifiers: [
                                    {
                                        name: 'offset',
                                        options: {
                                            offset: [0, 8], // Adjust offset if needed
                                        },
                                    },
                                    {
                                        name: 'flip',
                                        options: {
                                            fallbackPlacements: ['bottom-start'],
                                        },
                                    },
                                ],
                            }}
                        >
                            {generateGraduationYear().map((item, i) => (
                                <Dropdown.Item
                                    eventKey={i}
                                    bsPrefix="item"
                                    onClick={() => setGraduationYear(item)}
                                >
                                    {item}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <TextFields
                        name="phone"
                        label="Nomor Telepon / Hp"
                        type="tel"
                        maxLength={14}
                        placeholder="Masukkan nomor telepon anda"
                        value={phone}
                        onChange={handleChange}
                    />
                    <TextFields
                        name="email"
                        label="Alamat Email"
                        type="email"
                        maxLength={14}
                        placeholder="Masukkan alamat email anda"
                        value={email}
                        onChange={handleChange}
                    />
                    <TextFields
                        name="cityOfBirth"
                        label="Tempat Lahir"
                        type="text"
                        maxLength={14}
                        placeholder="Masukkan Tempat lahir Anda"
                        value={cityOfBirth}
                        onChange={handleChange}
                    />
                    <DatePickers
                        label="Tanggal Lahir"
                        placeholder="DD-MM-YYYY"
                        selectedDate={dateOfBirth}
                        onSetStartDate={(date) => setDateOfBirth(date)}
                    />
                    <TextFields
                        name="address"
                        label="Alamat Tempat Tinggal"
                        type="text"
                        as="textarea"
                        maxLength={100}
                        placeholder="Masukkan alamat Tempat tinggal anda sekarang"
                        value={address}
                        onChange={handleChange}
                    />
                    <TextFields
                        name="currentJob"
                        label="Pekerjaan Sekarang"
                        type="text"
                        maxLength={14}
                        placeholder="Masukkan pekerjaan terbaru anda"
                        value={currentJob}
                        onChange={handleChange}
                    />
                    <TextFields
                        name="additionalInfo"
                        label="Informasi Tambahan"
                        type="text"
                        as="textarea"
                        maxLength={100}
                        placeholder="Masukkan Informasi tambahan mengenai diri anda"
                        value={additionalInfo}
                        onChange={handleChange}
                    />
                    <div className="btn-submit">
                        <Buttons
                            title="Kirim Data Alumni"
                            variant="general"
                            onClick={handleSubmit}
                        />
                    </div>
                </form>
            </div>
            <PopUpSuccess
                isShow={isPopUpSuccess}
                message="Data alumni anda berhasil dikirim"
                onShow={(value) => setPopUpSuccess(value)}
            />
        </Container>
    )
}
