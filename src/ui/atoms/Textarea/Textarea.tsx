import styled from 'styled-components';
import React from 'react';

const TextareaStyle = styled.input`
    width: 100%;  
    height: 80px;        
    padding: 10px;        
    border: 1px solid ${({ theme }) => theme.colors.borders};
    
    &:focus {
        outline: none;          
    }
    
    &:disabled {
        background-color: ${({ theme }) => theme.colors.bgInactive};
        cursor: not-allowed;    
    }
`;

export interface ITextAreaProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    placeholder?: string;
    className?: string;
    value?: string;
    key?:string;
    id?: string;
  }

const Textarea: React.FC<ITextAreaProps> = ({
    placeholder,
    value,
    name,
    onChange,
    id,
    key,
    className
}) => {
    return (
        <TextareaStyle
            className={className}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            id={id}
            key={key}
        />
    );
};

export default Textarea;