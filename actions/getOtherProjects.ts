import { PrismaClient } from "@prisma/client";

export default async function getOtherProjects() {
  const prisma = new PrismaClient();

  try {
    const allProjects = await prisma.project.findMany({
      include: {
        tags: true,
      },
      where: {
        isFeatured: null,
      },
    });

    return allProjects;
  } catch (error: any) {
    return [];
  }
}
