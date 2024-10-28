"use client";
import React, { useEffect, useState } from "react";
import { ICompany, IVacants, IResponse } from "@/models/organisms/Cards";
import { Card } from "../organisms/Cards/Cards";
import Pagination from "../molecules/Pagination/Pagination";

const ClientTemplate: React.FC<{ children: React.ReactNode; view: string }> = ({
  children,
  view,
}) => {
  const [cardData, setCardData] = useState<Array<ICompany | IVacants>>([]);
    const [loading, setLoading] = useState(true);
  
    const fetchCardData = async () => {
      try {
        const url = view === "vacants"
          ? "https://vacantsbackendgates-production.up.railway.app/api/v1/vacants"
          : "https://vacantsbackendgates-production.up.railway.app/api/v1/company";
  
        const response = await fetch(url, {
          method: 'GET',
          headers: { 'accept': '*/*' },
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const responseData: IResponse = await response.json();
        setCardData(responseData.content);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchCardData();
    }, [view]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 4;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(view, cardData);

  return (
    <main className="template">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <div className="cards-list">
            {cardData.map((item) => (
              <Card isView={view} $data={item} key={item.id} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </>
      )}
    </main>
  );
};

export default ClientTemplate;