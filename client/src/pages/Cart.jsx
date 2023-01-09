



import React, { useEffect, useState } from 'react';
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./Cart.css";

function Cart() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {

        const fetchAllCartProducts = async () => {

            try {
                const res = await axios.get("http://localhost:8000/cart")


                setCartProducts(res.data);


            } catch (err) {
                console.log(err)
            }

        }

        fetchAllCartProducts();

    }, [])


    const handleDelete = (cartID) => {

        const deleteFromCart = async () => {

            try {
                console.log(cartID);
                const res = await axios.delete(`http://localhost:8000/CartDel/${cartID}`);
                console.log(res);
                window.location.reload();

            } catch (err) {
                console.log(err);
            }

        }

        deleteFromCart();
    }



    return (
        <div>
            <Header />

            <main className='cartMain'>

                <div div className='cart' >
                    {
                        cartProducts.map((product) => (
                            <div className='cartCard' key={product.cartID}>

                                <p className='cartTitle'>{product.addedProduct}</p>
                                <p className='cartPrice' >${product.addedPrice} USD</p>

                                <button className='deleteBTN' onClick={() => handleDelete(product.cartID)}>Delete</button>



                            </div>


                        ))
                    }
                </div >

            </main>

            <Footer />

        </div>
    )
}

export default Cart
