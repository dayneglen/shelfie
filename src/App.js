import React, { Component } from 'react';
import routes from './routes';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';
import './reset.css';
import './App.css';

class App extends Component {
  

  

  // passingProduct = id => {
  //   const productToEdit = this.state.inventory.filter(product => product.product_id === id);
  //   this.setState({productToEdit: productToEdit[0]});
  // }

  render() {
    return (
      <div className="App">
        <Header />
        {routes}
        {/* <Dashboard productToEdit={this.passingProduct} inventory={this.state.inventory} getInventoryFn={this.getInventory}/>
        <Form getInventoryFn={this.getInventory} productToEdit={this.state.productToEdit}/> */}
      </div>
    );
  }
}

export default App;
