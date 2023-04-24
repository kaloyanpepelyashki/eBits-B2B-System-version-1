//Importing React-router elements and components
import { MouseEventHandler } from 'react'
import { useNavigate, To } from 'react-router'

type ButtonsHolderPropsType = {
    handleTransfer?: MouseEventHandler<HTMLButtonElement> | undefined
    title?: string
    backDest?: To
    backTitle?: string
    className?: string
}
export default function ButtonsHolder(props: ButtonsHolderPropsType) {
    const navigate = useNavigate()

    const { handleTransfer, title, backDest, backTitle } = props

    const name: string = 'Kons'

    return (
        <>
            <div className="buttons-holder">
                <div className="buttons-holder-inner">
                    <button
                        className="btn-holder-back text-GlobalBtnsTxt font-semibold mx-5"
                        onClick={() =>
                            backDest ? navigate(backDest) : navigate(-1)
                        }
                    >
                        &lt; {backTitle ? backTitle : 'Back'}
                    </button>
                    <button
                        className="btn-holder-next bg-primary-color rounded-sm text-GlobalBtnsTxt font-normal mx-5"
                        onClick={handleTransfer}
                    >
                        {title ? title : 'Next'}
                    </button>
                </div>
            </div>
        </>
    )
}
