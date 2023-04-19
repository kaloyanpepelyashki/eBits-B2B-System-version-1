import { useEffect, useState, Dispatch, FunctionComponent } from 'react';
import './App.css'

  interface ProductListModel {
    ProductIndex: number;
    ProductNam: string;
    Price: string;
    Description: string;
  }
function App() {

  //*Fetching data from the server
  //////
  ////
  //


  const [productsList, setProductsList] = useState<ProductListModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://65.109.137.46:5000/api")
        .then((response) => response.json())
        .then((data) => {
          setProductsList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  //
  ////
  //////

  return (
    <div className="App">
   
    </div>
  )
}

export default App
