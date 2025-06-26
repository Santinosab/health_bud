import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { useAuth } from '../../context/AuthContext'; // Importa el hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth(); // Usa el contexto

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  }

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <Leaf className={styles.logoIcon} size={28} />
          <span>Health Buddy</span>
        </Link>
        
        <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
            <div className={styles.navLinks}>
              <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
              {/* Otros links si los tienes */}
            </div>
            
            <div className={styles.navActions}>
              {isAuthenticated ? (
                <>
                  <span className={styles.welcomeMessage}>Hola, {user.username}</span>
                  <button onClick={handleLogout} className={styles.logoutButton}>Cerrar Sesión</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <button className={styles.loginButton}>Ingresar</button>
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)}>
                    <button className={styles.signupButton}>Regístrate</button>
                  </Link>
                </>
              )}
            </div>
        </div>

        <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
