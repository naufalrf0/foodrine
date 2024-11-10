"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validations/registerSchema";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

type RegisterFormData = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        const signInResponse = await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });
  
        console.log("signInResponse:", signInResponse);
  
        if (signInResponse?.error) {
          Swal.fire("Error!", signInResponse.error, "error");
        } else {
          Swal.fire("Berhasil!", "Registrasi dan login berhasil.", "success");
          router.push("/dashboard");
        }
      } else {
        const errorData = await response.json();
        Swal.fire("Gagal!", errorData.error, "error");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      Swal.fire("Error!", "Terjadi kesalahan. Coba lagi.", "error");
    }
  };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input placeholder="Nama" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="address"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alamat</FormLabel>
              <FormControl>
                <Input placeholder="Alamat" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="phoneNumber"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Telepon</FormLabel>
              <FormControl>
                <Input placeholder="Nomor Telepon" {...field} />
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
        <FormField
          name="confirmPassword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Kata Sandi</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Konfirmasi Kata Sandi"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full bg-orange-400 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-orange-500 hover:shadow-lg transition duration-300"
          type="submit"
        >
          Daftar
        </Button>
        <p className="mt-4">
          Sudah memiliki akun?{" "}
          <Link href="/auth/login" className="text-primary">
            Masuk
          </Link>
        </p>
      </form>
    </Form>
  );
}
