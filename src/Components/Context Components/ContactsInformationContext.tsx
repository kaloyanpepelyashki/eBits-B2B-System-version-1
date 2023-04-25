//Importing React hooks
import { ChangeEvent } from 'react'

//Importing React hooks
import { createContext, useState, useReducer } from 'react'

//Importing types and interfaces
import {
    ContactsInfoContextType,
    ContactInfoState,
    FormInitialState,
    ContactInfoAction,
} from '../../Types/ContactInfoTypes'

import dayjs from 'dayjs'

export const ContactsInformationFunc = createContext<ContactsInfoContextType>(
    {} as ContactsInfoContextType
)

type ContactInfoContProviderPropsType = {
    children: React.ReactNode
}

export const ContactInfoContProvider: React.FC<
    ContactInfoContProviderPropsType
> = (props) => {
    //!
    //!!! Find out why it doesn' add the hasError and value to the object
    //!

    function reducer(state: ContactInfoState, action: ContactInfoAction) {
        switch (action.type) {
            case 'UPDATE_NAME':
                return { ...state, name: action.payload }
            case 'UPDATE_LASTNAME':
                return { ...state, lastName: action.payload }
            case 'UPDATE_EMAIL':
                return { ...state, email: action.payload }
            case 'UPDATE_PHONE':
                return { ...state, phone: action.payload }
            case 'UPDATE_STREET':
                return { ...state, street: action.payload }
            case 'UPDATE_HOUSENUMBER':
                return { ...state, houseNumber: action.payload }
            case 'UPDATE_POSTNUMBER':
                return { ...state, postNumber: action.payload }
            case 'UPDATE_TOWN':
                return { ...state, town: action.payload }
            case 'UPDATE_DELIVERYDATE':
                return { ...state, deliveryDate: action.payload }
            case 'UPDATE_NOTES':
                return { ...state, notes: action.payload }
            default:
                return state
        }
    }

    const formInitialState: FormInitialState = {
        name: { value: '', hasError: false },
        lastName: { value: '', hasError: false },
        email: { value: '', hasError: false },
        phone: { value: 0, hasError: false },
        street: { value: '', hasError: false },
        houseNumber: { value: 0, hasError: false },
        postNumber: { value: 0, hasError: false },
        town: { value: '', hasError: false },
        deliveryDate: { value: '', hasError: false },
        notes: { value: '', hasError: false },
    }

    const [contactInfoState, dispatch] = useReducer(reducer, formInitialState)

    const todayDate = new Date()
    todayDate.setDate(todayDate.getDate() + 14)

    const [value, setValue] = useState(dayjs(todayDate))

    const getContactInfoFuncs = {
        handleNameChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'UPDATE_NAME', payload: e.target.value })
        },

        handleLastNameChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'UPDATE_LASTNAME', payload: e.target.value })
        },

        handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'UPDATE_EMAIL', payload: e.target.value })
        },

        handlePhoneChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'UPDATE_PHONE', payload: e.target.value })
        },

        handleStreetChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'UPDATE_STREET', payload: e.target.value })
        },

        handleHouseNumberChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'UPDATE_HOUSENUMBER', payload: e.target.value })
        },

        handlePostNumberChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'UPDATE_POSTNUMBER', payload: e.target.value })
        },

        handleTownChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'UPDATE_TOWN', payload: e.target.value })
        },

        handleNotesChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({ type: 'UPDATE_NOTES', payload: e.target.value })
        },

        handleDeliveryDateChange: (e: ChangeEvent<HTMLInputElement>) => {
            dispatch({
                type: 'UPDATE_DELIVERYDATE',
                payload: value.toString(),
            })
        },
    }

    return (
        <ContactsInformationFunc.Provider
            value={{
                reducer,
                formInitialState,
                contactInfoState,
                dispatch,
                getContactInfoFuncs,
                value,
                setValue,
            }}
        >
            {props.children}
        </ContactsInformationFunc.Provider>
    )
}
