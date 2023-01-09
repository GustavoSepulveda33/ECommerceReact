





import React, { useState, useEffect } from 'react';
import SliderContent from './SliderComponents/SliderContent';
import Dots from './SliderComponents/Dots';
import Arrows from './SliderComponents/Arrows';
import sliderImages from './SliderComponents/sliderImages';
import "./slider.css";


const len = sliderImages.length - 1; 


function Slider(props) {


    const [activeIndex, setActiveIndex] = useState(0); 

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000); 
        return () => clearInterval(interval); 
    }, [activeIndex]);


    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} sliderImage={sliderImages} />
            
            <Arrows 
                prevSlide={() => 
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)    
                }
                nextSlide={() => 
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                }
            />

            <Dots 
                activeIndex={activeIndex}
                sliderImage={sliderImages}
                onClick={(activeIndex) => setActiveIndex(activeIndex)}
            />
            

        </div>
    )
}

export default Slider