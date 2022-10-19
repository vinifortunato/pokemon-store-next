import { Pokemon } from "../../types/Common.types";

export type CartProps = {
  open?: boolean;
  onClose?: () => void;
  onRemove?: (pokemon: Pokemon) => void;
}
