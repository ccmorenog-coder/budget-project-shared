# @ccmorenog-coder/budget-shared

> Fuente de verdad única: Tipos TypeScript, Esquemas Zod y DTOs compartidos para el ecosistema `budget-app`.

Este paquete centraliza las reglas de negocio y validaciones para garantizar la integridad de datos entre el **API (NestJS)** y el **Frontend (Next.js 15)**.

---

## 🏗️ Estructura del Paquete

| Módulo | Descripción |
|--------|-------------|
| `src/enums/` | **25 Enums** de negocio (UserRole, WalletType, IncomeType, etc.) con soporte nativo de Zod. |
| `src/dtos/` | **Esquemas de Autenticación** (Login, Register, AuthResponse) validados con Zod. |
| `src/index.ts` | Barrel export oficial para consumos externos. |

---

## 🚀 Instalación

### Desde GitHub Packages (Recomendado)
Configura tu `.npmrc` con el scope `@ccmorenog-coder` apuntando a `https://npm.pkg.github.com` y luego ejecuta:

```bash
npm install @ccmorenog-coder/budget-shared
```

### Desarrollo Local (Enlace)
Si estás realizando cambios en caliente en este paquete:

```bash
# En budget-shared
npm run build
npm pack

# En el proyecto consumidor (Frontend o API)
npm install ../budget-shared/budget-app-shared-1.0.0.tgz
```

---

## 🛠️ Scripts Disponibles

- `npm run build`: Compila TypeScript a `dist/` con declaraciones de tipos.
- `npm run clean`: Elimina la carpeta `dist/` para una reconstrucción limpia.
- `npm run watch`: Modo observador para desarrollo continuo.

---

## 💡 Ejemplo de Uso

```typescript
import { UserRole, LoginSchema } from '@ccmorenog-coder/budget-shared';

// Uso de Enums
const role = UserRole.USER;

// Validación con Zod
const result = LoginSchema.safeParse({ email: 'test@example.com', password: '123' });
if (!result.success) {
  console.log(result.error.format());
}
```

---

## ⚖️ Licencia
ISC - Propiedad de ccmorenog-coder.
<!-- ia-scaffolding:managed -->
