export type Section = {
    name: string,
    path: string,
};

export type Project = {
    name: string,
    img: imageProject,
    category: string,
    date: string,
};

type imageProject = {
    path: string,
    alt: string,
};