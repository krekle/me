import React from "react";
import { useContentContext } from "src/context";
import { MeSocialLinksType } from "src/types/types";
import Flag from "react-world-flags";

const Header: React.FC = () => {
  const { data, language, setLanguage } = useContentContext();

  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                {data.content.home}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                {data.content.about}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#featured">
                {data.content.competence}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                {data.content.cv}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                {data.content.portfolio}
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                {data.content.contact}
              </a>
            </li>
            <li
              className="lang-toggle"
              onClick={() => setLanguage(language === "no" ? "en" : "no")}
            >
              <span>{language === "no" ? "EN" : "NO"}</span>
              <Flag
                className="lang-select"
                code={language === "no" ? "gb" : "no"}
              />
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <img className="banner-img" src="images/avatar.png" alt="" />
            <h1 className="responsive-headline">Kristian Ekle.</h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              {data.content.desc}
              <br />
              {data.content.title}
            </h3>
            <hr />
            <ul className="social">
              {data.socialLinks &&
                data.socialLinks.map((item: MeSocialLinksType) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <p>{data.content.availability}</p>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;
