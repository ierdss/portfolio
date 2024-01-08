import { PrismaClient } from "@prisma/client";

export default async function Query() {
  const prisma = new PrismaClient();

  const project = await prisma.project.update({
    where: {
      id: "659b60b97354a795e7d4040b",
    },
    data: {
      subtitle: "Testing Script",
    },
  });

  console.log(project);
}
