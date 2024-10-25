import { GlobalTheme, GlobalDarkTheme } from "@/ui/themes/GlobalStyling";

export const getTheme = (isView: string) => {
    return isView == 'vacantes' ? GlobalDarkTheme : GlobalTheme;
};

export const toggleTheme = (isView: string) => {
    if (isView == 'vacantes') {
        return 'companies' ;
    }else{
        return 'vacantes' ;
    }
};