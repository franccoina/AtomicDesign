import { ICompany, IVacancies } from "@/models/organisms/Cards";
import styled from "styled-components";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import { CardContent } from "@/ui/molecules/CardContent/CardContent";
import Button from "@/ui/atoms/Button/Button";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.bgInactive};
    border-radius: 20px;
    padding: 20px;
    width: 32%;
    max-width: 400px;
    min-width: 150px;
    height: 150px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
    margin: 0;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    
    &:hover {
        transform: scale(0.99);
}
`;

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    gap: 6px;
    justify-content: end;
`;


interface ICardProps {
    $data?: IVacancies | ICompany;
}

export const Card = ({ $data }: ICardProps) => {
    const isVacancy = ($data: IVacancies | ICompany): $data is IVacancies => {
        return ($data as IVacancies).companyId !== undefined;
    };

    const onEdit = () => {
        // Implement edit functionality
        console.log("Edit card:", $data);
    };

    const onDelete = () => {
        // Implement delete functionality
        console.log("Delete card:", $data);
    };

    return (
        <StyledCard>
            {$data && isVacancy($data) ? (
                <ul>
                    <h3>{$data.title}</h3>
                    <CardContent
                        $text={[
                            `Description: ${$data.description}`,
                            `State: ${$data.state}`,
                            `Company: ${$data.companyId}`,
                        ]}
                    />
                </ul>
            ) : (
                <ul>
                    <h3>{$data?.name}</h3>
                    <CardContent
                        $text={[`City: ${$data?.city}`, `Contact: ${$data?.contact}`]}
                    />
                </ul>
            )}
            <ButtonsContainer>
                <Button
                    className="editBtn"
                    type="button"
                    icon={<LuPencil />}
                    onClick={() => onEdit()}
                />
                <Button
                    className="deleteBtn"
                    type="button"
                    icon={<LuTrash2 />}
                    onClick={() => onDelete()}
                />
            </ButtonsContainer>
        </StyledCard>
    );
};