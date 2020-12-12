import React, { Component } from 'react';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.emailSignInStart(email, password);
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-in" >
                <h2>Already have account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FromInput name="email" type="email" value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}
                        required />
                    <FromInput name="password"
                        label="password"
                        type="password" value={this.state.password} handleChange={this.handleChange} required />

                    <div className="buttons">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={this.props.googleSignInStart} isGoogleSignIn >Sign In with google</CustomButton></div>

                </form>

            </div>);
    }
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);