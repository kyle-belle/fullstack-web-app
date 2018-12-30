import React, { Component } from 'react';
import Stripe_checkout from "react-stripe-checkout";
import {connect} from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Stripe_checkout 
                name="SurMail"
                description="$5 for 5 SurMail credits"
                amount={500}
                token={ (token) => { this.props.handle_token(token) } }
                stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
             >{/* currency prop optional. set to usd by default. */}

                <button className="button payment-button">
                    Add Credits
                </button>

            </Stripe_checkout>
         );
    }
}
 
export default connect(null, actions)(Payments);