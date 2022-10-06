import Card from "../Card";
import styles from './List.module.css'

const List = ({ content, onItemClick }) => {
    const handleClick = (content) => {
        onItemClick(content);
    }

    const map = content.map((item) => {
        return (
          <Card key={item.name} name={item.name} onClick={handleClick} />
        );
    });

    return (
        <div className={styles.listContainer}>
            {map}
        </div>
    )
}

export default List;