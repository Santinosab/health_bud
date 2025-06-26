import React from 'react';
import { Leaf, Youtube, Twitter, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container`}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <a href="#" className={styles.logo}>
              <Leaf className={styles.logoIcon} size={28} />
              <span>Health Buddy</span>
            </a>
            <p className={styles.tagline}>Tu compañero de fitness inteligente.</p>
          </div>

          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Explorar</h4>
            <ul>
              <li><a href="#">Características</a></li>
              <li><a href="#">Rutinas</a></li>
              <li><a href="#">Precios</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div className={styles.socialColumn}>
            <h4 className={styles.columnTitle}>Síguenos</h4>
            <div className={styles.socialIcons}>
              <a href="#"><Twitter size={24} /></a>
              <a href="#"><Instagram size={24} /></a>
              <a href="#"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Health Buddy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
