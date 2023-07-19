import React from 'react';
import './App.css';
import Home from './components/pages/home/Home';
import Collections from './components/pages/collections/Collections';
import Product from './components/pages/products/Product';

function App() {
  return (
    <div className="app">
      {/*<Home/>*/}
      {/* <Collections/> */}
      <Product/>
    </div>
  );
}

export default App;
