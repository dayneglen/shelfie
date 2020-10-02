import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: 0,
            img: '',
            edit: false
        }

        this.addProduct = this.addProduct.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.productToEdit !== this.props.productToEdit) {
            this.setState({
                name: this.props.productToEdit.name,
                price: this.props.productToEdit.price,
                img: this.props.productToEdit.img,
                edit: true
            });
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    editProduct = (e, name, price, img) => {
        e.preventDefault();
        const { productToEdit, getInventoryFn } = this.props;
        axios.put(`/api/product/${productToEdit.product_id}`, { name, price, img }).then(() => {
            this.clearInputs();
            this.setState({ edit: false });
            getInventoryFn();
        }).catch(err => console.log(err));
    }

    clearInputs = () => {
        this.setState({
            name: '',
            price: 0,
            img: ''
        });
    }


    addProduct(name, price, img) {
        if (img === '') {
            img = 'https://th.bing.com/th/id/OIP.SUH-o5BDArUXdFu34UxReQHaFj?w=250&h=187&c=7&o=5&dpr=2&pid=1.7'
        }

        axios.post('/api/product', { name, price, img }).then(() => {
            this.clearInputs();
            this.props.getInventoryFn();
        }).catch(err => console.log(err));
    }

    render() {
        const { name, price, img } = this.state;
        return (
            <section className='form-wrapper'>
                <div className='img-example'></div>
                <form>
                    <h3>Image URL:</h3>
                    <input name='img' value={this.state.img} onChange={(e) => this.handleChange(e)} />
                    <h3> Product Name:</h3>
                    <input name='name' value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    <h3>Price: </h3>
                    <input name='price' value={this.state.price} onChange={(e) => this.handleChange(e)} />
                    <section className='btn-container'>
                        <button className='btn' onClick={this.clearInputs}>Cancel</button>
                        {this.state.edit
                            ? <button className='btn' type='submit' onClick={(e) => this.editProduct(e, name, price, img)}>Save Changes</button>
                            : <button className='btn' type='submit' onClick={() => this.addProduct(name, price, img)}>Add to Inventory</button>}

                    </section>
                </form>
            </section>
        )
    }
}

export default Form;
