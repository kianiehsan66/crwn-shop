import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from './../../redux/user/user.selector';
import { selectCartHidden } from './../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container" >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="" className="option">CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>
                            Sign Out</div>
                        : <Link to="/signin" className='option'>Sign in</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ? null : <CartDropdown />
            }


        </div>);
}

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
)

export default connect(mapStateToProps)(Header);