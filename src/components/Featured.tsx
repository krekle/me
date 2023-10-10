import React from "react";

import { useContentContext } from "src/context";
import { MeFeaturedType } from "src/types/types";

function FeatureListItem(props: MeFeaturedType) {
  const [expanded, setExpanded] = React.useState(false);
  const expandCallback = React.useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <div className="feature">
      <div className="feature-title">
        <h6 onClick={expandCallback}>{props.name}</h6>
        <i
          className={expanded ? "fa fa-caret-down" : "fa fa-caret-right"}
          aria-hidden="true"
        ></i>
      </div>
      <p className={expanded ? "expand" : "collapse"}>{props.description}</p>
    </div>
  );
}

const Featured: React.FC = () => {
  const { data } = useContentContext();

  return (
    <section id="featured">
      <div className="row featured">
        <div className="three columns header-col">
          <h1>
            <span>{data.content.featured_header}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.featured &&
            data.featured.map((item: MeFeaturedType) => {
              return (
                <FeatureListItem
                  name={item.name}
                  description={item.description}
                ></FeatureListItem>
              );
            })}
          <br />
          {data.content.cv_promo}
          <a href="CVKristianEkle_web.pdf">{data.content.cv_link}</a>.
        </div>
      </div>
    </section>
  );
};

export default Featured;
