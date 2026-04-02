type Tag = {
  name: string;
  arrowIcon: string; // path to image
};

export type Paragraph = {
  text: string;
  bold?: string; // if present, rendered as <strong>{bold}</strong> before text
};

export type CaseStudySection = {
  title: string;
  match?: string; // ✅ ADD THIS
  paragraphs: {
    text: string;
    bold?: string;
  }[];
  image?: string;
  badge?: string;
  index?: number;
  designIndex?: number;
  total?: number;
};

export type NavSection = {
  title: string;
  match: string;
};

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
  heroSubtitle?: string;
  tags?: Tag[];
  sections: CaseStudySection[];
  deliverables?: string[];
  tools?: string[];
}

export type SplitSectionProps = {
  title: string;
  index?: number;
  image: string;
  children: React.ReactNode;
  designIndex?: number;
  total?: number;
};