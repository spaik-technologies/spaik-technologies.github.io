import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Button = styled(Link)`
  // Check the button colors
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#1976d2" : "#74BFC8")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#000")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#74BFC8" : "#1976d2")};
    color: ${({ dark }) => (dark ? "#000" : "#fff")};
  }
`;

export const ButtonS = styled(LinkS)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#1976d2" : "#74BFC8")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#fff" : "#000")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#74BFC8" : "#1976d2")};
    color: ${({ dark }) => (dark ? "#000" : "#fff")};
  }
`;
