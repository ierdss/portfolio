import { PrismaClient } from "@prisma/client";

interface createTag {
  name: string;
  type?: string;
}

export default async function createTag({ name, type }: createTag) {
  const prisma = new PrismaClient();

  try {
    const tag = await prisma.tag.create({
      data: {
        name: name,
        type: type,
      },
    });

    return tag;
  } catch (error: any) {
    return [];
  }
}
