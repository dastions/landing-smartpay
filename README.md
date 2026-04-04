# SmartPay Caravaning Landing

Landing comercial estática en React + Vite, preparada para desplegarse en GitHub Pages al hacer push a `master`.

## Incluye

- Diseño comercial simple, responsive y orientado a conversión.
- Promoción de **3 meses gratuitos**.
- Apartado de tarifas basado en el flyer facilitado.
- Botón y formulario de interés comercial.
- Envío del formulario por `mailto:` a `tienda@dastions.com` para mantener la web 100% estática.
- SEO básico: title, description, Open Graph, Twitter Card, canonical dinámico y JSON-LD.
- Workflow para despliegue automático en GitHub Pages.

## Arranque local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Despliegue en GitHub Pages

1. Sube este proyecto a un repositorio de GitHub.
2. Usa la rama `master` como rama principal.
3. En GitHub, entra en **Settings > Pages**.
4. En **Build and deployment**, selecciona **GitHub Actions**.
5. Haz push a `master` y el workflow publicará automáticamente la carpeta `dist`.

## Importante sobre el formulario

Al ser una landing estática en GitHub Pages, el formulario genera un email pre-rellenado mediante `mailto:`.

Si quieres que el envío sea automático sin abrir el gestor de correo del usuario, necesitarás añadir un servicio externo tipo FormSubmit, Web3Forms, EmailJS o una función serverless.

## Personalizaciones recomendadas antes de publicar

- Sustituir el correo si quieres usar otro buzón.
- Añadir dominio propio en GitHub Pages si corresponde.
- Revisar el texto comercial final.
- Añadir una imagen Open Graph específica si quieres compartir la landing en redes o WhatsApp con una vista previa más potente.
