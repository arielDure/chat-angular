## 📂 Estructura del proyecto
src/app/
│── core/
│   ├── models/          → Interfaces (Chat, Message)
│   └── store/           → Estado global con Signals
│
│── pages/
│   ├── chat-list/       → Panel lateral (lista de contactos)
│   ├── chat-room/       → Ventana de conversación
│   ├── new-chat/        → Formulario para crear un nuevo chat
│   └── empty-state/     → Vista cuando no hay chat seleccionado
│
│── app.routes.ts        → Configuración de rutas
│── app.component.ts    → Layout principal (dos paneles)

 ### 🧭 Rutas de la aplicación

Ruta	        Descripción
/chats	        Muestra la lista de chats y un mensaje para seleccionar uno
/chats/:id	    Abre la conversación con el contacto seleccionado
/nuevo	        Formulario para crear un nuevo chat

📌 El panel izquierdo con la lista de contactos se mantiene siempre visible, mientras que el panel derecho cambia según la ruta.

### 💬 Funcionalidades principales

Lista de chats con:

Avatar

Nombre

Estado (online / offline)

Creación de nuevos chats mediante formulario reactivo

Historial de mensajes independiente por chat

Envío de mensajes con respuesta automática simulada

Mensajes diferenciados:

Usuario → alineados a la derecha

App → alineados a la izquierda

Diseño responsive

Estilo visual similar a WhatsApp Web

## ▶️ Cómo ejecutar el proyecto

1️⃣ Clonar el repositorio
git clone <url-del-repositorio>
cd chat-angular

2️⃣ Instalar dependencias
npm install

3️⃣ Ejecutar la aplicación
ng serve


Luego abrir el navegador en:

http://localhost:4200

### 🧪 Cómo probar la aplicación

Al iniciar, se muestra la lista de chats.

Seleccionar un contacto para abrir la conversación.

Escribir un mensaje y enviarlo.

La aplicación responderá automáticamente luego de un breve retardo.

Ir a “Nuevo chat” para crear un contacto nuevo.

Usar el botón Volver para regresar a la lista.

#### ✍️ Autor

Nombre: Luis Ariel Duré

Curso: Desarrollo con Angular

Unidad: Módulo 1, Unidad 1 – Conociendo Angular
