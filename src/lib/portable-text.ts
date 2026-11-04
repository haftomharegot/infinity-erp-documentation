function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);
}

function renderSpan(span: any, markDefs: any[]): string {
  let text = escapeHtml(String(span.text ?? ""));
  for (const mark of span.marks ?? []) {
    if (mark === "strong") text = `<strong>${text}</strong>`;
    else if (mark === "em") text = `<em>${text}</em>`;
    else if (mark === "code") text = `<code>${text}</code>`;
    else {
      const link = markDefs.find((definition) => definition._key === mark && definition._type === "link");
      const href = String(link?.href ?? "");
      if (link && /^(https?:\/\/|mailto:|\/)/i.test(href)) {
        text = `<a href="${escapeHtml(href)}" rel="noopener noreferrer">${text}</a>`;
      }
    }
  }
  return text;
}

export function renderPortableText(blocks: any[] = []): string {
  return blocks.map((block) => {
    if (block._type === "image" && block.url) {
      return `<figure><img src="${escapeHtml(block.url)}" alt="${escapeHtml(block.alt ?? "")}" loading="lazy"></figure>`;
    }
    if (block._type !== "block") return "";
    const text = (block.children ?? []).map((span: any) => renderSpan(span, block.markDefs ?? [])).join("");
    const tag = ({ h2: "h2", h3: "h3", blockquote: "blockquote" } as Record<string, string>)[block.style] ?? "p";
    return `<${tag}>${text}</${tag}>`;
  }).join("\n");
}
