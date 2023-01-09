


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";



function Arrows({prevSlide, nextSlide}) {
    return (
        <div className='arrows'>

            <span className='prev' onClick = {prevSlide}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></span>

            <span className='next' onClick = {nextSlide}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>

        </div>
    )
}

export default Arrows