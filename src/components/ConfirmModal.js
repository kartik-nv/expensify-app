import React from 'react'
import Modal from 'react-modal'

const ConfirmModal = (props) => (
    <Modal
        isOpen={props.isModalVisible}
        contentLabel="Confirm Remove Expense"
        onRequestClose={props.handleModalClose}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Warning</h3>
        <p className="modal__body">Are you sure to remove this expense?</p>
        <div className="modal__buttons">
            <button className="button" onClick={props.removeExpense}>Remove</button>
            <button className="button button--modal" onClick={props.handleModalClose}>Cancel</button>
        </div>
        
    </Modal>
)

export default ConfirmModal