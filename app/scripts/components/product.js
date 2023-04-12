
import React from 'react';

class Product extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            isActive: props.isActive,
            price: props.price,
            picture: props.picture,
            name: props.name,
            about: props.about,
            tags: props.tags

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
        console.log("product state:", this.state)
        return (
            <div className='product' key={this.id}>
                <div className='name'>
                    {this.state.name}
                </div>
                <img src={`../..${this.state.picture}`} />
                <div className='price'>
                    ${this.state.price}
                </div>
                <div className='about'>
                    {this.state.about}
                </div>
            </div>
        );
    }


}


// Export out the React Component
export default Product;