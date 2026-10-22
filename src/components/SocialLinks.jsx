import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaGoogleScholar,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const SOCIALS = [
  {
    key: "scholar",
    icon: FaGoogleScholar,
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=BPN7wnsAAAAJ&hl=en",
  },
  {
    key: "github",
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/pokhrelsushil/",
  },
  {
    key: "linkedin",
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sushilpokhrel/",
  },
  {
    key: "x",
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/sushilpokhrel",
  },
  {
    key: "email",
    icon: FaEnvelope,
    label: "Email",
    href: "mailto:sushil.pokhrel@gmail.com",
  },
];

// Flat brand icons in a single accent color, no background boxes.
const SocialLinks = ({
  iconClassName = "w-7 h-7",
  className = "",
  exclude = [],
}) => (
  <div className={`flex flex-wrap items-center gap-4 ${className}`}>
    {SOCIALS.filter((s) => !exclude.includes(s.key)).map(
      ({ key, icon, label, href }) => {
        const Icon = icon;
        return (
          <a
            key={key}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="text-[#1095c1] hover:text-[#0b6d8f] transition-colors duration-200"
          >
            <Icon className={iconClassName} aria-hidden="true" />
          </a>
        );
      },
    )}
  </div>
);

export default SocialLinks;
