import React from 'react'
import { SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap
} from './SidebarElements'

import { ButtonS } from '../ButtonElement'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                        to='anomaly-detection'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                    >Anomaly detection</SidebarLink>
                    <SidebarLink 
                        to='clinical-analysis'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                        >Clinical Analysis</SidebarLink>
                    <SidebarLink 
                        to='synthetic-data'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                    >Synthetic Data Generation</SidebarLink>
                    <SidebarLink 
                        to='spiking-networks'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                    >Spiking Neural Networks</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                <ButtonS 
                        to="footer"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}
                    >Contact us</ButtonS>
            </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar