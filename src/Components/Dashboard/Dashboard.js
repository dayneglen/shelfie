import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import './Dashboard.css';

class Dashboard extends Component {


    deleteProduct = id => {
        axios.delete(`/api/product/${id}`).then(() => {
            this.props.getInventoryFn();
        }).catch(err => console.log(err));
    }

    render() {
        const { inventory, productToEdit } = this.props;
        const inventoryList = inventory.map((product, i) => (
            <Product key={i} product={product} productToEdit={productToEdit} deleteProductFn={this.deleteProduct} />
        ));

        return (
            <div className='Dashboard'>
                {inventoryList}
            </div>
        )
    }    
}

export default Dashboard;