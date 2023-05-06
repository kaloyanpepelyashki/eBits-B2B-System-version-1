//Importing React hooks
import { useContext, useEffect } from 'react'

//Importing Context components
import { ContactsInformationFunc } from '../Components/Context Components/ContactsInformationContext'

//Importing libraries
import axios from 'axios'

//Importing Components
import ButtonsHolder from '../Components/Global Components/ButtonsHolderComponent'
import { ShoppingCartFunc } from '../Components/Context Components/ShoppingCartFuncContext'

export default function OutroPage() {
    //Object destructuring from the Contact info context
    const { contactInfoState } = useContext(ContactsInformationFunc)

    return (
        <>
            <main
                className="outro-page-content-wrapper page-main-section 
        px-6 2xl:px-20"
            >
                <div
                    className="outro-page-inner-content
        mx-auto max-w-7xl px-6 xl:px-8 2xl:px-0"
                >
                    <h1
                        className="outro-page-outro-header text-TextXL text-txt-grey-color
            md:mt-20 xl:mt-24"
                    >
                        Thank You for your query
                    </h1>
                    <p className="text-TextLarge text-txt-grey-color">
                        You will hear from us soon on
                        <b className="text-primary-color">
                            &nbsp;{contactInfoState.email}
                        </b>
                    </p>
                </div>
                <a className="outro-page-last-btn shadow-lg"
                href="https://ebits.dk/">To eBits home page</a>
            </main>
        </>
    )
}
