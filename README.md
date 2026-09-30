# Web de Malicia — Guía para publicarla en GitHub Pages

Este paquete contiene la web estática (HTML/CSS/JS) del restaurante **Malicia**, organizada en varias páginas independientes que comparten los mismos estilos. No necesitas saber programar para publicarla ni para actualizarla después.

## Contenido

- `index.html` — Inicio (presentación + enlaces a las demás páginas)
- `filosofia.html` — Filosofía del restaurante y el plato estrella
- `experiencia.html` — Las 5 dimensiones de la marca y el ambiente
- `equipo.html` — El equipo
- `reservas.html` — Formulario de reservas
- `styles.css` — Estilos compartidos por **todas** las páginas (cambiar aquí afecta a toda la web a la vez)
- `script.js` — Comportamiento compartido (menú móvil, año del pie de página)

Al estar en páginas separadas, si quieres cambiar solo el Equipo, por ejemplo, abres únicamente `equipo.html` — no tienes que buscar entre el resto del contenido.

## Paso 1 — Crear una cuenta en GitHub (si no tienes)

1. Ve a [github.com/join](https://github.com/join)
2. Regístrate con tu email, un nombre de usuario y una contraseña
3. Confirma tu email cuando te lo pidan

## Paso 2 — Crear el repositorio

1. Con sesión iniciada, pulsa el botón **"+"** (arriba a la derecha) → **"New repository"**
2. Ponle un nombre, por ejemplo `webmalicia`
3. Márcalo como **Public** (GitHub Pages gratis no funciona con repositorios privados)
4. NO marques "Add a README file" si ya vas a subir el tuyo
5. Pulsa **"Create repository"**

## Paso 3 — Subir los archivos

1. En el repositorio, pulsa **Add file → Upload files**
2. Arrastra los archivos: `index.html`, `filosofia.html`, `experiencia.html`, `equipo.html`, `reservas.html`, `styles.css` y `script.js`
3. Pulsa **"Commit changes"**

## Paso 4 — Activar GitHub Pages

1. Ve a **Settings → Pages**
2. En "Branch", selecciona **main** y la carpeta **/(root)** → **Save**
3. Espera 1-2 minutos: arriba te aparecerá la URL pública, algo como
   `https://tu-usuario.github.io/webmalicia/`

## Cómo actualizar cualquier página más adelante

1. Entra en el repositorio, abre el archivo de la página que quieras cambiar (por ejemplo `equipo.html`)
2. Pulsa el icono del lápiz (✏️) arriba a la derecha
3. Cambia el texto que necesites
4. Pulsa **"Commit changes"**
5. En 1-2 minutos el cambio se refleja en la web publicada (puedes ver el progreso en la pestaña "Actions")

Si el cambio es de color, tipografía o cualquier cosa visual que se repite en todas las páginas (por ejemplo el color del botón), edita solo `styles.css` — no hace falta tocar cada página una por una.

## Cosas pendientes de personalizar

- **Dirección, horario, teléfono y email** — aparecen en el pie de página de cada página (ahora dicen "Pendiente de añadir")
- **Fotos reales** del local — en `experiencia.html`, sección "Ambiente", hay 3 bloques de ejemplo para sustituir por imágenes tuyas
- **Nombres y fotos del equipo** — en `equipo.html`, cada ficha tiene un círculo de color en vez de foto y "Pendiente de añadir" en vez de nombre
- Los textos de las 5 dimensiones (SENSE, FEEL, THINK, ACT, RELATE) y de la filosofía están redactados a partir de lo que me contaste del concepto — revísalos y ajústalos si algo no refleja exactamente tu idea
- El formulario de reservas es solo de ejemplo (no envía nada todavía); si quieres que funcione de verdad, dímelo y lo conectamos a un servicio gratuito de formularios
