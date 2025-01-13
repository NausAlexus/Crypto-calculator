import './Calculator.css';
import cryg from "/img/screenshot011 1.svg";
import del from "/img/del 1.svg";
import calcArrow from "/img/Vector2.svg";
import selectArrow from "/img/Vector3.svg";
import { useState } from 'react';

export default function Calculator() {
    const [isSaleSelectOpen, setSaleSelectOpen] = useState(false);
    const [isBuySelectOpen, setBuySelectOpen] = useState(false);
    const [selectedSaleCurrency, setSelectedSaleCurrency] = useState("CRYG");
    const [selectedBuyCurrency, setSelectedBuyCurrency] = useState("DEL");
    const [isArrowRotated, setArrowRotated] = useState(false);
    const [isSaleActive, setSaleActive] = useState(true);
    
    const [saleTitle, setSaleTitle] = useState("Вы продаете");
    const [buyTitle, setBuyTitle] = useState("Вы покупаете");

    const [isSwapped, setIsSwapped] = useState(false);

    const prices = {
        CRYG: { price: 333.73, change: "" },
        DEL: { price: 331.62, change: "(-0.63%)" },
    };

    const [saleAmount, setSaleAmount] = useState(0);
    const [buyAmount, setBuyAmount] = useState(0);

    const toggleSaleSelect = () => {
        setSaleSelectOpen(!isSaleSelectOpen);
    };

    const toggleBuySelect = () => {
        setBuySelectOpen(!isBuySelectOpen);
    };

    const changeSaleCurrency = (currency) => {
        setSelectedSaleCurrency(currency);
        if (currency === "CRYG") {
            setSelectedBuyCurrency("DEL");
        } else {
            setSelectedBuyCurrency("CRYG");
        }
        setSaleSelectOpen(false);
        
        setIsSwapped(prev => !prev);
    };

    const changeBuyCurrency = (currency) => {
        setSelectedBuyCurrency(currency);
        if (currency === "DEL") {
            setSelectedSaleCurrency("CRYG");
        } else {
            setSelectedSaleCurrency("DEL");
        }
        setBuySelectOpen(false);
        
        setIsSwapped(prev => !prev);
    };

    const swapTitles = (event) => {
        event.stopPropagation();
        setSaleTitle((prevTitle) => (prevTitle === "Вы продаете" ? "Вы покупаете" : "Вы продаете"));
        setBuyTitle((prevTitle) => (prevTitle === "Вы покупаете" ? "Вы продаете" : "Вы покупаете"));
        setArrowRotated(prev => !prev);
        setSaleActive(prev => !prev);
    };

    const handleSaleAmountChange = (event) => {
        const value = event.target.value.replace(',', '.');
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue)) {
            setSaleAmount(parsedValue);
            setBuyAmount(parsedValue * 714.543);
        }
    };

    const handleBuyAmountChange = (event) => {
        const value = event.target.value.replace(',', '.');
        const parsedValue = parseFloat(value);
        if (!isNaN(parsedValue)) {
            setBuyAmount(parsedValue);
            setSaleAmount(parsedValue / 714.543);
        }
    };

    const salePrice = prices[selectedSaleCurrency];
    const buyPrice = prices[selectedBuyCurrency];

    return (
        <div className='calculator-container'>
            <div className={`calculator-wrapper ${isSaleActive ? 'calculator-container-sale' : 'calculator-container-bue'}`}>
                <p className='calculator-wrapper-title'>{saleTitle}</p>
                <div className='calculator-wrapper-center calculator-container-sale-center'>
                    <div className='calculator-wrapper-center-select'>
                        <img src={cryg} alt="Ico" />
                        <div className='calculator-select' onClick={toggleSaleSelect}>
                            <p>{selectedSaleCurrency}</p>
                            <img className={`arrow-select ${isSaleSelectOpen ? 'open' : ''}`} src={selectArrow} alt="Arrow" />
                        </div>
                        <div className='calculator-select-crypta' style={{ height: isSaleSelectOpen ? '64px' : '0', overflow: 'hidden', transition: 'height 0.3s ease' }}>
                            <p className={selectedSaleCurrency === "CRYG" ? 'active' : ''} onClick={() => changeSaleCurrency("CRYG")}>CRYG</p>
                            <p className={selectedSaleCurrency === "DEL" ? 'active' : ''} onClick={() => changeSaleCurrency("DEL")}>DEL</p>
                        </div>
                    </div>
                    {isSwapped ? (
                        <input
                            className='calculator-input'
                            value={buyAmount}
                            onChange={handleBuyAmountChange}
                            type="text"
                            placeholder="0.00"
                        />
                    ) : (
                        <input
                            className='calculator-input'
                            value={saleAmount}
                            onChange={handleSaleAmountChange}
                            type="text"
                            placeholder="0.00"
                        />
                    )}
                </div>
                <div className='calculator-wrapper-bottom'>
                    <p>{selectedSaleCurrency}</p>
                    <p>~${salePrice.price} {salePrice.change}</p>
                </div>
            </div>

            <div className={`calculator-wrapper ${isSaleActive ? 'calculator-container-bue' : 'calculator-container-sale'}`}>
                <p className='calculator-wrapper-title'>{buyTitle}</p>
                <div className='calculator-wrapper-center calculator-container-bue-center'>
                    <div className='calculator-wrapper-center-select'>
                        <img src={del} alt="Ico" />
                        <div className='calculator-select' onClick={toggleBuySelect}>
                            <p>{selectedBuyCurrency}</p>
                            <img className={`arrow-select ${isBuySelectOpen ? 'open' : ''}`} src={selectArrow} alt="Arrow" />
                        </div>
                        <div className='calculator-select-crypta' style={{ height: isBuySelectOpen ? '64px' : '0', overflow: 'hidden', transition: 'height 0.3s ease' }}>
                            <p className={selectedBuyCurrency === "CRYG" ? 'active' : ''} onClick={() => changeBuyCurrency("CRYG")}>CRYG</p>
                            <p className={selectedBuyCurrency === "DEL" ? 'active' : ''} onClick={() => changeBuyCurrency("DEL")}>DEL</p>
                        </div>
                    </div>
                    {isSwapped ? (
                        <input
                            className='calculator-input'
                            value={saleAmount}
                            onChange={handleSaleAmountChange}
                            type="text"
                            placeholder="0.00"
                        />
                    ) : (
                        <input
                            className='calculator-input'
                            value={buyAmount}
                            onChange={handleBuyAmountChange}
                            type="text"
                            placeholder="0.00"
                        />
                    )}
                </div>
                <div className='calculator-wrapper-bottom'>
                    <p>{selectedBuyCurrency}</p>
                    <p>~${buyPrice.price} {buyPrice.change}</p>
                </div>
            </div>

            <button className='calculator-btn' onClick={swapTitles}>
                <img className={`calculator-btn-img ${isArrowRotated ? 'rotated' : ''}`} src={calcArrow} alt="Arrow" />
            </button>
        </div>
    );
}