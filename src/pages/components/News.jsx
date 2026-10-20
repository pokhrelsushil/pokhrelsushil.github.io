import React, { useEffect, useState } from "react";
import {
  CalendarDays,
  ExternalLink,
  Heart,
  House,
  MapPin,
  Plane,
  Presentation,
} from "lucide-react";

// Dates are ISO strings (YYYY-MM-DD). Use end: "present" for ongoing items.
// Trips with a pastText move into Past Conferences automatically once they end.
const travel = [
  {
    start: "2026-11-02",
    end: "2026-11-11",
    place: "Taiwan",
    text: "Travelling to Taiwan for a conference.",
    pastText: "Attended a conference in Taiwan.",
    returnDate: "2026-11-12",
    returnTo: "Aggieland",
  },
];

const personal = [
  {
    start: "2026-10-18",
    end: "2026-10-18",
    icon: Heart,
    accent: "rose",
    badge: "Life Event",
    text: "Married my long-time partner, Subha, beginning a lifelong partnership built on years of shared growth. Deeply grateful for Subha's unwavering support and companionship through every chapter of this journey.",
  },
  {
    start: "2026-08-21",
    end: "present",
    icon: MapPin,
    accent: "blue",
    text: "Roaming around Aggieland in College Station, Texas.",
  },
];

