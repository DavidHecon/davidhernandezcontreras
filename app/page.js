"use client";

import { Caveat } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Code,
  User,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

const caveat = Caveat({subsets: ["latin"],weight: ["600"],});

export default function Home() {
  const projects = [
    {
      title: "BlogDeCafé",
      image: "/img/cafeteria.png",
      link: "https://more-than-a-drink.netlify.app",
      description:
        "Blog informativo sobre café, recetas y cursos especializados.",
      tech: ["HTML", "JavaScript", "CSS", "Diseño responsivo"],
    },
    {
      title: "Starbucks – Landing Page (Proyecto educativo)",
      image: "/img/starb.png",
      link: "https://gleeful-mandazi-4920da.netlify.app",
      description: "Réplica visual del sitio oficial de Starbucks.",
      tech: ["HTML", "CSS", "Diseño responsivo"],
    },
    {
      title: "Juego del número secreto!",
      image: "/img/juego-secreto.png",
      link: "https://stupendous-naiad-6f79d1.netlify.app",
      description:
        "Mini juego interactivo para adivinar un número del 1 al 10.",
      tech: ["HTML", "JavaScript", "CSS"],
    },
    {
      title: "Encriptador de Texto",
      image: "/img/encriptador.png",
      link: "https://encriptador-oracle-nexteducation.netlify.app",
      description: "Aplicación web funcional para cifrado de textos.",
      tech: ["HTML", "JavaScript", "CSS"],
    },
    {
      title: "Hecon Shop",
      image: "/img/hecon.png",
      link: "https://heconshop.netlify.app/",
      description: "Tienda en línea de moda streetwear.",
      tech: ["Next.js", "Framer Motion"],
    },
    {
      title: "Landing Fokus",
      image: "/img/fokus.png",
      link: "https://delightful-pie-fc718d.netlify.app",
      description: "Herramienta enfocada para productividad y concentración.",
      tech: ["HTML", "JavaScript", "CSS"],
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Vue",
    "Tailwind",
    "Bootstrap",
    "jQuery",
    "Node.js",
    "MySQL",
    "Git",
    "GitHub",
    "GitLab",
    "POstman",
    "Figma",
    "WordPress",
    "Java",
    "Python",
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % projects.length);
  const prev = () => setIndex((index - 1 + projects.length) % projects.length);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen relative z-10 overflow-hidden">
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-zinc-800 shadow-xl mb-8"
        >
          <img
            src="/img/foto.jpg"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold tracking-tight"
        >
          Desarrollador Web
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-xl mt-6"
        >
          Creo experiencias digitales modernas, enfocadas en rendimiento,
          animaciones y escalabilidad.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`${caveat.className} text-1xl md:text-2xl text-gray-300 tracking-tight mt-6`}
        >
          Menos complejidad. Más impacto.
        </motion.p>

        <div className="flex gap-4 mt-10">
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-3 rounded-2xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition"
          >
            Contacto
          </button>
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-6 flex items-center gap-3">
          <User /> Sobre mí
        </h2>
        <p className="text-gray-400 leading-relaxed">
          ¡Hola! Soy Ingeniero en Informática, apasionado por la tecnología y
          enfocado en desarrollarme como Developer Front-End. Tengo habilidades
          sólidas para trabajar en equipo y bajo presión, lo que me permite
          colaborar eficazmente en proyectos desafiantes. Soy entusiasta de las
          nuevas herramientas tecnológicas, me adapto rápidamente a los cambios,
          siempre en búsqueda de aprender y mejorar mis conocimientos.
        </p>
      </section>

      <section id="education" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-14 flex items-center gap-3">
          🎓 Formación profesional
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl group"
          >
            <img
              src="/img/logoipn.webp"
              alt="UPIICSA IPN"
              className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-1">
                Ingeniería en Informática
              </h3>
              <p className="text-gray-400">
                UPIICSA – Instituto Politécnico Nacional
              </p>
              <span className="text-sm text-gray-500 block mt-2">
                2021 - 2026
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl group"
          >
            <img
              src="/img/oracleAlura.png"
              alt="Cursos y especialización"
              className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Formación en Front End y Backend
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Oracle Next Education
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl group"
          >
            <img
              src="/img/udemy.jpg"
              alt="Cursos y especialización"
              className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Cursos y especialización
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Formación continua en desarrollo web frontend y backend: React,
                Next.js, JavaScript, consumo de APIs, control de versiones y
                buenas prácticas de desarrollo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl group"
          >
            <img
              src="/img/devf.jpg"
              alt="Cursos y especialización"
              className="w-full h-56 object-cover opacity-80 group-hover:opacity-100 transition"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">
                Frontend Asistido con IA
              </h3>
              <p className="text-gray-400 leading-relaxed">DEV.F</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="bg-zinc-950 py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-14 flex items-center gap-3">
            <Code /> Stack tecnológico
          </h2>

          <div className="relative w-full overflow-hidden mb-10">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: [0, -800] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              {[...skills, ...skills].map((skill, i) => (
                <div
                  key={`top-${i}`}
                  className="w-40 h-24 flex flex-col items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill
                      .toLowerCase()
                      .replace(".", "")}`}
                    alt={skill}
                    className="h-10 mb-2"
                  />
                  <span className="text-sm text-gray-400">{skill}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: [-800, 0] }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            >
              {[...skills, ...skills].reverse().map((skill, i) => (
                <div
                  key={`bottom-${i}`}
                  className="w-40 h-24 flex flex-col items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl"
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill
                      .toLowerCase()
                      .replace(".", "")}`}
                    alt={skill}
                    className="h-10 mb-2"
                  />
                  <span className="text-sm text-gray-400">{skill}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-semibold mb-12 text-center">Proyectos</h2>

        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
          {/* BOTÓN IZQUIERDA */}
          <button
            onClick={prev}
            className="absolute left-0 z-20 p-3 rounded-full bg-zinc-900 hover:bg-zinc-800"
          >
            <ArrowLeft />
          </button>

          {/* SLIDE IZQUIERDO */}
          <div className="absolute -translate-x-[55%] scale-90 opacity-40 z-0 transition-all duration-500">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl w-[720px]">
              <img
                src={
                  projects[(index - 1 + projects.length) % projects.length]
                    .image
                }
                alt="preview-left"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          {/* SLIDE CENTRAL */}
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
              mass: 0.8,
            }}
            className="relative z-10 w-full max-w-4xl px-4 md:px-0"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl w-full">
              {/* Imagen responsive */}
              <div className="w-full aspect-video">
                <img
                  src={projects[index].image}
                  alt={projects[index].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {projects[index].title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm md:text-base">
                  {projects[index].description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[index].tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={projects[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition text-sm md:text-base"
                >
                  Ver proyecto <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </motion.div>
          {/* SLIDE DERECHO */}
          <div className="absolute translate-x-[55%] scale-90 opacity-40 z-0 transition-all duration-500">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl w-[720px]">
              <img
                src={projects[(index + 1) % projects.length].image}
                alt="preview-right"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          {/* BOTÓN DERECHA */}
          <button
            onClick={next}
            className="absolute right-0 z-20 p-3 rounded-full bg-zinc-900 hover:bg-zinc-800"
          >
            <ArrowRight />
          </button>
        </div>
      </section>

      <section id="contact" className="bg-zinc-950 py-24 text-center">
        <h2 className="text-4xl font-semibold mb-6 flex justify-center gap-3">
          <Mail /> Contacto
        </h2>
        <p className="text-gray-400 mb-10">
          ¿Tienes un proyecto en mente o una oportunidad?
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/DavidHecon"
            className="hover:text-white"
            target="_blank"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/david-hernandez-contreras/"
            className="hover:text-white"
            target="_blank"
          >
            <Linkedin />
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-10 text-center text-gray-500">
        © {new Date().getFullYear()} Portafolio — Desarrollador Web
      </footer>
    </main>
  );
}
