import React from 'react';
import "./App.css";




function App() {
    return (
        <div className="full_main">

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

                    <div className="total_trx">
                        <div className="inner_trx">
                            <h1>0</h1>
                            <h2>Total Invested TRX</h2>
                        </div>
                    </div>
                    <div className="total_invested">

                        <div className="inner_investor">
                            <h1>0</h1>
                            <h2>Total Investors</h2>
                        </div>
                    </div>
                    <div className="total_dividen">
                        <div className="inner_divide">
                            <h1>0</h1>
                            <h2>Total Dividends</h2>
                        </div>
                    </div>

                </div>
                <div className="forth_div">
                <div className="daily_return">
                
            <h1>18.28% Daily Returns</h1>
            <p>128% In 7 Days</p>
            <p>Updates Every Seconds</p>
            <p>Wallet Balance: TRX</p>
            <input type="text"></input>
        
            <div className="forth-button">
                <button>invest</button>
                </div>
                <div className="transaction">
                <h3>1-3 TRX transaction fee will be applied</h3>
                </div>
            </div>
        
            </div>
            <div className="forth_div">
                <div className="daily_return">
               <div className="invest">
            <h1>My Investments</h1>
            </div> 
            <p>My total investment 0 TRX</p>
            <p>Total Payouts so far TRX</p>
            
            
            
        
                
            </div>
        
            </div>
            
            </div>
            
        </div>




    )
}

export default App;
