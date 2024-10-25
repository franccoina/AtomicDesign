export interface IButtonProps {
    type: "button";
    icon?: React.JSX.Element;
    onClick?: () => void;
    className?: string;
    label?: string;
}