import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row projects">

          <div className="three columns header-col">
            <h1><span>Prosjekter</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.projects && resumeData.projects.map((item) => {
                return (
                  <div className="row item project">
                    <div className="twelve columns">
                      <h3 className="project-title">{item.ProjectName}</h3>
                      <p className="details">
                        <h5>{item.CompanyName}</h5>
                        <em className="date">{item.Start} <span>&bull;</span> {item.End}</em
                        ></p>
                      <p>
                        {item.Description}
                      </p>
                      {item.Tech &&
                      <div className="chips-dus">
                        {item.Tech.map((tech) => <div className="chip dus">{tech}</div>)}
                      </div>
                      }
                      {/*item.Roles &&
                      <div className="chips">
                        {item.Roles.map((role) => <div className="chip">{role}</div>)}
                      </div>
                      */}
                      
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Utdannelse</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Arbeid</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>


        {/*}<div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p>
            {
              resumeData.projects && resumeData.projects.map(
                (item) => {item.tech && item.tech.map((t) => {t})}
              )}
            }
            </p>

            <div className="bars">

              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                        </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>

              </div>*/}

      </section>
    );
  }
}