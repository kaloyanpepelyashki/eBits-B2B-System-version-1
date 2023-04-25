//Importing React hooks
import { useContext, useState } from 'react'

//Importing React-router elements and components
import { useNavigate } from 'react-router'

//Importing Context components
import { ShoppingCartFunc } from '../Components/Context Components/ShoppingCartFuncContext'

//Importing types and interfaces
import { ProductListModel } from '../Types/ShoppingCartTypes'

//Importing Components
import PageLeftSide from '../Components/Global Components/PageLeftSide'
import PageLeftTopSection from '../Components/Small Components/PageLeftSideTopSection'
import AmountPicker from '../Components/Small Components/Atomic Components/AmountPicker'
import ReceiptHandler from '../Components/Global Components/ReceiptHandler'
import ButtonsHolder from '../Components/Global Components/ButtonsHolderComponent'
import AlertComponent from '../Components/Small Components/Atomic Components/AlertComponent'

type ProductSelectionPagePropsType = {
    productsList: ProductListModel[]
}

export default function ProductSelectionPage(
    props: ProductSelectionPagePropsType
) {
    const { productsList } = props

    const navigate = useNavigate()

    //Object destructuring from the Shopping cart context
    const { cartProducts, kitAmount, isKit } = useContext(ShoppingCartFunc)

    //The state variable in charge for triggering the warning alert
    const [throwWarning, setThrowWarning] = useState(false)
    //The state variable in charge for triggering the error alert
    const [throwError, setThrowError] = useState(false)

    const handleTransfer = () => {
        if (
            //Filters out the products with product.qty less than 0 from the cartProducts array, and checks if the array is equal to 0
            cartProducts.filter(
                (product) => product.qty !== 0 && product.Price !== 0
            ).length !== 0
        ) {
            //If it is not zero, it is possible to navigte to next page
            navigate('/Ebits-B2B-Portal/contact-info')
        }
        if (isKit && kitAmount <= 0) {
            //Triggers the error alert
            setThrowError(true)
        }
        //Filters out the products with product.qty less than 0 from the cartProducts array, and checks if the array is equal to 0
        if (cartProducts.filter((product) => product.qty !== 0).length == 0) {
            //If the length of the array is 0
            //Triggers the warning alert
            setThrowWarning(true)
        }
    }
    return (
        <>
            {/* //The Warning alert */}
            <AlertComponent
                severity="warning"
                title="Warning"
                body="To continue, please add products to the baseket"
                throwError={throwWarning}
                setThrowError={setThrowWarning}
            />
            {/* //The Error alert */}
            <AlertComponent
                severity="error"
                title="ERROR"
                body="Kit amount cannot be 0"
                throwError={throwError}
                setThrowError={setThrowError}
            />
            <main className="product-selectionKB-page-content-wrapper product-selection-page-content-wrapper page-main-section">
                <div className="product-selectionKB-page-inner-content product-selection-page-inner-content">
                    <div className="product-selectionSP-page-widgets-holder page-widgets-holder">
                        <PageLeftSide productsList={productsList}>
                            <PageLeftTopSection>
                                <AmountPicker />
                            </PageLeftTopSection>
                        </PageLeftSide>
                        <ReceiptHandler />
                    </div>
                </div>
                <div className="buttons-holder-h">
                    <ButtonsHolder
                        title={'Next'}
                        handleTransfer={handleTransfer}
                    />
                </div>
            </main>
        </>
    )
}
