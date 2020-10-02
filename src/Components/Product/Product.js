import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    render() {
        const { product } = this.props;
        const { deleteProductFn, productToEdit } = this.props;
        return (
            <section className='product-wrapper'>
                <section className='img-container'>
                    <img src={product.img} alt={product.name} />
                </section>
                <section className='info-container'>
                    <h3>{product.name}</h3>
                    <h3>${product.price}</h3>
                    <section className='product-btns'>
                        <button className='btn' onClick={() => deleteProductFn(product.product_id)}>Delete</button>
                        <button className='btn' onClick={() => productToEdit(product.product_id)}>Edit</button>
                    </section>
                </section>
            </section>
        )
    }
}

export default Product;