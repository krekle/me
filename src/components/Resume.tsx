import React from "react";
import { useContentContext } from "src/context";

const Resume: React.FC = () => {
  const { data } = useContentContext();

  return (
    <section id="resume">
      <div className="row projects">
        <div className="three columns header-col">
          <h1>
            <span>{data.content.resume_header}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.projects &&
            data.projects.map((item: any, projectIndex: number) => {
              // new resume version
              if (item.version && item.version >= 2) {
                return (
                  <div
                    className="row item project"
                    key={`${item.ProjectName}-${item.Start}-${projectIndex}`}
                  >
                    <div className="twelve columns">
                      <h3 className="project-title">{item.ProjectName}</h3>
                      <div className="details">
                        <h5>{item.CompanyName}</h5>
                        <em className="date">
                          {item.Start} <span>-</span> {item.End}
                        </em>
                      </div>
                      <div className="project-roles">
                        {item.Roles.map((role: any, roleIndex: number) => (
                          <em
                            className="project-role"
                            key={`${role.Name}-${roleIndex}`}
                          >
                            {role.Name}
                          </em>
                        ))}
                      </div>
                      <p>{item.ProjectDescription}</p>

                      <p>{item.Contribution}</p>

                      {item.version === 3 ? (
                        <React.Fragment>
                          <h6>{data.content.resume_contributions}</h6>
                          <ul className="contributions">
                            {item.Bullets.map((bullet: string, bulletIndex: number) => (
                              <li key={`${bullet}-${bulletIndex}`}>{bullet}</li>
                            ))}
                          </ul>
                        </React.Fragment>
                      ) : (
                        <React.Fragment></React.Fragment>
                      )}

                      {item.Roles.map((role: any, roleIndex: number) => (
                        <div key={`${role.Name}-details-${roleIndex}`}>
                          <h6>{role.Name}</h6>
                          <p>{role.Description}</p>
                        </div>
                      ))}
                      {item.Tech && (
                        <div className="chips-dus">
                          {item.Tech.map((tech: string, techIndex: number) => (
                            <div
                              className="chip dus"
                              key={`${tech}-${techIndex}`}
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      )}
                      {/*item.Roles &&
                        <div className="chips">
                          {item.Roles.map((role) => <div className="chip">{role}</div>)}
                        </div>
                        */}
                    </div>
                  </div>
                );
              }

              // Old resume version
              return (
                <div
                  className="row item project"
                  key={`${item.ProjectName}-${item.Start}-${projectIndex}`}
                >
                  <div className="twelve columns">
                    <h3 className="project-title">{item.ProjectName}</h3>
                    <div className="details">
                      <h5>{item.CompanyName}</h5>
                      <em className="date">
                        {item.Start} <span>-</span> {item.End}
                      </em>
                    </div>
                    <p>{item.Description}</p>
                    {item.Tech && (
                      <div className="chips-dus">
                        {item.Tech.map((tech: string, techIndex: number) => (
                          <div
                            className="chip dus"
                            key={`${tech}-${techIndex}`}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    )}
                    {/*item.Roles &&
                      <div className="chips">
                        {item.Roles.map((role) => <div className="chip">{role}</div>)}
                      </div>
                      */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>{data.content.education_header}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.education &&
            data.education.map((item: any) => {
              return (
                <div
                  className="row item"
                  key={`${item.UniversityName}-${item.YearOfPassing}-${item.specialization}`}
                >
                  <div className="twelve columns">
                    <h3>{item.UniversityName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfPassing} {item.YearOfPassing}
                      </em>
                    </p>
                    {item.Achievements && <p>{item.Achievements}</p>}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>{data.content.work_header}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.work &&
            data.work.map((item: any) => {
              return (
                <div
                  className="row item"
                  key={`${item.CompanyName}-${item.MonthOfLeaving}-${item.YearOfLeaving}`}
                >
                  <div className="twelve columns">
                    <h3>{item.CompanyName}</h3>
                    <p className="info">
                      {item.specialization}
                      <span>&bull;</span>{" "}
                      <em className="date">
                        {item.MonthOfLeaving} {item.YearOfLeaving}
                      </em>
                    </p>
                    <p>{item.Achievements}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row publications">
        <div className="three columns header-col">
          <h1>
            <span>{data.content.publications_header}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.publications &&
            data.publications.map((item: any) => {
              return (
                <div className="row item" key={`${item.Name}-${item.Time}`}>
                  <div className="twelve columns">
                    <h3>{item.Name}</h3>
                    <p className="info">
                      {item.Description}
                      <span>&bull;</span> <em className="date">{item.Type}</em>
                    </p>
                    <p>{item.Time}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="row publications">
        <div className="three columns header-col">
          <h1>
            <span>{data.content.courses_header}</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {data.courses &&
            data.courses.map((item: any) => {
              return (
                <div className="row item" key={`${item.Name}-${item.Time}`}>
                  <div className="twelve columns">
                    <h3>{item.Name}</h3>
                    <p className="info">
                      {item.Description}
                      <span>&bull;</span> <em className="date">{item.Type}</em>
                    </p>
                    <p>{item.Time}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
