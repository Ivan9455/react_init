import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import 'react-bootstrap'


class Menu extends Component {
    render() {
        return (
            <div className="nav nav-tabs bg-dark">
                <Link to="" className="nav-item nav-link">Login</Link>
                <Link to="product" className="nav-item nav-link">Product</Link>
                <Link to="category" className="nav-item nav-link">Category</Link>
            </div>
        )
    }
}

export default Menu;







