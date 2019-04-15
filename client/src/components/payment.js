import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import {connect} from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <StripeCheckout 
                name="SurMail"
                description="$5 for 5 SurMail credits"
                amount={500}
                token={ (token) => { this.props.handle_token(token) } }
                stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
             >{/* currency prop optional. set to usd by default. */}

                <p className="button payment-button">
                    <i className="material-icons icon">add</i> <span className="hide-mobile">Add Credits</span>
                </p>

            </StripeCheckout>
         );
    }
}
 
export default connect(null, actions)(Payments);