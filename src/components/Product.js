import React, {Component} from 'react';
import Menu from "./Menu";
import {store} from "./store";


class Product extends Component {
    render() {
        const listItems = store.getState().products.map((number) =>
            <li>{number}</li>
        );
        return (
            <div>
                <Menu/>
                <h1>Product</h1>
                {/*{listItems}*/}
            </div>
        )
    }
}

//populate();
export default Product;
