import React, { userReducer } from 'react'
import uuid from 'uuid'
import { ADD_CONTACT } from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'jill Johnson',
                email: 'jill'
            }
        ]

    }
}