//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

export default function ProductDisplayReceiptTest() {
 
    return (
        <>
            <div className="product-display-receipt-wrapper flex justify-start text-txt-grey-color">
                <div className="product-display-receipt-delete">
                    <FontAwesomeIcon
                        icon={faMinus}
                        className="product-display-receipt-icon-minus"
                    />
                </div>

                <div className="product-display-receipt-main-cont">
                    <div className="product-display-receipt-name">
                        <p className="text-VariationTitleSmall cursor-default">
                          Test product title with test variation title
                        </p>
                    </div>
                    <div className="product-display-receipt-price">
                        <p className="text-TextXXXS cursor-default">
                           156.00 dkk
                        </p>
                    </div>
                </div>
                <div>
                    <p
                        className="text-TextXXXS font-bold block ml-2 px-1 py-1 bg-white border-white border-slate-300 rounded-sm shadow-md
            focus:outline-none relative"
                    >
                         x 12
                    </p>
                </div>
            </div>
        </>
    )
}
