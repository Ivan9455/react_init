import React, {Component} from 'react';
import '../css/style_modal.css';
//import {addProduct, removeProduct} from '../product/products'
import {store} from "./index";
//import {compose} from 'redux';
import Modal from './Modal';
//import {removeCategory} from "../category/category";
//import {compose} from "redux/index";

class ModalWindowProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.re = this.props.handler

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
        let category = this.props.title.category;
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
        const upd = e => {
            e.preventDefault()
            // compose(
            //     store.dispatch(removeCategory(id)),
            //     store.dispatch(addCategory(_title.value)),
            // );
            this.closeModal()
            this.re(e)
        }
        const del = e => {
            e.preventDefault()
            // compose(
            //     store.dispatch(removeCategory(id))
            // );
            this.closeModal()
            this.re(e)
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
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Старое цена:</td>
                            <td>{price}</td>
                        </tr>
                        <tr>
                            <td>Новая цена:</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Дата:</td>
                            <td><input type="date" value={date_format(date)}/></td>
                        </tr>
                        <tr>
                            <td>Категория:</td>
                            <td>
                                <select value={category}>
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
                    {/*<p>Старое название:{title}</p>*/}
                    {/*<p>Новая название:<input type="text" /></p>*/}
                    {/*<p>Старое цена:{price}</p>*/}
                    {/*<p>Новая цена<input type="text" /></p>*/}
                    {/*<input type="date" value={date_format(date)}/>*/}
                    {/*<select>*/}
                        {/*{list_category}*/}
                    {/*</select>*/}
                    {/*<p>*/}
                        {/*<input type="button" onClick={upd} value="Изменить"/>*/}
                        {/*<input type="button" onClick={del} value="Удалить" className="del"/>*/}
                    {/*</p>*/}
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

