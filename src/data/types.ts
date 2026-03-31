
type Tag = {
  name: string;
  arrowIcon: string; // path to image
};

export interface CaseStudySection {
  title: string;
  content: string;
  image?: string;
  imagePosition?: "left" | "right";
  layout?: "full" | "split";
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