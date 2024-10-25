'use client';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../themes/GlobalStyling";
import React, { useState } from "react";
import Header from "../organisms/Header/Header";
import { getTheme, toggleTheme } from "@/utils/useTheme";
import ClientTemplate from "../templates/ClientTemplate";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isView, setIsView] = useState("");
    const [view, setView] = useState("vacancies");

    const handleToggle = () => {
        setView(prev => (prev === "vacancies" ? "companies" : "vacancies"));
        setIsView(prev => toggleTheme(prev)); 
    };

    const theme = getTheme(isView);
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <div className="layout">
                <h1>Panel de Administración</h1>
                <Header 
                    onToggleTheme={handleToggle}
                    isView={isView} 
                />
                <ClientTemplate view={view}>
                    {children}
                </ClientTemplate>
            </div>
        </ThemeProvider>
    );
};

export default ClientLayout;
