import type { FlowSpec } from "./components/FlowDiagram";

/** Column x positions for 124px-wide nodes with a 28px gap. */
const col = (i: number) => 75 + i * 152;
/** Column x positions for compact 112px-wide nodes used in half-width cards. */
const tight = (i: number) => 62 + i * 136;

export const trexAiFlow: FlowSpec = {
  width: 776,
  height: 250,
  ariaLabel: "TREX AI enrichment: merchant drafts and operator reviews go through a multi-provider LLM router, image and web checks, and delta suggestions, ending in field-level acceptance or severity-ranked audit findings",
  lanes: [{ y: 26, label: "MERCHANT" }, { y: 141, label: "OPERATOR" }],
  nodes: [
    { id: "merchant", x: 75, y: 60, label: "Product draft", sub: "create / update", kind: "start" },
    { id: "operator", x: 75, y: 170, label: "Approval queue", sub: "approve / reject", kind: "start" },
    { id: "router", x: 235, y: 115, w: 150, label: "LLM router", sub: "OpenAI·Gemini·Bedrock", kind: "ai" },
    { id: "rules", x: 235, y: 215, w: 150, label: "Guideline rules", sub: "DynamoDB-backed" },
    { id: "vision", x: 397, y: 115, label: "Vision + web", sub: "image · web search" },
    { id: "delta", x: 549, y: 115, label: "Delta changes", sub: "only real edits" },
    { id: "accept", x: 701, y: 60, label: "Field review", sub: "accept per field", kind: "end" },
    { id: "audit", x: 701, y: 170, label: "Audit findings", sub: "severity-ranked", kind: "end" },
  ],
  edges: [
    { from: "merchant", to: "router" },
    { from: "operator", to: "router" },
    { from: "rules", to: "router", route: "v", dashed: true, label: "no redeploy" },
    { from: "router", to: "vision" },
    { from: "vision", to: "delta" },
    { from: "delta", to: "accept" },
    { from: "delta", to: "audit" },
  ],
};

export const docusignFlow: FlowSpec = {
  width: 760,
  height: 112,
  ariaLabel: "DocuSign merchant onboarding: merchant contract in TREX, pre-filled agreement, DocuSign e-signature, status webhook back to TREX, merchant onboarded",
  nodes: [
    { id: "merchant", x: col(0), y: 56, label: "Merchant", sub: "contract in TREX", kind: "start" },
    { id: "agreement", x: col(1), y: 56, label: "Agreement", sub: "terms pre-filled" },
    { id: "docusign", x: col(2), y: 56, label: "DocuSign", sub: "e-signature", kind: "ai" },
    { id: "webhook", x: col(3), y: 56, label: "Status update", sub: "signed → TREX" },
    { id: "onboarded", x: col(4), y: 56, label: "Onboarded", sub: "200+ merchants", kind: "end" },
  ],
  edges: [
    { from: "merchant", to: "agreement" },
    { from: "agreement", to: "docusign" },
    { from: "docusign", to: "webhook" },
    { from: "webhook", to: "onboarded" },
  ],
};

export const sapBcrsFlow: FlowSpec = {
  width: 760,
  height: 250,
  ariaLabel: "TREX and SAP Commerce integration with order data flowing back to TREX, and the BCRS deposit flow from product setup through checkout deposit, automatic refund, and reports",
  lanes: [{ y: 24, label: "TREX ↔ SAP COMMERCE" }, { y: 166, label: "BCRS · 10¢ DEPOSIT" }],
  nodes: [
    { id: "trex", x: col(0), y: 58, label: "TREX", sub: "products · prices", kind: "start" },
    { id: "sync", x: col(1), y: 58, label: "Catalog sync", sub: "price · promo" },
    { id: "sap", x: col(2), y: 58, label: "SAP Commerce", sub: "ImpEx · Solr · OCC", kind: "ai" },
    { id: "isc", x: col(3), y: 58, label: "iShopChangi", sub: "storefront" },
    { id: "orders", x: col(4), y: 58, label: "Orders", sub: "checkout · payment", kind: "end" },
    { id: "setup", x: col(0), y: 200, label: "Product setup", sub: "approval flow", kind: "start" },
    { id: "bulk", x: col(1), y: 200, label: "Bulk upload", sub: "eligible SKUs" },
    { id: "deposit", x: col(2), y: 200, label: "Deposit charged", sub: "10¢ / container" },
    { id: "refund", x: col(3), y: 200, label: "Auto refund", sub: "SAP Commerce" },
    { id: "reports", x: col(4), y: 200, label: "Reports", sub: "sales · receipts", kind: "end" },
  ],
  edges: [
    { from: "trex", to: "sync" },
    { from: "sync", to: "sap" },
    { from: "sap", to: "isc" },
    { from: "isc", to: "orders" },
    { from: "orders", to: "trex", route: "below", depth: 44, dashed: true, label: "order + payment details back to TREX" },
    { from: "setup", to: "bulk" },
    { from: "bulk", to: "deposit" },
    { from: "deposit", to: "refund" },
    { from: "refund", to: "reports" },
  ],
};

