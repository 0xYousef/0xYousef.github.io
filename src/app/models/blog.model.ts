export interface BlogMeta {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  published: string;
  file: string;
  postType: string;
  field: string;
  image: string;
  last_modified: string;
}
export interface Content {
  title: string;
  content: Section[];
}

export type Section =
  | ParagraphSection
  | ListSection
  | CodeSection
  | ImageSection
  | HeadingSection;

export interface ParagraphSection {
  type: 'p';
  text: string;
}

export interface ListSection {
  type: 'list';
  items: string[];
}

export interface CodeSection {
  type: 'code';
  language: string;
  snippet: string;
}

export interface ImageSection {
  type: 'image';
  url: string;
  caption?: string;
}

export interface HeadingSection {
  type: 'h1' | 'h2';
  text: string;
}
