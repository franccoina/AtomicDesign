"use client";
import React from "react";
import Button from "@/ui/atoms/Button/Button";
import Form from "../Form/Form";
import styled from "styled-components";

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000; 
`;

const ModalContent = styled.div`
    background-color:  ${({ theme }) => theme.colors.bgSecondary};
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
`;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    isView: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, isView, onClose }) => {
    const handleSubmit = () => {
        console.log("submit");
    };

    return (
        <ModalOverlay isOpen={isOpen}>
            <ModalContent>
                <Button type="button" icon={"X"} onClick={onClose} />
                <Form onSubmit={() => handleSubmit}
                    title={isView === "companies" ? 'Agregar Compañia' : 'Agregar Vacante'}
                />
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;