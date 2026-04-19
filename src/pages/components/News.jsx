import React, { useMemo } from "react";

const News = () => {
  const toDate = (iso) => new Date(`${iso}T00:00:00`);

  const formatRange = (startISO, endISO) => {
    const pad = (n) => String(n).padStart(2, "0");
    const fmt = (iso) => {
      const d = toDate(iso);
      return `${pad(d.getMonth() + 1)}/${pad(d.getDate())}/${d.getFullYear()}`;
    };
    if (!endISO || startISO === endISO) return fmt(startISO);
    const s = toDate(startISO);
    const e = toDate(endISO);
    return `${pad(s.getMonth() + 1)}/${pad(s.getDate())}–${pad(e.getMonth() + 1)}/${pad(e.getDate())}/${e.getFullYear()}`;
  };

  const today = new Date();

  const items = [
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
    // Publications
    {
      type: "publication",
      start: "2026-02-02",
      end: "2026-02-02",
      text: 'Our paper goes online: "Attomolar and beyond: Ultra-sensitive electrochemical biosensors for next-generation detection."',
      href: "https://www.sciencedirect.com/science/article/pii/S016599362600083X",
    },
    {
      type: "publication",
      start: "2025-12-01",
      end: "2025-12-01",
      text: 'Our paper goes online: "Computational Insight into IFNAR1 Gene Dysfunction: Identification of Deleterious nsSNPs through In-Silico Mutational Analysis."',
      href: "https://www.sciencedirect.com/science/article/abs/pii/S3050475925010322",
    },
    // Past
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

  const { upcomingEvents, pastEvents, publications } = useMemo(() => {
    const isPast = (x) => toDate(x.end || x.start) < today;
    const pubs = items.filter((x) => x.type === "publication");
    const nonPubs = items.filter((x) => x.type !== "publication");
    const upcoming = nonPubs.filter((x) => !isPast(x));
    const past = nonPubs.filter((x) => isPast(x));
    return { upcomingEvents: upcoming, pastEvents: past, publications: pubs };
  }, []);

  const styles = {
    section: {
      fontFamily: "'Outfit', 'Segoe UI', sans-serif",
      minHeight: "100vh",
      background: "#fff",
      padding: "4rem 1.5rem 5rem",
      color: "#111",
    },
    inner: {
      maxWidth: "760px",
      margin: "0 auto",
    },
    pageTitle: {
      fontFamily: "'DM Serif Display', Georgia, serif",
      fontSize: "clamp(2rem, 5vw, 2.8rem)",
      fontWeight: 400,
      letterSpacing: "-0.5px",
      margin: "0 0 3rem",
      lineHeight: 1.1,
      color: "#111",
    },
    pageTitleEm: {
      fontStyle: "italic",
      color: "#999",
    },
    block: {
      marginBottom: "2.75rem",
    },
    sectionLabel: {
      fontFamily: "'DM Mono', 'Courier New', monospace",
      fontSize: "10px",
      fontWeight: 500,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#aaa",
      margin: "0 0 1rem",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    sectionLabelLine: {
      flex: 1,
      height: "0.5px",
      background: "#e5e5e5",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "108px 1fr",
      gap: "0 1.25rem",
      padding: "0.75rem 0",
      borderBottom: "0.5px solid #eee",
      alignItems: "start",
    },
    date: {
      fontFamily: "'DM Mono', 'Courier New', monospace",
      fontSize: "10px",
      color: "#bbb",
      lineHeight: 1.6,
      paddingTop: "2px",
      wordBreak: "break-word",
    },
    body: {
      fontSize: "13.5px",
      fontWeight: 300,
      lineHeight: 1.65,
      color: "#222",
    },
    link: {
      color: "#777",
      textDecoration: "none",
      borderBottom: "0.5px solid #ccc",
      fontWeight: 400,
    },
    badge: {
      display: "inline-block",
      fontFamily: "'DM Mono', monospace",
      fontSize: "9px",
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      padding: "2px 7px",
      borderRadius: "3px",
      marginRight: "6px",
      verticalAlign: "middle",
      position: "relative",
      top: "-1px",
    },
    badgeRecent: {
      background: "#e8f5e9",
      color: "#2e7d32",
    },
    badgePub: {
      background: "#e3f2fd",
      color: "#1565c0",
    },
  };

  const Item = ({ x, isRecent = false, isPub = false }) => (
    <div style={styles.row}>
      <div style={styles.date}>{formatRange(x.start, x.end)}</div>
      <div style={styles.body}>
        {isRecent && (
          <span style={{ ...styles.badge, ...styles.badgeRecent }}>recent</span>
        )}
        {isPub && (
          <span style={{ ...styles.badge, ...styles.badgePub }}>paper</span>
        )}
        {x.text}{" "}
        {x.href && (
          <a
            href={x.href}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            view →
          </a>
        )}
      </div>
    </div>
  );

  // Flag the most recent past event
  const sortedPast = [...pastEvents].sort(
    (a, b) => toDate(b.end || b.start) - toDate(a.end || a.start)
  );

  return (
    <section id="news" style={styles.section}>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <div style={styles.inner}>
        <h2 style={styles.pageTitle}>
          News <em style={styles.pageTitleEm}>&amp;</em> Updates
        </h2>

        {/* Upcoming */}
        <div style={styles.block}>
          <div style={styles.sectionLabel}>
            Upcoming events
            <span style={styles.sectionLabelLine} />
          </div>
          {upcomingEvents.map((x, i) => (
            <Item key={`up-${i}`} x={x} />
          ))}
        </div>

        {/* Publications */}
        <div style={styles.block}>
          <div style={styles.sectionLabel}>
            Journal publications
            <span style={styles.sectionLabelLine} />
          </div>
          {publications.map((x, i) => (
            <Item key={`pub-${i}`} x={x} isPub />
          ))}
        </div>

        {/* Past */}
        <div style={styles.block}>
          <div style={styles.sectionLabel}>
            Past conferences &amp; courses
            <span style={styles.sectionLabelLine} />
          </div>
          {sortedPast.map((x, i) => (
            <Item key={`past-${i}`} x={x} isRecent={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;