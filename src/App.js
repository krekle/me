import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Featured from "./components/Featured";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import resumeData from "./resumeData";

var LanguageContext = React.createContext(null);

function LanguageProvider({ initialState = "en", children }) {
  const [lang, setLang] = React.useState(initialState);

  return (
    <LanguageContext.Provider value={resumeData}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return React.useContext(LanguageContext);
}

export default class App extends Component {
  render() {
    return (
      <LanguageProvider>
        <div className="App">
          <Header resumeData={resumeData} />
          <About resumeData={resumeData} />
          <Featured resumeData={resumeData} />
          <Resume resumeData={resumeData} />
          <Portfolio resumeData={resumeData} />
          <ContactUs resumeData={resumeData} />
          <Footer resumeData={resumeData} />
        </div>
      </LanguageProvider>
    );
  }
}
