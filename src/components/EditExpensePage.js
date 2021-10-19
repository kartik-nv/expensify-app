import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal'
import ExpenseForm from './ExpenseForm';
import ConfirmModal from './ConfirmModal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

  state = {
    isModalVisible: false
  }

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  componentWillMount() {
    Modal.setAppElement('body')
  }

  handleModalClose = () => {
    this.setState(() => ({
      isModalVisible: false
    }))
  }

  handleModalOpen = () => {
    this.setState(() => ({
      isModalVisible: true
    }))
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.handleModalOpen}>Remove Expense</button>
        </div>
        <ConfirmModal 
          isModalVisible={this.state.isModalVisible}
          handleModalClose={this.handleModalClose}
          removeExpense = {this.onRemove}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  removeExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
