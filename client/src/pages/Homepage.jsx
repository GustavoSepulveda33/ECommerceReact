



import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import "./Homepage.css";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Slider from '../components/Slider';


function Homepage() {


    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Header />
            <main>

                {/* HERO */}
                <section id="hero">

                    <h1 className='Market'>MARKET AUDIO</h1>

                    <p class="subName"> QUALITY | COMMUNITY | TECHNOLOGY </p>

                </section>

                <div className='superCont'>
                    <Slider />
                </div>


                {/* CATEGORY BOXES */}

                <section id="prodCatBoxes">

                    <div className="boxes">

                        {/* PRO AUDIO CATEGORY BOX */}
                        <div className="box1" onClick={() => navigate(`/Products`)}>
                            <p className="description">Pro Audio</p>
                        </div>

                        {/* HOME AUDIO CATEGORY BOX  */}
                        <div className="box2" onClick={() => navigate("/Products")}>
                            <p className="description">Home Audio</p>
                        </div>

                    </div>

                </section>




                {/* ABOUT US PAGE LINK OFF */}

                <section id="aboutUsBox">

                    <div className="aboutHomeContainer">

                        <p className="homeAboutUs">Our team of talented audiophiles has been dedicated to providing the best quality products and services for over a decade.</p>

                    </div>

                </section>


                {/* CONTACT US PAGE LINK OFF */}

                <section id="contactUsHome">

                    <div className="homeContactContainer">

                        <div className="colorOverlay"></div>
                        <div className="colorOverlay2"></div>

                        <p className="homeContactText">

                            Are you looking for technical support or service?
                            Do you have any questions about a product warranty or specs?

                            Leave us a message and someone from our talented team of professionals with reach out shortly to help in any way we can!

                        </p>

                    </div>

                </section>



            </main>

            <Footer />

        </div >
    )
}

export default Homepage