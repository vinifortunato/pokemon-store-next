import { CartState } from "./cart/cart.types";
import { ProductsState } from "./products/products.types"
import { UserState } from "./user/user.types";

export type AppState = {
  cart: CartState;
  products: ProductsState;
  user: UserState;
}
