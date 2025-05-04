#  Challenge - API para Makers Challenge

Este repositorio contiene una API desarrollada en `TypeScript + Express`, diseñada para resolver múltiples retos del Makers Challenge. La app está dockerizada y lista para deployar en plataformas como `Render` o `Vercel`.

##  Estructura del proyecto


```
src/
├── challenges/ # Controladores y servicios para cada reto
│ ├── firstChallenge/
│ └── ninthChallenge/
├── config/ # Configuración del entorno
├── helpers/ # Middleware de errores
├── middleware/ # Middlewares generales
├── routes/ # Rutas de la aplicación
.env # Variables de entorno
index.ts # Entry point
Dockerfile # Configuración para Docker
tsconfig.json # Configuración de TypeScript
```
##  Tecnologías usadas

- Node.js 20
- Express 5
- TypeScript
- Docker
- ESLint + Prettier
- Dotenv

---

##  Instalación local

### 1. Cloná el repositorio

```
git clone https://github.com/tu-usuario/challenge.git
cd challenge
```

2. Instalá las dependencias

`
npm install
`

3. Crea un archivo `.env`

```
MAKERS_API=https://ruta-de-la-api
API_KEY=tu_clave_proporcionada
```

4. Levantá el servidor

```
npm run dev
```

## Uso con Docker

Build de la imagen

```
docker build -t my-app .
```

Correr el contenedor

```
docker run -p 3000:3000 --env-file .env my-app
```

Scripts útiles

```
npm run dev       # Levanta el servidor con nodemon
npm run build     # Compila TypeScript
npm start         # Ejecuta el código compilado (dist/)
npm run lint      # Linting con ESLint
npm run format    # Formatea con Prettier
```
