import { useEffect } from "react";
import { ContextProps, ContextProviderProps, MeDataType } from "./types/types";
import React from "react";
import resumeData from "./resumeData";
import resumeDataEn from "./resumeData_en";

const ContentContext = React.createContext<ContextProps>({
  data: resumeData as MeDataType,
  language: getBrowserLanguage(),
  setLanguage: (string) => null,
});

export const ContentProvider = ({ children }: ContextProviderProps) => {
  const [language, setLanguage] = React.useState<string>(getBrowserLanguage());
  const [data, setData] = React.useState<MeDataType>(getSelectedLang(language));

  useEffect(() => {
    const newData = language === "no" ? resumeData : resumeDataEn;
    setData(newData);
  }, [language]);

  return (
    <ContentContext.Provider value={{ data, language, setLanguage }}>
      {children}
    </ContentContext.Provider>
  );
};

function getSelectedLang(lang: string): MeDataType {
  return lang === "no"
    ? (resumeData as MeDataType)
    : (resumeDataEn as MeDataType);
}

function getBrowserLanguage(): string {
  return navigator.language[0].split("-")[0];
}

export const useContentContext = () => {
  const context = React.useContext(ContentContext);

  if (!context) {
    throw new Error(
      "useContentContext must be used inside the ContentProvider"
    );
  }

  return context;
};
