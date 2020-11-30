import React, { Component } from 'react';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.scss';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = event => {
        event.preventDefault();
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

                    <CustomButton type='submit'>Sign In</CustomButton>

                </form>

            </div>);
    }
}

export default SignIn;