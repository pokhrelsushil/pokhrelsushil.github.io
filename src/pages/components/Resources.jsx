import React from "react";

/* =========================
   DATA
   ========================= */

/* Core AI/ML texts */
const coreAITexts = [
  {
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell, Peter Norvig",
    url: "https://api.pageplace.de/preview/DT0400.9781292401171_A41586057/preview-9781292401171_A41586057.pdf",
  },
  { title: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville" },
  { title: "Pattern Recognition and Machine Learning", author: "Christopher M. Bishop" },
  { title: "Reinforcement Learning: An Introduction", author: "Richard S. Sutton, Andrew G. Barto" },
];

/* Currently Reading */
const currentlyReading = [
  {
    title: "How to Solve It",
    author: "George Pólya",
    url: "https://www.amazon.ca/How-Solve-Aspect-Mathematical-Method/dp/069116407X/ref=sr_1_1",
  },
  { title: "Human Compatible", author: "Stuart Russell" },
  { title: "Think, Play, Do", author: "Mark Dodgson" },
  { title: "2040: A Silicon Valley Satire", author: "Pedro Domingos" },
  { title: "Chip War", author: "Chris Miller" },
  { title: "The Code Book", author: "Simon Singh" },
  { title: "AI Superpowers", author: "Kai-Fu Lee" },
  { title: "Capitalism without Capital", author: "Jonathan Haskel" },
];

/* Favourite Read */
const favouriteRead = [
  {
    title: "Agent-Based and Individual-Based Modeling",
    author: "Steven F. Railsback, Volker Grimm",
    url: "https://www.jstor.org/stable/j.ctt7sns7",
  },
  { title: "Atlas of AI", author: "Kate Crawford" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
  { title: "Discipline and Punish", author: "Michel Foucault" },
];

/* =========================
   Important GitHub Links
   ========================= */

const importantGithubLinks = [
  { label: "Python 100 Days (jackfrued)", url: "https://github.com/jackfrued/Python-100-Days" },
  { label: "Generative AI for Beginners (Microsoft)", url: "https://github.com/microsoft/generative-ai-for-beginners" },
  { label: "LLMs from Scratch (rasbt)", url: "https://github.com/rasbt/LLMs-from-scratch" },
  { label: "ML for Beginners (Microsoft)", url: "https://github.com/microsoft/ML-For-Beginners" },
  { label: "Stable Diffusion (CompVis)", url: "https://github.com/CompVis/stable-diffusion" },
  { label: "OpenAI Cookbook", url: "https://github.com/openai/openai-cookbook" },
  { label: "LLM App (Pathway)", url: "https://github.com/pathwaycom/llm-app" },
  { label: "Segment Anything (Meta AI)", url: "https://github.com/facebookresearch/segment-anything" },
  { label: "AI Agents for Beginners (Microsoft)", url: "https://github.com/microsoft/ai-agents-for-beginners" },
  { label: "Python Data Science Handbook", url: "https://github.com/jakevdp/PythonDataScienceHandbook" },
  { label: "Made With ML", url: "https://github.com/GokuMohandas/Made-With-ML" },
  { label: "AI for Beginners (Microsoft)", url: "https://github.com/microsoft/AI-For-Beginners" },
  { label: "TensorFlow Examples", url: "https://github.com/aymericdamien/TensorFlow-Examples" },
  { label: "Data Engineer Handbook", url: "https://github.com/DataExpert-io/data-engineer-handbook" },
  { label: "Bark (suno-ai)", url: "https://github.com/suno-ai/bark" },
  { label: "Google Research", url: "https://github.com/google-research/google-research" },
  { label: "Data Engineering Zoomcamp", url: "https://github.com/DataTalksClub/data-engineering-zoomcamp" },
  { label: "Data Science for Beginners (Microsoft)", url: "https://github.com/microsoft/Data-Science-For-Beginners" },
  { label: "CLIP (OpenAI)", url: "https://github.com/openai/CLIP" },
  { label: "Claude Cookbooks (Anthropic)", url: "https://github.com/anthropics/claude-cookbooks" },
];

/* =========================
   UI Components
   ========================= */

const LinkButton = ({ href, children }) => {
  const disabled = !href;
  return (
    <a
      href={disabled ? undefined : href}
      target={disabled ? undefined : "_blank"}
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium border border-gray-200 shadow-sm ${
        disabled
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-white text-gray-900 hover:bg-gray-50"
      }`}
      onClick={(e) => disabled && e.preventDefault()}
    >
      {children}
    </a>
  );
};

const ColumnCard = ({ title, children }) => (
  <section className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-5">
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    <div className="space-y-5">{children}</div>
  </section>
);

const Divider = () => <div className="h-px bg-gray-200" />;

const BookItem = ({ item }) => (
  <div className="space-y-2">
    <p className="font-medium text-gray-900">{item.title}</p>
    <p className="text-sm text-gray-600">{item.author}</p>
    {item.url && (
      <div className="flex flex-wrap gap-2">
        <LinkButton href={item.url}>Open link</LinkButton>
      </div>
    )}
  </div>
);

/* =========================
   PAGE
   ========================= */

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-gray-900">
        My Reading List — [2025 December - Present]
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ColumnCard title="AI / ML Texts">
          {coreAITexts.map((item, idx) => (
            <React.Fragment key={item.title}>
              <BookItem item={item} />
              {idx !== coreAITexts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ColumnCard>

        <ColumnCard title="Currently Reading">
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

      <ColumnCard title="Important Links (GitHub)">
        {importantGithubLinks.map((item, idx) => (
          <React.Fragment key={item.label}>
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-gray-700">{item.label}</p>
              <LinkButton href={item.url}>Open</LinkButton>
            </div>
            {idx !== importantGithubLinks.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ColumnCard>
    </div>
  );
};

export default Resources;
