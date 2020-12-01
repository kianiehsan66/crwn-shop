import React, { Component } from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-up.styles.scss';

class SignInAndUp extends Component {
    state = {}
    render() {
        return (<div className="sign-in-up" >
            <SignIn />
            <SignUp />
        </div>);
    }
}

export default SignInAndUp;