import React, {Component} from 'react';
import cart from '../../img/cart.png';
import './CartWidget.css';

class CartWidget extends Component{
    render() {
        return(
            <div>
                <img class="cartWidget" src={cart} alt="logo" />
            </div>

        )
    }
}

export default CartWidget;