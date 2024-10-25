"use client";
import React, { useEffect, useState } from "react";
import { ICompany, IVacancies } from "@/models/organisms/Cards";
import { Card } from "../organisms/Cards/Cards";
import Pagination from "../molecules/Pagination/Pagination";

const ClientTemplate: React.FC<{ children: React.ReactNode; view: string }> = ({
  children,
  view,
}) => {
  const [cardData, setCardData] = useState<Array<ICompany | IVacancies>>([]);
  const [loading, setLoading] = useState(true);

  const fetchCardData = async () => {
    try {
      const response = await fetch(
        view === "vacancies"
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
              <Card $data={item} key={item.id} />
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