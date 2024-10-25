import styled from 'styled-components';
import React from 'react';
import { ILabelProps } from '@/models/atoms/Label';

const StyledLabel = styled.label`
  font-weight: bold;  
  color: #000;         
  margin-bottom: 8px; 
  display: block;      
`;

const Label: React.FC<ILabelProps> = ({ text, htmlFor, className }) => {
  return (
    <StyledLabel htmlFor={htmlFor} className={className}>
      {text}
    </StyledLabel>
  );
};

export default Label;