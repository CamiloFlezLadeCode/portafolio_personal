'use client'
import SobreMi from "@/components/sections/AboutSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <main>
        {/* <section id="inicio" className="min-hs-screen pt-2">

      </section> */}
        <SobreMi id="sobre_mi" />
        <TechnologiesSection id="tecnologias" />
        <ProjectsSection id="proyectos" />
        <ContactSection id="contacto" />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
