//Importing React hooks
import { ChangeEvent } from 'react'

//Importing React hooks
import { createContext, useState, useReducer } from 'react'

//Importing types and interfaces
import {
    ContactsInfoContextType,
    ContactInfoState,
    FormInitialState,
    FormValidationState,
    ContactInfoAction,
    FormValidationAction,
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
    function reducer(
        state: ContactInfoState,
        action: ContactInfoAction
    ): ContactInfoState {
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
        name: '',
        lastName: '',
        email: '',
        phone: 0,
        street: '',
        houseNumber: '',
        postNumber: 0,
        town: '',
        deliveryDate: '',
        notes: '',
    }

    const formValidationState: FormValidationState = {
        nameHasError: false,
        lastNameHasError: false,
        emailHasError: false,
        emailFormattHasError: false,
        phoneHasError: false,
        phoneFormattHasError: false,
        streetHasError: false,
        houseNumberHasError: false,
        postNumberHasError: false,
        townHasError: false,
        deliveryDateHasError: false,
        notesHasError: false,
    }

    const formValidityReducer = (
        state: FormValidationState,
        action: FormValidationAction
    ): FormValidationState => {
        switch (action.type) {
            case 'VALIDATE_NAME':
                let isNameValid: boolean = true
                isNameValid = action.payload.name.length > 0 ? true : false
                return { ...state, nameHasError: !isNameValid }

            case 'VALIDATE_LAST_NAME':
                let isLastNameValid: boolean = true
                isLastNameValid =
                    action.payload.lastName.length > 0 ? true : false
                return { ...state, lastNameHasError: !isLastNameValid }

            case 'VALIDATE_EMAIL':
                let isEmailValid: boolean = true
                let isEmailFromatValid: boolean = true
                isEmailValid = action.payload.email.length > 0 ? true : false
                isEmailFromatValid = action.payload.email.includes('@')
                    ? true
                    : false
                return {
                    ...state,
                    emailHasError: !isEmailValid,
                    emailFormattHasError: !isEmailValid
                        ? isEmailFromatValid
                        : !isEmailFromatValid,
                }

            case 'VALIDATE_PHONE':
                let isPhoneValid: boolean = true
                let isPhoneFormattValid: boolean = true
                isPhoneFormattValid = !isNaN(action.payload.phone)
                    ? true
                    : false
                isPhoneValid =
                    action.payload.phone.toString.length > 0 ? true : false
                return {
                    ...state,
                    phoneHasError: isPhoneValid,
                    phoneFormattHasError: !isPhoneFormattValid,
                }

            case 'VALIDATE_STREET':
                let isStreetValid: boolean = true
                isStreetValid = action.payload.street.length > 0 ? true : false
                return { ...state, streetHasError: !isStreetValid }

            case 'VALIDATE_HOUSENUMBER':
                let isHouseNumberValid: boolean = true
                isHouseNumberValid =
                    action.payload.houseNumber.length > 0 ? true : false
                return { ...state, houseNumberHasError: !isHouseNumberValid }

            case 'VALIDATE_POSTNUMBER':
                let isPostNumberValid: boolean = true
                isPostNumberValid =
                    action.payload.postNumber.toString.length > 0 ? true : false
                return { ...state, postNumberHasError: isPostNumberValid }

            case 'VALIDATE_TOWN':
                let isTownValid: boolean = true
                isTownValid = action.payload.town.length > 0 ? true : false
                return { ...state, townHasError: !isTownValid }

            case 'VALIDATE_DELIVERY_DATE':
                let isDeliveryDateValid: boolean = true
                isDeliveryDateValid =
                    action.payload.deliveryDate.length > 0 ? true : false
                return { ...state, deliveryDateHasError: !isDeliveryDateValid }
            default:
                return state
        }
    }

    const [contactInfoState, dispatch] = useReducer<
        (arg1: FormInitialState, actions: ContactInfoAction) => FormInitialState
    >(reducer, formInitialState)

    const [formValidation, formValidationDispatch] = useReducer(
        formValidityReducer,
        formValidationState
    )

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
            dispatch({
                type: 'UPDATE_HOUSENUMBER',
                payload: e.target.value,
            })
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
    const getContactInfoValidationFuncs = {
        handleNameValidation: () => {
            formValidationDispatch({
                type: 'VALIDATE_NAME',
                payload: contactInfoState,
            })
        },

        handleLastNameValidation: () => {
            formValidationDispatch({
                type: 'VALIDATE_LAST_NAME',
                payload: contactInfoState,
            })
        },

        handleEmailValidation: () => {
            formValidationDispatch({
                type: 'VALIDATE_EMAIL',
                payload: contactInfoState,
            })
        },
        handlePhoneValidation: () => {
            formValidationDispatch({
                type: 'VALIDATE_PHONE',
                payload: contactInfoState,
            })
        },
        handleStreetValidation: () => {
            formValidationDispatch({
                type: 'VALIDATE_STREET',
                payload: contactInfoState,
            })
        },
        handleHouseNumberValidation: () => {
            formValidationDispatch({
                type: 'VALIDATE_HOUSENUMBER',
                payload: contactInfoState,
            })
        },

        handlePostNumberValidation: () => {
            formValidationDispatch({
                type: 'VALIDATE_POSTNUMBER',
                payload: contactInfoState,
            })
        },

        handleTownValidation: () => {
            formValidationDispatch({
                type: 'VALIDATE_TOWN',
                payload: contactInfoState,
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
                formValidation,
                formValidationDispatch,
                getContactInfoFuncs,
                getContactInfoValidationFuncs,
                value,
                setValue,
            }}
        >
            {props.children}
        </ContactsInformationFunc.Provider>
    )
}
