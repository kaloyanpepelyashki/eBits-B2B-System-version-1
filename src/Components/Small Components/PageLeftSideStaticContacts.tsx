//Importing React hooks
import { useContext, useEffect } from 'react'

import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs, { Dayjs } from 'dayjs'

import { ContactsInformationFunc } from '../Context Components/ContactsInformationContext'

export default function PageLeftSideStaticContacts() {
    const todayDate: Date = new Date()
    todayDate.setDate(todayDate.getDate() + 14)

    const {
        contactInfoState,
        formValidation,

        getContactInfoFuncs: {
            handleNameChange,
            handleLastNameChange,
            handleEmailChange,
            handlePhoneChange,
            handleStreetChange,
            handleHouseNumberChange,
            handlePostNumberChange,
            handleTownChange,
            handleNotesChange,
            handleDeliveryDateChange,
        },
        getContactInfoValidationFuncs: {
            handleNameValidation,
            handleLastNameValidation,
            handleEmailValidation,
            handlePhoneValidation,
            handleStreetValidation,
            handleHouseNumberValidation,
            handlePostNumberValidation,
            handleTownValidation,
        },
        value,
        setValue,
    } = useContext(ContactsInformationFunc)

    const handleCalendar = (newValue: Dayjs | null) => {
        setValue(newValue)
        handleDeliveryDateChange()
    }

    //The useEffect hook is used to set the default value of delivery date, when the component is loaded.
    useEffect(() => {
        handleCalendar(dayjs(todayDate))
    }, [])

    return (
        <>
            <div
                className="page-left-side-contacts-wrapper page-left-side-wrapper bg-white border-white rounded-sm text-sm shadow-2xl
      focus:outline-none"
            >
                {/** //?? <===== ! | START OF CONTACTS FORM | ! =====> */}

                <div className="page-left-side-contacts-column page-left-side-contacts-left-column">
                    {/* //?? CONTACTS FORM LEFT COLUMN */}
                    <form
                        className="contact-page-form"
                        aria-label="Contacts Information"
                    >
                        <div className="address-contact-info-block">
                            <h1 className="contacts-page-heading text-primary-color text-HeadingSmall">
                                Contact Details
                            </h1>

                            <input
                                style={{
                                    border: formValidation.nameHasError
                                        ? '1px solid red'
                                        : '',
                                }}
                                aria-label="Name"
                                type="text"
                                className="contacts-page-input-field pl-2 py-1.5 bg-white rounded-sm text-sm shadow-md focus:shadow-inner
            focus:outline-none"
                                value={contactInfoState.name}
                                placeholder="* Name..."
                                onChange={handleNameChange}
                                onBlur={handleNameValidation}
                                required
                            />
                            <input
                                style={{
                                    border: formValidation.lastNameHasError
                                        ? '1px solid red'
                                        : '',
                                }}
                                aria-label="Last Name"
                                type="text"
                                className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md focus:shadow-inner
            focus:outline-none"
                                value={contactInfoState.lastName}
                                placeholder="* Last Name..."
                                onChange={handleLastNameChange}
                                onBlur={handleLastNameValidation}
                                required
                            />

                            <>
                                {formValidation.emailFormattHasError ? (
                                    <p className="text-TextSMALLXS text-txt-red">
                                        Please provide a valid email{' '}
                                    </p>
                                ) : (
                                    ' '
                                )}
                                <input
                                    style={{
                                        border: formValidation.emailHasError
                                            ? '1px solid red'
                                            : '',
                                    }}
                                    aria-label="Email"
                                    type="email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md focus:shadow-inner
            focus:outline-none"
                                    value={contactInfoState.email}
                                    placeholder="* Email..."
                                    onChange={handleEmailChange}
                                    onBlur={handleEmailValidation}
                                    required
                                />
                            </>
                            <>
                                {formValidation.phoneFormattHasError ? (
                                    <p className="text-TextSMALLXS text-txt-red">
                                        Please provide a valid phone number{' '}
                                    </p>
                                ) : (
                                    ''
                                )}
                                <input
                                    style={{
                                        border: formValidation.phoneHasError
                                            ? '1px solid red'
                                            : '',
                                    }}
                                    aria-label="Phone"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md focus:shadow-inner
              focus:outline-none"
                                    value={
                                        contactInfoState.phone === 0
                                            ? ''
                                            : contactInfoState.phone
                                    }
                                    placeholder="* Phone..."
                                    onChange={handlePhoneChange}
                                    onBlur={handlePhoneValidation}
                                    required
                                />
                            </>
                        </div>
                    </form>

                    {/* //?? <--- | ADDRESS INFO | ---> */}

                    <form
                        className="contact-page-form"
                        aria-label="Address Details"
                    >
                        <div className="address-contact-info-block">
                            <p className="contacts-page-heading text-primary-color text-HeadingSmall">
                                Address Details
                            </p>

                            <input
                                style={{
                                    border: formValidation.streetHasError
                                        ? '1px solid red'
                                        : '',
                                }}
                                aria-label="Street address"
                                type="text"
                                className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md focus:shadow-inner
            focus:outline-none"
                                value={contactInfoState.street}
                                placeholder="* Street"
                                onChange={handleStreetChange}
                                onBlur={handleStreetValidation}
                                required
                            />
                            <input
                                style={{
                                    border: formValidation.houseNumberHasError
                                        ? '1px solid red'
                                        : '',
                                }}
                                aria-label="House number"
                                type="text"
                                className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md focus:shadow-inner
            focus:outline-none"
                                value={contactInfoState.houseNumber}
                                placeholder="* House Number"
                                onChange={handleHouseNumberChange}
                                onBlur={handleHouseNumberValidation}
                                required
                            />
                            <div className="contacts-page-small-inputs-holder ">
                                <input
                                    style={{
                                        border: formValidation.postNumberHasError
                                            ? '1px solid red'
                                            : '',
                                    }}
                                    aria-label="Post code"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    className="contacts-page-input-field-small pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm  text-TextXS  focus:shadow-inner shadow-md
            focus:outline-none"
                                    value={
                                        contactInfoState.postNumber === 0
                                            ? ''
                                            : contactInfoState.postNumber
                                    }
                                    placeholder="* Post code"
                                    onChange={handlePostNumberChange}
                                    onBlur={handlePostNumberValidation}
                                    required
                                />
                                <input
                                    style={{
                                        border: formValidation.townHasError
                                            ? '1px solid red'
                                            : '',
                                    }}
                                    aria-label="Town"
                                    type="text"
                                    className="contacts-page-input-field-small ml-4 pl-2 py-1.5 bg-white border-red border-slate-300 rounded-sm  text-TextXS shadow-md focus:shadow-inner
            focus:outline-none"
                                    value={contactInfoState.town}
                                    placeholder="* Town"
                                    onChange={handleTownChange}
                                    onBlur={handleTownValidation}
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="page-left-side-contacts-column page-left-side-contacts-right-column">
                    {/* //?? CONTACTS FORM LEFT COLUMN */}

                    <p className="contacts-page-heading text-primary-color text-HeadingSmall ">
                        Delivery
                    </p>
                    <div
                        className="delivery-date-info-block bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl
        focus:outline-none"
                    >
                        <form
                            className="contact-page-form"
                            aria-label="Delivery date details"
                        >
                            <DateCalendar
                                aria-label="Date input"
                                minDate={dayjs(todayDate)}
                                displayWeekNumber={true}
                                disablePast={true}
                                views={['day']}
                                value={value}
                                data-value={contactInfoState.deliveryDate}
                                onChange={(newValue) =>
                                    handleCalendar(newValue)
                                }
                            />
                        </form>
                    </div>

                    <div className="notes-info-block">
                        <form
                            className="contact-page-form"
                            aria-label="Address Details"
                        >
                            <p className="contacts-page-heading text-primary-color text-HeadingSmall -mb-1 mt-10">
                                Notes
                            </p>
                            <textarea
                                aria-label="Notes"
                                rows={3}
                                className="contacts-page-notes-txt-area mt-2 pl-4 py-3 bg-white border-white border-slate-300 rounded-sm text-TextXS shadow-xl
            focus:outline-none"
                                value={contactInfoState.notes.value}
                                placeholder="Something we should note...?"
                                onChange={handleNotesChange}
                            ></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
