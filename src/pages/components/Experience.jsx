import React from "react";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Building2,
} from "lucide-react";

const Experience = () => {
  const researchExperience = [
    {
      title: "Graduate Research Assistant",
      company: "Systems Design Engineering, University of Waterloo",
      period: "202^* - Present",
      location: "Waterloo, ON, Canada",
      current: true,
      description:
        "Developing principled AI agents for human-AI collaboration in Small Modular Reactor Control room , autonomous vehicles and safety-critical systems using reinforcement learning(RL) and foundation models.",
    },
    {
      title: "Graduate Research Assistant",
      company:
        "Biomedical Engineering(BME), State University of New York Binghamton University",
      period: "201^*",
      location: "Vestal, NY, USA",
      current: false,
      description:
        "Conducted computational drug discovery research applying machine learning and cheminformatics for drug delivery and  therapeutic candidate identification.",
    },
    {
      title: "Erasmus Mundus Research Scholar",
      company:
        "Computational Quantum Theoritical Physics Laboratory, Universite Piere and Marie Curie (Sorbonne University)",
      period: " 201^*",
      location: "Paris, France",
      current: false,
      description:
        "Performed Quantum chemistry calculations and computational modeling as part of fully-funded European Commission scholarship.",
    },
  ];

  const mentoringRole = {
    title: "Student Mentor",
    company: "Indian Institute of Technology , IIT Roorkee ",
    period: "September 2017 - Present",
    location: "Roorkee, India",
    description:
      "Mentored undergraduate students in computational  concepts, laboratory techniques, and research methodology .",
  };

  const mentoredStudents = [
    { name: "Abhisek Joshi", detail: "IIT Roorkee, Mechanical" },
    { name: "Sandip Upadhaya", detail: "Computer Science" },
    { name: "Sabina Panta", detail: "ECE, Undergraduate" },
  ];

  const industryExperience = [
    {
      title: "Research Fellow",
      company: "Mentored by an Anthropic researcher",
      period: "",
      location: "",
      description: "",
    },
    {
      title: "Research Virtual Intern",
      company: "Microsoft Responsible AI",
      period: "",
      location: "",
      description: "",
    },
    {
      title: "Research Virtual Intern",
      company: "Samsung Research America",
      period: "",
      location: "",
      description: "",
    },
    {
      title: "Research Intern",
      company: "Honda Research Institute — Human-centred AI",
      period: "",
      location: "",
      description: "",
    },
  ];

  const teachingAssignments = [
    {
      course:
        "STV 208 - Artificial Intelligence and Society: Impact, Ethics, and Equity",
      terms: ["Winter 2025", "Winter 2026"],
    },
    {
      course: "BME 401L - Communications in Biomedical Engineering-Visualization",
      terms: ["Fall 2025"],
    },
    {
      course: "MTE 351 - Systems Models (Mechatronics Engineering)",
      terms: ["Spring 2025"],
    },
    {
      course: "ARCH/CIVE 265 - Architecture/Civil Engineering",
      terms: ["Fall 2024"],
    },
    {
      course: "MSE 220L - Nano Engineering (Materials Science and Engineering)",
      terms: ["Fall 2023"],
    },
    {
      course: "Experimental Design and Statistical Analysis (SUNY Binghamton)",
      terms: ["Fall 2020 - Spring 2022"],
    },
  ];

  const ExperienceCard = ({ exp, index }) => (
    <div
      key={index}
      className="relative flex items-start gap-6 sm:gap-8 md:gap-10 pl-14 sm:pl-16 md:pl-20"
    >
      <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-6 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10" />

      <div className="flex-1">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {exp.title}
              </h3>
              <p className="text-base text-gray-700 font-medium">
                {exp.company}
              </p>
            </div>

            {exp.current && (
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full border border-green-200">
                Current
              </span>
            )}
          </div>

          {(exp.period || exp.location) && (
            <div className="flex flex-col sm:flex-row gap-3 text-gray-600 mb-3">
              {exp.period ? (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              ) : null}
              {exp.location ? (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm font-medium">{exp.location}</span>
                </div>
              ) : null}
            </div>
          )}

          {exp.description ? (
            <p className="text-sm text-gray-600 leading-relaxed">
              {exp.description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );

  const SimpleTimelineItem = ({ item, index }) => (
    <div
      key={index}
      className="relative flex items-start gap-6 pl-14 sm:pl-16 md:pl-20"
    >
      <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-6 -translate-x-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10" />

      <div className="flex-1">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
          <p className="text-sm text-gray-700 font-medium">{item.company}</p>

          {(item.period || item.location) && (
            <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600 mt-3">
              {item.period ? (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span>{item.period}</span>
                </div>
              ) : null}
              {item.location ? (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{item.location}</span>
                </div>
              ) : null}
            </div>
          )}

          {item.description ? (
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              {item.description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            Experience
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Research & Mentoring */}
          <div className="space-y-16">
            {/* Research Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-gray-900" />
                <h2 className="text-3xl font-bold text-gray-900 pb-2 flex-1">
                  Research Experience
                </h2>
              </div>
              <div className="border-t-2 border-gray-300 mb-8"></div>

              <div className="relative">
                <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-0 bottom-0 w-0.5 bg-gray-300" />
                <div className="relative space-y-10">
                  {researchExperience.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} index={index} />
                  ))}
                </div>
              </div>
            </div>

            {/* Mentoring */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-gray-900" />
                <h2 className="text-3xl font-bold text-gray-900 pb-2 flex-1">
                  Mentoring
                </h2>
              </div>
              <div className="border-t-2 border-gray-300 mb-8"></div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {mentoringRole.title}
                </h3>

                <p className="text-sm text-gray-700 font-medium mb-3">
                  {mentoringRole.company}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{mentoringRole.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{mentoringRole.location}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {mentoringRole.description}
                </p>

                {/* Students mentored (clean layout) */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-xs font-medium text-gray-600 mb-2">
                    Students mentored
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-gray-500">
                    {mentoredStudents.map((s) => (
                      <li key={s.name} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                        <span>
                          {s.name}{" "}
                          <span className="text-gray-400">({s.detail})</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Teaching (top) + Industry Experience (bottom) */}
          <div className="space-y-16">
            {/* Teaching */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-gray-900" />
                <h2 className="text-3xl font-bold text-gray-900 pb-2 flex-1">
                  Teaching/TA
                </h2>
              </div>
              <div className="border-t-2 border-gray-300 mb-8"></div>

              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <ul className="space-y-3">
                  {teachingAssignments.map((assignment, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1.5 font-bold">•</span>
                      <div className="text-sm">
                        <span className="text-gray-900 font-medium">
                          {assignment.course}
                        </span>
                        <span className="text-gray-600">: </span>
                        {assignment.terms.map((term, idx) => (
                          <React.Fragment key={idx}>
                            <span className="text-blue-600 font-medium">
                              {term}
                            </span>
                            {idx < assignment.terms.length - 1 && (
                              <span className="text-gray-600">, </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Industry Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-8 h-8 text-gray-900" />
                <h2 className="text-3xl font-bold text-gray-900 pb-2 flex-1">
                  Industry Experience
                </h2>
              </div>
              <div className="border-t-2 border-gray-300 mb-8"></div>

              <div className="relative">
                <div className="absolute left-[18px] sm:left-[26px] md:left-[40px] top-0 bottom-0 w-0.5 bg-gray-300" />
                <div className="relative space-y-10">
                  {industryExperience.map((item, index) => (
                    <SimpleTimelineItem key={index} item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
