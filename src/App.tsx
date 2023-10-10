import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Featured from "./components/Featured";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ContentProvider } from "./context";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ContentProvider>
          <Header />
          <About />
          <Featured />
          <Resume />
          <Portfolio />
          <Contact />
          <Footer />
        </ContentProvider>
      </div>
    );
  }
}
