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
  { title: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville" },
  { title: "Pattern Recognition and Machine Learning", author: "Christopher M. Bishop" },
  { title: "Reinforcement Learning: An Introduction", author: "Richard S. Sutton, Andrew G. Barto" },
];

/* Currently Reading (middle column) */
const currentlyReading = [
  {
    title: "How to Solve It",
    author: "George Pólya",
    url: "https://www.amazon.ca/How-Solve-Aspect-Mathematical-Method/dp/069116407X/ref=sr_1_1",
    note: "",
  },
  { title: "Human Compatible", author: "Stuart Russell" },
  { title: "Think, Play, Do: Technology, Innovation, and Organization", author: "Mark Dodgson" },
  { title: "2040: A Silicon Valley Satire", author: "Pedro Domingos"},
  { title: "Chip War: The Fight for the World's Most Critical Technology", author: "Chris Miller" },
  {title:  "The Code Book: The Evolution Of Secrecy From Mary, To Queen Of Scots To Quantum Crytography", author: "Simon Singh" },
  {title:  "AI Superpowers: China, Silicon Valley, and the New World Order ", author: "Kai-Fu-Lee" },
  {title:  "Capitalism without Capital: The Rise of the Intangible Economy ", author: "Jonathan Haskel" }
];

/* Favourite Read (right column) */
const favouriteRead = [
  {
    title: "Agent-Based and Individual-Based Modeling: A Practical Introduction",
    author: "Steven F. Railsback, Volker Grimm",
    url: "https://www.jstor.org/stable/j.ctt7sns7",
    note: "",
  },
  { title: "Atlas of AI", author: "Kate Crawford" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
  { title: "Discipline and Punish", author: "Michel Foucault" },
  { title: "Evolutionary Intelligence", author: "Rolf Pfeifer, Josh Bongard" },
  { title: "Getting to Yes", author: "Roger Fisher, William Ury" },
];

/* Control Systems: Crash-Course (course names only) */
const controlSystemsCrashCourse = [
  { course: "Analog Control Systems", links: [] },
  { course: "Digital Control Systems", links: [] },
  { course: "Digital Control Applications", links: [] },
  { course: "Robot Dynamics and Control", links: [] },
  { course: "Multivariable Control Systems", links: [] },
];

/* Textbook and references */
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

/* Optimization */
const optimizationReading = [
  {
    title: "Convex Optimization",
    author: "Stephen Boyd, Lieven Vandenberghe",
    year: "2004",
    url: "https://stanford.edu/~boyd/cvxbook/",
    note: "Author page with downloadable PDF.",
  },
];

/* Game theory / multiagent */
const gameTheoreticReading = [
  {
    title: "Multiagent Systems: Algorithmic, Game-Theoretic, and Logical Foundations",
    author: "Yoav Shoham, Kevin Leyton-Brown",
    url: "https://www.masfoundations.org/download.html",
  },
  {
    title: "Algorithmic Game Theory",
    author: "Noam Nisan, Tim Roughgarden, Éva Tardos, Vijay V. Vazirani (eds.)",
    note: "Publisher page",
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
    note: "Publisher page (not free).",
    url: "https://mitpress.mit.edu/9780262061940/the-theory-of-learning-in-games/",
  },
  { title: "Game Theory", author: "(Pokhrel et al.)" },
  {
    title: "A Course in Game Theory",
    author: "Martin J. Osborne, Ariel Rubinstein",
    note: "Freely available on the authors’ official site (registration/login required).",
    url: "https://books.osborne.economics.utoronto.ca/",
  },
];

/* Portal blocks (simple label/url lists only) */
const portalBlocks = [
  {
    title: "Important GitHub Repositories",
    items: [
      { label: "Control Systems Repo", url: "" },
      { label: "Robotics Repo"},
      { label: "Optimization Repo"},
      { label: "Game Theory Repo" },
      { label: "Misc Research Tools"},
    ],
  },
  {
    title: "Important Links (Portal / Notes / Courses)",
    items: [
     
      { label: "GitHub links", Links: "" },
    ],
  },
];

/* =========================
   Robotics GitHub repos (separate, grouped sections)
   ========================= */

const roboticsGithubRepos = [
  {
    category: "Courses and learning",
    title: "Hugging Face Robotics Course (LeRobot)",
    type: "Course",
    links: [
      { label: "Course page", url: "https://huggingface.co/learn/robotics" },
      { label: "GitHub (LeRobot)", url: "" }, // add repo URL if desired
    ],
    tags: ["learning", "robotics"],
  },
  {
    category: "Hardware directories",
    title: "Open Robotics Hardware Hub",
    type: "Hardware directory",
    links: [{ label: "Website", url: "https://openrobhardware.org" }],
    tags: ["hardware", "open-source"],
  },
  {
    category: "Mobile robots",
    title: "ROSbot 2.0 (Husarion)",
    type: "Mobile robot platform",
    links: [{ label: "Website", url: "https://husarion.com" }],
    tags: ["ROS", "mobile-robot"],
  },
  {
    category: "Mobile robots",
    title: "Magni (Ubiquity Robotics)",
    type: "Mobile base",
    links: [{ label: "Website", url: "https://ubiquityrobotics.com" }],
    tags: ["mobile-robot"],
  },
  {
    category: "Legged robots",
    title: "Stanford Doggo",
    type: "Quadruped",
    links: [{ label: "GitHub", url: "https://github.com/Nate711/StanfordDoggoProject" }],
    tags: ["legged", "locomotion"],
  },
  {
    category: "Legged robots",
    title: "ANYmal (ANYbotics)",
    type: "Quadruped (research/industrial)",
    links: [{ label: "GitHub org", url: "https://github.com/ANYbotics" }],
    tags: ["legged", "inspection"],
  },
  {
    category: "Rovers",
    title: "JPL Open Source Rover (NASA JPL)",
    type: "Rover",
    links: [{ label: "GitHub", url: "https://github.com/nasa-jpl/open-source-rover" }],
    tags: ["rover", "hardware"],
  },
  {
    category: "Autonomy platforms",
    title: "MuSHR",
    type: "Autonomous race car",
    links: [{ label: "Project site", url: "https://mushr.io" }],
    tags: ["autonomy", "perception"],
  },
  {
    category: "Autonomy platforms",
    title: "AWS DeepRacer",
    type: "RL race car",
    links: [{ label: "Website", url: "https://aws.amazon.com/deepracer/" }],
    tags: ["reinforcement-learning"],
  },
  {
    category: "Manipulators",
    title: "OpenManipulator (ROBOTIS)",
    type: "Robotic arm",
    links: [{ label: "Docs", url: "https://emanual.robotis.com/docs/en/platform/openmanipulator/" }],
    tags: ["manipulation", "arm"],
  },
  {
    category: "Manipulators",
    title: "Niryo One",
    type: "Robotic arm (3D-printed)",
    links: [{ label: "Website", url: "https://niryo.com" }],
    tags: ["manipulation", "arm"],
  },
  {
    category: "Education ecosystems",
    title: "Poppy Project",
    type: "Humanoid / modular robots",
    links: [{ label: "Website", url: "https://www.poppy-project.org" }],
    tags: ["humanoid", "education"],
  },
  {
    category: "Prosthetics / bionics",
    title: "OpenBionics",
    type: "Bionics / prosthetics",
    links: [{ label: "Website", url: "https://openbionics.org" }],
    tags: ["prosthetics"],
  },
  {
    category: "Consumer legged robots",
    title: "Nybble (Petoi)",
    type: "Robotic cat",
    links: [{ label: "Website", url: "https://www.petoi.com" }],
    tags: ["locomotion"],
  },
  {
    category: "Benchmarks",
    title: "TriFinger",
    type: "Dexterous manipulation benchmark",
    links: [{ label: "Project page", url: "https://sites.google.com/view/trifinger" }],
    tags: ["manipulation", "benchmark"],
  },
  {
    category: "Research initiatives",
    title: "Open Dynamic Robot Initiative",
    type: "Torque-controlled modular robotics",
    links: [{ label: "Project site", url: "https://en-dynamic-robot-initiative.github.io" }],
    tags: ["legged", "torque-control"],
  },
  {
    category: "ROS 2 drivers",
    title: "Universal Robots ROS 2 Driver",
    type: "ROS 2 driver (industrial arms)",
    links: [{ label: "GitHub", url: "https://github.com/UniversalRobots/Universal_Robots_ROS2_Driver" }],
    tags: ["ROS2", "industrial"],
  },
  {
    category: "Autonomy stacks",
    title: "Autoware Foundation",
    type: "Autonomy stack",
    links: [{ label: "GitHub org", url: "https://github.com/autowarefoundation" }],
    tags: ["autonomy", "self-driving"],
  },
  {
    category: "Education ecosystems",
    title: "Duckietown",
    type: "Education ecosystem",
    links: [{ label: "Website", url: "https://duckietown.com" }],
    tags: ["education", "autonomy"],
  },
  {
    category: "Algorithm collections",
    title: "PythonRobotics",
    type: "Algorithms collection",
    links: [{ label: "Project site", url: "https://atsushisakai.github.io/PythonRobotics/" }],
    tags: ["algorithms", "python"],
  },
  {
    category: "Mathematics for Robotics",
    title: "Mathsrobotics",
    type: "Algorithms collection",
    links: [{ label: "Project site", url: "https://github.com/michiganrobotics/rob501" }],
    tags: ["algorithms", "python"],
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
        {item.note ? <p className="text-sm text-gray-500 leading-relaxed">{item.note}</p> : null}
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
            {l.label}
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
          <div key={`${block.title}-${idx}`} className="flex items-center justify-between gap-3">
            <p className="text-sm text-gray-700">{it.label}</p>
            <LinkButton href={it.url}>{it.url ? "Open" : "Add URL"}</LinkButton>
          </div>
        ))}
      </div>
    </div>
  );
};

