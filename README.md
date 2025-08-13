# Notes App (React Native EXPO + SQLite)

Aplicación móvil para crear y administrar notas, desarrollada con React Native y Expo.

![](https://res.cloudinary.com/dcs3ooic7/image/upload/v1755062604/eirowitod9jsmrgmu7yp.png)

## Características

- Las notas se almacenan en una base de datos local SQLite, guardándose directamente en el dispositivo para cada usuario.
- Las notas se pueden marcar como importantes.
- Las notas eliminadas se podrán restaurar antes de que transcurran 30 minutos desde su eliminación.
- El usuario recibirá una notificación 10 minutos antes de que la nota se elimine definitivamente.

---

## Tecnologías utilizadas

- **React Native (Expo)**
- **TypeScript**
- **React Navigation**
- **React Hook Form**
- **Base de datos SQLite** (usando el paquete `expo-sqlite`)
- **Notificaiones** (usando el paquete `expo-notifications`)

---

## Características principales

- Crear, leer, editar y eliminar notas (CRUD Operations)
- Almacenamiento persistente en base de datos local
- Navegación fluida entre pantallas
- Notificaciones de alerta de eliminación y uso de la app

---

## 🛠 Instalación y ejecución

A continuación el paso a paso para poner en marcha el proyecto en tu máquina:

### 1️⃣ Clonar el repositorio

En la carpeta donde quieras guardar el proyecto, abre una terminal y ejecuta:

```bash
git clone https://github.com/JhonHDev/notes-app-react-native.git
```

### 2️⃣ Instalar dependencias

Accede a la carpeta del proyecto y ejecuta el siguiente comando para instalar los módulos necesarios:

```bash
cd notes-app-react-native
npm install
```

### 3️⃣ Levantar el servidor de desarrollo

Para iniciar la aplicación en modo desarrollo, ejecuta:

```bash
npm start
```

Esto abrirá Expo en tu navegador, desde donde podrás correr la app en un emulador, dispositivo físico o web.

### 4️⃣ Levantar el emulador de iOS o Android

Si tienes Xcode (Mac) o Android Studio instalado, puedes abrir la app en un emulador:

- Para iOS:
  - Haz clic en "Run on iOS simulator" en la pestaña de Expo en tu navegador, o ejecuta:
    ```bash
    npm run ios
    ```
- Para Android:
  - Haz clic en "Run on Android device/emulator" en Expo, o ejecuta:
    ```bash
    npm run android
    ```

### 5️⃣ Ver la app en tu dispositivo físico

Descarga la app Expo Go desde la App Store (iOS) o Google Play (Android).

Abre Expo Go y escanea el código QR que aparece en la consola o en la pestaña de Expo en tu navegador. La app se abrirá en tu dispositivo.

## Contacto

Estoy abierto a oportunidades laborales, puedes contactarme a través de:

- **LinkedIn:** [Jhon Herrera](https://www.linkedin.com/in/jhon-esteban-herrera/)
