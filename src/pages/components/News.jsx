import React, { useMemo } from "react";

const News = () => {
  const toDate = (iso) => new Date(`${iso}T00:00:00`);

  const formatRange = (startISO, endISO) => {
    const fmt = (iso) => {
      const d = toDate(iso);
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const dd = String(d.getDate()).padStart(2, "0");
      const yyyy = d.getFullYear();
      return `${mm}/${dd}/${yyyy}`;
    };

    if (endISO === "present") return `[${fmt(startISO)}–Present]`;
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

  const items = [
    // Personal
    {
      type: "personal",
      start: "2026-11-02",
      end: "2026-11-11",
      text: "Travelling to Taiwan for a conference, returning to Aggieland on 11/12/2026.",
    },
    {
      type: "personal",
      start: "2026-10-18",
      end: "2026-10-18",
      text: "Tied the knot with Subha, my long-time partner, best friend, and the love of my life. After years of growing together, we said \"forever\" and began the most beautiful chapter of our story. ❤️",
    },
    {
      type: "personal",
      start: "2026-08-21",
      end: "present",
      text: "Roaming around Aggieland in College Station, Texas.",
    },
    // Upcoming
    {
      type: "event",
      start: "2026-09-27",
      end: "2026-10-01",
      text: "Will be attending the IEEE/RSJ International Conference on Intelligent Robots & Systems (IROS 2026), Pittsburgh, PA, USA.",
      href: "https://2026.ieee-iros.org/program/program-overview/",
    },
    {
      type: "event",
      start: "2026-07-06",
      end: "2026-07-10",
      text: "Will be taking part in The European Summer School on Artificial Intelligence (ESSAI 2026), Vienna, Austria.",
      href: "https://essai2026.eu/",
    },
    {
      type: "event",
      start: "2026-07-01",
      end: "2026-07-04",
      text: "Will be attending the 18th International Conference on Social Robotics (ICSR 2026), University of London, UK.",
      href: "https://icsr2026.uk/",
    },
    {
      type: "event",
      start: "2026-06-03",
      end: "2026-06-12",
      text: "Will be attending the ELLIS Unit Milan: Reinforcement Learning Summer School (RLSS 2026), Milan, Italy.",
      href: "https://ellis.eu/events/ellis-unit-milan-reinforcement-learning-summer-school-2026",
    },
    // Past — CANDU added
    {
      type: "event",
      start: "2026-04-14",
      end: "2026-04-17",
      text: "Completed the CANDU Reactor Design Short Course (UNENE), delivered live online — covering reactor core & fuel design, safety systems, and thermal-hydraulics.",
      href: "https://unene.ca/education/short-courses/candu-design-short-course/",
    },
    {
      type: "event",
      start: "2026-02-16",
      end: "2026-02-20",
      text: "Attended the India AI Impact Summit 2026, Bharat Mandapam (Pragati Maidan), New Delhi, India.",
      href: "https://impact.indiaai.gov.in/",
    },
    {
      type: "event",
      start: "2026-02-10",
      end: "2026-02-10",
      text: "Attended the conference: AI for Science: Kickoff 2026, University of California, Los Angeles (8:00 AM–6:30 PM PST).",
      href: "https://www.ipam.ucla.edu/programs/special-events-and-conferences/ai-for-science-kickoff-2026/",
    },
    {
      type: "event",
      start: "2026-01-25",
      end: "2026-01-30",
      text: "Travelled to attend Dagstuhl Seminar 26051 — User-Aligned Assessment of AI Systems, Schloss Dagstuhl, Germany.",
      href: "https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/26051",
    },
    {
      type: "seminar",
      start: "2026-01-14",
      end: "2026-01-14",
      text: "Attended the seminar: AI and Canada's Talent Advantage — a special on-campus discussion with the Minister of AI and Digital Innovation.",
    },
    {
      type: "event",
      start: "2025-12-08",
      end: "2025-12-10",
      text: "Participated in the University Network of Excellence in Nuclear Engineering (UNENE) Conference, Toronto, Canada.",
    },
  ];

  const { personalUpdates, pastEvents } = useMemo(() => {
    const isPast = (x) => toDate(x.end || x.start) < today;
    const personal = items
      .filter((x) => x.type === "personal")
      .sort((a, b) => toDate(b.start) - toDate(a.start));
    const past = items
      .filter((x) => x.type !== "personal")
      .filter((x) => isPast(x))
      .sort((a, b) => toDate(b.end || b.start) - toDate(a.end || a.start));
    return { personalUpdates: personal, pastEvents: past };
  }, []);

  const Item = ({ x, isRecent = false, isUpcoming = false }) => (
    <li className="leading-snug text-gray-900">
      {isRecent && (
        <span className="inline-block text-xs font-bold uppercase tracking-wide bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2 align-middle">
          Recent
        </span>
      )}
      {isUpcoming && (
        <span className="inline-block text-xs font-bold uppercase tracking-wide bg-blue-100 text-blue-800 px-2 py-0.5 rounded mr-2 align-middle">
          Upcoming
        </span>
      )}
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

        {personalUpdates.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-semibold text-gray-950">Personal</h3>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-900">
              {personalUpdates.map((x, i) => (
                <Item
                  key={`personal-${i}`}
                  x={x}
                  isRecent={toDate(x.start) <= today}
                  isUpcoming={toDate(x.start) > today}
                />
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-gray-950">Participated / Past conferences</h3>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-gray-900">
            {pastEvents.map((x, i) => (
              <Item key={`past-${i}`} x={x} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default News;