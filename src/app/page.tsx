'use client';
import * as React from 'react';
import styles from "./page.module.css";

export default function Home(): React.JSX.Element {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header>
          <h1>Camilo Florez Laverde</h1>
          <p className={styles.typing}>Programador Web</p>
        </header>

        <section>
          <h2 className={styles.section_title}>Sobre mí</h2>
          {/* <p>
            Soy desarrollador full stack con experiencia en desarrollo web utilizando tecnologías como React, Next.js, Node.js y bases de datos SQL/NoSQL. Me apasiona crear soluciones limpias, eficientes y escalables.
          </p> */}
          <p style={{ textAlign: 'justify' }}>
            Desarrollador Full Stack con más de 2 años de
            experiencia creando soluciones web eficientes y
            escalables. Apasionado por la resolución de
            problemas y la optimización de la experiencia del
            usuario. Especializado en desarrollo ágil, código
            limpio y entrega de productos de alta calidad. He
            trabajado en equipos colaborativos,
            implementando soluciones innovadoras que
            mejoran el rendimiento y la usabilidad. Busco
            nuevos desafíos donde pueda aportar mi
            experiencia y seguir creciendo en un entorno
            dinámico y de alto impacto.
          </p>
        </section>

        <section>
          <h2 className={styles.section_title}>Proyectos destacados</h2>
          <div className={styles.projects}>
            <div className={styles.project}>
              <h3>App para el monitoreo de equipos en tiempo real</h3>
              <span className={styles.stack}>JavaScript, Nodejs, Express, MySQL, HTML, Bootstrap</span>
              <p>
                Aplicación completa para registrar, editar y controlar equipos en tiempo real.
              </p>
              <br />
              <a href="" target="_black" className={styles.VerRepositorio}>VER_REPOSITORIO</a>
            </div>
            <div className={styles.project}>
              <h3>Panel Administrativo basado en el alquiler y reparación de equipos para la construcción</h3>
              <span className={styles.stack}>Next.js, MUI, MySQL, TypeScript, Node.js, Express</span>
              <p>
                Interfaz responsiva para manejo de equipos, inventario, clientes, usuarios, respuestos, proyectos, vehiculos, bodegas. Control de remisiones, devoluciones, ordenes de servicio, estado de cuenta de los clientes y estado de equipos (reparación / alquiler).
              </p>
              <br />
              <a href="" target="_black" className={styles.VerRepositorio}>VER_REPOSITORIO</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className={styles.section_title}>Tecnologías</h2>
          <div className={styles.projects}>
            <div className={styles.project}>
              <h3>Lenguajes</h3>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Nodejs</li>
            </div>
            <div className={styles.project}>
              <h3>Bases de datos</h3>
              <li>SQl</li>
              <li>MySQL,</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </div>
            <div className={styles.project}>
              <h3>Frameworks</h3>
              <li>Nextjs</li>
              <li>Laravel</li>
              <li>Express</li>
            </div>
            <div className={styles.project}>
              <h3>Herramientas y metodologías</h3>
              <li>React</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>JWT</li>
              <li>Axios</li>
              <li>Scrum</li>
              <li>Bootstrap</li>
              <li>jQuery</li>
              <li>VSCode</li>
            </div>
          </div>
        </section>
        <section>
          <h2 className={styles.section_title}>Contacto</h2>
          <ul className={styles.contact}>
            <li><strong>Correo:</strong> camilodesarrollador@outlook.com</li>
            <li><strong>Celular:</strong><span> 3124129625</span></li>
            <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/juan-camilo-florez-laverde-138ab9322/" target="_blank">linkedin.com/in/juan-camilo-florez-laverde</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/CamiloFlezLadeCode" target="_blank">github.com/CamiloFlezLadeCode</a></li>
          </ul>
        </section>

        <button className={styles.VerCurriculum}>
          <a
            href="/Juan Camilo Florez Laverde - Desarrollador - Nodejs - PHP.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Ver Curriculum
          </a>
        </button>
      </main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} Camilo FlezLade. Todos los derechos reservados.
      </footer>
    </div>
  );
}
