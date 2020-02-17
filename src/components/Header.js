import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Hjem</a></li>
               <li><a className="smoothscroll" href="#about">Om</a></li>
             <li><a className="smoothscroll" href="#resume">CV</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portefølje</a></li>
               <li><a className="smoothscroll" href="#contact">Kontakt</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <img className="banner-img"  src="images/avatar.png" alt="" />
               <h1 className="responsive-headline">Kristian Ekle.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>
                Utvikler med erfaring fra roller som Arkitekt og Data Scientist.<br/>
                Jobber som freelance / selvstendig it-konsulent og kan engasjeres for de aller fleste typer oppdrag innen softwareutvikling.
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
            <p>Ledig for nytt oppdrag fra 01.05.2020</p>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}