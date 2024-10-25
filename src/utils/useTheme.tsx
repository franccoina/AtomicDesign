import { GlobalTheme, GlobalDarkTheme } from "@/ui/themes/GlobalStyling";

export const getTheme = (isView: string) => {
    return isView == 'vacancies' ? GlobalDarkTheme : GlobalTheme;
};

export const toggleTheme = (isView: string) => {
    if (isView == 'vacancies') {
        return 'companies' ;
    }else{
        return 'vacancies' ;
    }
};