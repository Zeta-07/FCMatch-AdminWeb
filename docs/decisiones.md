# Decisiones técnicas — Fase 0

## DT-007 — Skills OpenCode sin duplicación

AdminWeb consume mediante OpenCode V2 el catálogo HTTP de seis skills existentes revisadas y su política alojados en `FCMatch-Backend`, fijados a un SHA completo en `opencode.json`. No se duplican originales, lockfiles ni guías completas y no se usan rutas personales ni imports de código de aplicación entre repositorios. Un clon independiente solo necesita acceso HTTPS a GitHub para la descarga inicial del catálogo público; no se incluye una credencial. No cambia funciones, dependencias, permisos ni servidores MCP. Referencias: DT-007 de Backend y `docs/skills-opencode.md`; DT-008 de Frontend. Publicación aprobada; Fase 1 no iniciada.

## DT-006 — Logo oficial por tema

Por petición del propietario, se usa `Logo.png` en claro y `Logo-modo-oscuro.png` en oscuro, incluyendo el favicon. Ambos PNG originales de 2752 × 1536 se conservan sin transformación; CSS selecciona el logo usando el tema aplicado antes del render y reacciona inmediatamente al alternarlo. Los recursos y componentes se distribuyen y verifican desde el frontend sin imports entre repositorios. No se añaden funcionalidades ni se avanza a Fase 1. Referencia cruzada: DT-007 de `FCMatch-Frontend/docs/decisiones.md`.

## DT-001 — Angular + Ionic autorizado

El propietario decidió usar Angular + Ionic en Web Cliente, móvil y AdminWeb. Capacitor queda reservado al cliente móvil. Solo se modificaron referencias técnicas del DERCAS, AGENTS y plan; las funciones y permisos se mantienen. Referencias cruzadas: `FCMatch-Frontend/docs/decisiones.md` y `FCMatch-Backend/docs/decisiones.md`.

## DT-002 — Diseño compartido, aplicación independiente

Componentes comunes, `themes.scss` y `responsive.scss` se distribuyen por copia desde el frontend. No hay imports por rutas relativas entre repositorios. AdminWeb conserva su configuración, rutas y navegación. No se reutilizan pantallas de negocio del cliente.

Tema oscuro predeterminado y claro persistente, logo original con transparencia conservada según DT-005. Tokens derivados y criterios de contraste idénticos a DT-004 del frontend, incluido el fondo de acción claro más oscuro para texto blanco legible. Colores fijos únicamente en `src/styles/themes.scss`.

## DT-003 — Compatibilidad y herramientas

Angular 22.2 + Ionic 9.0.10 estables, standalone desde `@ionic/angular`, zoneless y signals. TypeScript 6.0.3 es la última estable compatible: Angular compiler-cli exige `<6.1` y no acepta TypeScript 7.0.2. Stylelint 18 con reglas explícitas evita el preset SCSS incompatible. Override minimatch 11.0.4 corrige las dependencias transitivas de herramientas. Auditoría sin vulnerabilidades después de esta resolución.

## DT-004 — Alcance de la fase

Ruta técnica `/sistema` para comprobar API y PostgreSQL; no es una operación administrativa ni expone información privada. Autenticación, autorización de propietario y funcionalidades del panel se incorporarán en las fases correspondientes. Playwright verifica la API real localmente; en CI usa un contrato simulado explícito para conservar independencia del repositorio. El workflow está preparado, sin publicación remota autorizada.

## DT-005 — Logo sin fondo artificial

Por petición del propietario, se retiran el fondo CSS de `.brand-mark` y el token `--brand-background` en ambos temas, de forma idéntica a Web Cliente y móvil. El PNG original ya tiene transparencia real y sus copias son binariamente idénticas; no se modifica ni se genera una imagen derivada. El fondo claro procedía del estilo compartido y no de los contenedores Ionic. Se conservan diseño, colores, proporciones y tamaño de presentación. Referencia cruzada: DT-006 de `FCMatch-Frontend/docs/decisiones.md`.
