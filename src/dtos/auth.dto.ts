import { z } from 'zod';

/**
 * Esquema para el inicio de sesión.
 */
export const LoginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
});

export type LoginDto = z.infer<typeof LoginSchema>;

/**
 * Esquema para el registro de nuevos usuarios.
 * Requiere un token de invitación válido (Policy: Invitation-only MVP).
 */
export const RegisterSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .regex(/[A-Z]/, 'Debe contener al menos una mayúscula')
    .regex(/[0-9]/, 'Debe contener al menos un número')
    .regex(/[^A-Za-z0-9]/, 'Debe contener al menos un carácter especial'),
  invitationToken: z.string().uuid('Token de invitación inválido'),
});

export type RegisterDto = z.infer<typeof RegisterSchema>;

/**
 * Respuesta exitosa de autenticación.
 */
export const AuthResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string().optional(),
  user: z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    role: z.string(), // Usará UserRole en implementación real
  }),
});

export type AuthResponse = z.infer<typeof AuthResponseSchema>;
