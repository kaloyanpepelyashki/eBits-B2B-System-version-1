//Importin React hooks
import { useContext, useState } from 'react'

//Importing Context components
import { ContactsInformationFunc } from '../Components/Context Components/ContactsInformationContext'

//Importing Components
import ButtonsHolder from '../Components/Global Components/ButtonsHolderComponent'
import ReceiptHandler from '../Components/Global Components/ReceiptHandler'
import PageLeftSideStaticContacts from '../Components/Small Components/PageLeftSideStaticContacts'
import AlertComponent from '../Components/Small Components/Atomic Components/AlertComponent'
import { AlertDialogEndOrder } from '../Components/Small Components/Atomic Components/AlertEndOfOrder'

export default function ContactInfoPage() {
    const {
        contactInfoState,
        formValidation,
        getContactInfoValidationFuncs: {
            handleNameValidation,
            handleLastNameValidation,
            handleEmailValidation,
            handlePhoneValidation,
            handleStreetValidation,
            handleHouseNumberValidation,
            handlePostNumberValidation,
            handleTownValidation,
        },
    } = useContext(ContactsInformationFunc)

    const [openDialog, setOpenDialog] = useState(false)

    //The state that controlls when to throw an error
    const [throwError, setThrowError] = useState(false)

    //The state that controlls the content of the error alert
    const [errorAlertState, setErrorAlertState] = useState(1)

    //TODO Fix the form validation, the pop-up message must show only if the form is fully validated
    const handleTransfer = () => {
        handleNameValidation()
        handleLastNameValidation()
        handleEmailValidation()
        handlePhoneValidation()
        handleStreetValidation()
        handleHouseNumberValidation()
        handlePostNumberValidation()
        handleTownValidation()

        if (
            contactInfoState.name.length <= 0 ||
            contactInfoState.lastName.length <= 0 ||
            contactInfoState.email.length <= 0 ||
            contactInfoState.phone.toString().length <= 0 ||
            contactInfoState.street.length <= 0 ||
            contactInfoState.houseNumber.length <= 0 ||
            contactInfoState.postNumber.toString().length <= 0 ||
            contactInfoState.town.length <= 0 ||
            contactInfoState.deliveryDate.length <= 0
        ) {
            setErrorAlertState(2)
            setThrowError(true)
        } else if (formValidation.deliveryDateHasError) {
            setErrorAlertState(3)
            setThrowError(true)
        } else if (
            (formValidation.emailFormattHasError &&
                formValidation.emailHasError) ||
            (formValidation.phoneFormattHasError &&
                formValidation.phoneHasError)
        ) {
            setErrorAlertState(1)
            setThrowError(true)
        } else if (
            formValidation.nameHasError ||
            formValidation.lastNameHasError ||
            formValidation.emailFormattHasError ||
            formValidation.emailHasError ||
            formValidation.phoneFormattHasError ||
            formValidation.phoneHasError ||
            formValidation.streetHasError ||
            formValidation.houseNumberHasError ||
            formValidation.postNumberHasError ||
            formValidation.townHasError
        ) {
            setErrorAlertState(2)
            setThrowError(true)
        } else if (
            !formValidation.nameHasError &&
            !formValidation.lastNameHasError &&
            !formValidation.emailFormattHasError &&
            !formValidation.emailHasError &&
            !formValidation.phoneFormattHasError &&
            !formValidation.phoneHasError &&
            !formValidation.streetHasError &&
            !formValidation.houseNumberHasError &&
            !formValidation.postNumberHasError &&
            !formValidation.townHasError &&
            contactInfoState.name.length > 0 &&
            contactInfoState.lastName.length > 0 &&
            contactInfoState.email.length > 0 &&
            contactInfoState.phone.toString().length > 0 &&
            contactInfoState.street.length > 0 &&
            contactInfoState.houseNumber.length > 0 &&
            contactInfoState.postNumber.toString().length > 0 &&
            contactInfoState.town.length > 0
        ) {
            setOpenDialog(true)
        }
    }

    console.log(contactInfoState)

    return (
        <>
            <AlertComponent
                severity="error"
                title={'ERROR'}
                body={
                    errorAlertState == 1
                        ? 'Please provide a supported format'
                        : errorAlertState == 2
                        ? 'Please fill out all required fields'
                        : errorAlertState == 3
                        ? 'Please provide us with delivery date'
                        : ''
                }
                setThrowError={setThrowError}
                throwError={throwError}
            />
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
