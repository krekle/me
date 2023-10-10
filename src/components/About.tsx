import React from "react";

import { useContentContext } from "src/context";

const About: React.FC = () => {
  const { data } = useContentContext();

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profile.jpg" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>{data.content.about_header}</h2>
          <p>
            {data.content.about_short}
            <br />
          </p>
          <p className="display-linebreak">{data.content.about_long}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>{data.content.contact_header}</h2>
              <p className="address">
                <span>{data.content.contact_name}</span>
                <br></br>
                <span>{data.content.contact_address}</span>
                <br></br>
                <span>{data.content.contact_email}</span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
