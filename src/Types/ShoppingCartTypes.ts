export interface ProductListModel {
    ProductIndex: number
    ProductNam: string
    Price: string
    Description: string
}

export type RawProductObjectType = {
    Description: string
    Price: number
    ProductIndex: number
    VariationID: number
    VariationName: string
    ProductName: string
}

export type BasketProductObjectType = {
    Description: string
    Price: number
    ProductIndex: number
    VariationID: number
    VariationName: string
    qty: number
    varQty: number
    ProductName: string
    productBaksetUnqKey: string
}

export type ShoppingCartFuncContextType = {
    cartProducts: BasketProductObjectType[]
    funcs: any
    setCartProducts: React.Dispatch<
        React.SetStateAction<BasketProductObjectType[]>
    >
    isKit: boolean
    setIsKit: React.Dispatch<React.SetStateAction<boolean>>
    kitAmount: number
    setKitAmount: React.Dispatch<React.SetStateAction<number>>
    total: number
}
