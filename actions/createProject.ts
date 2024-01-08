import { PrismaClient } from "@prisma/client";

interface createProject {
  title: string;
  subtitle?: string;
  description?: string;
  isFeatured?: boolean;

  thumbnailDesktop?: string;
  thumbnailMobile?: string;
  altDesktop?: string;
  altMobile?: string;

  linkRepository?: string;
  linkLiveDemo?: string;
  linkCaseStudy?: string;
}

export default async function createProject({
  title,
  subtitle,
  description,
  isFeatured,
  thumbnailDesktop,
  thumbnailMobile,
  altDesktop,
  altMobile,
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
        thumbnailDesktop: thumbnailDesktop,
        thumbnailMobile: thumbnailMobile,
        altDesktop: altDesktop,
        altMobile: altMobile,
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
