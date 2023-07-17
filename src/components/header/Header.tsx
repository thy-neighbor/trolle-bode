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