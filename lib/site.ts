export const site = {
  company: "CB Engineering",
  legalName: "CB Engineering BV",
  founder: "Bruno Coussement",
  location: "Brussels, Belgium",
  email: "bruno@cbengineering.be",
} as const;

export type Project = {
  id: string;
  index: string;
  name: string;
  tag: string;
  tagline: string;
  description: string;
  href: string;
  hrefLabel: string;
};

export const projects: Project[] = [
  {
    id: "expedait",
    index: "01",
    name: "Expedait",
    tag: "Startup · building now",
    tagline: "A process platform for human–agent software delivery.",
    description:
      "AI tools were built for individuals, not teams. Expedait is the layer where your people, your agents, and the tools you already use work on the same objectives — every objective traced from strategy to shipped.",
    href: "https://expedait.org",
    hrefLabel: "expedait.org",
  },
  {
    id: "babyfoon",
    index: "02",
    name: "Babyfoon",
    tag: "App · side project",
    tagline: "A baby monitor that fits in your suitcase.",
    description:
      "Two phones, paired in a minute. No camera, no account, no subscription — €19 once. Audio is encrypted on the device and stays peer-to-peer on a local network. Works in any hotel, Airbnb, or your in-laws' spare room.",
    href: "https://babyfoon.dev",
    hrefLabel: "babyfoon.dev",
  },
];
