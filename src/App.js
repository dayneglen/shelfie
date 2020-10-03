import React, { Component } from 'react';
import routes from './routes';
import Header from './Components/Header/Header';
import './reset.css';
import './App.css';

class App extends Component {
  

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
