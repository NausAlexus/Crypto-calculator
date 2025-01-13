import './Main.css';
import Calculator from './Calculator/Calculator';
import { useState } from 'react';
import info from '/img/codicon_info.svg'
import wallet from '/img/solar_wallet-money-linear-2.svg'

export default function Main() {
    const [activeTab, setActiveTab] = useState('swap');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <main className='main-container'>
            <div className='main-container-title'>
                <p 
                    className='main-container-title-swap' 
                    style={{ opacity: activeTab === 'swap' ? 1 : 0.3 }} 
                    onClick={() => handleTabClick('swap')}
                >
                    Swap
                </p>
                <p 
                    className='main-container-title-pools' 
                    style={{ opacity: activeTab === 'pools' ? 1 : 0.3 }} 
                    onClick={() => handleTabClick('pools')}
                >
                    Pools
                </p>
            </div>
            <Calculator />
            <div className='main-info'>
                <img src={info} alt="Info" />
                <p>1 CRYG = 714.543 DEL <span>($331.42)</span></p>
            </div>
            <button className='main-wallet-btn'><img src={wallet} alt="Wallet"/>Сonnect walley</button>
        </main>
    );
}