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

// Fictional Ethiopian examples for the local POC preview. No customer names,
// performance claims, or Infinity ERP capabilities are presented as verified facts.
const makeBody = (...sections: Array<{ style?: string; text: string }>) =>
  sections.map(({ style = "normal", text }, index) => ({
    _type: "block",
    _key: `preview-block-${index}`,
    style,
    markDefs: [],
    children: [{ _type: "span", _key: `preview-span-${index}`, text, marks: [] }],
  }));

const previewArticles: Article[] = [
  {
    _id: "preview-story-addis-spares",
    title: "A careful count at a fictional Addis Ababa parts depot",
    slug: "fictional-addis-ababa-parts-depot-stock-count",
    contentType: "story",
    excerpt: "A fictional warehouse team compares shelf counts of fast-moving spare parts with recorded stock, investigates differences, and documents approved corrections.",
    publishedAt: "2026-10-28T09:00:00.000Z",
    readTime: 6,
    featured: true,
    authorName: "Infinity ERP Editorial Team",
    authorRole: "Illustrative fictional scenario",
    category: "Operations",
    tags: ["Inventory", "Stock count", "Workflow"],
    body: makeBody(
      { text: "FICTIONAL EXAMPLE — This scenario is invented for training and does not describe a real customer, a verified result, or a confirmed Infinity ERP implementation." },
      { style: "h2", text: "The count starts with a clear baseline" },
      { text: "At a fictional spare-parts depot in Addis Ababa, the inventory lead schedules a count for selected storage locations. Before counting, the team agrees on the cutoff time and asks receiving, picking, and dispatch staff to pause movements in the counted locations or record every movement separately." },
      { text: "The system quantity is captured as the recorded on-hand balance for each product and location at that agreed time. The count sheets identify the item and location; where applicable, the team also checks unit of measure, package size, lot, and serial details. A counter records what is physically present without changing the recorded balance." },
      { style: "h2", text: "Investigate before correcting" },
      { text: "For each line, the inventory lead compares counted quantity with the recorded on-hand quantity. The difference is treated as a discrepancy to investigate—not an instruction to immediately change stock. The team checks recent receipts, deliveries, transfers, returns, damaged goods, duplicate scans, and whether an item was counted in another location." },
      { text: "A second person recounts material differences. The team records the count time, location, counter, recount result, explanation, and supporting reference. This fictional story makes no numerical savings or accuracy claim." },
      { style: "h2", text: "Review and post the approved adjustment" },
      { text: "After reconciliation, an authorized inventory manager reviews the proposed counted quantities and reasons. Once approved, the manager applies or validates the inventory adjustment in the system. The posting updates stock on hand through an auditable inventory movement; it should not silently overwrite the count history." },
      { text: "The team checks the resulting on-hand balance and the adjustment record, then shares any required valuation or accounting review with finance. Open questions remain on hold rather than being forced to match." },
      { style: "h2", text: "What the team learned" },
      { text: "A reliable count is a controlled process: establish a cutoff, count by location, preserve the original system balance, explain variances, obtain approval, post the correction, and verify the resulting record. The example is illustrative; organizations should follow their own controls and configuration." },
    ),
  },
  {
    _id: "preview-story-bahir-dar-grain",
    title: "Two-location reconciliation for a fictional Bahir Dar grain distributor",
    slug: "fictional-bahir-dar-grain-stock-reconciliation",
    contentType: "story",
    excerpt: "A fictional distributor separates stock by warehouse and lot so a physical count can be reconciled without hiding transfers or damaged goods.",
    publishedAt: "2026-10-25T09:00:00.000Z",
    readTime: 5,
    featured: true,
    authorName: "Infinity ERP Editorial Team",
    authorRole: "Illustrative fictional scenario",
    category: "Operations",
    tags: ["Inventory", "Warehouse", "Lot tracking"],
    body: makeBody(
      { text: "FICTIONAL EXAMPLE — The distributor, its locations, and events below are invented for demonstration. This is not a real customer account or verified product outcome." },
      { style: "h2", text: "One item, two locations, separate balances" },
      { text: "In this fictional Bahir Dar scenario, a distributor stores packaged grain in a main warehouse and a smaller dispatch area. The team avoids comparing one combined total with one physical pile: each count is tied to its exact location and, where its process requires it, the relevant lot or package unit." },
      { text: "The inventory controller sets a count window and records a baseline of the system's on-hand quantities at that cutoff. Warehouse staff pause movements where practical. If a delivery or transfer must continue, the responsible person logs it with its time and source and destination so it can be reconciled against the baseline." },
      { style: "h2", text: "Separate count differences from operational movements" },
      { text: "The first comparison shows a mismatch at the dispatch area. Instead of making an immediate adjustment, the team checks whether a transfer was completed physically but not recorded, whether goods were staged for an order, and whether the same packages were counted twice. A supervisor recounts the affected location and documents the finding." },
      { text: "A damaged package is recorded as a separate condition and handled under the organization's damage and disposition policy. It is not mixed into saleable stock simply to make the quantity agree." },
      { style: "h2", text: "Approve, post, and verify" },
      { text: "The inventory manager reviews the baseline, count, movement evidence, recount, and proposed correction. Approved differences are posted as traceable inventory adjustments with a reason and responsible user. The team then verifies the new balance at each location and asks finance to review any valuation impact required by policy." },
      { text: "The lesson is to reconcile by location and preserve movement context. A combined warehouse total can appear correct while stock is in the wrong place." },
    ),
  },
  {
    _id: "preview-story-hawassa-coffee",
    title: "A lot-aware count at a fictional Hawassa coffee cooperative store",
    slug: "fictional-hawassa-coffee-cooperative-lot-aware-count",
    contentType: "story",
    excerpt: "A fictional cooperative uses lot references and a second-person review to distinguish a count variance from a traceability problem.",
    publishedAt: "2026-10-21T09:00:00.000Z",
    readTime: 5,
    featured: false,
    authorName: "Infinity ERP Editorial Team",
    authorRole: "Illustrative fictional scenario",
    category: "Operations",
    tags: ["Inventory", "Lot tracking", "Quality"],
    body: makeBody(
      { text: "FICTIONAL EXAMPLE — This training story is invented. It does not describe an actual Ethiopian cooperative, customer, or measured outcome." },
      { style: "h2", text: "Count quantity and identity" },
      { text: "A fictional coffee cooperative store near Hawassa plans a count of packaged inventory. Its stock process tracks lots, so counters record both the quantity and the visible lot information. The team confirms the product and storage location before recording a count; a correct total assigned to the wrong lot would still leave traceability incomplete." },
      { text: "The stock controller captures the system's recorded on-hand balance at the agreed cutoff. Counters do not edit the balance while they work. If packages are moved during the count, the movement is noted and reconciled so the same goods are not counted twice or missed." },
      { style: "h2", text: "Review the discrepancy with quality" },
      { text: "When a count differs, a second counter verifies the quantity and lot label. The team checks recent receipts, internal transfers, dispatch records, and any quality hold. Stock on hold remains identified and follows the cooperative's quality procedure; a quantity correction does not itself release goods for use or sale." },
      { style: "h2", text: "Maintain an audit trail" },
      { text: "A designated manager reviews the evidence and approves any adjustment. The approved correction is posted with a reason, count reference, and accountable user. The store then verifies the resulting balance and confirms that the lot and quality status still match the supporting records." },
      { text: "This example highlights that physical quantity, lot identity, and quality status are related but distinct checks. The workflow should be adapted to local policy and the organization's system configuration." },
    ),
  },
  {
    _id: "preview-doc-inventory-adjustment",
    title: "Inventory adjustment guide: count, compare, review, and post",
    slug: "inventory-adjustment-physical-count-compare-and-post-guide",
    contentType: "doc",
    excerpt: "A role-based guide to capturing a physical count, comparing it with recorded stock on hand, investigating differences, approving an adjustment, and verifying the posted result.",
    publishedAt: "2026-10-18T09:00:00.000Z",
    readTime: 10,
    featured: false,
    authorName: "Infinity ERP Editorial Team",
    authorRole: "Operations and inventory documentation",
    category: "Inventory control",
    tags: ["Inventory", "Stock count", "Adjustment", "Audit"],
    body: makeBody(
      { text: "Purpose: use this guide to reconcile a physical stock count against the system's recorded on-hand balance and post only reviewed, authorized corrections. The examples describe a generic inventory-management workflow; exact screen names and permissions depend on your system configuration." },
      { style: "h2", text: "Roles and responsibilities" },
      { text: "Counter / warehouse operator: counts stock at the physical location and records quantity, unit of measure, lot or serial where relevant, condition, time, and notes. The counter should not alter the baseline system quantity." },
      { text: "Inventory controller: defines scope and cutoff, captures or preserves the on-hand baseline, coordinates recounts, reconciles movements, and prepares the proposed adjustment with evidence." },
      { text: "Approver / inventory manager: independently reviews material variances, reasons, supporting records, and policy limits; approves, rejects, or requests a recount. Separate preparation and approval where staffing and policy allow." },
      { text: "Finance / system administrator: reviews valuation or accounting consequences where applicable, maintains access and configuration, and supports audit reporting. Do not grant posting rights more broadly than necessary." },
      { style: "h2", text: "1. Prepare and establish the count baseline" },
      { text: "Define the count scope by warehouse, storage location, product, and any lot or serial tracking requirement. Agree on a count date and cutoff time. Tell receiving, picking, production, dispatch, and transfer teams which locations are in scope." },
      { text: "Where operationally possible, pause stock movements in the count area for the count window. If movement cannot stop, record each movement with its timestamp, product, quantity, unit, source, destination, and transaction reference. A count and its system comparison must use the same cutoff; otherwise reconcile movements between those times." },
      { text: "Capture the recorded on-hand quantity from the inventory system for each scoped product/location at the baseline time. Preserve this value for comparison. Where practical, use a blind count sheet that does not reveal the expected quantity to the counter, reducing confirmation bias." },
      { style: "h2", text: "2. Count physical stock" },
      { text: "Count stock in its assigned location, using the system's expected unit of measure and packaging conversion. Verify item identity and location. Record lot or serial identifiers when tracked, and distinguish saleable, damaged, expired, returned, or quality-held stock according to policy." },
      { text: "Record the observed quantity as counted; do not make a system adjustment during the physical count. Identify the counter and time. For high-value, controlled, or materially discrepant lines, use a second-person recount and preserve both results." },
      { style: "h2", text: "3. Compare counted quantity with on-hand" },
      { text: "For each line, compare physical counted quantity with the preserved system on-hand quantity at the same cutoff, for the same product, location, unit of measure, and lot/serial context. Calculate the variance as counted quantity minus recorded on-hand quantity. A positive variance means more was counted than recorded; a negative variance means less was counted." },
      { text: "Example only: if a location's recorded on-hand is 48 units and the verified physical count is 45 units, the variance is minus 3 units. This arithmetic illustrates the comparison only; it is not a claim about a real organization or product." },
      { style: "h2", text: "4. Investigate before proposing an adjustment" },
      { text: "Check for unposted receipts or deliveries, picking and dispatch activity, internal transfers, returns, production consumption or output, duplicate or omitted scans, incorrect units or package conversions, wrong product/location, lot or serial mismatch, and damaged or quarantined goods. Reconcile all in-scope movements that occurred after the baseline and before the count." },
      { text: "If evidence does not explain the variance, recount the line and escalate according to the organization's threshold and policy. Do not force a match, delete the original count, or use an adjustment to disguise an unresolved transaction. Record the investigation, explanation, references, and any remaining uncertainty." },
      { style: "h2", text: "5. Prepare and approve the adjustment" },
      { text: "Enter or import the verified counted quantity for the correct product and location in the inventory adjustment/count workflow. Review the system-calculated difference against the preserved baseline. Attach or reference count sheets and investigation evidence, and select an accurate reason, such as counting variance, transfer timing, damage, or unit correction." },
      { text: "Submit the proposed adjustment for approval when required. The reviewer confirms scope, baseline, count evidence, recount, movement reconciliation, reason, quantity, lot/serial, and authorization. A rejected or unclear line returns for recount or investigation; it is not posted just to clear a task." },
      { style: "h2", text: "6. Commit (post) the approved adjustment" },
      { text: "Only an authorized user posts or validates an approved adjustment. Posting should create a traceable inventory movement that brings system on-hand into line with the approved counted quantity for the relevant product and location. It is a controlled transaction, not an edit that erases the prior balance or count history." },
      { text: "Before posting, verify that the count is final, movement cutoff is reconciled, approval is recorded, and the correct location and tracking details are selected. After posting, record the transaction reference and posting user/time. If the system supports draft and posted states, leave the count in draft until approved and confirm the posted state afterward." },
      { style: "h2", text: "7. Verify and close" },
      { text: "Recheck the resulting on-hand balance against the approved count and confirm the adjustment movement is visible in the history. Confirm no duplicate adjustment was posted. Escalate any valuation or accounting impact to finance under the organization's costing and accounting policy; the inventory counter should not make unsupported journal entries." },
      { text: "Close the count only when all lines are posted, explicitly deferred, or assigned for follow-up. Retain the baseline, count sheets, variance explanations, approvals, and posting references according to record-retention policy. Review recurring variance causes for process improvement." },
      { style: "h2", text: "Control checklist" },
      { text: "Before count: scope and cutoff defined; locations and teams informed; baseline preserved; movement handling agreed. During count: correct item, location, unit, lot/serial and condition recorded; no untracked movement; recounts performed where required. Before posting: variance investigated; evidence attached; approval obtained; posting rights checked. After posting: on-hand verified; movement reference retained; finance impact reviewed where applicable; unresolved items assigned." },
      { style: "h2", text: "Important configuration note" },
      { text: "Inventory systems differ in terminology, workflow, and accounting behavior. Configure adjustment permissions, approval thresholds, tracking rules, and valuation treatment with the organization's inventory and finance owners. This guide is educational and does not replace local accounting, tax, safety, or internal-control requirements." },
    ),
  },
  {
    _id: "preview-blog-reporting",
    title: "Five ERP reporting habits that improve decisions",
    slug: "five-erp-reporting-habits-that-improve-decisions",
    contentType: "blog",
    excerpt: "Make reports useful by connecting each dashboard to a real business question.",
    publishedAt: "2026-10-02T09:15:00.000Z",
    readTime: 5,
    featured: false,
    authorName: "Infinity ERP Editorial Team",
    category: "Finance",
    tags: ["Reporting", "Growth"],
    body: makeBody(
      { text: "Good reporting is not about adding more dashboards. It is about giving teams timely, clear information for the decisions they need to make." },
      { style: "h2", text: "Start with the decision" },
      { text: "Anchor each report to a practical question, such as margin by product, stockouts by warehouse, or order cycle time by region." },
    ),
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
