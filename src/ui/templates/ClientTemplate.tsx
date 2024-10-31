"use client";
import React, { useEffect, useState } from "react";
import { ICompanyResponse, IVacantResponse } from "@/models/organisms/Cards";
import { Card } from "../organisms/Cards/Cards";
import Pagination from "../molecules/Pagination/Pagination";

const ClientTemplate: React.FC<{ children: React.ReactNode; view: string }> = ({
  children,
  view,
}) => {
  const [cardData, setCardData] = useState < Array < ICompany | IVacants >> ([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState < number > (1);
  const [totalPages, setTotalPages] = useState < number > (1);

  const fetchCardData = async (page: string) => {
    try {
      const url =
        view === "vacants"
          ? `https://vacantsbackendgates-production.up.railway.app/api/v1/vacants?page=${page}&size=6`
          : `https://vacantsbackendgates-production.up.railway.app/api/v1/company?page=${page}&size=6`;

      const response = await fetch(url, {
        method: "GET",
        headers: { 'Accept': "*/*" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData: ICompanyResponse | IVacantResponse = await response.json();
      setCardData(responseData.content);

      console.log(responseData)

      const pages = responseData.totalPages;
      setTotalPages(pages)
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCardData(currentPage.toString());
  }, [view, currentPage]);

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

return (
  <main className="template">
    {loading ? (
      <p>Cargando...</p>
    ) : (
      <>
        {<div className="cards-list">
          {cardData.map((item) => (
            <Card isView={view} $data={item} key={item.id} />
          ))}
        </div> || children}
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

