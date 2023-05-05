//Importing React hooks
import React, { useContext, useState } from 'react'

//Importing React-router elements, components and hooks
import { useNavigate } from 'react-router-dom'

//Importing MUI components
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

//Importing libraries
import axios from 'axios'
import { ShoppingCartFunc } from '../../Context Components/ShoppingCartFuncContext'
import { ContactsInformationFunc } from '../../Context Components/ContactsInformationContext'

type AlertDialogEndOrderPropsType = {
    openDialog: boolean
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export const AlertDialogEndOrder: React.FC<AlertDialogEndOrderPropsType> = (
    props: AlertDialogEndOrderPropsType
) => {
    //Object destructuring from component's props
    const { openDialog, setOpenDialog } = props

    //Object destructuring from the Contact info context
    const { contactInfoState } = useContext(ContactsInformationFunc)

    //Object destructuring from the Shopping cart context
    const { cartProducts, isKit, kitAmount } = useContext(ShoppingCartFunc)

    const invoiceBody = {
        invoiceProducts: cartProducts,
        isKit: isKit,
        kitAmount: kitAmount,
    }

    const contactInfoBody = {
        customerName: contactInfoState.name,
        customerLastName: contactInfoState.lastName,
        customerEmail: contactInfoState.email,
        customerPhone: contactInfoState.phone,
        customerStreet: contactInfoState.street,
        customerHouseNumber: contactInfoState.houseNumber,
        customerPostNumber: contactInfoState.postNumber,
        customerTown: contactInfoState.town,
        customerDeliveryDate: contactInfoState.deliveryDate,
        customerNotes: contactInfoState.notes,
        invoiceDate: contactInfoState.inVoiceDate,
        invoiceUniqueKey: `${contactInfoState.inVoiceDate}${
            contactInfoState.postNumber
        }${contactInfoState.deliveryDate.replace(/\s/g, '').replace(/:/g, '')}`,
    }

    const navigate = useNavigate()

    const sendQuery = () => {
        axios
            //Makes a post request to the mailer server
            .post(
                'http://localhost:5000/queryReceiver',
                {
                    contactInfoBody: contactInfoBody,
                    invoiceBody: invoiceBody,
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const finalizeOrder = () => {
        sendQuery()
        navigate('/Ebits-B2B-Portal/outro')
    }

    return (
        <>
            <Dialog open={openDialog}>
                <div className="end-of-order-header bg-primary-color"></div>
                <DialogTitle>End of order!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to finish your order? After
                        pressing yes, your order will be finished and the query
                        sent/
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={finalizeOrder}>
                        Okay
                    </Button>
                    <Button onClick={() => setOpenDialog(false)}>No</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
