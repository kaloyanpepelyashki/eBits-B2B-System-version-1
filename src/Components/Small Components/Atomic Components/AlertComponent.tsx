import Alert, { AlertColor } from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

type AlertComponentPropsType = {
    severity: AlertColor
    title: string
    body: string
    setThrowError: React.Dispatch<React.SetStateAction<boolean>>
    throwError: boolean
}
export default function AlertComponent(props: AlertComponentPropsType) {
    //Object destructuring from component's props
    const { severity, title, body, setThrowError, throwError } = props
    return throwError ? (
        <div className="contact-info-page-error-alert absolute">
            <Alert
                onClose={() => {
                    setThrowError(false)
                }}
                severity={severity}
            >
                <AlertTitle>{title}</AlertTitle>
                {body}
            </Alert>
        </div>
    ) : (
        <></>
    )
}
