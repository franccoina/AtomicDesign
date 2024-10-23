'use client';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyling";
import React, { useState } from "react";
import Header from "../molecules/Header";
import { getTheme, toggleTheme } from "@/utils/useTheme";
import styled from "styled-components";

const Main = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
`;

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const handleToggleTheme = () => {
        setIsDarkTheme(prev => toggleTheme(prev));
    };

    const theme = getTheme(isDarkTheme);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main>
                <Header onToggleTheme={handleToggleTheme} isDarkTheme={isDarkTheme} />
                {children}
            </Main>
        </ThemeProvider>
    );
};

export default ClientLayout;