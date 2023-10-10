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
    content: MeHomeContentType & MeAboutContentType & MeFeaturedContentType & MeResumeContentType & MePortfolioContentType & MeContactContentType;
    socialLinks: Array<MeSocialLinksType>;
    featured: Array<MeFeaturedType>;
    projects: Array<MeProjectsType>;
    education: Array<MeEducationType>;
    work: Array<MeWorkType>;
    publications: Array<MePublicationType>;
    courses: Array<MeCoursesType>;
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

export type MeContactContentType = {
    lead: string,
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

export type MeProjectRoleType = {
    Name: string,
    Description: string,
}

export type MeProjectsType = {
    version?: number,
    CompanyName: string,
    ProjectName: string,
    ProjectDescription?: string,
    Description?: string,
    Contribution?: string,
    Roles: Array<MeProjectRoleType> | Array<string>,
    Bullets?: Array<string>,
    Tech: Array<string>,
    Start: string,
    End: string,
};

export type MeEducationType = {
    UniversityName: string,
    specialization: string,
    MonthOfPassing: string,
    YearOfPassing: string,
    Achievements: string
}

export type MeWorkType = {
    CompanyName: string,
    specialization: string,
    MonthOfLeaving: string,
    YearOfLeaving: string,
    Achievements: string
}

export type MeCoursesType = {
    Type: string,
    Name: string,
    Description: string,
    Time: string
}

export type MePublicationType = {
    Type: string,
    Name: string,
    Description: string,
    Time: string
}

export type MePortfolioType = {
    name: string,
    description: string,
    imgurl: string
};


