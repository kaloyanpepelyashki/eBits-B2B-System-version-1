//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

//Importing types and interfaces
import { BasketProductObjectType } from '../Types/ShoppingCartTypes'

//Importing Components
import ProductAmountHandler from '../Components/Small Components/Atomic Components/ProductAmountHandler'

type BasketItemsDisplayPropsType = {
    product: BasketProductObjectType
    handleRemoveProduct: any
}

export default function BasketProductsDisplayTest() {
    return (
        <>
            <div className="item-display-basket">
                <div className="item-display-basket-inner-content bg-white border-white rounded-sm text-sm shadow-md focus:outline-none flex justify-center items-center">
                    <div className="item-display-inner flex justify-between items-center">
                        <div className="flex items-center ml-10 mr-10">
                            <img
                                className="w-10 h-10 object-contain"
                                src="https://www.jh-electronica.com/UploadFiles/YXA369-1.jpg"
                            />
                            <h2 className="inline-block font-bold text-ProductTitleTiny ml-10 cursor-default">
                                Test product with test product name and test
                                produvct variation
                            </h2>
                        </div>

                        <div className="flex items-center">
                            <div className="product-amount-handler-component-wrapper flex items-center">
                                <button className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 -mr-2">
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="final-check-product-table-price direct-amount-input-amounnt-handler w-12 mt-1 mx-2 "
                                    min={1}
                                />
                                <button className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 mr-10">
                                    +
                                </button>
                            </div>
                            <FontAwesomeIcon
                                icon={faTrash}
                                className="trash-icon final-check-product-icon"
                            />
                            <p className="text-right inline-block text-ProductTitleMedium font-extrabold w-32 cursor-default">
                                152.66 &nbsp;Dkk
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
