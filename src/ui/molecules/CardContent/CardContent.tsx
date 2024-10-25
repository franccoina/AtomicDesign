import styled from "styled-components";
import { IContentCardProps } from "@/models/molecules/CardContent";

const StyledContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    li {
        color: ${({theme}) => theme.colors.textPrimary};
    }
`;

export const CardContent = ({ $text }: IContentCardProps) => {
    return (
        <StyledContent>
            {$text?.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </StyledContent>
    );
};