//Importing React hooks
import { useContext } from 'react'

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
    return (
        <>
            {/* //! Make the missing fields of the form turn red when the user presses "Next" */}
            <div
                className="page-left-side-contacts-wrapper page-left-side-wrapper bg-white border-white rounded-sm text-sm shadow-2xl
      focus:outline-none"
            >

                {/** //?? <===== ! | START OF CONTACTS FORM | ! =====> */}

                <div className="page-left-side-contacts-column page-left-side-contacts-left-column">
                    {/* //?? CONTACTS FORM LEFT COLUMN */}

                    <div className="address-contact-info-block">
                        <p className="contacts-page-heading text-primary-color text-HeadingSmall">
                            Contact Details
                        </p>

                        <input
                            style={{
                                border: formValidation.nameHasError
                                    ? '1px solid red'
                                    : ' ',
                            }}
                            type="text"
                            className="contacts-page-input-field pl-2 py-1.5 bg-white rounded-sm text-sm shadow-md
            focus:outline-none"
                            value={contactInfoState.name.value}
                            placeholder="* Name..."
                            onChange={handleNameChange}
                            onBlur={handleNameValidation}
                            required
                        />
                        <input
                            style={{
                                border: formValidation.lastNameHasError
                                    ? '1px solid red'
                                    : ' ',
                            }}
                            type="text"
                            className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
                            value={contactInfoState.lastName.value}
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
                                        : ' ',
                                }}
                                type="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
                                value={contactInfoState.email.value}
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
                                ' '
                            )}
                            <input
                                style={{
                                    border: formValidation.phoneHasError
                                        ? '1px solid red'
                                        : ' ',
                                }}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
              focus:outline-none"
                                value={contactInfoState.phone.value}
                                placeholder="* Phone..."
                                onChange={handlePhoneChange}
                                onBlur={handlePhoneValidation}
                                required
                            />
                        </>
                    </div>

                    {/* //?? <--- | ADDRESS INFO | ---> */}

                    <div className="address-contact-info-block">
                        <p className="contacts-page-heading text-primary-color text-HeadingSmall">
                            Address Details
                        </p>

                        <input
                            style={{
                                border: formValidation.streetHasError
                                    ? '1px solid red'
                                    : ' ',
                            }}
                            type="text"
                            className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
                            value={contactInfoState.street.value}
                            placeholder="* Street"
                            onChange={handleStreetChange}
                            onBlur={handleStreetValidation}
                            required
                        />
                        <input
                            style={{
                                border: formValidation.houseNumberHasError
                                    ? '1px solid red'
                                    : ' ',
                            }}
                            type="text"
                            className="contacts-page-input-field pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
                            value={contactInfoState.houseNumber.value}
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
                                        : ' ',
                                }}
                                inputMode="numeric"
                                pattern="[0-9]*"
                                className="contacts-page-input-field-small pl-2 py-1.5 bg-white border-white border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
                                value={contactInfoState.postNumber.value}
                                placeholder="* Post number"
                                onChange={handlePostNumberChange}
                                onBlur={handlePostNumberValidation}
                                required
                            />
                            <input
                                style={{
                                    border: formValidation.townHasError
                                        ? '1px solid red'
                                        : ' ',
                                }}
                                type="text"
                                className="contacts-page-input-field-small ml-4 pl-2 py-1.5 bg-white border-red border-slate-300 rounded-sm text-sm shadow-md
            focus:outline-none"
                                value={contactInfoState.town.value}
                                placeholder="* Town"
                                onChange={handleTownChange}
                                onBlur={handleTownValidation}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="page-left-side-contacts-column page-left-side-contacts-right-column">
                    {/* //?? CONTACTS FORM LEFT COLUMN */}

                    <p className="contacts-page-heading text-primary-color text-HeadingSmall ">
                        Delivery
                    </p>
                    <div
                        className="delivery-date-info-block bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl
          focus:outline-none"
                        style={{ height: '320px', width: '300px' }}
                    >
                        <DateCalendar
                            style={{ height: '320px', width: '300px' }}
                            minDate={dayjs(todayDate)}
                            displayWeekNumber={true}
                            displayYearNumber={false}
                            disablePast={true}
                            views={['day']}
                            value={value}
                            data-value={contactInfoState.deliveryDate.value}
                            onChange={(newValue) => handleCalendar(newValue)}
                            required
                        />
                    </div>
                    <div className="notes-info-block">
                        <p className="contacts-page-heading text-primary-color text-HeadingSmall -mb-1 mt-10">
                            Notes
                        </p>
                        <textarea
                            className="contacts-page-notes-txt-area pl-2 px-20 py-2 bg-white border-white border-slate-300 rounded-sm text-sm shadow-xl
            focus:outline-none"
                            value={contactInfoState.notes.value}
                            placeholder="Something we should note...?"
                            onChange={handleNotesChange}
                        ></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}
