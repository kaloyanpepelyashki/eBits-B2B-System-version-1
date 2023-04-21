//Importing React hooks
import React, { useState, useEffect } from 'react'

//Importing Font Awesome and Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'
import { faCircleQuestion as farFaCircleQuestion } from '@fortawesome/free-regular-svg-icons'

//Importing types and interfaces

export default React.memo(function ProductSearchBarTest({}) {
    const [productWithVar, setProductWithVar] = useState({
        ProductName: '',
        ProductIndex: 0,
        VariationName: 'product.ProductName',
        VariationID: '',
        Price: 0,
        Description: '',
    })

    const [revealDescription, setRevealDescription] = useState(false)

    return (
        <>
            <div className="product-search-bar-outter-wrapper relative">
                <div className="product-search-bar-main-container">
                    <select className="product-search-bar-select product-search-bar text-VariationTitle bg-selector-color text-txt-white-color round-sm border-round mr-6">
                        <option>Select Product</option>
                        <option>Test product variation</option>
                        <option>Test product variation</option>
                        <option>Test product variation</option>
                    </select>
                    <div className="product-searchbar-clickable-space">
                        <img
                            className="product-display-search-bar-image mr-6 "
                            src={`https://www.jh-electronica.com/UploadFiles/YXA369-1.jpg`}
                        />
                        <h2 className="text-ProductTitleSmall font-bold">
                            Test product Name
                        </h2>
                    </div>
                    <div className="product-search-bar-main-content flex row">
                        <FontAwesomeIcon
                            className="product-search-bar-info-icon "
                            onMouseEnter={() => setRevealDescription(true)}
                            onMouseLeave={() =>
                                setTimeout(
                                    () => setRevealDescription(false),
                                    2500
                                )
                            }
                            icon={faCircleQuestion}
                        />
                        {revealDescription ? (
                            <div
                                className="product-search-bar-description-pop-up absolute"
                                onMouseEnter={() => setRevealDescription(true)}
                                onMouseLeave={() => setRevealDescription(false)}
                            >
                                <p className="text-TextXXS">
                                    Test Product Description, T4est Prodduct
                                    Description Test Product Description
                                </p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </>
    )
})
