import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import {

    SET_ALERT,
    REMOVE_ALERT
} from '../types'

const AlertState = props => {
    const initialState = []

    const [state, dispatch] = useReducer(alertReducer, initialState)

    //Set Alert

    const setAlert = (msg, type) => {
        const id = uuid.v4()
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        })

    }

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
