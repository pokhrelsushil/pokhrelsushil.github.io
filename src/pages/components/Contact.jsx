import React, { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  SendIcon,
} from "lucide-react";
import { FaGoogleScholar } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm('service_wzurt6j', 'template_2gruxj6', form.current, {
          publicKey: 'WnfWGgHr8M-6mXMkd',
        })
        .then(
          () => {
            setSuccessMessage("Message sent successfully!");
            setErrorMessage("");
            form.current.reset(); // Reset the form after successful submission
            setTimeout(() => {
              setSuccessMessage("");
            }, 3000);
          },
          (error) => {
            setErrorMessage("Failed to send message. Please try again.");
            setSuccessMessage("");
            console.error("EmailJS Error:", error);
            setTimeout(() => {
              setErrorMessage("");
            }, 3000);
          }
        );
    };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-50/80 py-12 sm:py-16 md:py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-4">
            Contact Me
          </h2>
          <div className="w-28 sm:w-32 md:w-40 lg:w-48 h-1 bg-blue-400 mx-auto rounded-full shadow-lg shadow-blue-500/60"></div>
        </div>

        {/* Responsive Grid: Stack on mobile, side-by-side on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left: Get In Touch */}
          {/* <div className="dark:bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-gray-400/30 transition-all duration-500"> */}
          <div
            className="
              dark:bg-white/95 backdrop-blur-md 
              rounded-2xl md:rounded-3xl 
              p-8 md:p-10 lg:p-12 
  
              shadow-[0_-4px_25px_-8px_rgba(0,0,0,0.6),0_3px_20px_-8px_rgba(0,0,0,0.04)]
              dark:shadow-[0_-2px_36px_-16px_rgba(0,0,0,0.3),0_2px_16px_-10px_rgba(0,0,0,0.20)]
  
              hover:shadow-[0_-8px_30px_-8px_rgba(0,0,0,0.12),0_10px_20px_-8px_rgba(0,0,0,0.1)]
              dark:hover:shadow-[0_-12px_40px_-8px_rgba(0,0,0,0.2),0_10px_16px_-6px_rgba(0,0,0,0.20)]
  
              transition-shadow duration-500"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 md:mb-6">
              Get In Touch
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 md:mb-12 leading-relaxed">
              If you have any queries, feel free to reach out to me.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4  flex-shrink-0">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-blue-600 hover:text-blue-700" />
                </div>
                <div>
                  <p className="md:text-lg md:text-base text-gray-600">Email</p>
                  <a
                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sushil.pokhrel@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl text-gray-700 hover:text-blue-500 transition-colors duration-300"
                  >
                    sushil.pokhrel@gmail.com

                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8 text-blue-600 hover:text-blue-700" />
                </div>
                <div>
                  <p className="md:text-lg md:text-base text-gray-600">
                    Location
                  </p>
                  <p className="text-lg sm:text-xl text-gray-700">
                    South-East Asia | North-America
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 md:gap-6 mt-10 md:mt-14">
              <a
                href="https://www.linkedin.com/in/sushilpokhrel/"
                className="p-3 md:p-4 bg-blue-600/30 rounded-2xl hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 md:w-8 md:h-8 text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://github.com/pokhrelsushil/"
                className="p-3 md:p-4 bg-blue-600/30 rounded-2xl hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 md:w-8 md:h-8 text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=BPN7wnsAAAAJ&hl=en"
                className="p-3 md:p-4 bg-blue-600/30 rounded-2xl hover:scale-110 transition-all duration-300"
                aria-label="Google Scholar"
              >
                <FaGoogleScholar className="w-6 h-6 md:w-8 md:h-8 text-blue-500 hover:text-blue-700" />
              </a>
              <a
                href="https://x.com/sushilpokhrel"
                className="p-3 md:p-4 bg-blue-600/30 rounded-2xl hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6 md:w-8 md:h-8 text-blue-500 hover:text-blue-700" />
              </a>
            </div>
          </div>

          {/* Right: Send Message Form */}
          {/* <div className="dark:bg-white backdrop-blur-md rounded-2xl md:rounded-2xl p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-gray-400/10 transition-all duration-500"> */}
          <div
            className="
              dark:bg-white/95 backdrop-blur-md 
              rounded-2xl md:rounded-3xl 
              p-8 md:p-10 lg:p-12 
  
              shadow-[0_-4px_25px_-8px_rgba(0,0,0,0.6),0_3px_20px_-8px_rgba(0,0,0,0.04)]
              dark:shadow-[0_-2px_36px_-16px_rgba(0,0,0,0.3),0_2px_16px_-10px_rgba(0,0,0,0.20)]
  
              hover:shadow-[0_-8px_30px_-8px_rgba(0,0,0,0.12),0_10px_20px_-8px_rgba(0,0,0,0.1)]
              dark:hover:shadow-[0_-12px_40px_-8px_rgba(0,0,0,0.2),0_10px_16px_-6px_rgba(0,0,0,0.20)]
  
              transition-shadow duration-500"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-6 md:mb-8">
              Send Me a Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-gray-200 border border-gray-400 rounded-xl text-black placeholder-black text-base md:text-lg focus:outline-none focus:border-gray-600 transition-all duration-300"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-gray-200 border border-gray-400 rounded-xl text-black placeholder-black text-base md:text-lg focus:outline-none focus:border-gray-600 transition-all duration-300"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-gray-200 border border-gray-400 rounded-xl text-black placeholder-black text-base md:text-lg focus:outline-none focus:border-gray-600 transition-all duration-300"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-5 py-3.5 md:px-6 md:py-4 bg-gray-200 border border-gray-400 rounded-xl text-black placeholder-black text-base md:text-lg focus:outline-none focus:border-gray-600 transition-all duration-300 resize-none"
                required
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-4 w-full  md:py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-lg md:text-xl rounded-xl shadow-md hover:from-blue-600 hover:to-blue-700 hover:shadow-md hover:scale-102 transition-all duration-300"
              >
                <SendIcon className="h-5 w-5" />
                Send Message
              </button>
              {successMessage && (
                <p className="text-green-400 text-base md:text-lg text-center font-medium">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-600 text-base md:text-lg text-center font-medium">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
