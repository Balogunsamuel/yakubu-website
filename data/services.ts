export type ServiceCategory =
  | "tax"
  | "finance"
  | "business"
  | "centre"
  | "registration";

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  icon: string;
  flag?: string;
}

export const taxServices: Service[] = [
  {
    id: "tax-practice",
    title: "Tax Practice",
    description:
      "Professional tax advisory and compliance services for individuals and businesses operating in Nigeria.",
    category: "tax",
    icon: "FileText",
  },
  {
    id: "tax-training",
    title: "Tax Training",
    description:
      "Comprehensive tax education and training programmes for professionals and organizations.",
    category: "tax",
    icon: "GraduationCap",
  },
  {
    id: "tax-tribunal",
    title: "Tax Defence Tribunal (TAT)",
    description:
      "Representation and support for tax disputes and appeals before the Tax Appeal Tribunal.",
    category: "tax",
    icon: "Scale",
  },
  {
    id: "citn-exam",
    title: "CITN Professional Exam Support",
    description:
      "Preparation and guidance for the Chartered Institute of Taxation of Nigeria professional examinations.",
    category: "tax",
    icon: "Award",
  },
  {
    id: "tax-returns",
    title: "Filing Tax Returns",
    description:
      "Accurate and timely filing of tax returns to all relevant government agencies.",
    category: "tax",
    icon: "Send",
  },
  {
    id: "tin-tcc",
    title: "Obtaining TIN and TCC",
    description:
      "Assistance with Tax Identification Number registration and Tax Clearance Certificate processing.",
    category: "tax",
    icon: "BadgeCheck",
  },
  {
    id: "stamp-duty",
    title: "Processing of Stamp Duty",
    description:
      "Efficient processing and payment of stamp duties on legal documents and transactions.",
    category: "tax",
    icon: "Stamp",
  },
];

export const financeServices: Service[] = [
  {
    id: "cash-flow",
    title: "Cash Flow Management",
    description:
      "Strategic cash flow planning and management to optimize your business liquidity.",
    category: "finance",
    icon: "TrendingUp",
  },
  {
    id: "investment",
    title: "Investment Advisory",
    description:
      "Informed investment guidance to help you grow and protect your wealth.",
    category: "finance",
    icon: "PiggyBank",
  },
  {
    id: "oil-gas-licences",
    title: "Oil & Gas and Solid Mineral Licences",
    description:
      "Expert assistance with obtaining and managing licences in the oil, gas, and mining sectors.",
    category: "finance",
    icon: "Fuel",
  },
  {
    id: "oil-gas-procurement",
    title: "Procurement for Oil and Gas",
    description:
      "Procurement support and advisory services for the oil and gas industry.",
    category: "finance",
    icon: "Package",
  },
  {
    id: "company-accounts",
    title: "Filing Company Accounts",
    description:
      "Preparation and filing of statutory accounts to regulatory bodies.",
    category: "finance",
    icon: "FolderCheck",
  },
  {
    id: "auditing",
    title: "Auditing",
    description:
      "Independent audit services to ensure accuracy and compliance of your financial records.",
    category: "finance",
    icon: "Search",
  },
];

export const businessServices: Service[] = [
  {
    id: "business-plans",
    title: "Formation of Business Plans",
    description:
      "Professional business plan development for startups, expansions, and funding applications.",
    category: "business",
    icon: "ClipboardList",
  },
  {
    id: "event-planning",
    title: "Event Planning",
    description:
      "Professional event planning and coordination services for corporate and private occasions.",
    category: "business",
    icon: "Calendar",
  },
];

export const centreServices: Service[] = [
  {
    id: "photocopying",
    title: "Photocopying",
    description:
      "Fast, high-quality photocopying in all sizes.",
    category: "centre",
    icon: "Copy",
  },
  {
    id: "typing-printing",
    title: "Typing & Printing",
    description:
      "Professional typing and printing services for documents of all kinds.",
    category: "centre",
    icon: "Printer",
  },
  {
    id: "laminating",
    title: "Laminating",
    description:
      "Protect your important documents with professional lamination.",
    category: "centre",
    icon: "Layers",
  },
  {
    id: "spiral-binding",
    title: "Spiral Binding",
    description:
      "Neat spiral binding for reports, projects, and presentations.",
    category: "centre",
    icon: "BookOpen",
  },
  {
    id: "slide-binding",
    title: "Slide Binding",
    description:
      "Professional slide binding for a polished finish.",
    category: "centre",
    icon: "BookMarked",
  },
  {
    id: "music-notes",
    title: "Printing of Music Notes",
    description:
      "Specialized printing for musical scores and sheet music.",
    category: "centre",
    icon: "Music",
  },
  {
    id: "colour-printing",
    title: "Colour Printing",
    description:
      "Vibrant colour printing for documents, photos, and graphics.",
    category: "centre",
    icon: "Palette",
  },
  {
    id: "bw-printing",
    title: "Black & White Printing",
    description:
      "Economical black and white printing for everyday documents.",
    category: "centre",
    icon: "FileText",
  },
  {
    id: "scanning",
    title: "Scanning",
    description:
      "Document scanning in colour or black and white, any size.",
    category: "centre",
    icon: "ScanLine",
  },
  {
    id: "graph-printing",
    title: "Graph Printing",
    description:
      "Specialized printing for graphs, charts, and technical drawings.",
    category: "centre",
    icon: "BarChart2",
  },
  {
    id: "pos-services",
    title: "POS Services",
    description:
      "Convenient point-of-sale transactions and withdrawals.",
    category: "centre",
    icon: "CreditCard",
  },
  {
    id: "internet-cafe",
    title: "Internet Café",
    description:
      "Reliable internet access and computer use.",
    category: "centre",
    icon: "Wifi",
  },
  {
    id: "online-registration",
    title: "Online Registration Assistance",
    description:
      "Help with online applications and registrations for schools and government portals.",
    category: "centre",
    icon: "UserPlus",
  },
];

export const quickServices = [
  { id: "photocopy", title: "Photocopy", icon: "Copy" },
  { id: "print", title: "Print", icon: "Printer" },
  { id: "scan", title: "Scan", icon: "ScanLine" },
  { id: "typing", title: "Typing", icon: "Type" },
  { id: "laminating", title: "Laminate", icon: "Layers" },
  { id: "pos", title: "POS", icon: "CreditCard" },
];

export const allServices = [
  ...taxServices,
  ...financeServices,
  ...businessServices,
  ...centreServices,
];

export function getServicesByCategory(
  category: ServiceCategory,
): Service[] {
  return allServices.filter(
    (service) => service.category === category,
  );
}
