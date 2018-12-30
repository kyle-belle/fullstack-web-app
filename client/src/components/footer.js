import React, { Component } from 'react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer-wrapper">

                <div className="footer container">

                    <div className="columns-3" >

                        <h2 className="category">Company</h2>

                        <ul className="links">

                            <li><button className="link">About Us</button></li>
                            <li><button className="link">Careers</button></li>
                            <li><button className="link">News</button></li>

                        </ul>

                    </div>

                    <div className="columns-3">
                    
                        <h2 className="category">Service</h2>

                        <ul className="links">

                            <li><button className="link">Pricing</button></li>
                            <li><button className="link">Features</button></li>
                            <li><button className="link">Case Studies</button></li>
                        
                        </ul>

                    </div>

                    <div className="columns-3">
                    
                        <h2 className="category">Support</h2>

                        <ul className="links">

                            <li><button className="link">SurMail Help</button></li>
                            <li><button className="link">surmail@dontEmail.com</button></li>
                            <li><button className="link">1-555-555-5555</button></li>

                        </ul>

                    </div>

                </div>

                <p className="copyright">SurMail &reg; copyright &copy; 2018 </p>

            </div>
         );
    }
}
 
export default Footer;