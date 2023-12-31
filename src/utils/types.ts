export enum SearchParams {
  LIMIT = 'limit',
  OFFSET = 'offset',
  SEARCH = 'search',
}

export enum MediaQueries {
  TABLET = 768,
  DESKTOP = 1024,
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface HttpErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
