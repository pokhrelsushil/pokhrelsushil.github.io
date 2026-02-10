import React from "react";

const News = () => {
  return (
    <section
      id="news"
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          News
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-800 leading-relaxed">
          
          <li>
            <span className="font-semibold">
              [07/01–07/04/2026]
            </span>{" "}
            Will be attending the 18th International Conference on Social Robotics
            (ICSR 2026), University of London, UK, focusing on advances in human–robot
            interaction and socially intelligent robotic systems.{" "}
            <a
              href="https://icsr2026.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline text-blue-500"
            >
              Read More
            </a>
          </li>

          <li>
            <span className="font-semibold">
              [09/27–10/01/2026]
            </span>{" "}
            Will be attending the IEEE/RSJ International Conference on Intelligent
            Robots & Systems (IROS 2026), Pittsburgh, PA, USA.{" "}
            <a
              href="https://www.iros2026.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline text-blue-500"
            >
              Read More
            </a>
          </li>

          <li>
            <span className="font-semibold">
              [07/06–07/10/2026]
            </span>{" "}
            Will be attending The European Summer School on Artificial Intelligence
            (ESSAI 2026), Vienna, Austria.{" "}
            <a
              href="https://essai2026.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline text-blue-500"
            >
              Read More
            </a>
          </li>

          <li>
            <span className="font-semibold">
              [02/10/2026]
            </span>{" "}
            Will be attending the conference: AI for Science: Kickoff 2026,
            University of California, Los Angeles (8:00 AM–6:30 PM PST).{" "}
            <a
              href="https://www.ipam.ucla.edu/programs/special-events-and-conferences/ai-for-science-kickoff-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline text-blue-500"
            >
              Read More
            </a>
          </li>

          <li>
            <span className="font-semibold">
              [01/25–01/30/2026]
            </span>{" "}
            Will be travelling to attend Dagstuhl Seminar 26051 — User-Aligned
            Assessment of AI Systems, Schloss Dagstuhl, Germany.{" "}
            <a
              href="https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/26051"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline text-blue-500"
            >
              Read More
            </a>
          </li>

          <li>
            <span className="font-semibold">
              [01/14/2026]
            </span>{" "}
            Attended the seminar: AI and Canada’s Talent Advantage — a special
            on-campus discussion with the Minister of AI and Digital Innovation.
          </li>

          <li>
            <span className="font-semibold">
              [12/01/2025]
            </span>{" "}
            Paper entitled <em>Computational Insight into IFNAR1 Gene Dysfunction:
            Identification of Deleterious nsSNPs through In-Silico Mutational
            Analysis</em> published online.
          </li>

          <li>
            <span className="font-semibold">
              [12/08–12/10/2025]
            </span>{" "}
            Participated in the University Network of Excellence in Nuclear
            Engineering (UNENE) Conference, Toronto, Canada.
          </li>

        </ul>
      </div>
    </section>
  );
};

export default News;