export const zaiqaFlow: FlowSpec = {
  width: 912,
  height: 200,
  ariaLabel: "Zaiqa: staff sign in with JWT and roles, branch-scoped access, hotel PMS and restaurant modules, domain events through Spring Modulith, billing, and per-branch reports",
  nodes: [
    { id: "staff", x: col(0), y: 100, label: "Staff sign-in", sub: "JWT · 7 roles", kind: "start" },
    { id: "branch", x: col(1), y: 100, label: "Branch scope", sub: "multi-site RBAC" },
    { id: "pms", x: col(2), y: 48, label: "Hotel PMS", sub: "rooms · folios" },
    { id: "rest", x: col(2), y: 152, label: "Restaurant", sub: "orders · tables" },
    { id: "events", x: col(3), y: 100, label: "Domain events", sub: "Spring Modulith", kind: "ai" },
    { id: "billing", x: col(4), y: 100, label: "Billing", sub: "folios · invoices" },
    { id: "reports", x: col(5), y: 100, label: "Reports", sub: "per branch", kind: "end" },
  ],
  edges: [
    { from: "staff", to: "branch" },
    { from: "branch", to: "pms" },
    { from: "branch", to: "rest" },
    { from: "pms", to: "events" },
    { from: "rest", to: "events" },
    { from: "events", to: "billing" },
    { from: "billing", to: "reports" },
  ],
};

export const ragFlow: FlowSpec = {
  width: 532,
  height: 206,
  ariaLabel: "Multi-agent RAG: documents are embedded with Gemini into Qdrant; questions go through an agent router and access-filtered retrieval to a grounded answer",
  lanes: [{ y: 22, label: "INGEST" }, { y: 138, label: "QUERY" }],
  nodes: [
    { id: "docs", x: tight(0), y: 56, w: 112, label: "Documents", sub: "upload · parse", kind: "start" },
    { id: "embed", x: tight(1), y: 56, w: 112, label: "Embeddings", sub: "Gemini" },
    { id: "qdrant", x: tight(2), y: 56, w: 112, label: "Qdrant", sub: "vectors + meta", kind: "ai" },
    { id: "question", x: tight(0), y: 172, w: 112, label: "Question", sub: "user query", kind: "start" },
    { id: "agents", x: tight(1), y: 172, w: 112, label: "Agent router", sub: "specialist agents" },
    { id: "retrieve", x: tight(2), y: 172, w: 112, label: "Retrieval", sub: "RBAC filters" },
    { id: "answer", x: tight(3), y: 172, w: 112, label: "Answer", sub: "grounded", kind: "end" },
  ],
  edges: [
    { from: "docs", to: "embed" },
    { from: "embed", to: "qdrant" },
    { from: "qdrant", to: "retrieve", route: "v", dashed: true, label: "semantic search" },
    { from: "question", to: "agents" },
    { from: "agents", to: "retrieve" },
    { from: "retrieve", to: "answer" },
  ],
};

export const smartHisFlow: FlowSpec = {
  width: 532,
  height: 196,
  ariaLabel: "SmartHIS: patient registration, appointments, laboratory and pharmacy services, then billing",
  nodes: [
    { id: "reg", x: tight(0), y: 98, w: 112, label: "Registration", sub: "patient intake", kind: "start" },
    { id: "appt", x: tight(1), y: 98, w: 112, label: "Appointments", sub: "doctor slots" },
    { id: "lab", x: tight(2), y: 46, w: 112, label: "Laboratory", sub: "orders · results" },
    { id: "pharmacy", x: tight(2), y: 150, w: 112, label: "Pharmacy", sub: "dispense · stock" },
    { id: "billing", x: tight(3), y: 98, w: 112, label: "Billing", sub: "audit-logged", kind: "end" },
  ],
  edges: [
    { from: "reg", to: "appt" },
    { from: "appt", to: "lab" },
    { from: "appt", to: "pharmacy" },
    { from: "lab", to: "billing" },
    { from: "pharmacy", to: "billing" },
  ],
};

export const releaseFlow: FlowSpec = {
  width: 760,
  height: 150,
  ariaLabel: "Biweekly release flow: Jira sprint, DEV, QA, business sign-off, then PROD deployment, with requirements and release notes kept in Confluence",
  nodes: [
    { id: "sprint", x: col(0), y: 46, label: "Sprint", sub: "Jira · 2 weeks", kind: "start" },
    { id: "dev", x: col(1), y: 46, label: "DEV", sub: "build + unit tests" },
    { id: "qa", x: col(2), y: 46, label: "QA", sub: "regression testing" },
    { id: "signoff", x: col(3), y: 46, label: "Business sign-off", sub: "stakeholder approval", w: 132, kind: "ai" },
    { id: "prod", x: col(4), y: 46, label: "PROD", sub: "biweekly release", kind: "end" },
  ],
  edges: [
    { from: "sprint", to: "dev" },
    { from: "dev", to: "qa" },
    { from: "qa", to: "signoff" },
    { from: "signoff", to: "prod" },
    { from: "sprint", to: "prod", route: "below", depth: 40, dashed: true, label: "requirements → release notes in Confluence" },
  ],
};
