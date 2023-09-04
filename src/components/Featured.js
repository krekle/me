import React, { Component } from 'react';

function FeatureListItem(props) {
  const [expanded, setExpanded] = React.useState(false);
  const expandCallback = React.useCallback(() => {
    setExpanded(!expanded);
  })

    return (
      <div className="feature">
        <div className="feature-title">
          <h6 onClick={expandCallback}>{props.name}</h6>
          <i class={expanded? "fa fa-caret-down" : "fa fa-caret-right"} aria-hidden="true"></i>
        </div>
        <p className={expanded ? 'expand' : 'collapse'}>{props.description}</p>
      </div>
    )
  }


export default class Featured extends Component {

  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="featured">
        <div className="row featured">
          <div className="three columns header-col">
            <h1><span>Fremhevet kompetanse</span></h1>
          </div>


          <div className="nine columns main-col">
            {resumeData.featured && resumeData.featured.map((item) => {
              return (
                <FeatureListItem name={item.Name} description={item.Description}></FeatureListItem>
                )
              })}
              <br/>
              Mer utfyllende informasjon tilgjengelig i fullstendig CV, pdf <a href="CV_KristianEkle.pdf">her</a>.
          </div>

        </div>
      </section>
    );
  }
}

