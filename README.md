# FCMatch AdminWeb — Fase 0

## Mantenimiento de Fase 1

Solo se actualizan herramientas compatibles y tipos del contrato compartido. No se adelantan pantallas, autenticación ni permisos del propietario de Fase 10. Las operaciones de identidad marcadas `planned` aún no están implementadas en Backend. Cambios locales pendientes de revisión, sin commits/push.

## Skills OpenCode compartidas

`opencode.json` carga las seis skills aprobadas y su política desde un catálogo HTTPS público de Backend, fijado a un commit. No se duplican archivos ni se usan rutas personales. [Guía canónica y verificaciones](https://github.com/Zeta-07/FCMatch-Backend/blob/ab1501182f034bde2c248ffea1e7205be8a3f472/docs/skills-opencode.md). Un clon independiente requiere OpenCode V2 y acceso HTTPS a GitHub para la descarga inicial. Fase 1 sigue sin autorización.

Aplicación Angular 22 + Ionic 9 independiente para la futura administración del propietario. La Fase 0 prepara únicamente estructura, identidad visual, tema y conexión técnica. No existe todavía autenticación ni operaciones administrativas.

Requiere Node.js 26.13.0 LTS y npm 12.2.2. En el espacio de trabajo original activa herramientas con `. ../tooling/activate.ps1`.

```powershell
npm ci
npm start
```

Disponible en `http://localhost:4201/sistema`. La API del backend debe estar iniciada y conectada a PostgreSQL. Configura `PUBLIC_API_BASE_URL` en `.env` si cambia su dirección. `public/config.json` se genera automáticamente y no incluye credenciales.

## Calidad

```powershell
npx playwright install chromium
npm run check
npm audit
```

Pruebas locales con API real; dos recorridos verifican conexión y reintento, logo, responsividad y persistencia de tema. El CI independiente intercepta el contrato health con `FCMATCH_E2E_STUB_API=1` y no acredita la conexión real a PostgreSQL. Las pruebas de integración reales pertenecen al backend.

## Sistema de diseño y separación

Los componentes de `src/app/shared/design/` y estilos de `src/styles/` son copias distribuidas desde `FCMatch-Frontend`, sin imports externos. Para actualizarlos, desde el repositorio frontend ejecuta `node scripts/sync-design.mjs --target ../FCMatch-AdminWeb` y revisa ambos repositorios. AdminWeb conserva rutas y responsabilidades propias y compila sin tener el frontend presente.

El contrato OpenAPI reside en el backend. Los modelos generados se copian a `src/app/core/api/types.gen.ts`. La configuración MCP no almacena claves; Google Stitch usa `STITCH_API_KEY` y Engram su registro global. Reinicia OpenCode tras cambios de configuración.

Consulta `docs/decisiones.md` para versiones, distribución y límites de esta entrega.

## Informe de Fase 0

La evidencia común se mantiene en el [informe versionado del backend](https://github.com/Zeta-07/FCMatch-Backend/blob/feature/fase-0/docs/fase-0-verificacion.md).
