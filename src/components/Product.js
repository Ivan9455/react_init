import React, {Component} from 'react';
import Menu from "./Menu";
import {store} from "./store";
import ModalWindowProduct from "./store/ModalWindowProduct";
import {addProduct} from "./product/products";


class Product extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event,title,price,date,category) {
        store.dispatch(addProduct(title.value, price.value, date.value, category.value));
        this.setState(event);
    }
    render() {
        let _title, _price, _date, _category
        const list_category = store.getState().categories.map((number) =>
            <option value={number.title}>{number.title}</option>
        );
        const list = store.getState().products.map((number) =>
            <ModalWindowProduct handler={this.handler} title={number}/>
        );
        const handleSubmit = e => {
            let d = new Date();
            let get_date = Date.parse(_date.value).valueOf();
            if (_title.value === "") {
                return alert("Поле название не заполнено!");
            } else if (_price.value < 0) {
                return alert("Цена не может быть меньше 0!");
            }else if(isNaN(get_date)){
                return alert("Вы не указали дату!");
            } else if (get_date < d.valueOf()) {
                return alert("Годность товара не может быть проставленна задним числом!");
            }
            //compose(store.dispatch(addProduct(_title.value,_price.value,_date.value,_category.value)));
            console.log(_title.value, _price.value, get_date, _category.value)
            this.handleChange(e,_title.value, _price.value, get_date, _category.value);
        }
        return (
            <div>
                <Menu/>
                <h1>Product</h1>
                <form>
                    <table>
                        <tr>
                            <td>Название:</td>
                            <td><input type="text" ref={input => _title = input}/></td>
                        </tr>
                        <tr>
                            <td>Цена:</td>
                            <td><input type="text" ref={input => _price = input}/></td>
                        </tr>
                        <tr>
                            <td>Годен до:</td>
                            <td><input type="date" ref={input => _date = input}/></td>
                        </tr>
                        <tr>
                            <td>Категория:</td>
                            <td><select ref={input => _category = input}
                                        onChange={this.handleChange}>{list_category}</select></td>
                        </tr>
                        <tr>
                            <td colSpan="2"><input type="button" value="Создать" onClick={handleSubmit}/></td>
                        </tr>
                    </table>
                </form>
                {list}
            </div>
        )
    }
}

//populate();
export default Product;
