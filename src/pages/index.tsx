import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { cartActions } from "../store/cart";
import { productsActions } from "../store/products";
import { userActions } from "../store/user";
import { Header, Cart, List, DefaultButton } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { AppState } from '../store/store.types';
import { Pokemon } from '../types/Common.types';

const Home = () => {
    const dispatch = useDispatch();

    const [cartOpen, setCartOpen] = useState(false);

    const products = useSelector(({ products }: AppState) => products);

  // Inicialização
  useEffect(() => {
    const localData = localStorage.getItem('pokemon-store');
    if (localData) {
        const parsed = JSON.parse(localData);
        const { cart, products, user } = parsed;

        dispatch(cartActions.init(cart));

        dispatch(productsActions.init({
            next: products.next,
            previous: products.previous,
            list: products.list
        }));

        if (user) {
            dispatch(userActions.set(user));
        }
        return;
    }

    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const { next, previous, results: list } = data;
            dispatch(productsActions.init({
                next,
                previous,
                list
            }));
        })
        .catch(() => {
            console.error('Error');
        });
    }, [dispatch]);

    const handleAddToCart = useCallback((item: Pokemon) => {
        dispatch(cartActions.add(item));
        setCartOpen(true);
    }, [dispatch]);

    const handleCartOpen = useCallback(() => {
        setCartOpen(true);
    }, []);

    const handleCartClose = () => {
      setCartOpen(false);
    }

    const handleCartItemRemove = useCallback((item: Pokemon) => {
      dispatch(cartActions.remove(item));
    }, [dispatch]);

    // Click no botão load more
    const handleLoadMore = useCallback(() => {
        if (!products.next) {
            return;
        }
        fetch(products.next)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { next, previous, results: list } = data;
                dispatch(productsActions.update({
                    next,
                    previous,
                    list
                }));
            })
            .catch(() => {
                console.error('Error');
            });
    }, [dispatch, products.next]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Pokemon Store Next</title>
                <meta name="description" content="The best Pokemon store!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Header onCartClick={handleCartOpen} />
                <Cart
                    open={cartOpen}
                    onClose={handleCartClose}
                    onRemove={handleCartItemRemove}
                />
                <List
                    items={products.list}
                    onItemClick={handleAddToCart}
                />
                <div>
                    <DefaultButton
                        label="Carregar mais"
                        onClick={handleLoadMore}
                    />
                </div>
            </main>
        </div>
    )
}

export default Home;
