import React, {Component} from 'react';
import Menu from "./Menu";
import 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <form className="p-4 m-auto">
                    <div className="form-group w">
                        <label >Email address</label>
                        <input type="email" className="form-control"
                               placeholder="email@example.com"/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control"
                               placeholder="Password"/>
                    </div>
                    {/*<div className="form-check">*/}
                        {/*<input type="checkbox" className="form-check-input" />*/}
                        {/*<label className="form-check-label" >*/}
                            {/*Remember meee*/}
                        {/*</label>*/}
                    {/*</div>*/}
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>

            </div>
        )
    }
}

export default Login;