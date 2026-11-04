import { sanityClient, sanityConfigured } from "./sanity";

export type Article = {
  _id: string;
  title: string;
  slug: string;
  contentType: "blog" | "story" | "doc" | "case-study";
  excerpt: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  authorName: string;
  authorRole?: string;
  category?: string;
  tags: string[];
  coverImage?: { url?: string; alt?: string };
  body: any[];
  seoTitle?: string;
  seoDescription?: string;
};

const articleQuery = `*[_type == "article" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  contentType,
  excerpt,
  publishedAt,
  readTime,
  featured,
  "authorName": author->name,
  "authorRole": author->role,
  "category": category->title,
  "tags": tags[]->title,
  "coverImage": coverImage { alt, "url": asset->url },
  "body": body[] { ..., _type == "image" => { alt, "url": asset->url } },
  seoTitle,
  seoDescription
}`;

// A small local preview dataset makes the site buildable before Sanity is configured.
const previewArticles: Article[] = [
  {
    _id: "preview-blog-reporting",
    title: "Five ERP reporting habits that improve decisions",
    slug: "five-erp-reporting-habits-that-improve-decisions",
    contentType: "blog",
    excerpt: "Make reports useful by connecting each dashboard to a real business question.",
    publishedAt: "2026-10-02T09:15:00.000Z",
    readTime: 5,
    featured: true,
    authorName: "Infinity ERP Editorial Team",
    category: "Finance",
    tags: ["Reporting", "Growth"],
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Good reporting is not about adding more dashboards. It is about giving teams timely, clear information for the decisions they need to make." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Start with the decision" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Anchor each report to a practical question, such as margin by product, stockouts by warehouse, or order cycle time by region." }] },
    ],
  },
  {
    _id: "preview-story-inventory",
    title: "A clearer view of inventory across the operation",
    slug: "clearer-view-of-inventory-across-the-operation",
    contentType: "story",
    excerpt: "See how connected stock workflows can reduce manual reconciliation and improve visibility.",
    publishedAt: "2026-09-22T09:00:00.000Z",
    readTime: 6,
    featured: true,
    authorName: "Infinity ERP Editorial Team",
    category: "Operations",
    tags: ["Inventory", "Workflow"],
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "When teams work from separate spreadsheets, stock updates can be delayed and difficult to reconcile. A shared workflow gives purchasing, warehouse, and operations teams a consistent view." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Build a shared source of truth" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "This sample story demonstrates the format. Replace it with an approved customer story and verified results before publishing." }] },
    ],
  },
  {
    _id: "preview-doc-rollout",
    title: "Getting started with ERP rollout planning",
    slug: "getting-started-with-erp-rollout-planning",
    contentType: "doc",
    excerpt: "Prepare teams, processes, and data for a smoother ERP implementation.",
    publishedAt: "2026-09-10T11:00:00.000Z",
    readTime: 4,
    featured: false,
    authorName: "Infinity ERP Editorial Team",
    category: "Implementation",
    tags: ["Workflow", "Implementation"],
    body: [
      { _type: "block", style: "normal", children: [{ _type: "span", text: "ERP adoption benefits from planning before go-live. Begin by agreeing on process ownership, data readiness, and measurable outcomes." }] },
      { _type: "block", style: "h2", children: [{ _type: "span", text: "Plan in phases" }] },
      { _type: "block", style: "normal", children: [{ _type: "span", text: "Start with a pilot group, document key workflows, and decide who owns approvals, reporting, and data quality before expanding to more teams." }] },
    ],
  },
];

export async function getArticles(): Promise<Article[]> {
  if (!sanityConfigured || !sanityClient) return previewArticles;
  return sanityClient.fetch<Article[]>(articleQuery);
}

export function sectionFor(article: Article): "blog" | "stories" | "docs" {
  if (article.contentType === "story" || article.contentType === "case-study") return "stories";
  if (article.contentType === "doc") return "docs";
  return "blog";
}

export function labelFor(type: Article["contentType"]): string {
  return ({ blog: "Blog", story: "Story", doc: "Guide", "case-study": "Case study" })[type];
}
