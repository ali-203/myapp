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
                <div className="center_towdiv">
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
            <div className="fifth_div">
                <div className="daily_divi">
                
            <h1>Your Dividends</h1>
            <p>Total Investments: 0 TRX</p>
            <p>Available to withdraw( TRX )</p>
            <h5>Including Ref Rewards</h5>
            <div className="fifth-button">
                <button>withdraw</button>
                </div>
                <div className="transaction">
                <h3>1-3 TRX transaction fee will be applied</h3>
                </div>
            </div>    
            </div>
            </div>
            <div className="last_img">
            <div className="six_div">
                <div className="daily_invst">
            <h1>My Investments</h1>           
            <p>My total investment 0 TRX</p>
            <p>Total Payouts so far TRX</p>
             
            </div>
        
            </div>
             <div className="inves_nm">
            <img src="investment.png"/>
            </div> 
            </div>

            <div className="account_select">
            <h4>Account Selected:</h4>
           <h3> Minimum investment of 50 TRX to Activate referral link</h3>
            </div>
            <div className="Referra_Status">
                <h1>Referral Status</h1>
                </div>
                <div className="referal">
                <h2>Total referral payout:</h2>
                <img src="tron.png" width="2%" height="2%"/>
                </div>
                <div className="level_3">
                <div className="reward_10">
                <h2>Level 1</h2>
                <h2>Reward 10%</h2>
                </div>
                <div className="reward_6">
                    <h2>Level 2</h2>
                    <h2>Reward 6%</h2>
                </div>
                <div className="reward-5">
                    <div>Level 3</div>
                    <div>Reward 3%</div>
                </div>

                </div>
                
            </div>
            
        </div>




    )
}

export default App;
