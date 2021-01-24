export interface IBlogCard {
  className?: string;
  date: string;
  excerpt: string;
  slug: string;
  title: string;
  type: 'text' | 'video';
  tags: string[]
  theme?: string;
}