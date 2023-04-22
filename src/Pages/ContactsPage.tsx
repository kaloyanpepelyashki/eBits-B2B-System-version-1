//Importin React hooks
import { useContext, useState } from 'react'

//Importing React-router elements and components
import { useLocation, useNavigate } from 'react-router'

//Importing Context components
import { ShoppingCartFunc } from '../Components/Context Components/ShoppingCartFuncContext'
import { ContactsInformationFunc } from '../Components/Context Components/ContactsInformationContext'

//Importing Components
import ButtonsHolder from '../Components/Global Components/ButtonsHolderComponent'

import ReceiptHandler from '../Components/Global Components/ReceiptHandler'
import PageLeftSideStaticContacts from '../Components/Small Components/PageLeftSideStaticContacts'
import { AlertDialogEndOrder } from '../Components/Small Components/Atomic Components/AlertEndOfOrder'

export default function ContactInfoPage() {
    const { contactInfoState } = useContext(ContactsInformationFunc)

    const [openDialog, setOpenDialog] = useState(true)

    const navigate = useNavigate()

    const handleTransfer = () => {
        Object.keys(contactInfoState).map((key) => {
            if (!contactInfoState[key] && contactInfoState[key].length <= 0) {
                window.alert(`Please provide us with ${key}`)
                contactInfoState[key].hasError = true;
            } else {
                setOpenDialog(true)
            }
        })

        console.log(contactInfoState)
    }


    return (
        <>
            <AlertDialogEndOrder
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            />
            <main className="contact-info-page-main-content-wrapper page-main-section">
                <div className="contact-info-page-inner-content">
                    <div className="contact-info-page-widgets-holder page-widgets-holder ">
                        <PageLeftSideStaticContacts />

                        <ReceiptHandler />
                    </div>
                </div>

                <ButtonsHolder handleTransfer={handleTransfer} />
            </main>
        </>
    )
}
