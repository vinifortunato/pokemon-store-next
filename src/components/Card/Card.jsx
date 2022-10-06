import { useCallback, useEffect, useState } from "react";
import DefaultButton from "../DefaultButton";
import styles from './Card.module.css'

const Card = ({ name, onClick }) => {
    const [details, setDetails] = useState(null);

    const handleResponse = async (rawResponse) => {
        const data = await rawResponse.json();
        const { name, sprites, weight, height } = data;

        const price = weight * height;

        const pokemonDetails = {
            name,
            sprite: sprites.other['official-artwork'].front_default,
            price
        }
        setDetails(pokemonDetails);
    }

    const getPokemonDetails = useCallback(() => {
        const request = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        request.then((event) => {
            handleResponse(event);
        });
        request.catch(() => {
            console.log('erro');
        });
    }, [name]);

    useEffect(() => {
        getPokemonDetails();
    }, [getPokemonDetails]);

    const handleAddClick = () => {
        onClick(details);
    }

    const handleClick = useCallback(() => {
       
    }, []);

    return (
        <div className={styles.card}>
            <div className={styles.cardImageWrapper} onClick={handleClick}>
            {details && (
                <img 
                    alt={name}
                    className={styles.cardImage}
                    src={details.sprite}
                />
            )}
            </div>
            <div className={styles.cardDetails}>
                <p className={styles.cardTitle} onClick={handleClick}>{name}</p>
                <p className={styles.cardTitle} onClick={handleClick}>{details?.price || '...'}</p>
                <div className={styles.buttonAdapter}>
                    <DefaultButton 
                        label="Adicionar ao carrinho"
                        type="button"
                        onClick={handleAddClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Card;