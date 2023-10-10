import React from "react";

import { useContentContext } from "src/context";
import { MePortfolioType } from "src/types/types";

const Portfolio: React.FC = () => {
  const { data } = useContentContext();

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>{data.content.portfolie_header}</h1>
          <div id="portfolio-wrapper">
            {data.portfolio &&
              data.portfolio.map((item: MePortfolioType) => {
                return (
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <img src={`${item.imgurl}`} className="item-img" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
