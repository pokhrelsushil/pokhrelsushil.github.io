import React, { useMemo } from "react";

const News = () => {
  const toDate = (iso) => new Date(`${iso}T00:00:00`);

  const formatRange = (startISO, endISO) => {
    const fmt = (dISO) => {
      const d = toDate(dISO);
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const yyyy = d.getFullYear();
      return `${mm}/${dd}/${yyyy}`;
    };

    if (!endISO || endISO === startISO) return `[${fmt(startISO)}]`;

    const s = toDate(startISO);
    const e = toDate(endISO);

    const smm = String(s.getMonth() + 1).padStart(2, "0");
    const sdd = String(s.getDate()).padStart(2, "0");
    const emm = String(e.getMonth() + 1).padStart(2, "0");
    const edd = String(e.getDate()).padStart(2, "0");
    const yyyy = e.getFullYear();

    return `[${smm}/${sdd}–${emm}/${edd}/${yyyy}]`;
  };

  const today = new Date();

  const items = [
    // ---- Upcoming Events ----
    {
      type: "event",
      start: "2026-09-27",
      end: "2026-10-01",
      title:
        "IEEE/RSJ International Conference on Intelligent Robots & Systems (IROS 2026), Pittsburgh, PA, USA.",
      href: "https://www.iros2026.org/",
    },
    {
      type: "event",
      start: "2026-02-16",
      end: "2026-02-20",
      title:
        "India AI Impact Summit 2026, Bharat Mandapam, New Delhi, India.",
      href: "https://impact.indiaai.gov.in/",
    },

    // ---- Publications ----
    {
      type: "publication",
      start: "2026-02-02",
      end: "2026-02-02",
      title:
        'Attomolar and beyond: Ultra-sensitive electrochemical biosensors for next-generation detection.',
      href:
        "https://www.sciencedirect.com/science/article/pii/S016599362600083X",
    },
    {
      type: "publication",
      start: "2025-12-01",
      end: "2025-12-01",
      title:
        "Computational Insight into IFNAR1 Gene Dysfunction: Identification of Deleterious nsSNPs through In-Silico Mutational Analysis.",
      href:
        "https://www.sciencedirect.com/science/article/abs/pii/S3050475925010322",
    },

    // ---- Past Events ----
    {
      type: "event",
      start: "2025-12-08",
      end: "2025-12-10",
      title:
        "University Network of Excellence in Nuclear Engineering (UNENE) Conference, Toronto, Canada.",
    },
  ];

  const { upcomingEvents, pastEvents, publications } = useMemo(() => {
    const pubs = items.filter((x) => x.type === "publication");

    const events = items.filter((x) => x.type === "event");

    const upcoming = events
      .filter((x) => toDate(x.end || x.start) >= today)
      .sort((a, b) => toDate(b.start) - toDate(a.start));

    const past = events
      .filter((x) => toDate(x.end || x.start) < today)
      .sort((a, b) => toDate(b.start) - toDate(a.start));

    const pubsSorted = pubs.sort(
      (a, b) => toDate(b.start) - toDate(a.start)
    );

    return { upcomingEvents: upcoming, pastEvents: past, publications: pubsSorted };
  }, [items]);

  const Item = ({ x }) => (
    <li className="leading-snug text-gray-800">
      <span className="font-semibold text-gray-900">
        {formatRange(x.start, x.end)}
      </span>{" "}
      {x.title}
      {x.href && (
        <>
          {" "}
          <a
            href={x.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 underline font-medium"
          >
            View
          </a>
        </>
      )}
    </li>
  );

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">

        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">
          News & Academic Updates
        </h2>

        {/* Upcoming */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
            Upcoming (Latest First)
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            {upcomingEvents.map((x, i) => (
              <Item key={`u-${i}`} x={x} />
            ))}
          </ul>
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
            Journal Publications (Latest First)
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            {publications.map((x, i) => (
              <Item key={`p-${i}`} x={x} />
            ))}
          </ul>
        </div>

        {/* Past */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
            Participated / Past (Latest First)
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            {pastEvents.map((x, i) => (
              <Item key={`h-${i}`} x={x} />
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default News;