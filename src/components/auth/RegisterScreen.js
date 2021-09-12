import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';

import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { starRegisterWithEmailPasswordName } from '../../actions/auth';


export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui);

    console.log( msgError )

    const  [formValues, handleInputChange] = useForm({
        name: 'Clauducce',
        email: 'clau2@mail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2, } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log( name, email, password, password2 );

        if (isFormValid()) {
            dispatch( starRegisterWithEmailPasswordName( email, password, name ) )

        }

    }

    const isFormValid = () =>{

        if ( name.trim().length === 0 ) {
            dispatch( setError('Name is requires') )
            
            return false
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') )

            return false
        } else if ( password !== password2 || password.length < 5) {
            dispatch( setError('Password should be at least 6 character and match other') )

            return false
        }

        dispatch( removeError() );
        
        return true;
        

    }


    return (
        <>
        <h3 className="auth__title">Register</h3>

            <form 
                onSubmit={handleRegister}
                className="animate__animated animate__fadeIn animate__faster"
            >
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            { msgError}
                        </div>
                    )
                }
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoCapitalize="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoCapitalize="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <input className="auth__input"
                    type="password"
                    placeholder="Confirm Pasword"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>

                <Link
                    className="link"
                    to="/auth/login">
                    Already registred?
                </Link>

            </form>
    </>
    )
}
