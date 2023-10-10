import React from "react";
import { useContentContext } from "src/context";

const Contact: React.FC = () => {
  const { data } = useContentContext();

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">{data.content.lead}</p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              <a href="mailto:kristian.ekle@fyrconsulting.no">
                kristian.ekle@fyrconsulting.no
              </a>
            </h4>
          </div>
        </aside>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">
            <h4>
              <a href="https://www.linkedin.com/in/kristian-ekle-3150836b/">
                Linkedin
              </a>
            </h4>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
