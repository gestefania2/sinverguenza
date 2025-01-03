import { useNavigate } from 'react-router-dom';

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate('/');
  const navigateToPlayerSelection = () => navigate('/selecciondejugadores');
  const navigateToRegistro = () => navigate('/registro');
  
  //Función genérica para navegar a cualquier ruta
  const navigateTo = (path) => navigate(path);
  
  // O funciones con parámetros
  //const navigateToPlayerProfile = (playerId) => navigate(`/player/${playerId}`);

  return {
    navigateToHome,
    navigateToPlayerSelection,
    navigateToRegistro,
    navigateTo
     //navigateToPlayerProfile,
  };
};