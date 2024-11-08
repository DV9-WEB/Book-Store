import React from "react";

const Footer = () => {
  return (
    <div>
      <hr className="border-gray-600 border-t-1" />
      <footer className="footer footer-center text-base-content text-gray-300 rounded p-10">
        {/* Navigation Links */}
        <nav className="grid grid-flow-col gap-6">
          <a href="/about" className="link link-hover">
            About us
          </a>
          <a href="/course" className="link link-hover">
            Courses
          </a>
          <a href="/contact" className="link link-hover">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/dv9_web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M22.46 6.004c-.793.352-1.642.59-2.536.694.911-.547 1.61-1.415 1.94-2.447-.854.507-1.798.875-2.804 1.073-.806-.86-1.957-1.398-3.226-1.398-2.54 0-4.6 2.06-4.6 4.6 0 .36.04.71.12 1.05-3.82-.19-7.2-2.02-9.46-4.79-.4.69-.63 1.48-.63 2.32 0 1.6.82 3.02 2.08 3.85-.75-.02-1.47-.23-2.09-.58v.06c0 2.25 1.61 4.13 3.75 4.56-.39.1-.79.15-1.2.15-.3 0-.58-.03-.87-.08.59 1.84 2.29 3.19 4.3 3.23-1.58 1.24-3.57 1.98-5.73 1.98-.37 0-.75-.02-1.12-.07 2.04 1.3 4.45 2.06 7.05 2.06 8.46 0 13.1-7 13.1-13.1 0-.2 0-.41-.02-.61.89-.64 1.65-1.44 2.26-2.34z"></path>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/deepanshu-verma-686aaa2b1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.25c-1.06 0-1.75-.71-1.75-1.75s.69-1.75 1.75-1.75c1.06 0 1.75.71 1.75 1.75s-.69 1.75-1.75 1.75zm14.5 11.25h-3v-5.25c0-1.25-.25-2.25-1.75-2.25-1.5 0-2 1.06-2 2.25v5.25h-3v-10h3v1.25c.44-.69 1.25-1.25 2.25-1.25 2 0 3.5 1.5 3.5 3.75v6.25z"></path>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 0c-6.63 0-12 5.37-12 12 0 5.31 3.44 9.81 8.21 11.41.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.08-.74.09-.72.09-.72 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.99 0-1.32.47-2.39 1.24-3.23-.13-.31-.54-1.55.12-3.23 0 0 1.01-.32 3.32 1.23.96-.27 1.98-.4 3-.4 1.02 0 2.04.13 3 .4 2.3-1.55 3.32-1.23 3.32-1.23.66 1.68.25 2.92.12 3.23.77.84 1.24 1.91 1.24 3.23 0 4.67-2.81 5.68-5.5 5.98.43.37.82 1.1.82 2.23v3.29c0 .32.21.69.82.58 4.78-1.6 8.21-6.1 8.21-11.41 0-6.63-5.37-12-12-12z"></path>
              </svg>
            </a>
          </div>
        </nav>

        {/* Copyright Text */}
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Deepanshu Verma
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
