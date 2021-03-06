import type { PrismaClient } from '@prisma/client';

import { isIsoDate } from '../utils/date-utils';

import { cursorToText, textToCursor } from './cursor-encoding';
import { HTTPNotFound } from './errors';

export const TILES_BLOGS_PER_PAGE = 4;
export const TILES_ARTICLES_PER_BLOG = 5;
export const LIST_ARTICLES_PER_PAGE = 20;

function last<T extends readonly R[], R>(arr: readonly [R, ...T]): R;
function last<T>(arr: readonly T[]): T | undefined;
function last<T>(arr: readonly T[]): T | undefined {
  return arr[arr.length - 1];
}

export const getArticlesForGrid = async (prisma: PrismaClient, cursor?: string) => {
  const date = cursor && cursorToText(cursor);

  if (date && !isIsoDate(date)) {
    throw new HTTPNotFound();
  }

  const where = date
    ? {
        updatedAt: {
          lt: date,
        },
      }
    : {};

  const blogs = await prisma.blog.findMany({
    where: { ...where, isPublic: true },
    take: TILES_BLOGS_PER_PAGE,
    orderBy: {
      updatedAt: 'desc',
    },
    include: {
      articles: {
        take: TILES_ARTICLES_PER_BLOG,
        orderBy: {
          updatedAt: 'desc',
        },
      },
    },
  });

  const lastBlog = last(blogs);
  return {
    data: blogs,
    nextCursor: lastBlog?.updatedAt && textToCursor(lastBlog?.updatedAt.toISOString()),
  };
};

export const getArticlesPaginationForGrid = async (prisma: PrismaClient) => {
  const blogs = await prisma.blog.findMany({
    where: { isPublic: true },
    orderBy: {
      updatedAt: 'desc',
    },
    select: {
      updatedAt: true,
    },
  });

  const cursors = blogs.flatMap((blog, index) => {
    if (index % TILES_BLOGS_PER_PAGE === TILES_BLOGS_PER_PAGE - 1) {
      return [textToCursor(blog.updatedAt.toISOString())];
    }
    return [];
  });
  return cursors;
};

export const getArticlesForList = async (prisma: PrismaClient, cursor?: string) => {
  const date = cursor && cursorToText(cursor);

  if (date && !isIsoDate(date)) {
    throw new HTTPNotFound();
  }

  const where = date
    ? {
        createdAt: {
          lt: date,
        },
      }
    : {};
  const articles = await prisma.article.findMany({
    where: { ...where, blog: { isPublic: true } },
    take: LIST_ARTICLES_PER_PAGE,
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      blog: true,
    },
  });

  const lastArticle = last(articles);
  return {
    data: articles,
    nextCursor: lastArticle?.createdAt && textToCursor(lastArticle?.createdAt.toISOString()),
  };
};

export const getArticlesPaginationForList = async (prisma: PrismaClient) => {
  const articles = await prisma.article.findMany({
    where: {
      blog: { isPublic: true },
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      createdAt: true,
    },
  });

  const cursors = articles.flatMap((article, index) => {
    if (index % LIST_ARTICLES_PER_PAGE === LIST_ARTICLES_PER_PAGE - 1) {
      return [textToCursor(article.createdAt.toISOString())];
    }
    return [];
  });
  return cursors;
};

export const getArticlesSlugs = async (prisma: PrismaClient, limit?: number) => {
  const articles = await prisma.article.findMany({
    where: {
      blog: { isPublic: true },
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      slug: true,
    },
    take: limit,
  });

  return articles;
};

export const getArticleBySlug = async (prisma: PrismaClient, slug: string) => {
  const article = await prisma.article.findFirst({
    where: {
      slug: {
        equals: slug,
      },
      blog: { isPublic: true },
    },
    include: {
      blog: true,
    },
  });

  if (!article) {
    throw new HTTPNotFound();
  }

  return article;
};
