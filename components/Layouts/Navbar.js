import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // Scroll-based active section detection (only on homepage)
  useEffect(() => {
    if (router.asPath !== "/") return;

    // Map sections - null means no corresponding nav item (keep previous active)
    const sections = [
      { id: "home", navPath: "/", hasNavItem: true },
      { id: "features", navPath: null, hasNavItem: false },
      { id: "about", navPath: "/about-us/", hasNavItem: true },
      { id: "services", navPath: "/services/", hasNavItem: true },
      { id: "why-choose-us", navPath: null, hasNavItem: false },
      { id: "projects", navPath: "/portfolio", hasNavItem: true },
      { id: "team", navPath: null, hasNavItem: false },
      { id: "testimonials", navPath: null, hasNavItem: false },
      { id: "blog", navPath: "/blog/", hasNavItem: true },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      // If at the top of the page, set home as active
      if (window.scrollY < 100) {
        setActiveSection("/");
        return;
      }

      // Find the section currently in view
      // Check sections from bottom to top to get the most recent section first
      let activeNavPath = null;
      let bestMatch = null;
      let bestMatchDistance = Infinity;
      
      // Find the section whose center is closest to the viewport center
      const viewportCenter = window.scrollY + (window.innerHeight / 2);
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionCenter = sectionTop + (sectionHeight / 2);
          const sectionBottom = sectionTop + sectionHeight;
          
          // Check if section is in viewport
          if (window.scrollY < sectionBottom && window.scrollY + window.innerHeight > sectionTop) {
            // Calculate distance from viewport center to section center
            const distance = Math.abs(viewportCenter - sectionCenter);
            
            // Keep track of the closest section
            if (distance < bestMatchDistance) {
              bestMatchDistance = distance;
              bestMatch = i;
            }
          }
        }
      }
      
      // If we found a best match, determine the active nav path
      if (bestMatch !== null) {
        if (sections[bestMatch].hasNavItem) {
          // Section has nav item, use it
          activeNavPath = sections[bestMatch].navPath;
        } else {
          // Section has no nav item, find the last valid nav path before this section
          // Check previous sections (earlier in array = higher on page) to find the last one with a nav item
          for (let j = bestMatch - 1; j >= 0; j--) {
            if (sections[j].hasNavItem) {
              activeNavPath = sections[j].navPath;
              break;
            }
          }
          // If no previous section found, use home as default
          if (activeNavPath === null) {
            activeNavPath = "/";
          }
        }
      }
      
      // Only update if we found a section, otherwise keep current (sticky behavior)
      if (activeNavPath !== null) {
        setActiveSection(activeNavPath);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.asPath]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="neemo-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/Logo-01.png" alt="Techsa Zone Logo" />
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${
                        router.asPath == "/" 
                          ? (activeSection === "" || activeSection === "/" ? "active" : "")
                          : (currentPath == "/" ? "active" : "")
                      }`}
                    >
                      Home 
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${
                        router.asPath == "/" 
                          ? (activeSection == "/about-us/" ? "active" : "")
                          : (currentPath == "/about-us/" ? "active" : "")
                      }`}
                    >
                      About us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/"
                      className={`nav-link ${
                        router.asPath == "/" 
                          ? (activeSection == "/services/" ? "active" : "")
                          : (currentPath == "/services/" ? "active" : "")
                      }`}
                    >
                      Services
                    </Link>

                  </li>

                  <li className="nav-item">
                    <Link
                      href="/portfolio"
                      className={`nav-link ${
                        router.asPath == "/" 
                          ? (activeSection == "/portfolio" ? "active" : "")
                          : (currentPath == "/portfolio" ? "active" : "")
                      }`}
                    >
                      Portfolio
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blog/"
                      className={`nav-link ${
                        router.asPath == "/" 
                          ? (activeSection == "/blog/" ? "active" : "")
                          : (currentPath == "/blog/" ? "active" : "")
                      }`}
                    >
                      Blog 
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/pricing/"
                      className={`nav-link ${
                        currentPath == "/pricing/" && "active"
                      }`}
                    >
                      Pricing 
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="others-options">
                  <Link href="/contact/" className="get-quote-btn">
                    Get Quote
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>


    </>
  );
};

export default Navbar;
