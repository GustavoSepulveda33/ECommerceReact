


import React from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { useEffect } from 'react';
import "./Contact.css";

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <Header />

            <main>

                {/* FORM */}
                <section id="contactHero">

                    <div className="jobFormContainer">
                        <form className="jobForm" onsubmit="return validateform()">

                            {/* FULL NAME */}
                            <label for="name1" className="label">Full Name</label>

                            <input
                                type="text"
                                id="name1"
                                name="Fullname"
                                placeholder="Your Full Name Here..."
                                required />

                            {/* EMAIL */}
                            <label for="email" className="label">Email</label>

                            <input
                                type="email"
                                id="email"
                                name="Email"
                                placeholder="Enter valid email address here..."
                                required />


                            {/* TEXTAREA */}
                            <label for="message" className="label">Leave a message</label>
                            <textarea id="message" required >Leave Message Here...</textarea>


                            {/* UPLOAD FILE */}
                            <label for="upload-file" className="label">Upload CV</label>
                            <p>Upload any CV or pertinent document here.</p>
                            <input
                                type="file"
                                id="upload-file"
                                name="upload-file" />

                            {/* SUBMIT */}
                            <button className="submit-button">Submit</button>
                        </form>
                    </div>


                </section>

            </main>




            <Footer />
        </div>
    )
}

export default Contact