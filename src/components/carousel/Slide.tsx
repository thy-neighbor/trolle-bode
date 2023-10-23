import React from 'react'

type Props = {
    image : string
}

/**
 * @func Slide(props)
 * @desc Creates a slide of an image that navigates downward
 * @param object props
 *      @param string props.image - the source of the image 
 * @return JSX - slide w/ image 
 */
const Slide : React.FC<Props> = ({image}: Props) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
      }

    return(
        <div className="slide-container">
            <div className="slide" style={styles}></div>
        </div>
        
    );
}

/**
     * @func slideHeight
     * @desc Gets the size of the carousel from the application
     * @return Number - the height of the carousel
     */
export const slideHeight = () : number => {

    const height = document.querySelector('.slide-container')?.clientHeight;

    return height ? height : 0;
}

export default Slide;