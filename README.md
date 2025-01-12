# Sin Vergüenza: Frontend de la App Móvil de juego de cartas
Una experiencia interactiva y divertida para jugar con amigos, desarrollada con React + Vite

## 🎮 Descripción General
Frontend de "Sin Vergüenza", una aplicación móvil de juego de cartas diseñada para fomentar la interacción social y la diversión en grupo. Esta parte del proyecto se centra en crear una interfaz de usuario intuitiva y atractiva que complementa la funcionalidad del backend existente.

## 🎨 Características de la Interfaz

Diseño responsive optimizado para dispositivos móviles
Interfaz intuitiva para la selección de cartas y votación
Animaciones fluidas para mejorar la experiencia de usuario.

## 🛠️ Tecnologías Utilizadas

Frontend:
JavaScript
React 18
Vite

## 📋 Requisitos

(Para descargar/clonar el proyecto)
- **[Git](git-scm.com.)** 

(Para poder ejecutarlo)
- **[Visual Studio Code](https://code.visualstudio.com/download)** (ten en cuenta tu sistema operativo y procesador)
- **[Node.js](https://nodejs.org/)** (v14 o superior)

## ⚙️ Instalación y Configuración

1. Clonar el Repositorio Frontend

git clone git@github.com:tu-usuario/sin-verguenza-frontend.git
cd sin-verguenza-frontend

2. Instalar Dependencias

npm install

3. Configurar Variables de Entorno
Crear un archivo .env en la raíz del proyecto:

Crear un .env con VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Sin Vergüenza

4. niciar el Servidor de Desarrollo

npm run dev

5. Compilar para Producción

npm run build

## 📱 Estructura de Componentes
src/
├── api/
│   │   ├── apiCallController
│   │   ├── apiCardController
│   │   └── apiCategoryController
│   │   ├── apiGame
│   │   └── apiPlayer
├── assets/
│   │   ├── fonts
├── components/
│   │   ├── animations/
│   │   │    └── AnimatedArrows
│   │   │    └── AnimatedLogo
│   │   ├── buttons/
│   │   │    └── GenericButton
│   │   └── cards/
│   │   │    └── CardForm
│   │   └── modals/
│   │   │    └── CreateModal
│   │   │    └── ErrorModal
│   │   └── navbar/
│   │   └── player_profile/
│   │        └── ProtectedRoute
│   │ 
│   ├── constants/
│   │   ├── categoryColors
│   ├── hooks
│   │   ├── useErrorModal
│   │   ├── useLocalStorage
│   │   └── useModalControl
│   │   ├── useNavigate
│   └── pages
│       ├── auth/
│       └── cards-Category/
│       └── categories/
│       └── custom_cards/
│       └── game/
│       └── home/
│       └── instrucctions/
│       └── palyer_selector/
│       └── transitions/
│       └── user_home/
├── routes/
│   │   ├── index
├── App/
├── Main
├── public/
└── node_modules/

## 🎯 Funcionalidades Principales
1. Sistema de Juego
Visualización de cartas pregunta y respuesta

2. Gestión de Usuario

Registro y login con validación
Perfil de usuario editable
Creación y gestión de cartas personalizadas
Administración de categorías propias

3. Gestión de Partida

Configuración de número de jugadores
Selección de categorías
Historial de partidas

👥 Equipo de Desarrollo Frontend

Estefanía - Desarrollador Back-End y Front-End

