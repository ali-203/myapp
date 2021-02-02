import React from 'react';
import "./App.css";


 

function App() {
    return (
    <>
        <div className="main"> 
        
            <div className="bitron_main">
                <img className="logo_img" src="logo.png" />

                <div className="decentrlized">
                    <h2 className="best">BEST DECENTRALIZED</h2>
                    <h2 className="community">COMMUNITY SUPPORT FUND ON TRON BLOCKCHAIN</h2>
                    <h2 className="verified">100% VERIFIED SMART CONTRACT</h2>
                    <h3 className="daily">18.28% Daily ROI128% IN 7 DAYS</h3>
                </div>
                <div className="button_div">
                    <button className="tele">TELEGRAM</button>
                    <button className="smart_contract">SMART CONTRACT</button>
                </div>
                
            </div>
            <div className="image_money">
            <img src="money.png" />
        
            </div>
            
        </div>
        
        
        
        
        <div className="main2">
        <div className="global">
        <h1>Global Stats</h1>
        </div>
        <div className="three_div">
        
        <div  className="total_trx">
        <h1>0</h1>
        <h2>Total Invested TRX</h2>
          
        </div>
        <div className="total_invested">
        <h1>0</h1>
            <h2>Total Investors</h2>
        </div>
        <div className="total_dividen">
        <h1>0</h1>
            <h2>Total Dividends</h2></div>
        
        </div>

        </div>
        
        </>
        
    )
}

export default App;
