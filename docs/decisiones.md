# Decisiones técnicas — Fase 0

## DT-012 — Mantenimiento compartido de correcciones Etapa 6

Se sincronizan exclusivamente modelos OpenAPI, tokens de themes.scss y componente compartido de tema con luna/sol accesible, junto con sus pruebas de infraestructura. Tokens nuevos documentados en Frontend DT-013; contrato numérico opt-in y UUID anteriores preservados según Backend DT-015. No se incorporan perfiles, búsquedas, pantallas de identidad del cliente ni funciones de administración. Logos y tema pre-render conservados; Angular 22.2.4/TS 6.0.3 mantienen excepciones aprobadas. Cambios autorizados para publicación en feature/fase-1-identidad tras todas las verificaciones, PR #5 abierto y sin merge. Etapa 6 sigue pendiente de revisión visual; no Etapa 7 ni Fase 10.

## DT-011 — Modelos de Etapa 5 sin adelantar administración

Etapas 3–4 aprobadas y Etapa 5 autorizada exclusivamente en Backend. Se regeneran los modelos compartidos cuya descripción de Avatar aclara S3 local real de desarrollo (HTTP solo 127.0.0.1) y R2 HTTPS para producción, integración real pendiente por decisión del propietario. AdminWeb no recibe pantallas, perfiles editables, credenciales de almacenamiento, funciones o permisos administrativos; continúa sin adelantar Fase 10. Tema/logos y excepciones Angular 22.2.4/TypeScript 6.0.3 intactos. Publicación autorizada tras verificaciones y actualización de PR #5, sin merge ni Etapa 6. Referencias: Backend DT-014/informe Etapa 5 y Frontend DT-012. Apartados anteriores históricos.

## DT-010 — Publicación aprobada sin adelantar AdminWeb

El propietario aprueba Etapas 1 y 2 y autoriza commits/push de los modelos, documentación y mantenimiento en `feature/fase-1-identidad`, sin fusiones ni force push. Autoriza publicaciones posteriores de etapas aprobadas con checks satisfactorios, incluida expresamente Etapa 3 al finalizar. Esto no autoriza pantallas, autenticación o permisos del propietario fuera de Fase 10. Etapa 4 requiere aprobación; no secretos. Referencias: DT-011 de Backend y Frontend.

## DT-009 — Excepción Angular aprobada, sin funciones nuevas

El propietario aprueba el 11/11/2026 los resultados de Etapa 1 y mantener temporalmente Angular 22.2.4. Se resuelve el pendiente histórico de DT-008; no se fuerza 22.2.5 ni se alteran dependencias incompatibles. Etapa 2 solo implementa persistencia en Backend. AdminWeb no recibe pantallas, autenticación, permisos ni modelos nuevos en esta etapa. Referencias: DT-010 de Backend y DT-010 de Frontend. Siguen prohibidos commits, push y fusiones sin autorización.

## DT-008 — Mantenimiento y modelos compartidos de Fase 1

AdminWeb no adelanta autenticación ni funcionalidades de Fase 10. En Etapa 1 recibe exclusivamente los tipos del contrato objetivo compartido y mantenimiento compatible: Ionic 9.0.11, Playwright 1.65.0, Prettier 3.10.0, typescript-eslint 8.72.2 y npm 12.2.2. TS 6.0.3 sigue justificado por peers `<6.1`. Angular se conserva en 22.2.4 ante ERESOLVE al intentar 22.2.5; la excepción temporal está pendiente de aprobación. La actualización global también encontró una transitoria Babel no publicada. Sin downgrade, force, legacy-peer-deps u override nuevo. Se conservan rutas, diseño, temas y logos. No se duplica contrato ni se importan fuentes de otro repositorio. Políticas y límites en `FCMatch-Backend/docs/fase-1-identidad.md` (DT-008/009), referencia DT-009 de Frontend. El contrato no implementa endpoints. Solo cambios locales autorizados; no commits, push o fusiones.

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
