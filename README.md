# Trianza Obras y Servicios, S.L. — Sitio Web

Sitio web corporativo estático de **Trianza Obras y Servicios, S.L.**, empresa especializada en albañilería industrial, obras en subestaciones eléctricas, redes de distribución y transporte, canalizaciones de telecomunicaciones y obra civil auxiliar.

## Estructura del proyecto

```
.
├── index.html                  # Página principal
├── aviso-legal.html            # Aviso legal
├── politica-privacidad.html    # Política de privacidad
├── politica-cookies.html       # Política de cookies
├── styles.css                  # Hoja de estilos (tema Blueprint Light)
├── app.js                      # Lógica del menú móvil
└── assets/
    └── images/                 # Logos, sello oficial y fotografías
```

Es un sitio 100% estático (HTML, CSS y JavaScript vanilla), sin dependencias de build ni frameworks.

## Puesta en marcha en local

Se puede servir con cualquier servidor estático. Por ejemplo, con [`serve`](https://www.npmjs.com/package/serve):

```bash
npx serve -l 8000
```

Y abrir [http://localhost:8000](http://localhost:8000).

### Servir con HTTPS en local (opcional)

```bash
openssl req -nodes -new -x509 -keyout server.key -out server.cert -days 365
npx serve -l 8000 --ssl-cert server.cert --ssl-key server.key
```

## Contenido del sitio

- **Inicio**: presentación, especialidades técnicas y modelo de colaboración B2B.
- **Contacto**: exclusivamente vía email (`info@trianzasl.com`), sin formularios.
- **Legal**: Aviso Legal, Política de Privacidad y Política de Cookies, enlazadas desde el pie de página. El sitio no utiliza cookies propias de analítica o publicidad; solo carga recursos de terceros (Google Fonts y Font Awesome vía cdnjs).

## Datos corporativos

- **Razón social:** TRIANZA OBRAS Y SERVICIOS, S.L.
- **CIF:** B-23978166
- **Domicilio:** cl/ José Raga Mas, 10 — 46439 Sollana (Valencia)
- **Registro Mercantil:** Valencia, Sección 8, Hoja V-230346
- **Email:** info@trianzasl.com

## Despliegue

Al ser un sitio estático, puede publicarse en cualquier hosting de archivos estáticos (GitHub Pages, Netlify, Vercel, S3, etc.) sirviendo directamente el contenido de este repositorio.
