import { PrismaClient } from "@prisma/client";

export default async function getAllProjects() {
  const prisma = new PrismaClient();

  try {
    const allProjects = await prisma.project.findMany({
      include: {
        tags: true,
      },
    });

    return allProjects;
  } catch (error: any) {
    return [];
  }
}
