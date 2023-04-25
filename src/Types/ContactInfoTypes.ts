export type ContactsInfoContextType = {
    reducer: any
    formInitialState: any
    dispatch: any
    formValidation: any
    formValidationDispatch: any
    getContactInfoFuncs: any
    getContactInfoValidationFuncs: any
    contactInfoState: any
    value: any
    setValue: any
}

export interface ContactInfoState {
    name: string
    lastName: string
    email: string
    phone: number
    street: string
    houseNumber: string
    postNumber: number
    town: string
    deliveryDate: string
    notes: string
}

export interface FormInitialState {
    name: string
    lastName: string
    email: string
    phone: number
    street: string
    houseNumber: string
    postNumber: number
    town: string
    deliveryDate: string
    notes: string
}
export interface FormValidationState {
    nameHasError: boolean
    lastNameHasError: boolean
    emailHasError: boolean
    emailFormattHasError: boolean
    phoneHasError: boolean
    phoneFormattHasError: boolean
    streetHasError: boolean
    houseNumberHasError: boolean
    postNumberHasError: boolean
    townHasError: boolean
    deliveryDateHasError: boolean
    notesHasError: boolean
}

export interface FormValidationAction {
    type: string
    payload: FormInitialState
}

export interface ContactInfoAction {
    type: string
    payload: any
}
