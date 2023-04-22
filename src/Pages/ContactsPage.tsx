//Importin React hooks
import { useContext } from 'react'

//Importing React-router elements and components
import { useLocation, useNavigate } from 'react-router'

//Importing Context components
import { ShoppingCartFunc } from '../Components/Context Components/ShoppingCartFuncContext'
import { ContactsInformationFunc } from '../Components/Context Components/ContactsInformationContext'

//Importing Components
import ButtonsHolder from '../Components/Global Components/ButtonsHolderComponent'

import ReceiptHandler from '../Components/Global Components/ReceiptHandler'
import PageLeftSideStaticContacts from '../Components/Small Components/PageLeftSideStaticContacts'

export default function ContactInfoPage() {
    const { contactInfoState } = useContext(ContactsInformationFunc)
    const { typeOfQuerry } = useContext(ShoppingCartFunc)

    const navigate = useNavigate()

    const handleTransfer = () => {
        if (typeOfQuerry === 2) {
            if (!contactInfoState.Name) {
                window.alert('Please tell us your name')
            }
            if (!contactInfoState.lastName) {
                window.alert('Please tell us your last name')
            }
            if (!contactInfoState.email) {
                window.alert('Please tell us your email')
            }
            if (!contactInfoState.phone) {
                window.alert('Please tell us your phone')
            } else {
                navigate('/finalChackPage')
            }
        }
        if (typeOfQuerry === 1) {
            Object.keys(contactInfoState).map((key) => {
                if (
                    !contactInfoState[key] &&
                    contactInfoState[key].length <= 0
                ) {
                    window.alert(`Please provide us with ${key}`)
                } else {
                    navigate('/finalChackPage')
                }
            })
        }
    }

    return (
        <>
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
