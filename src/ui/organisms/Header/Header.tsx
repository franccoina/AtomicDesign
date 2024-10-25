"use client";
import styled from "styled-components";
import { LuBriefcase, LuBuilding2 } from "react-icons/lu";
import { GrAddCircle } from "react-icons/gr";
import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import Input from "@/ui/atoms/Input/Input";
import { IHeaderProps } from "@/models/organisms/Header";
import Modal from "../Modals/Modals";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Toggler = styled.div<{ position: string }>`
  display: flex;
  width: 100px;
  height: 100%;
  transition: 1s ease-in-out;
  align-items: center;
  translate: ${(props) => props.position};
`;

const ToggleContainer = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  transition: 1s ease-in-out;
  align-items: center;
  justify-content: start;
  background-color: ${({ theme }) => theme.colors.bgInactive};
  border-radius: 50px;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 200px;
  height: 30px;
  transition: 1s ease-in-out;
  align-items: center;
  justify-content: start;
`;

const AddButtonContainer = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  transition: 1s ease-in-out;
  align-items: center;
  justify-content: start;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Header: React.FC<IHeaderProps> = ({
  onToggleTheme,
  isView,
}) => {
  const [showModal, setShowModal] = useState(false);

  const goLeft = isView == 'vacantes' ? '100px' : '0';
  const goRight = isView == 'vacantes' ? '-100px' : '0';

  const handleCloseModal = () => {
    console.log("close");
    setShowModal(false);
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <ToggleContainer>
          <Toggler position={goLeft}>
            <Button
              className="inactiveBtn"
              type="button"
              label={isView === "vacantes" ? 'Compañias' : 'Vacantes' }
              icon={isView === "vacantes" ?  <LuBuilding2 /> : <LuBriefcase />}
              onClick={() => onToggleTheme()}
            />
          </Toggler>
          <Toggler position={goRight}>
            <Button
              className="activeBtn"
              type="button"
              label={isView === "companies" ? 'Compañias' : 'Vacantes' }
              icon={isView === "companies" ? <LuBuilding2 /> : <LuBriefcase />}
              onClick={() => onToggleTheme()}
            />
          </Toggler>
        </ToggleContainer>
        <SearchContainer>
          <Input className="search-input" name="search" value={""} type="text" placeholder="⌕ Buscar..." />
        </SearchContainer>
      </HeaderSection>
      <HeaderSection>
          <h2>{isView === "companies" ? 'Compañias' : 'Vacantes'}</h2>
          <AddButtonContainer>
            <Button
              className="activeBtn"
              type="button"
              label={isView === "companies" ? 'Agregar Compañia' : 'Agregar Vacante' }
              icon={<GrAddCircle />}
              onClick={() => setShowModal(true)}
            />
            </AddButtonContainer>
            {showModal && (
            <ModalContainer>
              <Modal 
              isOpen={showModal} onClose={handleCloseModal} isView={isView}
              />
            </ModalContainer>
          )}
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
