import { useNavigate } from 'react-router-dom';

export const useCustomNavigate = () => {
  const navigate = useNavigate();

  const navigateToHome = () => navigate('/');
  //const navigateToPlayerSelection = () => navigate('/player-selection');
  //const navigateToGame = () => navigate('/game');
  
  // También puedes añadir una función genérica para navegar a cualquier ruta
  const navigateTo = (path) => navigate(path);
  
  // O funciones con parámetros
  const navigateToPlayerProfile = (playerId) => navigate(`/player/${playerId}`);

  return {
    navigateToHome,
    navigateTo,
    navigateToPlayerProfile,
  };
};