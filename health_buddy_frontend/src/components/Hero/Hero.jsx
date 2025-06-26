import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    // La clase 'hero' ahora aplica el fondo a todo el ancho
    <section className={styles.hero}>
      {/* El 'container' solo envuelve el contenido que debe centrarse */}
      <div className="container">
        <h1 className={styles.title}>
          Transforma tu <span className={styles.highlight}>energía</span>,
          <br />
          transforma tu vida
        </h1>
        <p className={styles.subtitle}>
          Tu compañero de fitness inteligente para crear, seguir y optimizar tus rutinas de ejercicio con la ayuda de IA.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.ctaButton}>
            Empieza Gratis Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
