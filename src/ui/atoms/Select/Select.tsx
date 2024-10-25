import styled from "styled-components";

const StyledSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.borders};
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export interface ISelectProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  options: string[];
}

const Select: React.FC<ISelectProps> = ({ value, name, options }) => {
  return (
    <StyledSelect name={name} >
      {options.map((option, index) => (
        <option key={index} value={value}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;