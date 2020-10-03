import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    componentDidMount() {
        const { id } = this.props.match.params;
        if (id) {
            this.getProduct(id);
            this.setState({ edit: true });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.clearInputs();
            this.setState({ edit: false })
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    clearInputs = () => {
        this.setState({
            name: '',
            price: 0,
            img: ''
        });
    }

    //Functions to connect to server

    editProduct = (name, price, img) => {
        const { id } = this.props.match.params;
        axios.put(`/api/product/${id}`, { name, price, img }).then(() => {
            this.clearInputs();
            this.setState({ edit: false });
        }).catch(err => console.log(err));
    }

    getProduct = id => {
        axios.get(`/api/inventory/${id}`).then((res) => {
            const { img, name, price } = res.data[0];
            this.setState({
                name: name,
                price: price,
                img: img
            })
        }).catch(err => console.log(err));
    }

    addProduct(name, price, img) {
        if (img === '') {
            img = 'https://th.bing.com/th/id/OIP.SUH-o5BDArUXdFu34UxReQHaFj?w=250&h=187&c=7&o=5&dpr=2&pid=1.7'
        }

        axios.post('/api/product', { name, price, img }).then(() => {
            this.clearInputs();
        }).catch(err => console.log(err));
    }

    render() {
        const { name, price, img } = this.state;
        return (
            <section className='form-wrapper'>
                {this.state.edit
                    ? <section className='edit-img-container'><img className='edit-img' src={this.state.img} alt={this.state.name} /></section>
                    : <div className='img-example'></div>
                }
                <form>
                    <h3>Image URL:</h3>
                    <input name='img' value={this.state.img} onChange={(e) => this.handleChange(e)} />
                    <h3> Product Name:</h3>
                    <input name='name' value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    <h3>Price: </h3>
                    <input name='price' value={this.state.price} onChange={(e) => this.handleChange(e)} />
                    <section className='btn-container'>
                        <Link to='/'>
                            <button className='btn' onClick={this.clearInputs}>Cancel</button>
                        </Link>

                        {this.state.edit
                            ? <Link to='/'>
                                <button className='btn' type='submit' onClick={() => this.editProduct(name, price, img)}>Save Changes</button>
                            </Link>
                            : <Link to='/' onClick={() => this.addProduct(name, price, img)}>
                                <button className='btn' type='submit' >Add to Inventory</button>
                            </Link>
                        }

                    </section>
                </form>
            </section>
        )
    }
}

export default Form;
