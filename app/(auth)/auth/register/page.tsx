import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { RegisterForm } from '@/components/sections/register-form';

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="container mx-auto max-w-md py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Daftar</h1>
      <RegisterForm />
    </main>
  );
}
