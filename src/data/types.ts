
type Tag = {
  name: string;
  arrowIcon: string; // path to image
};

type TextSegment = {
  text: string;
  bold?: boolean;
};

type Paragraph = TextSegment[];

export interface DesignSlide {
  title: string;
  badge: string;
  text: string;
  image?: string;
}

export interface CaseStudySection {
  title: string;
  paragraphs: Paragraph[];
  image?: string;
  layout?: "full" | "split";
  design?: DesignSlide[];
}

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