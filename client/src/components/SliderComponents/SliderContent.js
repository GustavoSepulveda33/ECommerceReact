


import React from 'react'

function SliderContent({ activeIndex, sliderImage}) {
    return (
        <div>
            {sliderImage.map((slide, index)=> (
                <div 
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className='slide-image' src={slide.url} alt=""/>
                    {/* <h2 className='slide-title'>{slide.title}</h2>
                    <h3 className='slide-text'>{slide.description}</h3> */}
                </div>
            ))}
        </div>
    )
}

export default SliderContent