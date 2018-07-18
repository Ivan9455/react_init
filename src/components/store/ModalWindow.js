import React, {Component} from 'react';
import '../css/style_modal.css';
import {addCategory, removeCategory} from '../category/category'
import {store} from "./index";
import {compose} from 'redux';
import Modal from './Modal';

class ModalWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.re = this.props.handler
    }

    render() {
        let _title, id = this.props.title.id
        const check = () => {

        }
        const upd = e => {
            for (let i = 0; i < store.getState().products.length; i++) {
                if (store.getState().products[i].category === this.props.title.title ||
                    store.getState().products[i].category === _title.value) {
                    console.log(store.getState().products[i].category + " " + this.props.title.title + " " + _title.value);
                    return alert("Не возможно удалить даннуюь категорию. \nПока существует хоть один товар с данной категорией!");;
                }
            }
            compose(
                store.dispatch(removeCategory(id)),
                store.dispatch(addCategory(_title.value)),
            );
            this.closeModal()
            this.re(e)
        }
        const del = e => {
            for (let i = 0; i < store.getState().products.length; i++) {
                if (store.getState().products[i].category === this.props.title.title) {
                    console.log(store.getState().products[i].category + " " + this.props.title.title );
                    return alert("Не возможно удалить даннуюь категорию. \nПока существует хоть один товар с данной категорией!");;
                }
            }
            compose(
                store.dispatch(removeCategory(id))
            );
            this.closeModal()
            this.re(e)
        }
        return (
            <div>
                <button onClick={() => this.openModal()}>{this.props.title.title}</button>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <p>Старое название:{this.props.title.title}</p>
                    <p>Новое название:<input type="text" ref={input => _title = input}/></p>
                    <p>
                        <input type="button" onClick={upd} value="Изменить"/>
                        <input type="button" onClick={del} value="Удалить" className="del"/>
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

export default ModalWindow;

