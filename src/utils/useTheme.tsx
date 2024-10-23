import { GlobalTheme, GlobalDarkTheme } from "@/ui/theme/GlobalStyling";

export const getTheme = (isDark: boolean) => {
    return isDark ? GlobalDarkTheme : GlobalTheme;
};

export const toggleTheme = (isDark: boolean) => {
    return !isDark; // Retorna el nuevo estado (true/false)
};