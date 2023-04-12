
import React from 'react';
import Product from './product';

class ProductContainer extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor(props) {
        super(props);
        this.state = {
            products: props.products
        }
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
   /*
    {
        "_id": "020",
        "isActive": "false",
        "price": "40.00",
        "picture": "/img/products/N19601_430.png",
        "name": "Rare Blend Oil Moisture Therapy Medium Texture",
        "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
        "tags": [
            "ojon",
            "texture"
        ]
    }
   */
    render() {
        console.log("products:", this.state.products)
        return (
            <React.Fragment>
                <div className='product-list'>
                { this.state.products.map(product => (
                        <Product 
                            id = {product._id}
                            isActive = {product.isActive}
                            price = {product.price}
                            picture = {product.picture}
                            name = {product.name}
                            about = {product.about}
                            tags = {product.tags}
                            key = {product._id}
                        />
                ))}
                </div>
            </React.Fragment>
        );
    }


}

// Export out the React Component
export default ProductContainer;