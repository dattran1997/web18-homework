/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../NASA_LOGO.gif'
import RegisterForm from './RegisterForm'
import LoginModal from './LoginModal';

class ModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div style={{marginRight: this.props.marginRight}}>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal style={{maxWidth:'800px'}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody >
            <div className='row' style={{justifyContent:'space-between'}}>
              <div className='col-3'>
                <LoginModal buttonLabel="login" toggleRegister={this.toggle}/>
              </div>
              <div className='row col-3 align-item-center' style={{alignItems:'flex-start'}}>
                <p style={{textAlign:'center'}}>NASA</p>
                <img className="img-responsive" style={{width:'20%'}} src={Logo} alt="Chania" /> 
              </div>
            </div>
            <p style={{textAlign:'end'}}>Welcome to the NASA universe!</p>
            <div className='row'>
              <div className='col-lg-7'>
                <img className="img-responsive" style={{width:'100%'}} src={Logo} alt="Chania" /> 
              </div>
              <div className='col-lg-5'> 
                <RegisterForm />
              </div>
            </div>
          </ModalBody> 
        </Modal>
      </div>
    );
  }
}

export default ModalButton;
