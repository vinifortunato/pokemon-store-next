import { useCallback } from "react";
import { Pokemon } from "../../types/Common.types";
import Card from "../Card";
import styles from './List.module.css'
import { ListProps } from "./List.types";

const List = ({ items = [], onItemClick }: ListProps) => {
  const handleClick = useCallback((pokemon: Pokemon | null) => {
    (pokemon && onItemClick) && onItemClick(pokemon);
  }, [onItemClick]);

  const map = items.map((item) => {
    return (
      <Card key={item.name} name={item.name} onClick={handleClick} />
    );
  });

  return (
    <div className={styles.listContainer} data-testid="list">
      {map}
    </div>
  );
}

export default List;
