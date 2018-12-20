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

                    <div className="columns-3">

                        <h2 className="category">Company</h2>

                        <ul className="links">

                            <li><a>About Us</a></li>
                            <li><a>Careers</a></li>
                            <li><a>News</a></li>

                        </ul>

                    </div>

                    <div className="columns-3">
                    
                        <h2 className="category">Service</h2>

                        <ul className="links">

                            <li><a>Pricing</a></li>
                            <li><a>Features</a></li>
                            <li><a>Case Studies</a></li>
                        
                        </ul>

                    </div>

                    <div className="columns-3">
                    
                        <h2 className="category">Support</h2>

                        <ul className="links">

                            <li><a>SurMail Help</a></li>
                            <li><a>surmail@dontEmail.com</a></li>
                            <li><a>1-555-555-5555</a></li>

                        </ul>

                    </div>

                </div>

                <p className="copyright">SurMail &reg; copyright &copy; 2018 </p>

            </div>
         );
    }
}
 
export default Footer;