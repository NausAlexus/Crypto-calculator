import "./Header.css";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import logo from "/img/logoч.svg";
import leng from "/img/iconoir_language.svg";
import decimal from "/img/image 1.svg";
import connetWallet from "/img/solar_wallet-money-linear.svg";
import arrow from "/img/Vector.svg";

export default function Header() {
    const [selectedLanguage, setSelectedLanguage] = useState("RU");
    const [isLanguagesVisible, setLanguagesVisible] = useState(false);
    const [isArrowRotated, setArrowRotated] = useState(false);

    const toggleLanguages = () => {
        setLanguagesVisible(!isLanguagesVisible);
        setArrowRotated(!isArrowRotated);
    };

    const changeLanguage = (language) => {
        setSelectedLanguage(language);
        setLanguagesVisible(false);
        setArrowRotated(false);
    };

    return (
        <header className="header-container">
            <div className="header-content">
                <div className="header-left-container">
                    <div className="header-logo">
                        <a className="header-home-link" href="#">
                            <ReactSVG src={logo} />
                        </a>
                    </div>
                    <nav className="header-nav">
                        <ul>
                            <li>
                                <a href="#">Главная</a>
                            </li>
                            <li>
                                <a href="#">Лендинг</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Обратная связь</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="header-menu">
                    <ul>
                        <li>
                            <button
                                className="header-menu-btn header-menu-leng"
                                onClick={toggleLanguages}
                            >
                                <ReactSVG className="marg-leng-1" src={leng} />
                                <p>{selectedLanguage}</p>
                                <ReactSVG className={`marg-leng-2 arrow ${isArrowRotated ? 'rotated' : ''}`} src={arrow} />
                            </button>
                        </li>
                        <li>
                            <button className="header-menu-btn header-menu-leng">
                                <ReactSVG className="marg-leng-1" src={decimal} />
                                <p>Decimal</p>
                            </button>
                        </li>
                        <li>
                            <button className="header-menu-btn header-menu-leng">
                                <ReactSVG className="marg-leng-1" src={connetWallet} />
                                <p>Connect wallet</p>
                            </button>
                        </li>
                    </ul>
                    <div
                        className={`header-menu-select-leng ${
                            isLanguagesVisible ? "visible" : "hidden"
                        }`}
                    >
                        <p
                            className={`header-menu-select-leng-item ${selectedLanguage === 'RU' ? 'active' : ''}`}
                            onClick={() => changeLanguage("RU")}
                        >
                            RU
                        </p>
                        <p
                            className={`header-menu-select-leng-item ${selectedLanguage === 'ENG' ? 'active' : ''}`}
                            onClick={() => changeLanguage("ENG")}
                        >
                            ENG
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}