const conferences = [
  // Entries with `event` + `place` get tense-aware text: Will be attending → Attending → Attended.
  {
    start: "2026-12-14",
    end: "2026-12-17",
    event: "the IEEE International Conference on Big Data (IEEE BigData 2026)",
    place: "Sheraton Phoenix Downtown, Phoenix, AZ, USA",
    href: "https://bigdataieee.org/BigData2026/",
  },
  {
    start: "2026-12-09",
    end: "2026-12-10",
    event: "The AI Summit New York 2026",
    place: "Javits Center, New York City, NY, USA",
    href: "https://newyork.theaisummit.com",
  },
  {
    start: "2026-12-09",
    end: "2026-12-13",
    event: "the Conference on Neural Information Processing Systems (NeurIPS 2026), US Satellite Hub",
    place: "Atlanta, GA, USA",
    href: "https://neurips.cc",
  },
  {
    start: "2026-11-30",
    end: "2026-12-04",
    event: "AWS re:Invent 2026",
    place: "The Venetian, Las Vegas, NV, USA",
    href: "https://aws.amazon.com/events/reinvent/pricing/",
  },
  {
    start: "2026-11-30",
    end: "2026-12-03",
    event: "NVIDIA GTC Washington, D.C. 2026",
    place: "Walter E. Washington Convention Center, Washington, D.C., USA",
    href: "https://www.nvidia.com/gtc/dc/conference-schedule/",
  },
  {
    start: "2026-11-17",
    end: "2026-11-18",
    event: "MLOps World / GenAI Summit 2026",
    place: "Etter-Harbin Alumni Center, Austin, TX, USA",
    href: "https://mlopsworld.com/",
  },
  {
    start: "2026-11-09",
    end: "2026-11-12",
    event: "the Conference on Robot Learning (CoRL 2026)",
    place: "JW Marriott Austin, Austin, TX, USA",
    href: "https://www.corl.org",
  },
  {
    start: "2026-10-27",
    end: "2026-10-29",
    event: "ODSC AI West 2026",
    place: "Hyatt Regency San Francisco Airport, Burlingame, CA, USA",
    href: "https://odsc.ai/west/",
  },
  {
    start: "2026-10-22",
    end: "2026-10-23",
    event: "AGNTCon + MCPCon North America 2026",
    place: "San Jose Convention Center, San Jose, CA, USA",
    href: "https://events.linuxfoundation.org/agntcon-mcpcon-north-america/",
  },
  {
    start: "2026-10-20",
    end: "2026-10-21",
    event: "the PyTorch Conference 2026",
    place: "San Jose Convention Center, San Jose, CA, USA",
    href: "https://pytorch.org/blog/pytorch-conference-north-america-announces-2026-keynotes/",
  },
  {
    start: "2026-09-27",
    end: "2026-10-01",
    text: "Attended the IEEE/RSJ International Conference on Intelligent Robots & Systems (IROS 2026), Pittsburgh, PA, USA.",
    href: "https://2026.ieee-iros.org/program/program-overview/",
  },
  {
    start: "2026-07-06",
    end: "2026-07-10",
    text: "Took part in the European Summer School on Artificial Intelligence (ESSAI 2026), Vienna, Austria.",
    href: "https://essai2026.eu/",
  },
  {
    start: "2026-07-01",
    end: "2026-07-04",
    text: "Attended the 18th International Conference on Social Robotics (ICSR 2026), University of London, UK.",
    href: "https://icsr2026.uk/",
  },
  {
    start: "2026-06-03",
    end: "2026-06-12",
    text: "Attended the ELLIS Unit Milan: Reinforcement Learning Summer School (RLSS 2026), Milan, Italy.",
    href: "https://ellis.eu/events/ellis-unit-milan-reinforcement-learning-summer-school-2026",
  },
  {
    start: "2026-04-14",
    end: "2026-04-17",
    text: "Completed the CANDU Reactor Design Short Course (UNENE), delivered live online — covering reactor core & fuel design, safety systems, and thermal-hydraulics.",
    href: "https://unene.ca/education/short-courses/candu-design-short-course/",
  },
  {
    start: "2026-02-16",
    end: "2026-02-20",
    text: "Attended the India AI Impact Summit 2026, Bharat Mandapam (Pragati Maidan), New Delhi, India.",
    href: "https://impact.indiaai.gov.in/",
  },
  {
    start: "2026-02-10",
    end: "2026-02-10",
    text: "Attended the conference: AI for Science: Kickoff 2026, University of California, Los Angeles (8:00 AM–6:30 PM PST).",
    href: "https://www.ipam.ucla.edu/programs/special-events-and-conferences/ai-for-science-kickoff-2026/",
  },
  {
    start: "2026-01-25",
    end: "2026-01-30",
    text: "Travelled to attend Dagstuhl Seminar 26051 — User-Aligned Assessment of AI Systems, Schloss Dagstuhl, Germany.",
    href: "https://www.dagstuhl.de/en/seminars/seminar-calendar/seminar-details/26051",
  },
  {
    start: "2026-01-14",
    end: "2026-01-14",
    text: "Attended the seminar: AI and Canada's Talent Advantage — a special on-campus discussion with the Minister of AI and Digital Innovation.",
  },
  {
    start: "2025-12-08",
    end: "2025-12-10",
    text: "Participated in the University Network of Excellence in Nuclear Engineering (UNENE) Conference, Toronto, Canada.",
  },
];

const RECENT_DAYS = 90;
const DAY_MS = 24 * 60 * 60 * 1000;

const toDate = (iso) => new Date(`${iso}T00:00:00`);
const startOfToday = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

const fmt = (d, opts) => d.toLocaleDateString("en-US", opts);

// "Oct 18, 2026" · "Nov 2 – 11, 2026" · "Sep 27 – Oct 1, 2026" · "Aug 21, 2026 – Present"
const formatRange = (startISO, endISO) => {
  const s = toDate(startISO);
  const full = { month: "short", day: "numeric", year: "numeric" };
  if (endISO === "present") return `${fmt(s, full)} – Present`;
  if (!endISO || startISO === endISO) return fmt(s, full);

  const e = toDate(endISO);
  if (s.getFullYear() !== e.getFullYear()) return `${fmt(s, full)} – ${fmt(e, full)}`;
  if (s.getMonth() !== e.getMonth())
    return `${fmt(s, { month: "short", day: "numeric" })} – ${fmt(e, full)}`;
  return `${fmt(s, { month: "short", day: "numeric" })} – ${e.getDate()}, ${e.getFullYear()}`;
};

