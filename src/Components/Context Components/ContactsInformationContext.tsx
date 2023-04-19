//Importing React hooks
import { createContext, useState, useReducer } from "react";

import dayjs from "dayjs";

type ContactsInfoContextType = {
  reducer: any,
  formInitialState: any,
  dispatch: any,
  getContactInfoFuncs: any,
  contactInfoState: any,
  value: any,
  setValue: any,
}

interface ContactInfoState {
  name: string,
  lastName: string,
  email: string,
  phone: number,
  street: string,
  houseNumber: number,
  postNumber: number,
  town: string,
  deliveryDate: string,
  notes: string
}

interface FormInitialState {
  name: string,
  lastName: string,
  email: string,
  phone: number,
  street: string,
  houseNumber: number,
  postNumber: number,
  town: string,
  deliveryDate: string,
  notes: string
}

interface ContactInfoAction {
  type: string,
  payload: any,
}

export const ContactsInformationFunc = createContext<ContactsInfoContextType>({} as ContactsInfoContextType );

export const ContactInfoContProvider: React.FC = (props: any) => {
  function reducer(state: ContactInfoState, action: ContactInfoAction) {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...state, name: action.payload };
      case "UPDATE_LASTNAME":
        return { ...state, lastName: action.payload };
      case "UPDATE_EMAIL":
        return { ...state, email: action.payload };
      case "UPDATE_PHONE":
        return { ...state, phone: action.payload };
      case "UPDATE_STREET":
        return { ...state, street: action.payload };
      case "UPDATE_HOUSENUMBER":
        return { ...state, houseNumber: action.payload };
      case "UPDATE_POSTNUMBER":
        return { ...state, postNumber: action.payload };
      case "UPDATE_TOWN":
        return { ...state, town: action.payload };
      case "UPDATE_DELIVERYDATE":
        return { ...state, deliveryDate: action.payload };
      case "UPDATE_NOTES":
        return { ...state, notes: action.payload };
      default:
        return state;
    }
  }

  const formInitialState: FormInitialState = {
    name: "",
    lastName: "",
    email: "",
    phone: 0,
    street: "",
    houseNumber: 0,
    postNumber: 0,
    town: "",
    deliveryDate: "",
    notes: "",
  };

  const [contactInfoState, dispatch] = useReducer(reducer, formInitialState);

  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + 14);

  const [value, setValue] = useState(dayjs(todayDate));

  const getContactInfoFuncs = {
    handleNameChange: (e: any) => {
      dispatch({ type: "UPDATE_NAME", payload: e.target.value });
    },

    handleLastNameChange: (e: any) => {
      dispatch({ type: "UPDATE_LASTNAME", payload: e.target.value });
    },

    handleEmailChange: (e: any) => {
      dispatch({ type: "UPDATE_EMAIL", payload: e.target.value });
    },

    handlePhoneChange: (e: any) => {
      dispatch({ type: "UPDATE_PHONE", payload: e.target.value });
    },

    handleStreetChange: (e: any) => {
      dispatch({ type: "UPDATE_STREET", payload: e.target.value });
    },

    handleHouseNumberChange: (e: any) => {
      dispatch({ type: "UPDATE_HOUSENUMBER", payload: e.target.value });
    },

    handlePostNumberChange: (e: any) => {
      dispatch({ type: "UPDATE_POSTNUMBER", payload: e.target.value });
    },

    handleTownChange: (e: any) => {
      dispatch({ type: "UPDATE_TOWN", payload: e.target.value });
    },

    handleNotesChange: (e: any) => {
      dispatch({ type: "UPDATE_NOTES", payload: e.target.value });
    },

    handleDeliveryDateChange: (e: any  ) => {
      dispatch({
        type: "UPDATE_DELIVERYDATE",
        payload: value.toString(),
      });
    },
  };

  return (
    <ContactsInformationFunc.Provider
      value={{
        reducer,
        formInitialState,
        contactInfoState,
        dispatch,
        getContactInfoFuncs,
        value,
        setValue,
      }}
    >
      {props.children}
    </ContactsInformationFunc.Provider>
  );
};
