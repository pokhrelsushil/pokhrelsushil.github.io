import React from "react";
import { ArrowRight, Github, GraduationCap, Linkedin, Mail, School, Twitter } from "lucide-react";
import { FaGoogleScholar } from "react-icons/fa6";
import Googlescholar from '../../assets/GoogleScholar.png'

//import ScrollToExplore from "../../components/ScrollToExplore";
import profileImage from "../../assets/sushilpokhrel.jpg";
import { SiGooglescholar } from "react-icons/si";

const Hero = () => {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  

  const socials = [
    {
      icon: Googlescholar,
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=BPN7wnsAAAAJ&hl=en",
      isReactIcon: true,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sushilpokhrel/",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/pokhrelsushil/" },
    { icon: Mail, label: "Email", href: "mailto:sushil.pokhrel@gmail.com" },
    { icon: Twitter, label: "Twitter/X", href: "https://x.com/sushilpokhrel" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-100 flex items-center justify-center px-5 sm:px-6 lg:px-8 py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full mb-20 md:mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-16">
          {/* Left - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 md:space-y-8"> 
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="text-gray-900">Sushil Pokhrel </span>
              {/* <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Pokhrel
              </span> */}
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
              Systems Design || Machine Learning Researcher
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Interdisciplinary researcher working at the intersection of Material Science and Engineering ,autonomous systems,
              cyber–physical systems, control, and machine learning to address real-world challenges.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center px-7 py-3.5
                           bg-gradient-to-r from-blue-600 to-blue-500
                           text-white font-semibold rounded-full
                           shadow-lg shadow-blue-500/25
                           hover:shadow-md hover:shadow-blue-500/20
                           transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg"
              >
                Get In Touch
                <Mail className="w-5 h-5 ml-2" aria-hidden="true" />
              </a>

              <a
                href="/about"
                className="inline-flex items-center justify-center px-7 py-3.5
                           border-2 border-blue-600 text-blue-600 font-semibold rounded-full
                           hover:bg-blue-600 hover:text-white
                           transition-all duration-300 text-base sm:text-lg"
              >
                About Me
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </a>
            </div>

            {/* Socials */}
            <div className="pt-1 md:pt-0.5">
              <p className="text-gray-700 font-medium text-lg mb-2 md:mb-2">
                Follow me on:
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 sm:p-3.5
                                 bg-white backdrop-blur-sm
                                 border border-gray-400
                                 rounded-xl sm:rounded-2xl
                                 text-blue-600
                                 hover:text-blue-700
                                 hover:border-blue-400/50
                                 hover:shadow-md hover:shadow-blue-500/20
                                 transition-all duration-300
                                 hover:-translate-y-1 active:scale-95"
                      aria-label={social.label}
                      title={social.label}
                    >
                      {social.isReactIcon ? (
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      ) : (
                        <Icon
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          strokeWidth={2.1}
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-blue-400 opacity-30 blur-3xl -z-10 animate-pulse" />

              <div
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem]
                           rounded-full overflow-hidden
                           shadow-2xl shadow-blue-500/20
                           ring-1 ring-gray-200/50
                           border-2 md:border-8 border-blue-400"
              >
                <img
                  src={profileImage}
                  alt="Sushil Pokhrel"
                  className="w-full h-full object-cover object-top
                             grayscale-[20%]
                             hover:grayscale-0
                             transition-all duration-500 scale-105 hover:scale-100"
                  loading="eager"
                />
              </div>

              {/* Decorative background */}
              <div
                className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-12
                           w-40 h-40 sm:w-64 sm:h-64
                           bg-blue-500/10 rounded-full blur-3xl -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
