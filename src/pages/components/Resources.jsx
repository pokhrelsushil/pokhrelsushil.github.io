import React from "react";

/* =========================
   DATA (edit URLs as needed)
   ========================= */

/* Core AI/ML texts (left column) */
const coreAITexts = [
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell, Peter Norvig",
    url: "https://api.pageplace.de/preview/DT0400.9781292401171_A41586057/preview-9781292401171_A41586057.pdf",
    note: "",
  },
  {
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
  },
  {
    title: "Pattern Recognition and Machine Learning",
    author: "Christopher M. Bishop",
  },
  {
    title: "Reinforcement Learning: An Introduction",
    author: "Richard S. Sutton, Andrew G. Barto",

  },
];

/* Currently Reading (middle column) */
const currentlyReading = [
  { title: "How to Solve It", author: "George Pólya", url: "https://www.amazon.ca/How-Solve-Aspect-Mathematical-Method/dp/069116407X/ref=sr_1_1?adgrpid=1364494158738399&dib=eyJ2IjoiMSJ9.goZZRchd1sbK1R1g0l_TyhEv5m25JhxuZwSvQ-R5tg0s0La5Jz1snmLNwC8x8YHNkE7dkSnPMAqUkBiCk4UIa8VP7flI443VSsSYRdKjqD3gp5chpntOJXdNbPi07jli.BmLwfI2km8ol0Hb-sOzPEKzEkvp2aVSMKm94ZtD72pE&dib_tag=se&hvadid=85281424708044&hvbmt=be&hvdev=c&hvlocphy=5230&hvnetw=o&hvqmt=e&hvtargid=kwd-85281054172516%3Aloc-32&hydadcr=22463_13498400&keywords=george+polya+how+to+solve+it&mcid=e50910ab3722366291c49c5a084d8d02&msclkid=8e217358106718ba36841a344f8d2fcf&qid=1768710130&sr=8-1", note: "" },
  { title: "Human Compatible", author: "Stuart Russell"},
  {
    title: "Think, Play, Do: Technology, Innovation, and Organization",
    author: "Mark Dodgson",
  },
];

/* Favourite Read (right column) */
const favouriteRead = [
  {
    title: "Agent-Based and Individual-Based Modeling: A Practical Introduction",
    author: "Steven F. Railsback, Volker Grimm",
    url: "https://www.jstor.org/stable/j.ctt7sns7",
    note: "",
  },
  { title: "Atlas of AI", author: "Kate Crawford", },
  { title: "Brave New World", author: "Aldous Huxley",},
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    
  },
  {
    title: "Discipline and Punish",
    author: "Michel Foucault",
   
  },
  {
    title: "Evolutionary Intelligence",
    author: "Rolf Pfeifer, Josh Bongard",
    
  },
  { title: "Getting to Yes", author: "Roger Fisher, William Ury" },
];

/* Control Systems: Crash-Course (course names only, as requested) */
const controlSystemsCrashCourse = [
  {
    course: "Analog Control Systems",
    links: [
      
    ],
  },
  {
    course: "Digital Control Systems",
    links: [
      
    ],
  },
  {
    course: "Digital Control Applications",
    links: [
      
    ],
  },
  {
    course: "Robot Dynamics and Control",
    links: [
      
    ],
  },
  {
    course: "Multivariable Control Systems",
    links: [
      
    ],
  },
];

/* Textbook and references (from your image) */
const informationTheoryTextbook = [
  {
    title: "Elements of Information Theory (2nd ed.)",
    author: "T. M. Cover, J. A. Thomas",
    year: "2006",
    publisher: "Wiley",
    url: "https://www.wiley.com/en-us/Elements%2Bof%2BInformation%2BTheory%2C%2B2nd%2BEdition-p-9780471241959",
    note: "Publisher page (not generally free).",
  },
];

/* Optimization (author-hosted open text) */
const optimizationReading = [
  {
    title: "Convex Optimization",
    author: "Stephen Boyd, Lieven Vandenberghe",
    year: "2004",
    url: "https://stanford.edu/~boyd/cvxbook/",
    note: "Author page with downloadable PDF.",
  },
];

