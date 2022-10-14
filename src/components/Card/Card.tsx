import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "../../types/Common.types";
import DefaultButton from "../DefaultButton";
import styles from './Card.module.css'
import { CardProps } from "./Card.types";

const Card = ({ name, onClick }: CardProps) => {
    const [details, setDetails] = useState<Pokemon | null>(null);

    const handleResponse = async (rawResponse: any) => {
        const data = await rawResponse.json();
        const { name, sprites, weight, height } = data;

        const price = weight * height;

        const pokemonDetails: Pokemon = {
            name,
            sprite: sprites.other['official-artwork'].front_default,
            price,
            amount: 1
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
        if (!details) {
          return;
        }
        onClick(details);
    }

    const handleClick = useCallback(() => {

    }, []);

    const numberFormat = new Intl.NumberFormat(
        'pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        }
    );

    const formatedPrice = details?.price ? numberFormat.format(details.price) : '...';

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
                <p className={styles.cardTitle} onClick={handleClick}>{formatedPrice}</p>
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
