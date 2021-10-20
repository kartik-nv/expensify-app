import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';
import ErrorModal from './ErrorModal';

export class LoginPage extends React.Component {

  state = {
    isError: undefined
  }

  FacebookAuth = () => {
    this.props.startLoginWithFacebook().catch(() => {
      this.setState(() => ({
        isError: 'Google'
      }))
    })
  }

  GoogleAuth = () => {
    this.props.startLoginWithGoogle().catch(() => {
      this.setState(() => ({
        isError: 'Facebook'
      }))
    })
  }

  handleModalClose = () => {
    this.setState(() => ({
      isError: undefined
    }))
  }

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <p>It's time to track your expenses without a hitch.</p>
          <div className="box-layout__login-buttons">
            <button
              className="button"
              onClick={this.GoogleAuth}
              >
              Login with Google
            </button>
            <p>or</p>
            <button
              className="button"
              onClick={this.FacebookAuth}
            >
              Login with Facebook
            </button>
          </div>
        </div>
        <ErrorModal isModalVisible={this.state.isError} handleModalClose={ this.handleModalClose } />
        
      </div>
    )
  }
} 

const mapDispatchToProps = (dispatch) => ({
  startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
  startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
