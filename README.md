# budget-app — Shared

> Tipos TypeScript, esquemas Zod y constantes fiscales compartidas entre `budget-app-api` y `budget-app-web`.

---

## ¿Qué exporta este paquete?

| Módulo | Descripción |
|--------|-------------|
| `src/enums.ts` | Enums validados con Zod: roles, tipos de wallet, tipos de transacción, estados de inversión, tipos de notificación, etc. Fuente de verdad única para frontend y backend. |
| `src/fiscal.ts` | Constantes tipadas de claves de parámetros fiscales (`FISCAL_KEYS`) y configuración de app (`APP_CONFIG_KEYS`). Elimina strings mágicos en el código. |
| `src/index.ts` | Barrel export — importar desde `@budget-app/shared` |

---

## Instalación (enlace local)

```bash
# Opción 1 — npm link
cd code/budget-app/budget-shared
npm link

cd ../budget-api
npm link @budget-app/shared

cd ../budget-frontend
npm link @budget-app/shared
```

```bash
# Opción 2 — instalación por ruta relativa
npm install ../budget-shared
```

---

## Build

```bash
npm run build   # Compila TypeScript a dist/
npm run dev     # Modo watch
```

---

## Uso

```typescript
import { UserRoleSchema, WalletTypeSchema, FISCAL_KEYS } from "@budget-app/shared";

// Validar con Zod
const role = UserRoleSchema.parse("USER");         // "USER"
const wallet = WalletTypeSchema.parse("BANK");     // "BANK"

// Constantes fiscales (sin strings mágicos)
const uvtKey = FISCAL_KEYS.UVT;                   // "UVT"
const gmfKey = FISCAL_KEYS.GMF_RATE;              // "GMF_RATE"
```

---

## Documentación

Decisiones de arquitectura y reglas de negocio:
→ `project-docs/budget-app/`
<!-- ia-scaffolding:managed -->
