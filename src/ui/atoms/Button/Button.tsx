import React from 'react';
import styled from 'styled-components';

export interface ButtonToggleProps {
    type: "button";
    icon: React.JSX.Element;
    onClick?: () => void;
}

const ButtonThemeStyle = styled.button<{ theme: string }>`
  width: 70px;
  height: 70px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  &:hover {
    opacity: 0.8;
    transition: background-color 0.3s ease-in-out;
  }
`;

const ButtonTheme: React.FC<ButtonToggleProps> = ({ type, icon, onClick }) => {
    return (
        <ButtonThemeStyle type={type} onClick={onClick}>
            {icon}
        </ButtonThemeStyle>
    );
};

export default ButtonTheme;
