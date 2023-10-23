import React from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import Collections from './components/pages/collections/Collections';
import Product from './components/pages/products/Product';
import { Provider } from 'mobx-react';
import ImageAwsStore from './stores/ImageAwsStore';
import ImageForm from './components/pages/productManager/ProductForms/ImageForm'

function App() {
  return (
    <Provider ImageAwsStore={ImageAwsStore}>
        <div className="app">
            {/*<Home/>*/}
            {/* <Collections/> */}
            <Product/>
            <ImageForm/>
        </div>
    </Provider>
    );
}

export default App;
