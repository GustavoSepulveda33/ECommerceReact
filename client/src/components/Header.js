


import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Header.css";


function Header() {


    const navigate = useNavigate();

    return (
        <div>
            {/* HEADER HEADER HEADER HEADER HEADER */}

            <header>

                <div className="logo" onclick={() => navigate("/")}></div>

                <nav>

                    <ul className="nav-bar">

                        <li className="nav-item" onClick={() => navigate("/")}>home</li>
                        <li className="nav-item" onClick={() => navigate("/Products")}>products</li>
                        <li className="nav-item" onClick={() => navigate("/Contact")}>contact</li>
                        <li className="nav-item" onClick={() => navigate("/Cart")}>cart</li>


                    </ul>
                    

                </nav>

            </header>



        </div>
    )
}

export default Header