/* Game theory / multiagent items you listed */
const gameTheoreticReading = [
  {
    title:
      "Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations",
    author: "Yoav Shoham, Kevin Leyton-Brown",
  
    url: "https://www.masfoundations.org/download.html",
  },
  {
    title: "Algorithmic Game Theory",
    author:
      "Noam Nisan, Tim Roughgarden, Éva Tardos, Vijay V. Vazirani (eds.)",
    note: "Publisher page ",
    url: "https://www.cambridge.org/core/books/algorithmic-game-theory/0092C07CA8B724E1B1BE2238DDD66B38",
  },
  {
    title: "Twenty Lectures on Algorithmic Game Theory",
    author: "Tim Roughgarden",
    note: "Publisher page (not free).",
    url: "https://www.cambridge.org/core/books/twenty-lectures-on-algorithmic-game-theory/A9D9427C8F43E7DAEF8C702755B6D72B",
  },
  {
    title: "The Theory of Learning in Games",
    author: "Drew Fudenberg, David K. Levine",
    note: "Publisher page ( not free).",
    url: "https://mitpress.mit.edu/9780262061940/the-theory-of-learning-in-games/",
  },
  {
    title: "Game Theory",
    author: "(Pokhrel et all )",
    
  },
  {
    title: "A Course in Game Theory",
    author: "Martin J. Osborne, Ariel Rubinstein",
    note: "Freely available on the authors’ official site (registration/login required).",
    url: "https://books.osborne.economics.utoronto.ca/",
  },
];

/* Portal blocks: GitHub and Links (placeholders you can fill) */
const portalBlocks = [
  {
    title: "Important GitHub Repositories",
    items: [
      { label: "Control Systems Repo ", url: "" },
      { label: "Robotics Repo "},
      { label: "Optimization Repo"},
      { label: "Game Theory Repo "},
      { label: "Misc Research Tools " },
    ],
  },
];

/* =========================
   UI COMPONENTS
   ========================= */

const LinkButton = ({ href, children }) => {
  const disabled = !href || href.trim() === "";
  return (
    <a
      href={disabled ? undefined : href}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noreferrer"}
      className={[
        "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium",
        "border border-gray-200 shadow-sm",
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white text-gray-900 hover:bg-gray-50",
      ].join(" ")}
      aria-disabled={disabled}
      onClick={(e) => {
        if (disabled) e.preventDefault();
      }}
    >
      {children}
    </a>
  );
};

const AnchorButton = ({ href, children }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium border border-gray-200 shadow-sm bg-white text-gray-900 hover:bg-gray-50"
  >
    {children}
  </a>
);

const ColumnCard = ({ title, children, id }) => {
  return (
    <section
      id={id}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-5 scroll-mt-24"
    >
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
};

const BookItem = ({ item }) => {
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <p className="font-medium text-gray-900">{item.title}</p>
        <p className="text-sm text-gray-600">{item.author}</p>
        {item.year || item.publisher ? (
          <p className="text-sm text-gray-500">
            {[item.year, item.publisher].filter(Boolean).join(" · ")}
          </p>
        ) : null}
        {item.note ? (
          <p className="text-sm text-gray-500 leading-relaxed">{item.note}</p>
        ) : null}
      </div>
      {"url" in item ? (
        <div className="flex flex-wrap gap-2">
          <LinkButton href={item.url || ""}>{item.url ? "Open link" : "Add link"}</LinkButton>
        </div>
      ) : null}
    </div>
  );
};

const Divider = () => <div className="h-px bg-gray-200" />;

const CourseItem = ({ item }) => {
  return (
    <div className="space-y-3">
      <p className="font-medium text-gray-900">{item.course}</p>
      <div className="flex flex-wrap gap-2">
        {item.links.map((l) => (
          <LinkButton key={l.label} href={l.url}>
            {l.url ? l.label : l.label}
          </LinkButton>
        ))}
      </div>
    </div>
  );
};