// upcoming | ongoing | past, plus how many days away / ago
const getStatus = (x, today) => {
  const s = toDate(x.start);
  if (s > today) return { state: "upcoming", days: Math.round((s - today) / DAY_MS) };
  if (x.end === "present" || toDate(x.end || x.start) >= today) return { state: "ongoing" };
  return { state: "past", days: Math.round((today - toDate(x.end || x.start)) / DAY_MS) };
};

const byStartDesc = (a, b) => toDate(b.start) - toDate(a.start);
const byStartAsc = (a, b) => toDate(a.start) - toDate(b.start);

const conferenceText = (x, state) => {
  if (!x.event) return x.text;
  const verb = { upcoming: "Will be attending", ongoing: "Attending", past: "Attended" }[state];
  return `${verb} ${x.event}, ${x.place}.`;
};

const Badge = ({ tone, children }) => {
  const tones = {
    blue: "bg-blue-100 text-blue-800",
    amber: "bg-amber-100 text-amber-800",
    green: "bg-green-100 text-green-800",
    gray: "bg-gray-100 text-gray-700",
    rose: "bg-rose-100 text-rose-700",
  };
  return (
    <span
      className={`inline-flex items-center text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${tones[tone]}`}
    >
      {children}
    </span>
  );
};

const DateLine = ({ start, end }) => (
  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-600">
    <CalendarDays aria-hidden="true" className="w-4 h-4" />
    {formatRange(start, end)}
  </span>
);

const ReadMore = ({ href }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800"
    >
      Read more <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />
    </a>
  ) : null;

