# Proyecto de American Shop

Este es un proyecto Angular que implementa una tienda en línea con vistas para Home, Search, Shopping Cart, Wish List, Account, Login y Register. A continuación, encontrarás las instrucciones para instalar y ejecutar el proyecto, así como la estructura de archivos.

## Requisitos

- **Node.js**: Versión 18.x o superior (recomendado). Para este proyecto se utilizo Node v20.19.3


## Instalación

1. Clona el repositorio o descarga los archivos del proyecto:
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>


2. Instala las dependencias del proyecto:
npm install


3. Asegúrate de tener las dependencias de PrimeNG y otros módulos instaladas. Si no están presentes, instálalas manualmente:
ng add @angular/localize
npm install primeng@19 primeicons


## Arranque

### Modo Desarrollo (Cliente)
1. Inicia el servidor de desarrollo:
ng serve

2. Abre tu navegador en `http://localhost:4200`. Los cambios se recargarán automáticamente.

## Estructura de Archivos
src/
├── app/
│   ├── pages/
│   │   ├── account/
│   │   │   ├── account.component.ts
│   │   │   ├── account.component.html
│   │   │   └── account.component.css
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.css
│   │   │   ├── register/
│   │   │   │   ├── register.component.ts
│   │   │   │   ├── register.component.html
│   │   │   │   └── register.component.css
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.css
│   │   ├── search/
│   │   │   ├── search.component.ts
│   │   │   ├── search.component.html
│   │   │   └── search.component.css
│   │   ├── shopping-cart/
│   │   │   ├── shopping-cart.component.ts
│   │   │   ├── shopping-cart.component.html
│   │   │   └── shopping-cart.component.css
│   │   └── wish-list/
│   │       ├── wish-list.component.ts
│   │       ├── wish-list.component.html
│   │       └── wish-list.component.css
│   ├── shared/
│   │   ├── components/
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.ts
│   │   │   │   ├── footer.component.html
│   │   │   │   └── footer.component.css
│   ├── app.routes.ts
│   ├── main.ts
│   └── app.config.ts
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   └── playeras/
│   │       ├── playera-1.jpg
│   │       ├── playera-2.jpg
│   │       └── playera-3.jpg
│   └── styles.css
├── index.html
├── README.md
├── angular.json
├── package.json
├── tsconfig.json
└── tsconfig.app.json


