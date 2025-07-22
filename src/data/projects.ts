import type { Project } from "src/types";

export const projects: Project[] = [
    {
        name: "U Tasker App",
        href: "u-tasker-app",
        img: {
            path: "u-tasker-app.png",
            alt: "Imagen de U Tasker App",
        },
        category: "Aplicación web",
        date: "2025",
        description: "Aplicación web desarrollada con Next.js para la gestión académica de estudiantes. Permite organizar tareas por estado, visualizar horarios semanales de clases, y cuenta con un sistema de autenticación seguro y proceso de onboarding guiado. Diseñada para optimizar la planificación y el seguimiento del rendimiento académico.",
        tags: [
            "Next.js",
            "Material UI",
            "Supabase",
        ],
        sourceCode: "https://github.com/panxoyk/u-tasker-app",
        demo: "https://u-tasker-app.vercel.app",
    },
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