const PortalBlock = ({ block }) => {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-gray-900">{block.title}</p>
      <div className="space-y-2">
        {block.items.map((it, idx) => (
          <div
            key={`${block.title}-${idx}`}
            className="flex items-center justify-between gap-3"
          >
            <p className="text-sm text-gray-700">{it.label}</p>
            <LinkButton href={it.url}>{it.url ? "Open" : "Add URL"}</LinkButton>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================
   PAGE
   ========================= */

const Resources = () => {
  return (
    

      <div className="max-w-7xl mx-auto space-y-10"> 
        {/* Header */}
        <header className="max-w-5xl space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">My Reading List</h1>
            <p className="text-gray-600 leading-relaxed">
              A personal, evolving academic record of foundational texts, current readings,
              and curated references (with links), including portal blocks for GitHub and resources.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            <AnchorButton href="#core-ai">Core AI / ML</AnchorButton>
            <AnchorButton href="#currently-reading">Currently Reading</AnchorButton>
            <AnchorButton href="#control-systems">Control Systems Crash-Course</AnchorButton>
            <AnchorButton href="#info-theory">Information Theory</AnchorButton>
            <AnchorButton href="#optimization">Optimization</AnchorButton>
            <AnchorButton href="#game-theory">Game-Theoretic Reading</AnchorButton>
            <AnchorButton href="#portal">Portal Blocks</AnchorButton>
          </div>
        </header>

        {/* Original three-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ColumnCard id="core-ai" title="Textbooks / Emerging Tech , AI/ML Texts">
            {coreAITexts.map((item, idx) => (
              <React.Fragment key={item.title}>
                <BookItem item={item} />
                {idx !== coreAITexts.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </ColumnCard>

          <ColumnCard id="currently-reading" title="Currently Reading">
            {currentlyReading.map((item, idx) => (
              <React.Fragment key={item.title}>
                <BookItem item={item} />
                {idx !== currentlyReading.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </ColumnCard>

          <ColumnCard title="Favourite Read">
            {favouriteRead.map((item, idx) => (
              <React.Fragment key={item.title}>
                <BookItem item={item} />
                {idx !== favouriteRead.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </ColumnCard>
        </div>

        {/* Control systems crash-course block (course names only) */}
        <ColumnCard id="control-systems" title="Control Systems: Current Crash-Course Reading">
          <div className="space-y-6">
            {controlSystemsCrashCourse.map((item, idx) => (
              <React.Fragment key={item.course}>
                <CourseItem item={item} />
                {idx !== controlSystemsCrashCourse.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </div>
        </ColumnCard>

        {/* Information theory textbook (from your posted reference) */}
        <ColumnCard id="info-theory" title="Textbook and References: Information Theory">
          {informationTheoryTextbook.map((item, idx) => (
            <React.Fragment key={item.title}>
              <BookItem item={item} />
              {idx !== informationTheoryTextbook.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ColumnCard>

        {/* Optimization reading */}
        <ColumnCard id="optimization" title="Optimization Problems: Reading (with Links)">
          {optimizationReading.map((item, idx) => (
            <React.Fragment key={item.title}>
              <BookItem item={item} />
              {idx !== optimizationReading.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ColumnCard>

                {/* Game-theoretic reading list (incl. optional references) */}
                <ColumnCard
                  id="game-theory"
                  title="Game-Theoretic Reading (Multiagent, Algorithmic GT, Learning in Games)"
                >
                  {gameTheoreticReading.map((item, idx) => (
                    <React.Fragment key={item.title}>
                      <BookItem item={item} />
                      {idx !== gameTheoreticReading.length - 1 && <Divider />}
                    </React.Fragment>
                  ))}
                </ColumnCard>
        
                {/* Portal blocks: GitHub and Links */}
                <ColumnCard id="portal" title="Portal Blocks">
                  <div className="space-y-8">
                    {portalBlocks.map((block) => (
                      <PortalBlock key={block.title} block={block} />
                    ))}
                  </div>
                </ColumnCard>
              </div>
            );
        };
        
        export default Resources;
