import React, {Component} from 'react';
import '../css/style_modal.css';
import {addProduct, removeProduct} from '../product/products'
import {store} from "./index";
import {compose} from 'redux';

class ModalWindowProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.re = this.props.handler

    }
    render() {
        let date = new Date().valueOf();
        let _title,_price,_date,_category, id = this.props.title.id
        const upd = e => {
            e.preventDefault()
            if(date>_date.valueOf()){
                return alert("срок годности не может быть меньше текущей даты!");
            }
            compose(
                store.dispatch(removeProduct(id)),
                store.dispatch(addProduct(_title.value,_price.value,_date.valueOf(),_category.value)),
            );
            this.closeModal()
            this.re(e)
        }
        const del = e => {
            e.preventDefault()
            compose(
                store.dispatch(removeProduct(id))
            );
            this.closeModal()
            this.re(e)
        }
        return (
            <div>
                <button onClick={() => this.openModal()}>{this.props.title.title}</button>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <p>Старое название:{this.props.title.title}</p>
                    <p>Новое название<input type="text" ref={input => _title = input}/></p>
                    <p>Старое цена:{this.props.title.price}</p>
                    <p>Новое название<input type="text" ref={input => _price = input}/></p>
                    <p>Старое название:{this.props.title.title}</p>
                    <p>Новое название<input type="date" ref={input => _date = input}/></p>
                    <p>
                        <input type="button" onClick={upd} value="rename"/>
                        <input type="button" onClick={del} value="delete" className="del"/>
                    </p>
                </Modal>
            </div>
        )
    }

    openModal() {
        this.setState({isModalOpen: true})
    }

    closeModal() {
        this.setState({isModalOpen: false})
    }
}

class Modal extends Component {
    render() {
        if (this.props.isOpen === false)
            return null

        return (
            <div>
                <div className="modal_st">
                    {this.props.children}
                </div>
                <div className="bg_st" onClick={e => this.close(e)}/>
            </div>
        )
    }

    close(e) {
        e.preventDefault()

        if (this.props.onClose) {
            this.props.onClose()
        }
    }
}

export default ModalWindowProduct;

