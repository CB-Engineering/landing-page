export const site = {
  company: "CB Engineering",
  legalName: "CB Engineering BV",
  founder: "Bruno Coussement",
  title: "AI and data architect",
  location: "Antwerp, Belgium",
  email: "bruno@cbengineering.be",
  linkedin: "https://www.linkedin.com/in/brunocoussement/",
} as const;

/** The consultancy the client engagements were delivered through. */
export const dataminded = {
  name: "Dataminded",
  href: "https://dataminded.com",
  logo: "/logos/companies/dataminded.svg",
} as const;

export type Service = {
  id: string;
  name: string;
  description: string;
};

/** What clients can call me for. */
export const services: Service[] = [
  {
    id: "platform",
    name: "Data platform architecture",
    description:
      "Cloud data platforms on AWS or Azure: lakehouse design, secure hybrid networking, infrastructure as code, and CI/CD for data. The foundation everything else stands on.",
  },
  {
    id: "products",
    name: "Data products, and the teams that own them",
    description:
      "Introducing data products as an operating model, then building the pipelines, contracts, and squads behind them. From a shared vision to a migration that actually lands.",
  },
  {
    id: "ml",
    name: "Machine learning in operations",
    description:
      "Real-time failure detection, capacity and energy forecasting, delay prediction. Models that run next to the business every day, not in a notebook.",
  },
  {
    id: "ai",
    name: "Applied AI and innovation",
    description:
      "From plant-expert chatbots to automated inspection with a robot dog, and AI-native delivery for regulated teams. Scoping what is worth doing, proving it fast, and making it safe to adopt.",
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  /** Exam code, when the certification is known by one. */
  code?: string;
  icon: string;
  status: "in-progress" | "expired";
  issued?: string;
  expired?: string;
};

/** Certifications, current work first. */
export const certifications: Certification[] = [
  {
    id: "az-305",
    name: "Azure Solutions Architect Expert",
    issuer: "Microsoft",
    code: "AZ-305",
    icon: "/logos/tech/azure.svg",
    status: "in-progress",
  },
  {
    id: "az-104",
    name: "Azure Administrator Associate",
    issuer: "Microsoft",
    code: "AZ-104",
    icon: "/logos/tech/azure.svg",
    status: "in-progress",
  },
  {
    id: "aws-mls",
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    icon: "/logos/tech/aws.svg",
    status: "expired",
    issued: "Dec 2019",
    expired: "Dec 2022",
  },
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    icon: "/logos/tech/aws.svg",
    status: "expired",
    issued: "Mar 2019",
    expired: "Mar 2022",
  },
];

/** Technology name → monochrome icon. Names without an entry render as text only. */
export const techIcons: Record<string, string> = {
  Snowflake: "/logos/tech/snowflake.svg",
  dbt: "/logos/tech/dbt.svg",
  PySpark: "/logos/tech/apachespark.svg",
  AWS: "/logos/tech/aws.svg",
  Docker: "/logos/tech/docker.svg",
  GitLab: "/logos/tech/gitlab.svg",
  Databricks: "/logos/tech/databricks.svg",
  "Azure Databricks": "/logos/tech/databricks.svg",
  "Azure ML": "/logos/tech/azure.svg",
  "Azure DevOps": "/logos/tech/azuredevops.svg",
  Terraform: "/logos/tech/terraform.svg",
  Bitbucket: "/logos/tech/bitbucket.svg",
  "Concourse CI": "/logos/tech/concourse.svg",
  GKE: "/logos/tech/googlecloud.svg",
  Vite: "/logos/tech/vite.svg",
  TypeScript: "/logos/tech/typescript.svg",
  Postgres: "/logos/tech/postgresql.svg",
  MCP: "/logos/tech/modelcontextprotocol.svg",
  "React Native": "/logos/tech/react.svg",
  Expo: "/logos/tech/expo.svg",
  Supabase: "/logos/tech/supabase.svg",
};

export type Logo = {
  src: string;
  /** Rendered height in px; wordmarks and marks need different heights to look equal. */
  height: number;
  /** Rendered width in px, from the file's aspect ratio, so the box is reserved before load. */
  width: number;
  /** Raster logos get a grayscale filter; SVGs are already ink-coloured. */
  raster?: boolean;
};

