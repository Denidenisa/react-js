import styles from './Exo4.module.css';

import { useState } from "react";
 
 
export const Exo4 = () => {
 
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Burger Cheese',
            price: 8.50,
            quantity: 0,
            image:"https://images.unsplash.com/photo-1692688649681-901967b9d50c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
        },
        {
            id: 2,
            name: 'Burger Chicken',
            price: 11,
            quantity: 0,
            image:"https://plus.unsplash.com/premium_photo-1695758787947-0aff87c1f93a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name: 'Burger Triple',
            price: 12.50,
            quantity: 0,
            image:"https://images.unsplash.com/photo-1552718752-c682d315b136?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyJTIwdHJpcGxlfGVufDB8fDB8fHww"
        },
        {
            id: 4,
            name: 'Petite Frite',
            price: 3.50,
            quantity: 0,
            image:"https://media.istockphoto.com/id/1312992473/photo/tasty-delicious-and-fresh-fried-french-potatoes-in-basket-over-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYie6Z0-QPVxHGUjdXHn9bzrC0vIl8LKGHjRldCAVcA="
        },
        {
            id: 5,
            name: 'Moyenne Frite',
            price: 4.50,
            quantity: 0,
            image:"https://media.istockphoto.com/id/1312992473/photo/tasty-delicious-and-fresh-fried-french-potatoes-in-basket-over-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYie6Z0-QPVxHGUjdXHn9bzrC0vIl8LKGHjRldCAVcA="
        },
        {
            id: 6,
            name: 'Grande Frite',
            price: 6,
            quantity: 0,
            image:"https://media.istockphoto.com/id/1312992473/photo/tasty-delicious-and-fresh-fried-french-potatoes-in-basket-over-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=CYie6Z0-QPVxHGUjdXHn9bzrC0vIl8LKGHjRldCAVcA="
        },
    ]);
 
    const [total, setTotal] = useState(0);
 
    const crement = (id, value) => {
 
        const newProducts = products.map(product => {
            //pour chaque compteur, si l'id correspond
            if (product.id === id) {
                //on renvoie le compteur avec l'id non modifié mais le count modifié
                product.quantity += value;
                return product
 
            }
            //si l'id ne correspond pas, on renvoie le compteur tel quel (id + count inchangé)
            else {
                return product
            }
        })
        // on va modifier le tableau de produits
        setProducts(newProducts);
 
 
 
        //    let somme = 0;
        //     products.forEach( product =>        
        //         somme += product.price * product.quantity
        //     )
 
        let somme = products.reduce( (somme, product) => somme + product.price * product.quantity, 0)
 
        setTotal(somme);
 
    }
 
    return (
        <div className={styles.h2}>
            <h2>Gestion de panier :</h2>
            <div>
                {products.map(product => (
                    <div key={product.id} className="flex flex-row items-center gap-3" >

<img 
    src={product.image} 
    alt={product.name}
    className={styles.productImage}  

/>
                 
 
                        <p className={styles.name}>{product.name}</p> <p className={styles.name}>{product.price.toFixed(2)}€</p>
                        
 
                        <div className={styles.buttons}>
                            <button  disabled={product.quantity === 0}  onClick={() => crement(product.id, -1)} >➖</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => crement(product.id, 1)} >➕</button>
                        </div>
 
                    </div>))}
            </div>
            <div className={styles.total}>
                Coût total : {total} €
            </div>
        </div>
    )
  }