import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Creamos una función para obtener el valor inicial
  const getInitialValue = () => {
    try {
      const item = localStorage.getItem(key);
      // Si el item existe en localStorage, lo retornamos parseado
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // Inicializamos el estado con la función
  const [storedValue, setStoredValue] = useState(getInitialValue);

  // Función para actualizar tanto el estado como localStorage
  const setValue = (value) => {
    try {
      // Permitimos que value sea una función como en setState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      // Guardamos el estado
      setStoredValue(valueToStore);
      
      // Guardamos en localStorage
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Efecto para sincronizar con otros tabs/ventanas
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    // Escuchamos cambios en localStorage
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue];
};

export default useLocalStorage;