export type Experience = {
  id: string;
  company: string;
  logo: Logo;
  /** What I did there, as a verb phrase. */
  did: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

/** Client engagements, delivered through Dataminded. Ordered by relevance, most recent first. */
export const experience: Experience[] = [
  {
    id: "luminus",
    company: "EDF Luminus",
    logo: { src: "/logos/companies/luminus.svg", height: 26, width: 85 },
    did: "Led the data team of the generation department",
    summary:
      "A team of five data engineers and scientists with one goal: raise asset availability by detecting catastrophic failures before they cause downtime.",
    highlights: [
      "Real-time machine learning on plant sensor data, with gradient-boosted models running in production.",
      "Developed data products and made them available across the business.",
      "Led innovation projects: automated plant inspection with a robot dog, and a plant-expert chatbot.",
    ],
    stack: ["Snowflake", "dbt", "PySpark", "AWS", "Docker", "GitLab"],
  },
  {
    id: "brussels-airlines",
    company: "Brussels Airlines",
    logo: { src: "/logos/companies/brussels-airlines.svg", height: 22, width: 93 },
    did: "Co-architected the move to data products",
    summary:
      "Co-architected the vision for a data products architecture and the migration towards it, and saw that migration through successfully.",
    highlights: [
      "Migrated crew planning and crew tracking, core systems at Brussels Airlines, to the data products architecture.",
      "Introduced architecture practices centred on non-functionals: data availability, external storage, architecture decision records, and data discoverability.",
    ],
    stack: ["Azure Databricks", "dbt", "Azure DevOps"],
  },
  {
    id: "sncb",
    company: "SNCB/NMBS",
    logo: { src: "/logos/companies/sncb.svg", height: 22, width: 34 },
    did: "Introduced data products and led the first ones",
    summary:
      "Embedded on both sides of the railway: in the business, with the passenger information unit, and in Ypto, its IT department, with the advanced analytics team. Introduced the concept of data products and led the development of the first ones.",
    highlights: [
      "Capacity forecasting for trains.",
      "Energy usage prediction.",
      "Delay prediction.",
    ],
    stack: ["Azure ML", "Azure Databricks", "PySpark", "Azure DevOps"],
  },
  {
    id: "kbc",
    company: "KBC",
    logo: { src: "/logos/companies/kbc.svg", height: 26, width: 33 },
    did: "Engineered the first cloud data platform",
    summary:
      "Platform engineer on Edison, the bank's first cloud data platform, and an active contributor to its secure architecture for a hybrid on-premise and AWS setup.",
    highlights: [],
    stack: ["AWS", "Terraform", "Networking", "Concourse CI", "PySpark", "Bitbucket"],
  },
];

export type Project = {
  id: string;
  name: string;
  /** My part in it. */
  role: string;
  description: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
  logo?: Logo;
  /** Several organisations under one entry; each renders on its own line, logo first, instead of `name`. */
  clients?: { name: string; logo: Logo }[];
};

/** Everything else worth knowing about, in no particular order. */
export const projects: Project[] = [
  {
    id: "expedait",
    name: "Expedait",
    role: "Co-founder",
    description:
      "AI SDLC for regulated enterprises that want to become AI-native.",
    stack: ["GKE", "Vite", "TypeScript", "Postgres", "MCP", "Agentic SDLC", "Skills"],
    href: "https://expedait.org",
    hrefLabel: "expedait.org",
  },
  {
    id: "naby",
    name: "Naby",
    role: "Side project",
    description: "Multi-platform mobile baby monitoring, used by friends.",
    stack: ["React Native", "Expo", "Supabase"],
  },
  {
    id: "stadim",
    name: "Stadim",
    role: "Architecture",
    description:
      "Helped architect the reduction of Databricks run cost, and migrated to Delta Lake.",
    stack: ["Databricks", "Delta Lake"],
    href: "https://stadim.be",
    hrefLabel: "stadim.be",
    logo: { src: "/logos/companies/stadim.png", height: 22, width: 70, raster: true },
  },
  {
    id: "eumetsat",
    name: "EUMETSAT",
    role: "Design review",
    description:
      "Reviewed the design documents around the software delivery lifecycle of EPS-SG and other missions.",
    stack: [],
    logo: { src: "/logos/companies/eumetsat.svg", height: 20, width: 108 },
  },
  {
    id: "workshops",
    name: "Bank Delen, Atlas Copco, VRT, Climact, UZA",
    clients: [
      { name: "Bank Delen", logo: { src: "/logos/companies/delen.svg", height: 22, width: 112 } },
      { name: "Atlas Copco", logo: { src: "/logos/companies/atlas-copco.svg", height: 16, width: 91 } },
      { name: "VRT", logo: { src: "/logos/companies/vrt.svg", height: 18, width: 46 } },
      { name: "Climact", logo: { src: "/logos/companies/climact.svg", height: 14, width: 90 } },
      { name: "UZA", logo: { src: "/logos/companies/uza.svg", height: 20, width: 45 } },
    ],
    role: "Workshops",
    description:
      "Led data and ML platform as-is and to-be workshops. UZA is the Antwerp University Hospital.",
    stack: [],
  },
  {
    id: "fake-data",
    name: "Fake data generation",
    role: `Internal project at ${"Dataminded"}`,
    description:
      "Relevant data in non-production environments. Pre-LLM era: we trained generative models on the databases themselves, which is where most of the cost went.",
    stack: [],
  },
];
