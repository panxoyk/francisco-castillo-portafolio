export type Section = {
    name: string,
    path: string,
};

export type Project = {
    name: string,
    href: string,
    img: ImageProject,
    category: string,
    date: string,
    description?: string,
    tags?: string[],
    sourceCode?: string,
    demo?: string,
};

type ImageProject = {
    path: string,
    alt: string,
};

export type Tech = {
    name: string;
    url: string;
};
