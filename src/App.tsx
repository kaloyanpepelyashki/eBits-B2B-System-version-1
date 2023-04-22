//Importing React Hooks
import { useEffect, useState, Dispatch, FunctionComponent } from 'react'

//Importing React-router elements and components
import { Navigate, Route, Routes } from 'react-router'

//Importing Context Components
import { ShoppingCartProvider } from './Components/Context Components/ShoppingCartFuncContext'

import { ProductListModel } from './Types/ShoppingCartTypes'

//Importing MUI elements, dependencies and components
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import * as dayjs from 'dayjs'

import './App.css'
import LandingPage from './Pages/LandingPage'
import ProductSelectionPage from './Pages/ProductSelectionPage'
import HeaderBar from './Components/Global Components/HeaderBar'
import { ContactInfoContProvider } from './Components/Context Components/ContactsInformationContext'
import ContactInfoPage from './Pages/ContactsPage'
import OutroPage from './Pages/OutroPage'

function App() {
    //*Fetching data from the server
    //////
    ////
    //

    const [productsList, setProductsList] = useState<ProductListModel[]>([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch('http://65.109.137.46:5000/api')
                .then((response) => response.json())
                .then((data) => {
                    setProductsList(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        fetchData()
    }, [])

    //
    ////
    //////
    //*

    return (
        <div className="App">
            <HeaderBar />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ShoppingCartProvider>
                    <ContactInfoContProvider>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route
                                path="/select-products"
                                element={
                                    <ProductSelectionPage
                                        productsList={productsList}
                                    />
                                }
                            />
                            <Route
                                path="/contact-info"
                                element={<ContactInfoPage />}
                            />
                            <Route path="/outro" element={<OutroPage />} />
                        </Routes>
                    </ContactInfoContProvider>
                </ShoppingCartProvider>
            </LocalizationProvider>
        </div>
    )
}

export default App
