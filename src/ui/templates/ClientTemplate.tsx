'use client';
import React, { useEffect, useState } from "react";
import { ICompany, IVacancies } from "@/models/organisms/Cards";
import { Card } from "../organisms/Cards/Cards";

const ClientTemplate: React.FC<{ children: React.ReactNode; view: string }> = ({ children, view }) => {
    const [cardData, setCardData] = useState<Array<ICompany | IVacancies>>([]);
    const [loading, setLoading] = useState(true);

    const fetchCardData = async () => {
        try {
            const response = await fetch(
                view === "vacantes"
                    ? "https://671638f633bc2bfe40bcf693.mockapi.io/api/v1/vacancies"
                    : "https://671638f633bc2bfe40bcf693.mockapi.io/api/v1/companies"
            );
            const data = await response.json();
            setCardData(data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCardData();
    }, [view]);

    console.log(view, cardData);

    return (
        <main className="template">
            {loading ? (
                <p>Cargando...</p>
            ) : (
                    <>
                        {cardData.map((item) => (
                                <Card $data={item} key={item.id} />
                        ))}
                    </>
            )}
        </main>
    );
};

export default ClientTemplate;
