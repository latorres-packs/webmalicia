# Web de Malicia — Guía para publicarla en GitHub Pages

Este paquete contiene una web estática (HTML/CSS/JS) del restaurante **Malicia**, lista para subir a GitHub Pages. No necesitas saber programar para publicarla ni para actualizarla después.

## Contenido

- `index.html` — el contenido de la página (textos, secciones)
- `styles.css` — los estilos visuales (colores, tipografía, diseño)
- `script.js` — pequeñas interacciones (menú móvil, año en el pie de página)

## Paso 1 — Crear una cuenta en GitHub (si no tienes)

1. Ve a [github.com/join](https://github.com/join)
2. Regístrate con tu email, un nombre de usuario y una contraseña
3. Confirma tu email cuando te lo pidan

## Paso 2 — Crear el repositorio

1. Ya con sesión iniciada, pulsa el botón **"+"** (arriba a la derecha) → **"New repository"**
2. Ponle un nombre, por ejemplo `malicia-web`
3. Márcalo como **Public**
4. NO marques "Add a README file" (ya tienes uno)
5. Pulsa **"Create repository"**

## Paso 3 — Subir los archivos

1. En la página del repositorio recién creado, pulsa **"uploading an existing file"** (o ve a **Add file → Upload files**)
2. Arrastra los tres archivos (`index.html`, `styles.css`, `script.js`) a la ventana
3. Baja y pulsa **"Commit changes"**

## Paso 4 — Activar GitHub Pages

1. En el repositorio, ve a **Settings** (pestaña superior)
2. En el menú lateral, entra en **Pages**
3. En "Branch", selecciona **main** y la carpeta **/(root)** → **Save**
4. Espera 1-2 minutos y recarga la página: arriba te aparecerá la URL pública, algo como:
   `https://tu-usuario.github.io/malicia-web/`

¡Con eso ya tienes la web publicada y accesible para cualquiera!

## Cómo actualizar la web más adelante

Puedes editarla directamente desde GitHub, sin instalar nada:

1. Entra en el repositorio, abre el archivo que quieras cambiar (por ejemplo `index.html`)
2. Pulsa el icono del lápiz (✏️) arriba a la derecha del archivo
3. Cambia el texto que necesites
4. Baja y pulsa **"Commit changes"**
5. En 1-2 minutos el cambio se refleja solo en la web publicada

## Cosas pendientes de personalizar

- **Dirección, horario, teléfono y email** en la sección de contacto (ahora mismo dicen "Pendiente de añadir")
- **Fotos reales** del local — hay 3 bloques de ejemplo en la sección "Ambiente" que puedes sustituir por imágenes tuyas (basta con añadir tus fotos al repositorio y cambiar esos bloques por etiquetas `<img>` en el HTML)
- Los textos de las 5 dimensiones (SENSE, FEEL, THINK, ACT, RELATE) están redactados a partir de lo que me contaste del concepto — revísalos y ajústalos si algo no refleja exactamente tu idea
- El formulario de contacto es solo de ejemplo (no envía nada todavía); si quieres que funcione de verdad, dímelo y lo conectamos a un servicio gratuito de formularios
