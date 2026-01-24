import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useMemo, useState } from "react";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const newsList = useMemo(
    () => [
      // NEW (3)
      {
        date: "01/25–01/30/2026",
        description:
          "Will be travelling for conference: Dagstuhl Seminar 26051 — User-Aligned Assessment of AI Systems (Schloss Dagstuhl, Germany).",
        link: "https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/26051",
      },

      // NEW (4)
      {
        date: "02/10/2026",
        description:
          "Will be attending the conference: AI for Science: Kickoff 2026 (University of California, Los Angeles; 8:00 AM–6:30 PM PST).",
        link: "https://www.ipam.ucla.edu/programs/special-events-and-conferences/ai-for-science-kickoff-2026/",
      },

      {
        date: "12/01/2025",
        description:
          "My paper entitled Computational insight into IFNAR1 gene dysfunction: Identification of deleterious nsSNPs through In-Silico mutational analysis, goes online.",
      },

      {
      date: "01/14/2026",
      description:
        "Attended the seminar: AI and Canada's Talent Advantage — a special on-campus discussion with the Minister of AI and Digital Innovation on artificial intelligence, digital innovation, and career pathways in Canada.",
    },
      {
        date: "12/08–12/10/2025",
        description:
          "Participated in 3 days UNIVERSITY NETWORK OF EXCELLENCE IN NUCLEAR ENGINEERING (UNENE) conference at Toronto, Pearson International Airport.",
      },
      
    ],
    []
  );

  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const paginatednews = newsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => setCurrentPage(page);
  const goPrev = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);
  const goNext = () =>
    currentPage < totalPages && setCurrentPage((prev) => prev + 1);

  return (
    <section
      id="news"
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            News
          </h2>

          {paginatednews.map((news, index) => (
            <ul
              key={index}
              className="list-disc pl-6 space-y-1 text-base sm:text-lg md:text-xl text-gray-800"
            >
              <li>
                <span className="font-semibold">[{news.date}] </span>
                {news.description}{" "}
                {news.link ? (
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline text-blue-500"
                  >
                    Read More
                  </a>
                ) : null}
              </li>
            </ul>
          ))}
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className={`cursor-pointer p-2.5 rounded-full transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-500 dark:text-white cursor-not-allowed disabled:cursor-not-allowed"
                : "bg-blue-500 dark:text-white hover:bg-blue-600 hover:scale-110 shadow-md"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-3">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === i + 1
                    ? "bg-blue-400 w-5 h-3"
                    : "bg-gray-500 w-3 h-3"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className={`cursor-pointer p-2.5 rounded-full transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-500 dark:text-white cursor-not-allowed disabled:cursor-not-allowed"
                : "bg-blue-500 dark:text-white hover:bg-blue-600 hover:scale-110 shadow-md"
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default News;
