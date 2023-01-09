



import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Products.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";



function Products() {

    const [products, setProducts] = useState([])


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);




    const addToCart = (ID, productTitle, productPrice) => {

        const postToCart = async () => {

            try {
                console.log(ID, productTitle, productPrice);
                const res = await axios.post(`http://localhost:8000/Cart`, {
                    ID: ID,
                    addedProduct: productTitle,
                    addedPrice: productPrice
                });

                console.log(res)


            } catch (err) {
                console.log(err);
            }

        }

        postToCart();
    }




    useEffect(() => {

        const fetchAllProducts = async () => {

            try {
                const res = await axios.get("http://localhost:8000/products")


                setProducts(res.data);


            } catch (err) {
                console.log(err)
            }

        }

        fetchAllProducts();

    }, [])




    // FILTERS: 

    // CATEGORY FILTERS (HOME AUDIO / PRO AUDIO / ALL PRODUCTS)
    const filterCategory = (category) => {

        const fetchCategory = async () => {

            try {
                console.log(category);
                const res = await axios.get(`http://localhost:8000/Type/${category}`);

                setProducts(res.data);

            } catch (err) {
                console.log(err);
            }

        }

        fetchCategory();
    }


    const showAllProducts = () => {

        const fetchProds = async () => {

            try {
                const res = await axios.get(`http://localhost:8000/Products`);

                setProducts(res.data);

            } catch (err) {
                console.log(err);
            }

        }

        fetchProds();
    }

    // PRICE FILTERS:
    const filterPrice = (price) => {

        const fetchPrice = async () => {

            try {
                const res = await axios.get(`http://localhost:8000/Products/${price}`);

                setProducts(res.data);

            } catch (err) {
                console.log(err);
            }

        }

        fetchPrice();
    }



    return (
        <div>

            <Header />

            {/* HERO SECTION */}
            <section id="heroSection">

                <div className="heroContainer">

                    <p className="heroText">Explore our world of audio</p>

                </div>

            </section>

            <section id='searchSection'>

                <button className="ProAudioFilter searchBTN" onClick={() => showAllProducts()}>All Products</button>
                <button className="ProAudioFilter searchBTN" onClick={() => filterCategory(`"proAudio"`)}>Pro Audio</button>
                <button className="HomeAudioFilter searchBTN" onClick={() => filterCategory(`"homeAudio"`)}>Home Audio</button>
                <button className="under1000 searchBTN" onClick={() => filterPrice("1000")}>Under $1000</button>
                <button className="under500 searchBTN" onClick={() => filterPrice("100")}>Under $100</button>


            </section>


            <div div className='products' >
                {
                    products.map((product) => (
                        <div className='proProductCard' key={product.ID}>

                            <p className='productTitle'>{product.productTitle}</p>
                            <img className='productIMG' src={product.productURL} alt={product.productTitle} />

                            <div className='extraContainer'>
                                <img className='extraPhotos' src={product.addURL1} alt={product.productTitle} />
                                <img className='extraPhotos' src={product.addURL2} alt={product.productTitle} />
                                <img className='extraPhotos' src={product.addURL3} alt={product.productTitle} />
                            </div>

                            <p className='productDesc'>{product.productDescription}</p>
                            <p className='productPrice' >${product.productPrice} USD</p>

                            <div className='btnContainer'>
                                <button className='add2CartBTN' onClick={() => addToCart(product.ID, product.productTitle, product.productPrice)}>Add to Cart</button>
                            </div>


                        </div>


                    ))
                }
            </div >

            <Footer />
        </div >
    )
}

export default Products



