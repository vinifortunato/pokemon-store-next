import { Pokemon } from "../../types/Common.types";

export type ListProps = {
  items: Array<any>;
  onItemClick: (pokemon: Pokemon) => void;
}
