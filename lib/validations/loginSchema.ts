import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Email tidak valid' }),
  password: z.string().min(1, { message: 'Kata sandi harus diisi' }),
});