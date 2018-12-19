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

                                <img src="100.png"/>

                                <p className="primary-text">Gets feedback 100%&#8482; faster than competitors</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">100%&#8482;</p>
                            
                            </div>

                        </div>

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="brain.png"/>

                                <p className="primary-text">Mind-Read&#8482; give us the ability to get the real, serious answer from users</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">Mind-Read&#8482;</p>
                            
                            </div>

                        </div>

                        <div className="card">
                        
                            <div className="main-feature">

                                <img src="html-2.png"/>

                                <p className="primary-text">only surmail offers HTML-Mail&#8482; emails to users which is more interactive than regular email</p>
                            
                            </div>

                            <div className="feature-name">

                                <p className="secondary-text">HTML-Mail&#8482;</p>
                            
                            </div>

                        </div>

                    </div>
                
                </div>

            </div>
         );
    }
}
 
export default Landing;