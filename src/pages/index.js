import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import InfoSection3D from '../components/InfoSection3D'
import { homeObj3DOne } from '../components/InfoSection3D/Data'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection3D {...homeObj3DOne} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />

            <Footer id="footer"/>
        </>
    )
}

export default Home