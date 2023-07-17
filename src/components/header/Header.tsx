import {useState} from 'react';
import './Header.css';
import SecondaryMenuModal from '../modal/SecondaryMenuModal';
import ShoppingBagModal from '../modal/ShoppingBagModal';

const Header = () => {

    const [isClicked,setisClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [subject, setSubject] = useState("");
    const [isBagOpen, setIsBagOpen] = useState(false);

    const handleHover = (value : boolean) => {
        setIsHovered(value);
    };

    const clearSubject = () => {
        setSubject("");
    }

    const handleBagToggle = () => {
        setIsBagOpen(!isBagOpen);
    }

    return(
        <>
            <header className="header">
                <ul className="navigation__menu">
                    <li className={`nav__link pop__onTop${isHovered && subject === "Menswear" ? " bold" : ""}`}>
                        <a href="/" onMouseEnter={
                        () => {
                            handleHover(true);
                            setSubject("Menswear");
                            }
                        }>
                            Menswear
                        </a>

                    </li>
                    <li className={`nav__link pop__onTop${isHovered && subject === "Womenswear" ? " bold" : ""}`}>
                        <a href="/" onMouseEnter={
                        () => {
                            handleHover(true);
                            setSubject("Womenswear");
                            }
                        }>
                            Womenswear
                        </a>
                    </li>
                    <li className={`nav__link pop__onTop${isHovered && subject === "Etc" ? " bold" : ""}`}>
                        <a href="/" onMouseEnter={
                        () => {
                            handleHover(true);
                            setSubject("Etc");
                            }
                        }>
                            Etc.
                        </a>
                    </li>
                </ul>

                <a className="header__logo">
                    TROLLE
                    {/*<svg width="61" height="14" viewBox="0 0 61 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Bode</title>
                        <desc>Bode logo</desc>
                        <path d="M61 11.3165V13.7296H50.4071V0.291233H60.3958V2.70431H52.7633V5.72065H57.6368V8.13373H52.7633V11.3373H61V11.3165ZM39.2301 11.2957H36.6322V2.72511H39.2301C41.7072 2.72511 43.3787 4.3477 43.3787 7.0104C43.3787 9.6731 41.7072 11.2957 39.2301 11.2957ZM39.8544 0.270431H34.0142V13.7088H39.8544C41.8683 13.7088 43.5196 12.9391 44.6273 11.4829C45.5335 10.2972 46.0773 8.65379 46.0773 6.9688C46.0773 5.2838 45.5536 3.64042 44.6273 2.45468C43.4995 1.04012 41.8481 0.270431 39.8544 0.270431ZM7.22978 11.3165H2.35622V8.11293H7.87422C9.0624 8.11293 9.54572 8.67459 9.54572 9.67311C9.54572 10.6508 8.78046 11.3165 7.22978 11.3165ZM2.35622 2.68351H7.57214C8.65962 2.68351 9.18323 3.20357 9.18323 4.13967C9.18323 5.07578 8.72004 5.69985 7.06867 5.69985H2.33608V2.68351H2.35622ZM10.4318 6.69837C11.3985 6.26152 12.0026 4.97177 12.0026 3.68202C12.0026 2.01783 10.6534 0.291233 8.39782 0.291233H0V13.7296H8.21657C10.17 13.7296 12.1638 12.5646 12.1638 9.94354C12.1839 8.65379 11.8013 7.23923 10.4318 6.69837ZM22.797 11.5869C20.34 11.5869 18.5477 9.6523 18.5477 6.9896C18.5477 4.32689 20.34 2.39227 22.797 2.39227C25.2539 2.39227 27.0462 4.32689 27.0462 6.9896C27.0462 9.6523 25.274 11.5869 22.797 11.5869ZM22.797 0C18.7894 0 15.9498 3.12036 15.9498 6.9896C15.9498 10.8588 18.7894 13.9792 22.797 13.9792C26.8046 13.9792 29.6441 10.8588 29.6441 6.9896C29.6441 3.12036 26.8046 0 22.797 0Z" fill="black"></path>
                    </svg>*/}
                </a>

                <div className="header__right">
                    <div className="header__search">
                        <input className={`header__searchInput input__clearStyle${isClicked ? " input-slide": " hidden"}`} type="text" placeholder="Search trolle.com"/>
                        <button className="menu__button button__clearStyle">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setisClicked(!isClicked)}
                            >
                                <path d="M9.60938 9.27805L15.4116 15.0768" stroke="#000000"></path>
                                <path d="M11.4306 5.79879C11.4306 8.72495 9.05701 11.0976 6.12839 11.0976C3.19978 11.0976 0.826172 8.72495 0.826172 5.79879C0.826172 2.87263 3.19978 0.5 6.12839 0.5C9.05701 0.5 11.4306 2.87263 11.4306 5.79879Z" stroke="#000000"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="header__shoppingBag">
                        <button className="menu__button button__clearStyle" onClick={() => setIsBagOpen(true)}>
                            <svg className="absolute__center" width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1424 6.29839C14.7661 6.29839 14.7202 4.89278 13.2567 3.97067C12.0736 3.223 11.2883 2.04169 9.88594 1.60805C9.3301 1.43858 8.64168 1.42861 8.24902 1.85229C7.83087 2.30587 7.97365 3.07347 8.4224 3.49216C8.87115 3.91085 9.52388 4.0554 10.146 4.07035C11.1404 4.09528 12.1654 4.04045 13.1496 3.92581" stroke="black" stroke-miterlimit="10"></path>
                                <path d="M8.37109 6.29839C10.7474 6.29839 10.7933 4.89278 12.2569 3.97067C13.4399 3.223 14.2252 2.04169 15.6276 1.60805C16.1834 1.43858 16.8719 1.42861 17.2645 1.85229C17.6827 2.30587 17.5399 3.07347 17.0911 3.49216C16.6424 3.91085 15.9897 4.0554 15.3675 4.07035C14.3731 4.09528 13.3481 4.04045 12.364 3.92581" stroke="black" stroke-miterlimit="10"></path>
                                <path d="M7 3.5H0.5V16.5H25.5V3.5H18.5" stroke="black"></path>
                            </svg>
                            <span className="shoppingBag__count absolute__center">4</span>
                        </button>
                    </div>
                </div>
                <SecondaryMenuModal type="Menswear" isVisible={isHovered && subject === "Menswear"} handleHoverEvent={handleHover} handleSubjectClear={clearSubject}/>
                <SecondaryMenuModal type="Womenswear" isVisible={isHovered && subject === "Womenswear"} handleHoverEvent={handleHover} handleSubjectClear={clearSubject}/>
                <SecondaryMenuModal type="Etc" isVisible={isHovered && subject === "Etc"} handleHoverEvent={handleHover} handleSubjectClear={clearSubject}/>
                <ShoppingBagModal isVisible={isBagOpen} handleExitEvent={() => setIsBagOpen(false)}/>

            </header>
        </>
    );
};

export default Header;