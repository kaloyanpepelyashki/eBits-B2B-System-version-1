export type ContactsInfoContextType = {
    reducer: any
    formInitialState: any
    dispatch: any
    getContactInfoFuncs: any
    contactInfoState: any
    value: any
    setValue: any
}

export interface ContactInfoState {
    name: initialStateStringValue
    lastName: initialStateStringValue
    email: initialStateStringValue
    phone: initialStateNumericValue
    street: initialStateStringValue
    houseNumber: initialStateNumericValue
    postNumber: initialStateNumericValue
    town: initialStateStringValue
    deliveryDate: initialStateStringValue
    notes: initialStateStringValue
}

type initialStateStringValue = {
    value: string
    hasError: boolean
}
type initialStateNumericValue = {
    value: number
    hasError: boolean
}

export interface FormInitialState {
    name: initialStateStringValue
    lastName: initialStateStringValue
    email: initialStateStringValue
    phone: initialStateNumericValue
    street: initialStateStringValue
    houseNumber: initialStateNumericValue
    postNumber: initialStateNumericValue
    town: initialStateStringValue
    deliveryDate: initialStateStringValue
    notes: initialStateStringValue
}

export interface ContactInfoAction {
    type: string
    payload: any
}
