import React, {Component} from 'react';
import Menu from "./Menu";
import {store} from "./store/index";
import ModalWindow from "./store/ModalWindow";
import {addCategory} from "./category/category";
import {compose} from 'redux';

class Category extends Component {
    constructor(props){
        super(props)
        this.handler = this.handler.bind(this)
    }

    handler(e) {
        e.preventDefault()
        this.setState(e)
    }

    render() {
        const listItems = store.getState().categories.map((number) =>
            <ModalWindow handler = {this.handler} title={number}/>
        );
        let _title = ""
        const onSubmit = e => {
            compose(store.dispatch(addCategory(_title.value)));
            _title.value = '';
            this.handler(e)
        };

        return (
            <div>
                <Menu/>
                <h1>Category</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" ref={input => _title = input} required/>
                    <button>add</button>
                </form>
                {listItems}
            </div>
        )
    }
}

export default Category;