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
    name: string
    lastName: string
    email: string
    phone: number
    street: string
    houseNumber: number
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
    houseNumber: number
    postNumber: number
    town: string
    deliveryDate: string
    notes: string
}

export interface ContactInfoAction {
    type: string
    payload: any
}
