import React, { useState, useEffect } from 'react';
import { Dumbbell } from 'lucide-react';
import styles from './Features.module.css';

const RoutineCard = ({ routine }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Dumbbell size={32} />
      </div>
      <h3 className={styles.cardTitle}>{routine.name}</h3>
      <p className={styles.cardText}>{routine.description}</p>
    </div>
  );
};

const RoutineList = () => {
  const [routines, setRoutines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/routines/')
      .then(response => {
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        setRoutines(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={styles.message}>Cargando rutinas...</p>;
  if (error) return <p className={styles.message}>Error: {error}</p>;

  // La clase 'featuresSection' ahora aplica el fondo a todo el ancho
  return (
    <section id="features" className={styles.featuresSection}>
      {/* El 'container' solo envuelve el contenido */}
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Rutinas Disponibles</h2>
          <p className={styles.sectionSubtitle}>
            Estas son las rutinas cargadas desde el backend.
          </p>
        </div>
        <div className={styles.grid}>
          {routines.map(routine => (
            <RoutineCard key={routine.id} routine={routine} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutineList;
