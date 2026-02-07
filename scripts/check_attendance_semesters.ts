import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function check() {
  const semesters = await prisma.attendance.findMany({
    select: { semesterId: true },
    distinct: ["semesterId"],
  });
  console.log(
    "Available Attendance Semesters:",
    semesters.map((s) => s.semesterId),
  );

  const sample = await prisma.attendance.findMany({
    take: 5,
    include: { subject: true },
  });
  console.log("Sample Attendance Records:", JSON.stringify(sample, null, 2));

  process.exit(0);
}

check();
