import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';
import './Dashboard.css';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            inventory: [],
        }
    }

    componentDidMount() {
        this.getInventory();
    }

    getInventory = () => {
        axios.get('/api/inventory').then(res => {
            this.setState({ inventory: res.data });
        }).catch(err => console.log(err));
    }

    deleteProduct = id => {
        axios.delete(`/api/product/${id}`).then(() => {
            this.props.getInventoryFn();
        }).catch(err => console.log(err));
    }

    render() {
        const inventoryList = this.state.inventory.map((product, i) => (
            <Product key={i} product={product} productToEdit={this.state.productToEdit} deleteProductFn={this.deleteProduct} />
        ));

        return (
            <div className='Dashboard'>
                {inventoryList}
            </div>
        )
    }    
}

export default Dashboard;