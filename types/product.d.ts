import type { Category } from "./category";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  sku: string;
  status: string;
  quantity: number;
  rating: number;
  createdAt: string;
  updatedAt: string;
  category: Category;
}
