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
        textPrimary1: 'rgb(31, 41, 55)',
        textPrimary2: 'rgb(75, 85, 99)',
        textPrimary3: 'rgb(107, 114, 128)',
        bgSecondary: 'rgb(255, 255, 255)',
        textSecondary: 'rgb(255, 255, 255)',
        textTertiary: 'rgb(239, 68, 68)',
        hoverTertiary: 'rgb(219, 39, 119)',
        textQuaternary: 'rgb(168, 85, 247)',
        hoverQuaternary: ' rgb(147, 51, 234)',
        textQuinary: 'rgb(239, 68, 68)',
        hoverTextQuinary: ' rgb(220, 38, 38)',
        hoverBgQuinary: 'rgb(254, 242, 242)',
        bgBtn: 'rgb(236, 72, 153) ',
        hoverBtn: 'rgb(219, 39, 119)',
        bgInactive: 'rgb(243, 244, 246)',
        borders: 'rgb(229, 231, 235) ',
    }
};

export const GlobalDarkTheme: IGlobalTheme = {
    colors: {
        bgPrimary: 'linear-gradient(rgb(192, 132, 252) ,rgb(236, 72, 153) ,rgb(239, 68, 68) )',
        textPrimary1: 'rgb(31, 41, 55)',
        textPrimary2: 'rgb(75, 85, 99)',
        textPrimary3: 'rgb(107, 114, 128)',
        bgSecondary: 'rgb(255, 255, 255)',
        textSecondary: 'rgb(255, 255, 255)',
        textTertiary: 'rgb(239, 68, 68)',
        hoverTertiary: 'rgb(219, 39, 119)',
        textQuaternary: 'rgb(168, 85, 247)',
        hoverQuaternary: ' rgb(147, 51, 234)',
        textQuinary: 'rgb(239, 68, 68)',
        hoverTextQuinary: ' rgb(220, 38, 38)',
        hoverBgQuinary: 'rgb(254, 242, 242)',
        bgBtn: 'rgb(168, 85, 247)',
        hoverBtn: 'rgb(147, 51, 234)',
        bgInactive: 'rgb(243, 244, 246)',
        borders: 'rgb(229, 231, 235) ',
    }
}

// Global styling para elementos HTML importantes
export const GlobalStyle = createGlobalStyle`

:root {
    --bgPrimary: ${({ theme }) => theme.colors.bgPrimary};
    --bgSecondary: ${({ theme }) => theme.colors.bgSecondary};

    --textPrimary1: ${({ theme }) => theme.colors.textPrimary1};
    --textPrimary2: ${({ theme }) => theme.colors.textPrimary2};
    --textPrimary3: ${({ theme }) => theme.colors.textPrimary3};
    --textSecondary: ${({ theme }) => theme.colors.textSecondary};

    --bgBtn: ${({ theme }) => theme.colors.bgBtn};
    --bgInactive: ${({ theme }) => theme.colors.bgInactive};

    --textTertiary: ${({ theme }) => theme.colors.textTertiary};
    --hoverTertiary: ${({ theme }) => theme.colors.hoverTertiary};

    --textQuaternary: ${({ theme }) => theme.colors.textQuaternary};
    --hoverQuaternary: ${({ theme }) => theme.colors.hoverQuaternary};
    
    --textQuinary: ${({ theme }) => theme.colors.textQuinary};
    --hoverTextQuinary: ${({ theme }) => theme.colors.hoverTextQuinary};
    --hoverBgQuinary: ${({ theme }) => theme.colors.hoverBgQuinary};

    --borders: ${({ theme }) => theme.colors.borders};
}

input, select, textarea, button {
    font-size: 14px;
    font-family: ${urbanist.style.fontFamily};
}
`;