import { ICompany, IVacants, ICardProps } from "@/models/organisms/Cards";
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

export const Card = ({ $data, isView }: ICardProps) => {
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
            {isView == 'vacants' ? (
                <ul>
                    <h3>{($data as IVacants).title}</h3>
                    <CardContent
                        $text={[
                            `Description: ${($data as IVacants).description}`,
                            `State: ${($data as IVacants).status}`,
                            `Company: ${($data as IVacants).company?.id}`,
                        ]}
                    />
                </ul>
            ) : (
                <ul>
                    <h3>{($data as ICompany).name}</h3>
                    <CardContent
                        $text={[
                            `City: ${($data as ICompany).location}`, 
                            `Contact: ${($data as ICompany).contact}`,
                            `Vacants: ${($data as ICompany).vacants?.length}`
                        ]}
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