import {useState} from 'react';
import './Footer.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Footer = () => {

    const [isClicked,setisClicked] = useState(false);

    return(
        <footer className="Footer">

            <div className="footer__menu__container">

                <ul className="footer__menu list__clearStyle">
                    <div className="menu__cluster">
                        <li className="cluster__link">
                            <a href="/">Bode New York</a>
                        </li>
                        <li className="cluster__link">
                            <a href="/">Bode Los Angeles</a>
                        </li>
                        <li className="cluster__link">
                            <a href="/">Bode Fine Tailoring</a>
                        </li>
                        <li className="cluster__link">
                            <a href="/">Bode Tailor Shop</a>
                        </li>
                    </div>

                    <div className="menu__cluster">
                        <li className="cluster__link">
                            <a href="/">About</a>
                        </li>
                        <li className="cluster__link">
                            <a href="/">FAQ & Returns</a>
                        </li>
                        <li className="cluster__link">
                            <a href="/">Contact</a>
                        </li>
                    </div>

                    <div className="menu__cluster">
                        <li className="cluster__link">
                            <a href="/">Accessibility</a>
                        </li>
                        <li className="cluster__link">
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li className="cluster__link">
                            <a href="/">Terms of Service</a>
                        </li>
                    </div>

                    <div className="menu__cluster">
                        <li className="cluster__link">
                            <a href="/">Careers</a>
                        </li>
                        <li className="cluster__link">
                            <a href="/">Instagram</a>
                        </li>
                        <li className="cluster__link">
                            <a href="/">Newsletter</a>
                        </li>
                    </div>
                </ul>

                <button className="footer__country__button button__clearStyle">
                    <a href="/">Country / Region</a>
                    <img alt="United States" id="ge_flag" src="https://gepi.global-e.com/content/images/flags/us.png"/>
                    <ArrowDropDownIcon className="arrow-icon" />
                </button>

            </div>

            <small className="footer__copyright-text">
                <span className="footer__copyright-symbol">©</span>2023 Trolle New York
            </small>

        </footer>
    );
};

export default Footer;