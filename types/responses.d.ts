import type { Product } from "./product";

export interface ResponseProductShow {
  success: boolean;
  message: string;
  data: Product[];
}
