import Popover from '@mui/material/Popover'

//Importing types and interfaces
import { RawProductObjectType } from '../../../Types/ShoppingCartTypes'

type ModalComponentPropsType = {
    product: RawProductObjectType
    openPopOver: boolean
    title?: string
    body: string
    severity: string
    handleClose: () => void
    anchorEl: HTMLButtonElement | null
}

export default function PopOverComponent(props: ModalComponentPropsType) {
    const {
        openPopOver,
        title,
        body,
        severity,
        handleClose,
        anchorEl,
        product,
    } = props

    const id = openPopOver ? 'simple-popover' : undefined
    return (
        <>
            <Popover
                id={id}
                open={openPopOver}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 370, left: 660 }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
            >
                <div className="popover-content-wrapper">
                    <div className="popover-top-section">
                        <div className="popover-header-bar bg-primary-color"></div>
                        <p className="text-TextMidSmall ml-6 pb-2 mt-4 font-bold">
                            {severity}
                        </p>
                    </div>

                    <div className="popover-main-content">
                        <img
                            className="product-description-product-image"
                            src={`http://65.109.137.46:5000/img/${product.ProductIndex}_0.jpg`}
                        />
                        <p className="text-TextSmall mb-2">
                            {title ? title : ' '}
                        </p>
                        <p className="text-TextSMALLXS">{body}</p>
                    </div>
                </div>
            </Popover>
        </>
    )
}
