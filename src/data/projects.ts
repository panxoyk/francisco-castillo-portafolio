import type { Project } from "src/types";

export const projects: Project[] = [
    {
        name: "Calculadora de nota final",
        href: "calculadora-nota-final",
        img: {
            path: "calculadora-nota-final.png",
            alt: "Imagen de Calculadora de nota final",
        },
        category: "Aplicación web",
        date: "2024",
        description: "Este proyecto es una aplicación web que permite a los estudiantes ingresar evaluaciones simples y ponderadas, y ver en tiempo real el promedio final de la asignatura. El proyecto se desarrolló en React con TypeScript y se utilizó Zustand para el manejo de estados, mientras que la interfaz se estilizó mediante las clases de Tailwind CSS y componentes de Shadcn/ui.",
        tags: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "Shadcn/ui",
        ],
        sourceCode: "https://github.com/panxoyk/calculadora-nota-final",
        demo: "https://calculadora-nota-final.vercel.app/",
    },
];