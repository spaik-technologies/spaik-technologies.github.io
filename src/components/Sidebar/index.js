import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarSubMenu,
  SidebarSubLink
} from "./SidebarElements";

import { ButtonS } from "../ButtonElement";

const SidebarLinkWithScroll = (props) => (
  <SidebarLink
    {...props}
    smooth={true}
    duration={500}
    spy={true}
    exact="true"
    offset={-80}
  />
);

const Sidebar = ({ isOpen, toggle }) => {
  const [showPagesSubmenu, setShowPagesSubmenu] = useState(false);

  const togglePagesSubmenu = (e) => {
    e.stopPropagation();
    setShowPagesSubmenu(!showPagesSubmenu);
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={togglePagesSubmenu}>
            Apps
          </SidebarLink>
          {showPagesSubmenu && (
            <SidebarSubMenu>
              <SidebarSubLink to="/page1" onClick={toggle}>Western-Blot App</SidebarSubLink>
              <SidebarSubLink to="/page2" onClick={toggle}>Page 2</SidebarSubLink>
            </SidebarSubMenu>
          )}
          <SidebarLinkWithScroll to="anomaly-detection" onClick={toggle}>
            Anomaly detection
          </SidebarLinkWithScroll>
          <SidebarLinkWithScroll to="clinical-analysis" onClick={toggle}>
            Clinical analysis
          </SidebarLinkWithScroll>
          <SidebarLinkWithScroll to="synthetic-data" onClick={toggle}>
            Synthetic data generation
          </SidebarLinkWithScroll>
          <SidebarLinkWithScroll to="spiking-networks" onClick={toggle}>
            Spiking neural networks
          </SidebarLinkWithScroll>
        </SidebarMenu>
        <SideBtnWrap>
          <ButtonS
            to="footer"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Contact us
          </ButtonS>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
