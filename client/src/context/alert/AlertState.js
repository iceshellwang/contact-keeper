import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'

const AlertState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null


    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    //Load User

    //Register Uer

    //Login User

    //Logoutt

    //Clear errors

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                error: state.error,
                user: state.user,

            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AlertState
