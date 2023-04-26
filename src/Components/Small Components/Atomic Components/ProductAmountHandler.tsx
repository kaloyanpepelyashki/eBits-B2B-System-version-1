//Importin React hooks
import { useContext, useState } from 'react'

//Importing Context Components
import { ShoppingCartFunc } from '../../Context Components/ShoppingCartFuncContext'

import { BasketProductObjectType } from '../../../Types/ShoppingCartTypes'

type ProductAmountHandlerPropsType = {
    product: BasketProductObjectType
}

export default function ProductAmountHandler(
    props: ProductAmountHandlerPropsType
) {
    const [directInputValue, setDirectInputValue] = useState(1)

    //Object destructuring from component's props
    const { product } = props

    //Object destructuring from the Shopping cart context
    const {
        funcs: {
            reduceProductAmount,
            increaseProductAmount,
            handleDirectAmountInput,
        },
    } = useContext(ShoppingCartFunc)

    const handleUserDirectInput = (
        product: BasketProductObjectType,
        amount: number
    ) => {
        setDirectInputValue(amount)
        handleDirectAmountInput(
            product,
            amount >= 1 ? amount : 1 /*makes sure the smallest amount is 1 */
        )
    }

    const handleReduceProductAmount = (product: BasketProductObjectType) => {
        reduceProductAmount(product)
    }
    const handleIncreaseProductAmount = (product: BasketProductObjectType) => {
        increaseProductAmount(product)
    }

    return (
        <>
            <div className="product-amount-handler-component-wrapper flex items-center">
                <button
                    className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 -mr-2"
                    onClick={() => {
                        handleReduceProductAmount(product)
                    }}
                >
                    -
                </button>
                <input
                    type="number"
                    className="direct-amount-input-amounnt-handler w-12 mt-1 mx-2 "
                    value={directInputValue == 0 ? '' : directInputValue}
                    defaultValue={1}
                    onChange={(e) =>
                        handleUserDirectInput(product, Number(e.target.value))
                    }
                    min={1}
                />
                <button
                    className="inline-block font-bold mt-1 mx-2 border border-solid px-2 -ml-2 mr-10"
                    onClick={() => {
                        handleIncreaseProductAmount(product)
                    }}
                >
                    +
                </button>
            </div>
        </>
    )
}
