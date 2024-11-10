import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Admin#1234", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@foodrine.site" },
    update: {},
    create: {
      name: "Admin FoodrinE",
      email: "admin@foodrine.site",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin user seeded:", admin);
}

main()
  .catch((e) => {
    console.error("Error seeding admin:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
