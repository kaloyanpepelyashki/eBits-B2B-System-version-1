//Importing React hooks
import { useContext } from 'react'

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

type ProductSelectionPagePropsType = {
    productsList: ProductListModel[]
}

export default function ProductSelectionPage(
    props: ProductSelectionPagePropsType
) {
    const { productsList } = props

    const navigate = useNavigate()

    const { cartProducts, kitAmount, isKit } = useContext(ShoppingCartFunc)

    const handleTransfer = () => {
        if (
            cartProducts.filter(
                (product) => product.qty !== 0 && product.Price !== 0
            ).length !== 0
        ) {
            navigate('/Ebits-B2B-Portal/contact-info')
        }
        if (isKit && kitAmount <= 0) {
            window.alert('Kit Amount cannot be 0')
        }
        if (cartProducts.filter((product) => product.qty !== 0).length == 0) {
            window.alert('Please add products to the basket')
        }
    }
    return (
        <>
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
