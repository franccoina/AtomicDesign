"use client";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import React from "react";
import ButtonTheme from "../atoms/Button/Button";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 100px;
  padding-right: 100px;
  gap: 50px;
`;

const Header: React.FC<{ onToggleTheme: () => void; isDarkTheme: boolean }> = ({ onToggleTheme, isDarkTheme }) => {
  return (
    <HeaderContainer>
      <ButtonTheme
        type="button"
        icon={isDarkTheme ? <FaMoon /> : <FaSun />}
        onClick={onToggleTheme}
      />
    </HeaderContainer>
  );
};

export default Header;
