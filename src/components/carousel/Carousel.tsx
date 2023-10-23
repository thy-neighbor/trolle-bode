import React, { useEffect, useState } from 'react';
import Slide, { slideHeight } from './Slide';
import MobileStepper from '@mui/material/MobileStepper';
import './carousel.css';

type Props = {
    images : string[]
}

function Carousel({images}: Props) {

    const [index, setIndex] = useState<number>(0);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [bottom, setBottom] = useState<number>(0);
    
    const size : number = images.length;

    // console.log("Scroll Event: "+ scrollPosition);
    console.log("Dot Index: "+ index);

    console.log("Slide Height: "+ slideHeight());

    console.log()

    useEffect(() => {

        // let sliderHeightValue : number = sliderHeight();
        // let slideYValue : number = slideHeight();

        // if(sliderYValue > 0){
        //     setBottom(sliderYValue);
        // }

        const adjustIndex = () => {

            let sliderHeightValue : number = slideHeight();
        
            if(sliderHeightValue <= 0){
                setIndex(0);
                return;
            }
    
            let imageSize = slideHeight();
    
            for(let i = 0; i < size; i++){
                let start = i * imageSize;
                let end = (i + 1) * imageSize;

                console.log("Slide Height: "+ ((scrollPosition >= start) && (scrollPosition < end)));
                if((window.scrollY >= start) && (window.scrollY < end)){
                    setIndex(i);
                    break;
                }
            }
        };
            
        const handleScroll = () => {
            // Update the scroll position state when the user scrolls
            //setScrollPosition(window.scrollY);
            adjustIndex();
        };

        const handleResize = () => {
            // Update the window width state when the window is resized
            adjustIndex();
        };
    
        // Attach the event listener
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };

    },[]);



    return (
        <div className="Carousel__container">
            <div className='Carousel__content'>
                <div className='stepper-wrapper'>
                    <MobileStepper
                        variant="dots"
                        steps={size}
                        position="static"
                        activeStep={index}
                        sx={{ maxWidth: 400, flexGrow: 1 }}
                        backButton={''} 
                        nextButton={''}
                    />
                </div>
                <div className="slider-wrapper">
                    {images.map((image,i)=>(
                        <Slide image={image} key={i}/> 
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Carousel;