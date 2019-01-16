import React, { Component } from 'react';

class Landing extends Component {
    state = {  }

    render() { 
        return ( 
            <div className="landing-wrapper">

                <div className="landing">

                    <p className="marketing">Get Feedback from users faster with <span className="product-name">SurMail</span></p>

                </div>

                <div className="container">
                
                    <div className="features">

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="100.png" alt="100%"/>

                                <p className="primary-text">Gets feedback 100%&#8482; faster than competitors</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">100%&#8482;</p>
                            
                            </div>

                            <div className="card-overlay">

                                <p className="tm-description">100%&#8482; is a trademark representing a value anywhere from 0% to 100%</p>

                            </div>

                        </div>

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="24-7-2.png" alt="24/7"/>

                                <p className="primary-text">24/7&#8482; support, always available to help with the <b>very FEW</b> problems you may have</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">24/7&#8482;</p>
                            
                            </div>

                            <div className="card-overlay">

                                <p className="tm-description">24/7&#8482; is a trademark representing a time period of 24 divided by 7 hours</p>

                            </div>

                        </div>

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="html-2.png" alt="html-mail"/>

                                <p className="primary-text">only surmail offers HTML-Mail&#8482; emails to users which is more interactive than regular email</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">HTML-Mail&#8482;</p>
                            
                            </div>

                            <div className="card-overlay">

                                <p className="tm-description">HTML-Mail&#8482; is a trademarked version of html which includes one extra tag/element&lt;mail&gt;&lt;/mail&gt;, heres the kicker, we dont even use that particular tag/element.</p>

                            </div>

                        </div>

                    </div>
                
                </div>

                <div className="container-2">

                    <div className="features">

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="deal.png" alt="prices"/>

                                <p className="primary-text">best prices&#8482; on the market. No one offers better Prices&#8482; than Surmail</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">Prices&#8482;</p>
                            
                            </div>

                            <div className="card-overlay">

                                <p className="tm-description">Prices&#8482; is a trademark representing the prices before paying</p>

                            </div>

                        </div>

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="brain.png" alt="mind-read"/>

                                <p className="primary-text">Mind-Read&#8482; give us the ability to get the real, serious answer from users</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">Mind-Read&#8482;</p>
                            
                            </div>

                            <div className="card-overlay">

                                <p className="tm-description">Mind-Read&#8482; is a trademark representing an educated guess at what the person is truly thinking</p>

                            </div>

                        </div>

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="moneyback.png" alt="moneyback"/>

                                <p className="primary-text">Moneyback&#8482; guarantee means you can try Surmail without fear or doubt</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">Moneyback&#8482;</p>
                            
                            </div>

                            <div className="card-overlay">

                                <p className="tm-description">Moneyback&#8482; is a trademark which guarantees your money back in 5 - 10 years if you are not satisfied</p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="container-3">

                    <div className="features">

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="brain.png" alt="prices"/>

                                <p className="primary-text">Mind-Read&#8482; give us the ability to get the real, serious answer from users</p>

                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">Prices&#8482;</p>
                            
                            </div>

                            <div className="card-overlay">

                                <p className="tm-description">Mind-Read&#8482; is a trademark representing an educated guess at what the person is truly thinking</p>

                            </div>

                        </div>

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="brain.png" alt="24/7"/>

                                <p className="primary-text">Mind-Read&#8482; give us the ability to get the real, serious answer from users</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">24/7&#8482;</p>
                            
                            </div>

                            <div className="card-overlay">

                                <p className="tm-description">Mind-Read&#8482; is a trademark representing an educated guess at what the person is truly thinking</p>

                            </div>

                        </div>

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="brain.png" alt="moneyback"/>

                                <p className="primary-text">Mind-Read&#8482; give us the ability to get the real, serious answer from users</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">Moneyback&#8482;</p>
                            
                            </div>

                            <div className="card-overlay">

                                <p className="tm-description">Mind-Read&#8482; is a trademark representing an educated guess at what the person is truly thinking</p>

                            </div>

                        </div>

                    </div>

                </div>

                <p className="scam">All trademarks and associated images on this site are the property of SCAM inc.</p>

                <div className="landing-video">

                    <video  muted autoPlay loop playsInline webkit-playsinline controls>
                        <source src="laptop-typing-3.mp4" type="video/mp4" />
                    </video>

                    

                </div>
                
            </div>

         );
    }
}
 
export default Landing;