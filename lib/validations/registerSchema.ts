import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(1, { message: 'Nama harus diisi' }),
  email: z.string().email({ message: 'Email tidak valid' }),
  password: z.string().min(6, { message: 'Kata sandi harus minimal 6 karakter' }),
  confirmPassword: z.string().min(6, { message: 'Konfirmasi kata sandi harus minimal 6 karakter' }),
  address: z.string().min(1, { message: 'Alamat harus diisi' }),
  phoneNumber: z.string().min(1, { message: 'Nomor telepon harus diisi' }),
});