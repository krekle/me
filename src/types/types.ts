import { ReactNode } from "react";

export interface ContextProps {
    readonly data: MeDataType;
    readonly language: string;
    readonly setLanguage: (language: string) => void;
};

export type ContextProviderProps = {
    children?: ReactNode
}

export type MeDataType = {
    content: MeHomeContentType & MeAboutContentType & MeFeaturedContentType & MeResumeContentType & MePortfolioContentType;
    socialLinks: Array<MeSocialLinksType>;
    featured: Array<MeFeaturedType>;
    projects: any;
    education: any;
    work: any;
    publications: any;
    courses: any;
    portfolio: Array<MePortfolioType>;
};


export type MeHomeContentType = {
    home: string,
    about: string,
    competence: string,
    cv: string,
    portfolio: string,
    contact: string,
    desc: string,
    title: string,
    availability: string
};

export type MeAboutContentType = {
    about_header: string,
    about_short: string,
    about_long: string,
    contact_header: string,
    contact_name: string,
    contact_address: string,
    contact_email: string
};

export type MeFeaturedContentType = {
    featured_header: string,
    cv_promo: string,
    cv_link: string,
};

export type MeResumeContentType = {
    resume_header: string,
    resume_contributions: string,
    education_header: string,
    work_header: string,
    publications_header: string,
    courses_header: string,
};

export type MePortfolioContentType = {
    portfolie_header: string
};

export type MeSocialLinksType = {
    name: string,
    url: string,
    className: string,
};

export type MeFeaturedType = {
    name: string,
    description: string,
};

export type MePortfolioType = {
    name: string,
    description: string,
    imgurl: string
};


