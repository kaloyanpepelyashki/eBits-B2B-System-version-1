//Importing React hooks
import { createContext, useState } from 'react'
import {
    ShoppingCartFuncContextType,
    RawProductObjectType,
    BasketProductObjectType,
} from '../../Types/ShoppingCartTypes'

export const ShoppingCartFunc = createContext<ShoppingCartFuncContextType>(
    {} as ShoppingCartFuncContextType
)

export const ShoppingCartProvider = (props: any) => {
    const [cartProducts, setCartProducts] = useState<BasketProductObjectType[]>(
        []
    )
    const [isKit, setIsKit] = useState(false)
    const [kitAmount, setKitAmount] = useState(1)
    const [typeOfQuerry, setTypeOfQuerry] = useState(0)
    const [kitName, setKitName] = useState('')
    const [kitDescription, setKitDescription] = useState('')
    const [exportRights, setExportRights] = useState('')

    let total: number = 0
    cartProducts.map(
        (product) => (total = total + +product.qty * +product.Price)
    )

    const funcs: any = {
        addProduct: (product: RawProductObjectType) => {
            //Return true if there is a product with an index in the cart, that is equal to the product index you are adding to the cart now
            const doesExist: any = cartProducts.find(
                (item) =>
                    item.ProductName === product.ProductName &&
                    item.ProductIndex === product.ProductIndex &&
                    item.VariationName?.toLowerCase() ===
                        product.VariationName?.toLowerCase() &&
                    item.VariationID === product.VariationID
            )
            //If doesExist is true, it adds one more to the qty (quantity)  of the product
            if (doesExist) {
                setCartProducts(
                    cartProducts.map((item) =>
                        item.ProductName === product.ProductName &&
                        item.ProductIndex === product.ProductIndex &&
                        item.VariationName?.toLowerCase() ===
                            product.VariationName?.toLowerCase() &&
                        item.VariationID === product.VariationID
                            ? {
                                  ...doesExist,
                                  qty: doesExist.qty + 1,
                                  varQty: doesExist.varQty + 1,
                              }
                            : item
                    )
                )
                //If doesExist is not true, it just adds the product to the cart with quantity 1
            } else {
                setCartProducts([
                    ...cartProducts,
                    {
                        ...product,
                        qty: 1,
                        varQty: 1,
                        ProductName: product.ProductName,
                        VariationName: product.VariationName,
                        VariationID: product.VariationID,
                        productBaksetUnqKey: `${product.ProductIndex} / ${product.VariationID}`,
                        Description: product.Description,
                    },
                ])
            }
        },

        //<== REDUCE AMOUNT FROM CARD CART FUNCTIONALITY FEATURE
        //! Important
        //TODO Examine, if the application still has the reduction bug (removeing all from the same kind despite the variations. Or removing all the ones that have no variation)
        //! Important
        reduceProductAmount: (product: BasketProductObjectType) => {
            const doesExist: any = cartProducts.find(
                (item) =>
                    item.ProductName === product.ProductName &&
                    item.ProductIndex === product.ProductIndex &&
                    item.VariationName?.toLowerCase() ===
                        product.VariationName?.toLowerCase() &&
                    item.VariationID === product.VariationID &&
                    item.productBaksetUnqKey === product.productBaksetUnqKey
            )
            if (doesExist.qty === 1 && doesExist.varQty === 1) {
                setCartProducts(
                    cartProducts.filter(
                        (item) =>
                            //Code I removed on last deb
                            // item.product.ProductName !== product.product.ProductName &&
                            // item.product.ProductIndex !== product.product.ProductIndex &&
                            item.VariationName?.toLowerCase() !==
                                product.VariationName?.toLowerCase() &&
                            item.productBaksetUnqKey !=
                                product.productBaksetUnqKey
                    )
                )
            } else {
                setCartProducts(
                    cartProducts.map((item) =>
                        item.ProductName === product.ProductName &&
                        item.ProductIndex === product.ProductIndex &&
                        item.VariationName?.toLowerCase() ===
                            product.VariationName?.toLowerCase() &&
                        item.VariationID === product.VariationID
                            ? {
                                  ...doesExist,
                                  qty: doesExist.qty - 1,
                                  varQty: doesExist.varQty - 1,
                              }
                            : item
                    )
                )
            }
        },

        increaseProductAmount: (product: BasketProductObjectType) => {
            const doesExist: any = cartProducts.find(
                (item) =>
                    item.ProductName === product.ProductName &&
                    item.ProductIndex === product.ProductIndex &&
                    item.VariationName?.toLowerCase() ===
                        product.VariationName?.toLowerCase() &&
                    item.VariationID === product.VariationID
            )
            setCartProducts(
                cartProducts.map((item) =>
                    item.ProductName === product.ProductName &&
                    item.ProductIndex === product.ProductIndex &&
                    item.VariationName?.toLowerCase() ===
                        product.VariationName?.toLowerCase() &&
                    item.VariationID === product.VariationID
                        ? {
                              ...doesExist,
                              qty: doesExist.qty + 1,
                              varQty: doesExist.varQty + 1,
                          }
                        : item
                )
            )
        },

        handleDirectAmountInput: (
            product: BasketProductObjectType,
            amount: number
        ) => {
            const doesExist: any = cartProducts.find(
                (item) =>
                    item.ProductName === product.ProductName &&
                    item.ProductIndex === product.ProductIndex &&
                    item.VariationName?.toLowerCase() ===
                        product.VariationName?.toLowerCase() &&
                    item.VariationID === product.VariationID
            )
            setCartProducts(
                cartProducts.map((item) =>
                    item.ProductName === product.ProductName &&
                    item.ProductIndex === product.ProductIndex &&
                    item.VariationName?.toLowerCase() ===
                        product.VariationName?.toLowerCase() &&
                    item.VariationID === product.VariationID
                        ? {
                              ...doesExist,
                              qty: amount,
                              varQty: amount,
                          }
                        : item
                )
            )
        },

        //<== REMOVE FROM CART FUNCTIONALITY FEATURE

        removeProduct: (product: BasketProductObjectType) => {
            const doesExist: any = cartProducts.find(
                (item) =>
                    item.ProductName === product.ProductName &&
                    item.ProductIndex === product.ProductIndex &&
                    item.VariationName?.toLowerCase() ===
                        product.VariationName?.toLowerCase() &&
                    item.VariationID === product.VariationID &&
                    item.productBaksetUnqKey === product.productBaksetUnqKey
            )
            if (doesExist.qty === 1) {
                setCartProducts(
                    cartProducts.filter(
                        (item) =>
                            //Code I removed on last debug
                            // item.product.ProductName !== product.product.ProductName &&
                            item.ProductIndex !== product.ProductIndex &&
                            item.VariationName?.toLowerCase() !==
                                product.VariationName?.toLowerCase()
                    )
                )
            } else {
                setCartProducts(
                    cartProducts.map((item) =>
                        item.ProductName === product.ProductName &&
                        item.ProductIndex === product.ProductIndex &&
                        item.VariationName?.toLowerCase() ===
                            product.VariationName?.toLowerCase() &&
                        item.VariationID === product.VariationID &&
                        item.productBaksetUnqKey === product.productBaksetUnqKey
                            ? {
                                  ...doesExist,
                                  qty: (doesExist.qty = 0),
                                  varQty: (doesExist.varQty = 0),
                              }
                            : item
                    )
                )
            }
        },
    }

    return (
        <ShoppingCartFunc.Provider
            value={{
                cartProducts,
                funcs,
                setCartProducts,
                isKit,
                setIsKit,
                kitAmount,
                setKitAmount,
                total,
                typeOfQuerry,
                setTypeOfQuerry,
            }}
        >
            {props.children}
        </ShoppingCartFunc.Provider>
    )
}
