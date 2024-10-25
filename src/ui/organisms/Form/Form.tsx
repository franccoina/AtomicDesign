import React, { useState } from 'react';
import styled from 'styled-components';
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
    isView: string;
}

const Form: React.FC<IFormProps> = ({ onSubmit, isView }) => {
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
            <StyledFormTitle>{isView === "companies" ? 'Agregar Compañia' : 'Agregar Vacante'}</StyledFormTitle>
            {isView === "companies" ? (
                <>
                    <FormInput
                        text="Título" htmlFor="title" className="modal-fields" placeholder="Título" type="text"
                        name="title" value={''} onChange={handleChange} />
                    <FormTextarea
                        text="Descripción" htmlFor="title" className="modal-fields" placeholder="Descripción"
                        name="description" value={''} onChange={handleChange} />
                    <FormSelect
                        text="Estado" htmlFor="status" className="modal-fields" options={['OPEN', 'CLOSE']}
                        name="status" value={''} onChange={handleChange} />
                    <FormSelect
                        text="Compañia" htmlFor="company" className="modal-fields" options={['Selecciona una compañía', 'Compañía 1', 'Compañia 2', 'Compañia 3']}
                        name="company" value={''} onChange={handleChange} />
                </>
            ) : (
                <>
                    <FormInput
                        text="Nombre" htmlFor="name" className="modal-fields" placeholder="Nombre" type="text"
                        name="name" value={''} onChange={handleChange} />
                    <FormInput
                        text="Ubicación" htmlFor="location" className="modal-fields" placeholder="Ubicación" type="text"
                        name="location" value={''} onChange={handleChange} />
                    <FormInput
                        text="Contacto" htmlFor="contact" className="modal-fields" placeholder="Contacto" type="text"
                        name="contact" value={''} onChange={handleChange} />
                </>
            )}
            <Button className='submitBtn' type='submit' label="Agregar" />
        </StyledForm>
    );
};

export default Form;