const RoboticsRepoItem = ({ repo }) => {
  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="space-y-1">
            <p className="font-medium text-gray-900">{repo.title}</p>
            <p className="text-sm text-gray-600">
              {repo.type}
              {repo.tags?.length ? <span className="text-gray-400"> · </span> : null}
              {repo.tags?.length ? <span className="text-gray-500">{repo.tags.join(", ")}</span> : null}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {repo.links.map((l) => (
          <LinkButton key={`${repo.title}-${l.label}`} href={l.url}>
            {l.url ? l.label : `Add ${l.label} URL`}
          </LinkButton>
        ))}
      </div>
    </div>
  );
};

const groupBy = (arr, key) =>
  arr.reduce((acc, x) => {
    const k = x[key] || "Other";
    acc[k] = acc[k] || [];
    acc[k].push(x);
    return acc;
  }, {});

/* =========================
   PAGE
   ========================= */

const Resources = () => {
  const roboticsByCategory = groupBy(roboticsGithubRepos, "category");
  const roboticsCategories = Object.keys(roboticsByCategory);

  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <header className="max-w-5xl space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">My Reading List---[2025 December - Present] </h1>
          <p className="text-gray-600 leading-relaxed">
            A personal, evolving academic record of foundational texts, current readings, and curated references (with
            links), including portal blocks for GitHub and resources.
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
          <AnchorButton href="#robotics-github">Robotics GitHub Repos</AnchorButton>
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

      {/* Control systems crash-course */}
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

      {/* Information theory */}
      <ColumnCard id="info-theory" title="Textbook and References: Information Theory">
        {informationTheoryTextbook.map((item, idx) => (
          <React.Fragment key={item.title}>
            <BookItem item={item} />
            {idx !== informationTheoryTextbook.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ColumnCard>

      {/* Optimization */}
      <ColumnCard id="optimization" title="Optimization Problems: Reading (with Links)">
        {optimizationReading.map((item, idx) => (
          <React.Fragment key={item.title}>
            <BookItem item={item} />
            {idx !== optimizationReading.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ColumnCard>

      {/* Game-theoretic reading */}
      <ColumnCard id="game-theory" title="Game-Theoretic Reading (Multiagent, Algorithmic GT, Learning in Games)">
        {gameTheoreticReading.map((item, idx) => (
          <React.Fragment key={item.title}>
            <BookItem item={item} />
            {idx !== gameTheoreticReading.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ColumnCard>

      {/* Robotics GitHub repos: separate sections by category */}
      <ColumnCard id="robotics-github" title="Robotics GitHub Repositories (Grouped)">
        <div className="space-y-8">
          {roboticsCategories.map((cat) => (
            <div key={cat} className="space-y-4">
              <h3 className="text-base font-semibold text-gray-900">{cat}</h3>
              <div className="space-y-5">
                {roboticsByCategory[cat].map((repo, idx) => (
                  <React.Fragment key={`${cat}-${repo.title}`}>
                    <RoboticsRepoItem repo={repo} />
                    {idx !== roboticsByCategory[cat].length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ColumnCard>

      {/* Portal blocks */}
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
