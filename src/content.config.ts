import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

const books = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
	schema: z.object({
		title: z.string(),
		author: z.string(),
		status: z.enum(['reading', 'next', 'finished', 'paused']).default('next'),
		rating: z.number().min(1).max(5).optional(),
		link: z.url().optional(),
		note: z.string().optional(),
		order: z.number().default(0),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		status: z.enum(['active', 'exploring', 'paused', 'done']).default('active'),
		summary: z.string(),
		tags: z.array(z.string()).default([]),
		link: z.url().optional(),
		repo: z.url().optional(),
		order: z.number().default(0),
	}),
});

export const collections = { blog, books, projects };
