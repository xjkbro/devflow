// API utility functions for fetching posts
const API_BASE = 'https://cms.jkbro.dev/api';

interface Post {
  id: number;
  title: string;
  slug: string;
  feature_image_url?: string;
  content: string;
  created_at: string;
  updated_at: string;
  excerpt?: string;
  views_count?: number;
  // Add other fields as necessary based on your CMS response
}
interface ApiResponse {
  success: boolean;
  data?: CategoryDetails;
  message?: string;
}

interface CategoryDetails {
  id: number;
  name: string;
  description: string;
  created_at?: string;
  updated_at?: string;
  posts: Post[];
}


export async function fetchCategoryDetails(categoryId: number): Promise<CategoryDetails> {
  const apiKey = import.meta.env.API_KEY;
  
  if (!apiKey) {
    throw new Error('API_KEY environment variable is required');
  }

  try {
    const response = await fetch(`${API_BASE}/categories/${categoryId}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const result: ApiResponse = await response.json();
    
    if (!result.success) {
      throw new Error(result.message || 'API request unsuccessful');
    }

    return result.data || { id: categoryId, name: '', description: '', posts: [] };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}
