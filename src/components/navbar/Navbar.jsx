import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Menu, Twitter, X } from "lucide-react";
import GoogleScholarIcon from "../../components/GoogleScholarIcon";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Experience", path: "/experience", id: "experience" },
    { name: "Education", path: "/education", id: "education" },
    { name: "Resources", path: "/resources", id: "resources" },
    { name: "News", path: "/news", id: "news" },
    { name: "Contact", path: "/contact", id: "contact" },
  ];

  useEffect(() => {
    // With HashRouter, location.pathname is typically "/", and the route is in location.hash.
    // react-router still provides a consistent location object; simplest is to map active
    // based on the path you navigate to (NavLink will handle active styling anyway).
    const currentHash = location.hash?.replace(/^#/, "") || "/";
    const matchedLink = navLinks.find((l) => l.path === currentHash);

    if (matchedLink) setActiveSection(matchedLink.id);
  }, [location.hash]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 dark:bg-white backdrop-blur-xl shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Social icons (external links stay as <a>) */}
            <div className="pt-1 md:pt-0.5">
              <div className="flex flex-wrap justify-center lg:justify-start gap-1 sm:gap-1">
                {[
                  {
                  icon: GoogleScholarIcon,
                    label: "Google Scholar",
                    href: "https://scholar.google.com/citations?user=BPN7wnsAAAAJ&hl=en",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/sushilpokhrel/",
                  },
                  { icon: Github, label: "GitHub", href: "https://github.com/pokhrelsushil/" },
                  {
                    icon: Mail,
                    label: "Email",
                    href: "https://mail.google.com/mail/u/0/#compose?to=sushil.pokhrel@gmail.com",
                  },
                  { icon: Twitter, label: "Twitter", href: "https://x.com/sushilpokhrel" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 sm:p-3.5 text-black hover:text-blue-700"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.1} />
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-medium transition-colors duration-200 relative group ${
                      isActive ? "text-blue-500" : "text-black hover:text-blue-700"
                    }`
                  }
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                      activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="cursor-pointer lg:hidden p-3 rounded-xl transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7 text-blue-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-55 max-w-[90vw] dark:bg-white shadow-xl overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-8 border-b border-gray-300 pb-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-500">Menu</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cursor-pointer px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600 transition-colors"
                >
                  <X className="w-6 h-6 dark:text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = link.id === activeSection;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={handleLinkClick}
                      className={`px-6 py-4 text-2xl font-medium rounded-xl transition-all duration-300 hover:bg-blue-900/40 ${
                        isActive
                          ? "bg-gray-400 text-blue-600"
                          : "text-black hover:bg-gray-500 hover:text-blue-700"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
