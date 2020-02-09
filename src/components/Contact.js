import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Ta gjerne kontakt på epost eller på linkedin.
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4><a href="https://www.linkedin.com/in/kristian-ekle-3150836b/">Linkedin</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}