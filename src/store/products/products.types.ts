import { Product } from "../../types/Common.types"

export type ProductsState = {
  next: string | null,
  previous: string | null,
  list: Array<Product>
}
