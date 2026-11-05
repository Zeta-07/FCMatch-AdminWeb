# Decisiones técnicas — Fase 0

## DT-001 — Angular + Ionic autorizado

El propietario decidió usar Angular + Ionic en Web Cliente, móvil y AdminWeb. Capacitor queda reservado al cliente móvil. Solo se modificaron referencias técnicas del DERCAS, AGENTS y plan; las funciones y permisos se mantienen. Referencias cruzadas: `FCMatch-Frontend/docs/decisiones.md` y `FCMatch-Backend/docs/decisiones.md`.

## DT-002 — Diseño compartido, aplicación independiente

Componentes comunes, `themes.scss` y `responsive.scss` se distribuyen por copia desde el frontend. No hay imports por rutas relativas entre repositorios. AdminWeb conserva su configuración, rutas y navegación. No se reutilizan pantallas de negocio del cliente.

Tema oscuro predeterminado y claro persistente, logo original y soporte visual claro para su legibilidad. Tokens derivados y criterios de contraste idénticos a DT-004 del frontend, incluido el fondo de acción claro más oscuro para texto blanco legible. Colores fijos únicamente en `src/styles/themes.scss`.

## DT-003 — Compatibilidad y herramientas

Angular 22.2 + Ionic 9.0.10 estables, standalone desde `@ionic/angular`, zoneless y signals. TypeScript 6.0.3 es la última estable compatible: Angular compiler-cli exige `<6.1` y no acepta TypeScript 7.0.2. Stylelint 18 con reglas explícitas evita el preset SCSS incompatible. Override minimatch 11.0.4 corrige las dependencias transitivas de herramientas. Auditoría sin vulnerabilidades después de esta resolución.

## DT-004 — Alcance de la fase

Ruta técnica `/sistema` para comprobar API y PostgreSQL; no es una operación administrativa ni expone información privada. Autenticación, autorización de propietario y funcionalidades del panel se incorporarán en las fases correspondientes. Playwright verifica la API real localmente; en CI usa un contrato simulado explícito para conservar independencia del repositorio. El workflow está preparado, sin publicación remota autorizada.
