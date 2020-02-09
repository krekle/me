import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">
               <img className="profile-pic"  src="images/profile.jpg" alt="" />
            </div>

            <div className="nine columns main-col">

               <h2>Om Kristian</h2>
               <p>
               Software- og teknologientusiast fra Trondheim som bor i Oslo.<br/> Har en mastergrad i informatikk med spesialisering i kunstig intelligens fra NTNU Trondheim.
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Kontaktinformasjon</h2>
                  <p className="address">
       						<span>Kristian Ekle</span>
                     <br></br>
       						   <span>
                     Oslo, Norge
                    </span>
                    <br></br>
                    <span>kristian.ekle@gmail.com</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}