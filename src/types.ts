export type Post = {
  id: number;
  user_id: number;
  category_id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  is_draft: boolean;
  views_count: number;
  tags: string | null;
  created_at: string;
  updated_at: string;
  project_id: number;
  feature_image_url: string|null;
};