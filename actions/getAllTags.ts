import { PrismaClient } from "@prisma/client";

export default async function getAllTags() {
  const prisma = new PrismaClient();

  try {
    const tag = await prisma.tag.findMany({
      include: {
        projects: true,
      },
    });

    return tag;
  } catch (error: any) {
    return [];
  }
}
