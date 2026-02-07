import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function check() {
  const attendance = await prisma.attendance.findMany({
    take: 5,
  });
  console.log("Sample Attendance:", JSON.stringify(attendance, null, 2));
  await prisma.$disconnect();
}
check();
