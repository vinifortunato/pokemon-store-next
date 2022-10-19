import { Pokemon } from "../../types/Common.types";

export type CardProps = {
  name: string;
  onClick?: (pokemon: Pokemon | null) => void;
}
