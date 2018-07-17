import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/auth';
import { login } from '../actions/auth';
import './styles/form-fields.css';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form 
              className="registration-form"
              onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
            >
                <Field 
                    component={Input} 
                    type="text" 
                    name="firstName" 
                    placeholder="First name"
                />
                <Field 
                    component={Input} 
                    type="text" 
                    name="lastName" 
                    placeholder="Last name"    
                />
                <Field
                    component={Input}
                    type="text"
                    name="email"
                    placeholder="Email"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <div className="center">
                    <button
                        type="submit"
                        disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
