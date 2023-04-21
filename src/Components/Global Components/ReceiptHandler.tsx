//Importing React hooks
import { useContext } from 'react'

//Importing Context Components
import { ShoppingCartFunc } from '../Context Components/ShoppingCartFuncContext'

//Importing Components
import KitReceipt from './Receipt'
import KitReceiptBottomSection from '../Small Components/KitBuyReceiptBottomSection'

export default function ReceiptHandler() {
    const { isKit } = useContext(ShoppingCartFunc)
    return (
        <>
            <KitReceipt>{isKit ? <KitReceiptBottomSection /> : ''}</KitReceipt>
        </>
    )
}
