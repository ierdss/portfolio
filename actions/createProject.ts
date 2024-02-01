import { PrismaClient } from "@prisma/client";

interface createProject {
  title: string;
  subtitle?: string;
  description?: string;
  isFeatured?: boolean;

  desktopThumbnail?: string;
  desktopAlt?: string;
  mobileThumbnail?: string;
  mobileAlt?: string;

  linkRepository?: string;
  linkLiveDemo?: string;
  linkCaseStudy?: string;
}

export default async function createProject({
  title,
  subtitle,
  description,
  isFeatured,
  desktopThumbnail,
  desktopAlt,
  mobileThumbnail,
  mobileAlt,
  linkRepository,
  linkLiveDemo,
  linkCaseStudy,
}: createProject) {
  const prisma = new PrismaClient();

  try {
    const project = await prisma.project.create({
      data: {
        title: title,
        subtitle: subtitle,
        description: description,
        isFeatured: isFeatured,
        desktopThumbnail: desktopThumbnail,
        desktopAlt: desktopAlt,
        mobileThumbnail: mobileThumbnail,
        mobileAlt: mobileAlt,
        linkRepository: linkRepository,
        linkLiveDemo: linkLiveDemo,
        linkCaseStudy: linkCaseStudy,
      },
    });

    return project;
  } catch (error: any) {
    return [];
  }
}
