import React, { useReducer } from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
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

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null


    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    //ADD CONTACT



    //UPDATE CONTACT
    const updateContact = contact => {

        dispatch({ type: UPDATE_CONTACT, payload: contact })
    }
    //FILTER CONTACTS
    const filterContacts = text => {

        dispatch({ type: FILTER_CONTACTS, payload: text })
    }
    //CLEAR FILTER

    const clearFilter = () => {

        dispatch({ type: CLEAR_FILTER })
    }
    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact, deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState
