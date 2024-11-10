import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="container mx-auto">
      <h1>Selamat datang, {session.user.name}</h1>
      {/* Konten dashboard lainnya */}
    </div>
  );
}
