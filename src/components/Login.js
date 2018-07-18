import React, {Component} from 'react';
import Menu from "./Menu";
import 'react-bootstrap';

class Login extends Component {
    constructor(props){
        super(props)
    }
    handler(e) {
        e.preventDefault()
        this.setState(e)
    }
    render() {
        let _login ,_password
        const check = e =>{

        }
        return (
            <div>
                <Menu/>
                <form className="p-4 m-auto col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="form-group w">
                        <label >Email address</label>
                        <input type="email" className="form-control"
                               placeholder="email@example.com" ref={input => _login = input}/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control"
                               placeholder="Password" ref={input => _password = input}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>

            </div>
        )
    }
}

export default Login;