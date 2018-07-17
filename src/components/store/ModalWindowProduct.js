import React, {Component} from 'react';
import '../css/style_modal.css';
//import {addProduct, removeProduct} from '../product/products'
import {store} from "./index";
//import {compose} from 'redux';
import Modal from './Modal';

class ModalWindowProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        //this.re = this.props.handler

    }

    render() {
        // let date = new Date().valueOf();
        let _title,_price,_date,_category, id = this.props.title.id
        // const upd = e => {
        //     e.preventDefault()
        //     if(date>_date.valueOf()){
        //         return alert("срок годности не может быть меньше текущей даты!");
        //     }
        //     compose(
        //         store.dispatch(removeProduct(id)),
        //         store.dispatch(addProduct(_title.value,_price.value,_date.valueOf(),_category.value)),
        //     );
        //     this.closeModal()
        //     this.re(e)
        // }
        // const del = e => {
        //     e.preventDefault()
        //     compose(
        //         store.dispatch(removeProduct(id))
        //     );
        //     this.closeModal()
        //     this.re(e)
        // }
        let title = this.props.title.title;
        let price = this.props.title.price;
        let date = this.props.title.date;
        //let category = this.props.title.category;
        //let _title, _price, _date, _category;
        //console.log(title,price,date,category);
        let date_format = (e) => {
            let d = new Date(e);
            let day = (d.getDate() >= 10) ? d.getDate() : "0" + d.getDate();
            let month = (d.getMonth() >= 10) ? d.getMonth() : "0" + d.getMonth();
            return d.getFullYear() + "-" + month + "-" + day;
        }
        const list_category = store.getState().categories.map((number) =>
            <option value={number.title}>{number.title}</option>
        );
        return (
            <div>
                <button onClick={() => this.openModal()}>{this.props.title.title}</button>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <table ></table>
                    <p>Старое название:{title}</p>
                    <p>Старое цена:{price}</p>
                    <input type="date" value={date_format(date)}/>
                    <select>
                        {list_category}
                    </select>
                </Modal>

                {/*<button onClick={() => this.openModal()}>{this.props.title.title}</button>*/}
                {/*<Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>*/}
                {/*<p>Старое название:{title}</p>*/}
                {/*<p>Старое цена:{price}</p>*/}
                {/*<p>Годен до:{new Date(date)}</p>*/}
                {/*<select>{list_category}</select>*/}
                {/*</Modal>*/}
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

export default ModalWindowProduct;

