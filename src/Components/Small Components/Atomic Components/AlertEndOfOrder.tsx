//Importing React hooks
import React, { useState } from 'react'

//Importing React-router elements, components and hooks
import { useNavigate } from 'react-router-dom'

//Importing MUI components
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

type AlertDialogEndOrderPropsType = {
    openDialog: boolean
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export const AlertDialogEndOrder: React.FC<AlertDialogEndOrderPropsType> = (
    props: AlertDialogEndOrderPropsType
) => {
    const { openDialog, setOpenDialog } = props

    const navigate = useNavigate()

    return (
        <>
            <Dialog open={openDialog}>
                <DialogTitle>End of order!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to finish your order? After
                        pressing yes, your order will be finished and the query
                        sent to our employee.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => navigate('/Ebits-B2B-Portal/outro')}>
                        Okay
                    </Button>
                    <Button onClick={() => setOpenDialog(false)}>No</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
