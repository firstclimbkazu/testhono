export interface HelloResponse {
  message: string;
}

export interface Article {
  id: number;
  title: string;
  content: string;
}

export interface ArticlesResponse {
  articles: Article[];
}

export interface CreateArticleRequest {
  title: string;
  content: string;
}

export interface CreateArticleResponse {
  message: string;
  article: CreateArticleRequest;
} 