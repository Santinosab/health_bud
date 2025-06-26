import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para obtener el CSRF token de las cookies
  const getCsrfToken = () => {
    const csrfCookie = document.cookie.split('; ').find(row => row.startsWith('csrftoken='));
    return csrfCookie ? csrfCookie.split('=')[1] : null;
  };

  // Verificar si hay un usuario logueado al cargar la app
  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/user/');
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error al verificar usuario:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkLoggedInUser();
  }, []);

  const register = async (username, email, password) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCsrfToken(),
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        return { success: true };
      } else {
        const errorData = await response.json();
        let errorMessage = "Error en el registro.";
        if (typeof errorData === 'object' && errorData !== null) {
            errorMessage = Object.entries(errorData).map(([key, value]) => `${key}: ${value.join(', ')}`).join(' ');
        }
        return { success: false, error: errorMessage };
      }
    } catch (error) {
      return { success: false, error: "Error de red al intentar registrar." };
    }
  };

  const login = async (username, password) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCsrfToken(),
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data);
        return { success: true };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.error || "Error de inicio de sesión" };
      }
    } catch (error) {
      return { success: false, error: "Error de red" };
    }
  };

  const logout = async () => {
    try {
      await fetch('http://127.0.0.1:8000/api/auth/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCsrfToken(),
        },
      });
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    logout,
    register,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
