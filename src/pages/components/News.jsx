import React, { useMemo } from "react";

const News = () => {
  // ---------- Date helpers ----------
  const toDate = (iso) => new Date(`${iso}T00:00:00`);

  // Original bracket style: [MM/DD–MM/DD/YYYY] OR [MM/DD/YYYY]
  const formatRange = (startISO, endISO) => {
    const fmt = (iso) => {
      const d = toDate(iso);
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const yyyy = d.getFullYear();
      return `${mm}/${dd}/${yyyy}`;
    };

    if (!endISO || startISO === endISO) return `[${fmt(startISO)}]`;

    const s = toDate(startISO);
    const e = toDate(endISO);

    const sm = String(s.getMonth() + 1).padStart(2, "0");
    const sd = String(s.getDate()).padStart(2, "0");
    const em = String(e.getMonth() + 1).padStart(2, "0");
    const ed = String(e.getDate()).padStart(2, "0");
    const ey = e.getFullYear();

    return `[${sm}/${sd}–${em}/${ed}/${ey}]`;
  };

  const today = new Date();

  // ---------- Content ----------
  const items = [
    // Upcoming : 
    {
      type: "event",
      start: "2026-09-27",
      end: "2026-10-01",
      text:
        "Will be attending the IEEE/RSJ International Conference on Intelligent Robots & Systems (IROS 2026), Pittsburgh, PA, USA.",
      href: "https://2026.ieee-iros.org/program/program-overview/",
    },
    {
      type: "event",
      start: "2026-07-06",
      end: "2026-07-10",
      text:
        "Will be taking part in The European Summer School on Artificial Intelligence (ESSAI 2026), Vienna, Austria.",
      href: "https://essai2026.eu/",
    },
    {
      type: "event",
      start: "2026-07-01",
      end: "2026-07-04",
      text:
        "Will be attending the 18th International Conference on Social Robotics (ICSR 2026), University of London, UK.",
      href: "https://icsr2026.uk/",
    },
    {
      type: "event",
      start: "2026-02-16",
      end: "2026-02-20",
      text:
        "Attended the India AI Impact Summit 2026, Bharat Mandapam (Pragati Maidan), New Delhi, India.",
      href: "https://impact.indiaai.gov.in/",
    },

    // Publications
    {
      type: "publication",
      start: "2026-02-02",
      end: "2026-02-02",
      text:
        'Our paper goes online: "Attomolar and beyond: Ultra-sensitive electrochemical biosensors for next-generation detection."',
      href: "https://www.sciencedirect.com/science/article/pii/S016599362600083X",
    },
    {
      type: "publication",
      start: "2025-12-01",
      end: "2025-12-01",
      text:
        'Our paper goes online: "Computational Insight into IFNAR1 Gene Dysfunction: Identification of Deleterious nsSNPs through In-Silico Mutational Analysis."',
      href: "https://www.sciencedirect.com/science/article/abs/pii/S3050475925010322",
    },

    // Past
    {
      type: "event",
      start: "2026-02-10",
      end: "2026-02-10",
      text:
        "Attended the conference: AI for Science: Kickoff 2026, University of California, Los Angeles (8:00 AM–6:30 PM PST).",
      href: "https://www.ipam.ucla.edu/programs/special-events-and-conferences/ai-for-science-kickoff-2026/",
    },
    {
      type: "event",
      start: "2026-01-25",
      end: "2026-01-30",
      text:
        "Travelled to attend Dagstuhl Seminar 26051 — User-Aligned Assessment of AI Systems, Schloss Dagstuhl, Germany.",
      href: "https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/26051",
    },
    {
      type: "seminar",
      start: "2026-01-14",
      end: "2026-01-14",
      text:
        "Attended the seminar: AI and Canada’s Talent Advantage — a special on-campus discussion with the Minister of AI and Digital Innovation.",
    },
    {
      type: "event",
      start: "2025-12-08",
      end: "2025-12-10",
      text:
        "Participated in the University Network of Excellence in Nuclear Engineering (UNENE) Conference, Toronto, Canada.",
    },
  ];

  // ---------- Split ----------
  const { upcomingEvents, pastEvents, publications } = useMemo(() => {
    const isPast = (x) => toDate(x.end || x.start) < today;

    const pubs = items.filter((x) => x.type === "publication");
    const nonPubs = items.filter((x) => x.type !== "publication");

    const upcoming = nonPubs.filter((x) => !isPast(x));
    const past = nonPubs.filter((x) => isPast(x));

    return { upcomingEvents: upcoming, pastEvents: past, publications: pubs };
  }, [items]);

  // ---------- UI ----------
  const Item = ({ x }) => (
    <li className="leading-snug text-gray-900">
      <span className="font-semibold text-gray-950">
        {formatRange(x.start, x.end)}
      </span>{" "}
      {x.text}{" "}
      {x.href && (
        <a
          href={x.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline text-gray-950 hover:text-black"
        >
          Read More
        </a>
      )}
    </li>
  );

  return (
    <section id="news" className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-950">News</h2>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-gray-950">Upcoming</h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-900">
            {upcomingEvents.map((x, i) => <Item key={`up-${i}`} x={x} />)}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-gray-950">Journal Publications</h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-900">
            {publications.map((x, i) => <Item key={`pub-${i}`} x={x} />)}
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-gray-950">Participated / Past conferences</h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-900">
            {pastEvents.map((x, i) => <Item key={`past-${i}`} x={x} />)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;