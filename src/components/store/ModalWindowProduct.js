import React, {Component} from 'react';
import '../css/style_modal.css';
import {store} from "./index";
import Modal from './Modal';
import {addProduct, removeProduct} from "../product/products";
import {compose} from "redux";

class ModalWindowProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.re = this.props.handler
    }

    render() {
        let _title, _price, _date, _category, id = this.props.title.id
        let title = this.props.title.title;
        let price = this.props.title.price;
        let date = this.props.title.date;
        let category = this.props.title.category;
        let date_format = (e) => {
            let d = new Date(e);
            let day = (d.getDate() >= 10) ? d.getDate() : "0" + d.getDate();
            let d_month = d.getMonth() + 1;
            let month = (d_month >= 10) ? d_month : "0" + d_month;
            return d.getFullYear() + "-" + month + "-" + day;
        }
        const list_category = store.getState().categories.map((number) =>
            <option value={number.title}>{number.title}</option>
        );
        const upd = e => {
            let d = new Date();
            let get_date = Date.parse(_date.value).valueOf();
            if (_title.value === "") {
                return alert("Поле название не заполнено!");
            } else if (isNaN(_price.value)) {
                return alert("Вы ввели не число!")
            } else if (_price.value < 0) {
                return alert("Цена не может быть меньше 0!");
            } else if (isNaN(get_date)) {
                return alert("Вы не указали дату!");
            } else if (get_date < d.valueOf()) {
                return alert("Годность товара не может быть проставленна задним числом!");
            }
            compose(
                store.dispatch(removeProduct(id)),
                store.dispatch(addProduct(_title.value, _price.value, _date.value, _category.value))
            );
            this.closeModal();
            this.re(e);
        }
        const del = e => {
            compose(
                store.dispatch(removeProduct(id))
            );
            this.closeModal();
            this.re(e);
        }
        return (
            <div>
                <button onClick={() => this.openModal()}>{this.props.title.title}</button>
                <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
                    <table>
                        <tr>
                            <td>Старое название:</td>
                            <td>{title}</td>
                        </tr>
                        <tr>
                            <td>Новая название:</td>
                            <td><input type="text" ref={input => _title = input}/></td>
                        </tr>
                        <tr>
                            <td>Старое цена:</td>
                            <td>{price}</td>
                        </tr>
                        <tr>
                            <td>Новая цена:</td>
                            <td><input type="text" ref={input => _price = input}/></td>
                        </tr>
                        <tr>
                            <td>Старая дата:</td>
                            <td>{date_format(date)}</td>
                        </tr>
                        <tr>
                            <td>Дата:</td>
                            <td><input type="date" ref={input => _date = input}/></td>
                        </tr>
                        <tr>
                            <td>Старая категория:</td>
                            <td>{category}</td>
                        </tr>
                        <tr>
                            <td>Новая категория:</td>
                            <td>
                                <select ref={input => _category = input}>
                                    {list_category}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" onClick={upd} value="Изменить"/>
                            </td>
                            <td>
                                <input type="button" onClick={del} value="Удалить" className="del"/>
                            </td>
                        </tr>
                    </table>

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

export default ModalWindowProduct;

