import React, {Component} from 'react';
import '../css/style_modal.css';
import {addCategory, removeCategory} from '../category/category'
import {store} from "./index";
import {compose} from 'redux';

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
        const upd = e => {
            e.preventDefault()
            compose(
                store.dispatch(removeCategory(id)),
                store.dispatch(addCategory(_title.value)),
            );
            this.closeModal()
            this.re(e)
        }
        const del = e => {
            e.preventDefault()
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
                    <p>Новое название<input type="text" ref={input => _title = input}/></p>
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

export default ModalWindow;
