"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validations/loginSchema";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm() {
  const router = useRouter();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      Swal.fire("Error!", result.error, "error");
    } else {
      Swal.fire("Berhasil!", "Login berhasil.", "success");
      router.push("/dashboard");
    }
  };

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
        name="email"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="password"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Kata Sandi</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Kata Sandi" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button
        className="w-full bg-orange-400 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-500 hover:shadow-lg transition duration-300"
        type="submit"
      >
        Masuk
      </Button>
      <p className="mt-4">
        Belum memiliki akun?{" "}
        <Link href="/auth/register" className="text-primary">
          Daftar
        </Link>
      </p>
    </form>
  </Form>
  );
}
