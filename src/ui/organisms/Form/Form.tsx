import React, { useState } from 'react';
import Label from '@/ui/atoms/Label/Label';
import styled from 'styled-components';
import Select from '@/ui/atoms/Select/Select';
import Button from '@/ui/atoms/Button/Button';
import FormSelect from '@/ui/molecules/FormSelect/FormSelect';
import FormTextarea from '@/ui/molecules/FormTextarea/FormTextarea';
import FormInput from '@/ui/molecules/FormInput/FormInput';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    min-width: 200px;
    width: 100%;
    max-width: 400px;
`;

const StyledFormTitle = styled.h2`
    color:  ${({ theme }) => theme.colors.textPrimary};
`;

interface IFormProps {
    onSubmit: (formData: { [key: string]: string }) => void;
    title: string;
}

const Form: React.FC<IFormProps> = ({ onSubmit, title }) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormTitle>{title}</StyledFormTitle>
            <FormInput
                text="Título" htmlFor="title" className="" placeholder="Título" type="text"
                name="title" value={''} onChange={handleChange} />
            <FormTextarea
                text="Descripción" htmlFor="title" className="" placeholder="Descripción"
                name="description" value={''} onChange={handleChange} />
            <FormSelect
                text="Estado" htmlFor="status" className="" options={['OPEN', 'CLOSE']}
                name="status" value={''} onChange={handleChange} />
            <FormSelect
                text="Compañia" htmlFor="company" className="" options={['Selecciona una compañía', 'Compañía 1', 'Compañia 2', 'Compañia 3']}
                name="company" value={''} onChange={handleChange} />
            <Button className='submitBtn' type='submit' label="Submit" />
        </StyledForm>
    );
};

export default Form;