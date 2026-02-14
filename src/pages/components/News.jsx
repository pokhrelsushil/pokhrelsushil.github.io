import React, { useMemo } from "react";

const News = () => {
  // ---- Helpers ----
  const toDate = (iso) => new Date(`${iso}T00:00:00`);
  const formatRange = (startISO, endISO) => {
    // Keep your original style: [MM/DD–MM/DD/YYYY] or [MM/DD/YYYY]
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
    const yyyy = e.getFullYear(); // assume same year for display
    return `[${smm}/${sdd}–${emm}/${edd}/${yyyy}]`;
  };

  // IMPORTANT: Set "today" explicitly (Toronto local date) so the split stays stable.
  // Update if you prefer runtime current date:
  const TODAY_ISO = "2026-02-14";

  // ---- Data (edit freely) ----
  const items = [
    // Upcoming / events
    {
      type: "event",
      status: "upcoming",
      start: "2026-09-27",
      end: "2026-10-01",
      title:
        "Will be attending the IEEE/RSJ International Conference on Intelligent Robots & Systems (IROS 2026), Pittsburgh, PA, USA.",
      href: "https://www.iros2026.org/",
    },
    {
      type: "event",
      status: "upcoming",
      start: "2026-07-06",
      end: "2026-07-10",
      title:
        "Will be taking part in The European Summer School on Artificial Intelligence (ESSAI 2026), Vienna, Austria.",
      href: "https://essai2026.eu/",
    },
    {
      type: "event",
      status: "upcoming",
      start: "2026-07-01",
      end: "2026-07-04",
      title:
        "Will be attending the 18th International Conference on Social Robotics (ICSR 2026), University of London, UK.",
      href: "https://icsr2026.uk/",
    },

    // Added: India AI Impact Summit 2026 (official site indicates Feb 16–20, 2026; venue: Bharat Mandapam, New Delhi)
    {
      type: "event",
      status: "upcoming",
      start: "2026-02-16",
      end: "2026-02-20",
      title:
        "Will be attending the India AI Impact Summit 2026, Bharat Mandapam (Pragati Maidan), New Delhi, India.",
      href: "https://impact.indiaai.gov.in/",
    },

    // Past / participated
    {
      type: "event",
      status: "past",
      start: "2026-02-10",
      end: "2026-02-10",
      title:
        "Attended the conference: AI for Science: Kickoff 2026, University of California, Los Angeles (8:00 AM–6:30 PM PST).",
      href: "https://www.ipam.ucla.edu/programs/special-events-and-conferences/ai-for-science-kickoff-2026/",
    },
    {
      type: "event",
      status: "past",
      start: "2026-01-25",
      end: "2026-01-30",
      title:
        "Travelled to attend Dagstuhl Seminar 26051 — User-Aligned Assessment of AI Systems, Schloss Dagstuhl, Germany.",
      href: "https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/26051",
    },
    {
      type: "seminar",
      status: "past",
      start: "2026-01-14",
      end: "2026-01-14",
      title:
        "Attended the seminar: AI and Canada’s Talent Advantage — a special on-campus discussion with the Minister of AI and Digital Innovation.",
    },
    {
      type: "event",
      status: "past",
      start: "2025-12-08",
      end: "2025-12-10",
      title:
        "Participated in the University Network of Excellence in Nuclear Engineering (UNENE) Conference, Toronto, Canada.",
    },

    // Publications (keep as separate section)
    {
      type: "publication",
      status: "past",
      start: "2026-02-02",
      end: "2026-02-02",
      title:
        'Our paper goes online: "Attomolar and beyond: Ultra-sensitive electrochemical biosensors for next-generation detection."',
      href: "https://www.sciencedirect.com/science/article/pii/S016599362600083X",
    },
    {
      type: "publication",
      status: "past",
      start: "2025-12-01",
      end: "2025-12-01",
      title:
        'Our paper goes online: "Computational Insight into IFNAR1 Gene Dysfunction: Identification of Deleterious nsSNPs through In-Silico Mutational Analysis."',
      // Add your DOI/journal link here if available:
      // href: "https://doi.org/....",
    },
  ];

  // ---- Auto-classify (optional) ----
  // If you prefer not to manually set status, you can remove status fields above and classify by date here.
  const { upcomingEvents, pastParticipated, publications } = useMemo(() => {
    const today = toDate(TODAY_ISO);

    const pubs = items.filter((x) => x.type === "publication");
    const nonPubs = items.filter((x) => x.type !== "publication");

    // Use end date if present; otherwise start date
    const isPast = (x) => toDate(x.end || x.start) < today;

    const upcoming = nonPubs
      .filter((x) => !isPast(x))
      .sort((a, b) => toDate(b.start) - toDate(a.start)); // latest first

    const past = nonPubs
      .filter((x) => isPast(x))
      .sort((a, b) => toDate(b.start) - toDate(a.start)); // latest first

    const pubsSorted = pubs.sort((a, b) => toDate(b.start) - toDate(a.start)); // latest first

    return { upcomingEvents: upcoming, pastParticipated: past, publications: pubsSorted };
  }, [items]);

  const Item = ({ x }) => (
    <li className="leading-snug">
      <span className="font-semibold">{formatRange(x.start, x.end)}</span>{" "}
      <span className="text-gray-900">{x.title}</span>
      {x.href ? (
        <>
          {" "}
          <a
            href={x.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline text-blue-600"
          >
            Read More
          </a>
        </>
      ) : null}
    </li>
  );

  return (
    <section id="news" className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
          News
        </h2>

        {/* Upcoming */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-black">
            Upcoming (latest first)
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-800">
            {upcomingEvents.map((x, idx) => (
              <Item key={`u-${idx}`} x={x} />
            ))}
          </ul>
        </div>

        {/* Publications */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-black">
            Journal Publications (latest first)
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-800">
            {publications.map((x, idx) => (
              <Item key={`p-${idx}`} x={x} />
            ))}
          </ul>
        </div>

        {/* Participated / Past conferences*/}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-black">
            Participated / Past (latest first)
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-800">
            {pastParticipated.map((x, idx) => (
              <Item key={`h-${idx}`} x={x} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;
