import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required().max(120) }),
    defineField({ name: "slug", title: "URL slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: "contentType", title: "Content type", type: "string", options: { list: [{ title: "Blog", value: "blog" }, { title: "Customer story", value: "story" }, { title: "Guide / documentation", value: "doc" }, { title: "Case study", value: "case-study" }], layout: "radio" }, initialValue: "blog", validation: (rule) => rule.required() }),
    defineField({ name: "excerpt", title: "Summary", type: "text", rows: 3, validation: (rule) => rule.required().max(240) }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block", styles: [{ title: "Normal", value: "normal" }, { title: "Heading 2", value: "h2" }, { title: "Heading 3", value: "h3" }, { title: "Quote", value: "blockquote" }], marks: { decorators: [{ title: "Strong", value: "strong" }, { title: "Emphasis", value: "em" }, { title: "Code", value: "code" }], annotations: [{ name: "link", type: "object", title: "Link", fields: [{ name: "href", type: "url", title: "URL", validation: (rule) => rule.uri({ scheme: ["http", "https", "mailto"] }) }] }] } }, { type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alternative text", type: "string" }] }] }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "Alternative text", type: "string" }] }),
    defineField({ name: "author", title: "Author", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "category", title: "Category", type: "reference", to: [{ type: "category" }] }),
    defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "reference", to: [{ type: "tag" }] }] }),
    defineField({ name: "publishedAt", title: "Publish date", type: "datetime", initialValue: () => new Date().toISOString(), validation: (rule) => rule.required() }),
    defineField({ name: "featured", title: "Feature on homepage", type: "boolean", initialValue: false }),
    defineField({ name: "readTime", title: "Reading time (minutes)", type: "number", initialValue: 5, validation: (rule) => rule.min(1).max(120) }),
    defineField({ name: "seoTitle", title: "SEO title", type: "string", validation: (rule) => rule.max(60) }),
    defineField({ name: "seoDescription", title: "SEO description", type: "text", rows: 2, validation: (rule) => rule.max(160) }),
  ],
  preview: { select: { title: "title", subtitle: "contentType", media: "coverImage" } },
});
