import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import styles from './Input.module.css';

const Input = ({ type, id, value, onChange, label, required }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordField = type === 'password';
  const currentType = isPasswordField ? (isPasswordVisible ? 'text' : 'password') : type;

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          type={currentType}
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className={isPasswordField ? styles.passwordInput : ''}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={styles.toggleButton}
            aria-label={isPasswordVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
