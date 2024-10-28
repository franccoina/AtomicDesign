import styled from "styled-components";

const StyledSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.borders};
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export interface ISelectProps {
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value: string;
  options: string[];
}

const Select: React.FC<ISelectProps> = ({ value, name, options, onChange }) => {
  return (
    <StyledSelect name={name} onChange={onChange} value={value}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;