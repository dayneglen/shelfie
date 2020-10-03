import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

class Product extends Component {
    render() {
        const { product } = this.props;
        const { deleteProductFn} = this.props;
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
                        <Link to={{
                            pathname: `/edit/${product.product_id}`,
                            dataProps: {
                                product: product
                            }
                        }}>
                            <button className='btn'>Edit</button>
                        </Link>
                        
                    </section>
                </section>
            </section>
        )
    }
}

export default Product;