const SectionCard = ({ icon, iconClass, title, subtitle, children, className = "" }) => {
  const Icon = icon;
  return (
  <div className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-500 ${className}`}>
    <div className="flex items-center gap-4 mb-6">
      <div className={`p-3 rounded-2xl flex-shrink-0 ${iconClass}`}>
        <Icon aria-hidden="true" className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-950">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
    {children}
  </div>
  );
};

// Re-renders at local midnight so countdowns stay correct on a page left open.
const useToday = () => {
  const [today, setToday] = useState(startOfToday);
  useEffect(() => {
    const next = new Date(today);
    next.setDate(next.getDate() + 1);
    const timer = setTimeout(() => setToday(startOfToday()), next - new Date() + 1000);
    return () => clearTimeout(timer);
  }, [today]);
  return today;
};

const News = () => {
  const today = useToday();
  const isPast = (x) => getStatus(x, today).state === "past";

  const travelItems = travel.filter((x) => !isPast(x)).sort(byStartDesc);
  const personalItems = [...personal].sort(byStartDesc);
  const withText = (x) => ({ ...x, text: conferenceText(x, getStatus(x, today).state) });
  const upcomingConferences = conferences
    .filter((x) => !isPast(x))
    .map(withText)
    .sort(byStartAsc);
  const pastConferences = [
    ...conferences.map(withText),
    ...travel.filter((x) => x.pastText).map((x) => ({ ...x, text: x.pastText })),
  ]
    .filter(isPast)
    .sort(byStartDesc);

  const travelBadge = (x) => {
    const { state, days } = getStatus(x, today);
    if (state === "upcoming")
      return <Badge tone="blue">Upcoming · {days === 1 ? "tomorrow" : `in ${days} days`}</Badge>;
    if (state === "ongoing") return <Badge tone="amber">In progress</Badge>;
    return <Badge tone="gray">Completed</Badge>;
  };

  const personalBadge = (x) => {
    if (x.badge) return <Badge tone="rose">{x.badge}</Badge>;
    const { state, days } = getStatus(x, today);
    if (state === "upcoming") return <Badge tone="blue">Upcoming</Badge>;
    if (state === "ongoing") return <Badge tone="green">Current</Badge>;
    if (days <= RECENT_DAYS) return <Badge tone="green">Recent</Badge>;
    return null;
  };

  const accents = {
    rose: "bg-rose-100 text-rose-600",
    blue: "bg-blue-100 text-blue-600",
  };

  return (
    <section
      id="news"
      aria-labelledby="news-heading"
      className="min-h-screen bg-gray-50/80 py-12 sm:py-16 md:py-20 px-5 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            id="news-heading"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4"
          >
            News
          </h2>
          <div className="w-24 sm:w-32 md:w-40 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Travel */}
          <SectionCard
            icon={Plane}
            iconClass="bg-sky-100 text-sky-600"
            title="Travel"
            subtitle="Academic travel and conference visits"
          >
            {travelItems.length === 0 && (
              <p className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600">
                <House aria-hidden="true" className="w-5 h-5 text-sky-600" />
                No upcoming travel scheduled.
              </p>
            )}
            <ul className="space-y-5">
              {travelItems.map((x) => (
                <li
                  key={`${x.place}-${x.start}`}
                  className="rounded-xl border border-sky-100 bg-sky-50/60 p-4 sm:p-5 space-y-3"
                >
                  <div className="flex flex-wrap items-center gap-2 justify-between">
                    <span className="inline-flex items-center gap-2 text-lg font-bold text-gray-950">
                      <MapPin aria-hidden="true" className="w-5 h-5 text-sky-600" />
                      {x.place}
                    </span>
                    {travelBadge(x)}
                  </div>
                  <DateLine start={x.start} end={x.end} />
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{x.text}</p>
                  {x.returnDate && (
                    <p className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                      <House aria-hidden="true" className="w-4 h-4" />
                      Back in {x.returnTo} on {formatRange(x.returnDate)}
                    </p>
                  )}
                  <ReadMore href={x.href} />
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Personal */}
          <SectionCard
            icon={Heart}
            iconClass="bg-rose-100 text-rose-600"
            title="Personal"
            subtitle="Personal milestones"
          >
            <ul className="space-y-5">
              {personalItems.map((x) => {
                const Icon = x.icon;
                return (
                  <li key={`${x.start}-${x.text.slice(0, 20)}`} className="flex gap-4">
                    <div className={`p-2 h-fit rounded-xl flex-shrink-0 ${accents[x.accent]}`}>
                      <Icon aria-hidden="true" className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <DateLine start={x.start} end={x.end} />
                        {personalBadge(x)}
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{x.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </SectionCard>

          {/* Upcoming conferences */}
          {upcomingConferences.length > 0 && (
            <SectionCard
              icon={CalendarDays}
              iconClass="bg-sky-100 text-sky-600"
              title="Upcoming Conferences"
              subtitle="Scheduled conference attendance"
              className="lg:col-span-2"
            >
              <ol className="relative border-l-2 border-sky-200 ml-2 space-y-6">
                {upcomingConferences.map((x) => (
                  <li key={`${x.start}-${x.text.slice(0, 20)}`} className="relative pl-6">
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow" />
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <DateLine start={x.start} end={x.end} />
                        {travelBadge(x)}
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{x.text}</p>
                      <ReadMore href={x.href} />
                    </div>
                  </li>
                ))}
              </ol>
            </SectionCard>
          )}

          {/* Past conferences */}
          <SectionCard
            icon={Presentation}
            iconClass="bg-blue-600/20 text-blue-600"
            title="Past Conferences"
            subtitle="Conferences, seminars, and professional courses"
            className="lg:col-span-2"
          >
            <ol className="relative border-l-2 border-blue-200 ml-2 space-y-6">
              {pastConferences.map((x) => (
                <li key={`${x.start}-${x.text.slice(0, 20)}`} className="relative pl-6">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow" />
                  <div className="space-y-1.5">
                    <DateLine start={x.start} end={x.end} />
                    <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{x.text}</p>
                    <ReadMore href={x.href} />
                  </div>
                </li>
              ))}
            </ol>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default News;
