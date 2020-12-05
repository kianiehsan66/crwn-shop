import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from './../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItemsCount } from './../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';


const CartIcon = ({ toggleCartHidden, itemsCount }) => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}>
            </ShoppingIcon>
            <span className="item-count">{itemsCount}</span>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});
const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);