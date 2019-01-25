import React, {Component} from "react";
import './_modal.scss'


const ModalShow = ({handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button className='btn-close' onClick={handleClose}>Close</button>
            </section>
        </div>
    );
};

class Modal extends Component {
    state = {show: false};

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    render() {
        return (
            <div>
                <ModalShow show={this.state.show} handleClose={this.hideModal}>
                    <h3>Description:</h3>
                    <p>{this.props.dsc}</p>
                    <h3>Food pairing:</h3>
                    <ul>
                        {this.props.food.map((elem) => <li>{elem}</li>)}
                    </ul>
                    <h3>Brewers tips:</h3>
                    <p>{this.props.tips}</p>
                </ModalShow>
                <button className='btn-more' type="button" onClick={this.showModal}>
                    Read more...
                </button>
            </div>

        );
    }
}

export default Modal