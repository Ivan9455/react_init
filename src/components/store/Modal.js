import React,{Component} from "react";

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
export default Modal;