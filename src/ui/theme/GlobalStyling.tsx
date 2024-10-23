'use client';
import { createGlobalStyle } from "styled-components";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export interface IGlobalTheme {
    [key: string]: IGlobalThemeAttributes
}

export interface IGlobalThemeAttributes {
    [key: string]: string;
}

// Configuramos nuestro Global Theme
export const GlobalTheme: IGlobalTheme = {
    colors: {
        bgPrimary: 'linear-gradient(rgb(192, 132, 252) ,rgb(236, 72, 153) ,rgb(239, 68, 68) )',
        bgSecondary: '#fff',
        textPrimary: '#000',
    }
};

export const GlobalDarkTheme: IGlobalTheme = {
    colors: {
        bgPrimary: 'linear-gradient(rgb(192, 132, 252) ,rgb(236, 72, 153) ,rgb(239, 68, 68) )',
        bgSecondary: '#fff',
        textPrimary: '#000',
    }
}

// Global styling para elementos HTML importantes
export const GlobalStyle = createGlobalStyle`

:root {
    --bgPrimary: ${({ theme }) => theme.colors.bgPrimary};
    --bgSecondary: ${({ theme }) => theme.colors.bgSecondary};

    --textPrimary: ${({ theme }) => theme.colors.textPrimary};
}

input, select, textarea, button {
    font-family: ${urbanist.style.fontFamily};
}
`;