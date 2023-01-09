

import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faAmazon, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'



function Footer() {

    const navigate = useNavigate();

    function handleRedirect(site) {
        window.open('https://www.' + site + '.com', '_blank');
    } 

    

    return (
        <div>
            <footer>

                <div class="footerContainer">

                    {/* SOCIAL MEDIA ICONS */}
                    <div class="footerSocialMedia">

                        <ul>
                            <li class="footerLabel">SOCIAL MEDIA</li>

                            {/* Facebook  */}
                            <li onClick={() => handleRedirect('facebook')}><FontAwesomeIcon className="footerList-item" icon={faFacebookF} /></li>
                            
                            {/* Instagram */}
                            <li onClick={() => handleRedirect('instagram')}><FontAwesomeIcon className="footerList-item" icon={faInstagram} /></li>
                            
                            {/* Twitter */}
                            <li onClick={() => handleRedirect('twitter')}><FontAwesomeIcon className="footerList-item" icon={faTwitter} /></li> 
                            
                            {/* Amazon */}
                            <li onClick={() => handleRedirect('amazon')}><FontAwesomeIcon className="footerList-item" icon={faAmazon} /></li>
                        </ul>

                    </div>

                    {/* PAGE WARPS */}
                    <div class="footerPageWarps">

                        <ul>
                            <li class="footerLabel">PAGE WARPS</li>
                            
                            <li className="footerList-item" onClick={() => navigate("/")}>home</li>
                            <li className="footerList-item" onClick={() => navigate("/Products")}>products</li>
                            <li className="footerList-item" onClick={() => navigate("/Contact")}>contact</li>
                            <li className="footerList-item" onClick={() => navigate("/Cart")}>cart</li>
                        </ul>

                    </div>

                    {/* ADDITIONAL CONTENT */}
                    <div class="footerAdditionalContent">

                        <ul>
                            <li class="footerLabel">ADDITIONAL CONTENT</li>
                            
                            <li >PDFs and Manuals</li>
                            <li >Tech Support</li>
                            <li >FAQ</li>
                        </ul>

                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer