import React from 'react'
import Modal from 'react-modal'

const ErrorModal = (props) => (
    <Modal
        isOpen={!!props.isModalVisible}
        contentLabel="Login Error"
        onRequestClose={props.handleModalClose}        
        closeTimeoutMS={200}
    className="modal"
    ariaHideApp={false}
    >
        <h3 className="modal__title">Error</h3>
    <p className="modal__body">{ `Your account with ${props.isModalVisible} already exists. Please Login via ${props.isModalVisible}.` }</p>
        <button className="button button--modal" onClick={props.handleModalClose}>OK</button>        
    </Modal>
)

export default ErrorModal