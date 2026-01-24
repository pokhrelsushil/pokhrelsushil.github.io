import React from "react";
import { Tweet } from "react-tweet";
import profileImage from "../../assets/sushilpokhrel1.png";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            About
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Full-width two-column layout: content (left) + twitter (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT: All About content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-12 min-w-0">
            {/* About Me */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
                About Me
              </h2>

              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-blue-600 opacity-10 blur-2xl rounded-2xl"></div>
                  <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 shadow-xl">
                    <img
                      src={profileImage}
                      alt="Sushil Pokhrel"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Interdisciplinary researcher specializing in the convergence of
                materials science, computing, chemical engineering, electrical
                engineering, robotics, biomedical engineering, and machine
                learning. My research focuses on bridging theoretical
                foundations with practical applications to address complex
                real-world challenges through innovative, cross-disciplinary
                approaches.
              </p>
            </div>

            {/* Research Interests */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
                Research Interests
              </h2>

              <ul className="space-y-3 text-gray-700">
                {[
                  "Human–AI Interaction (HF, HRI, HCI)",
                  "Reinforcement Learning & Autonomous Agents",
                  "Robot Learning & Control Theory",
                  "Complex Systems & Cyber-Physical Systems",
                  "Materials Science, Biomedical Engineering & Computing",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaboration */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                For comprehensive details regarding my research background,
                professional experience, and project portfolio, or to discuss
                potential collaborations, please contact me directly with your
                specific area of interest through DMs or Emails.
              </p>
            </div>

            {/* Beyond Research */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
                Beyond Research
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond my scholarly and professional pursuits, I maintain a deep
                commitment to reading as a foundational practice of
                intellectual development. Through sustained engagement with
                literature and research, I cultivate critical inquiry and
                interdisciplinary synthesis.
              </p>
            </div>
          </div>

          {/* RIGHT: Twitter feed (sticky, does not overlap) */}
          <aside className="lg:col-span-4 xl:col-span-3 min-w-0">
            <div className="lg:sticky lg:top-24 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-gray-200 pb-3">
                Latest Updates
              </h3>

              <div
                className="
                  w-full
                  max-h-[70vh]
                  overflow-y-auto
                  bg-white
                  rounded-lg
                  shadow-lg
                  border border-gray-200
                  scrollbar-thin
                  scrollbar-thumb-gray-400
                  scrollbar-track-gray-100
                "
                style={{ scrollbarWidth: "thin" }}
              >
                <div className="p-4 space-y-6">
                  <Tweet id="2010741574364479825" />
                  <Tweet id="2006420126438994042" />
                  <Tweet id="2006857672063123924" />
                  <Tweet id="1984297576665854457" />
                </div>
              </div>

              <a
                href="https://x.com/sushilpokhrel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Follow on X →
              </a>
            </div>
          </aside>
        </div>
      </div>

      {/* Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f3f4f6;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #9ca3af;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default About;
