/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../NASA_LOGO.gif'
import LoginForm from './LoginForm';


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
        <Modal style={{maxWidth:'300px'}} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody >
            <div className='row' style={{justifyContent:'center'}}>
              <img className="img-responsive" style={{width:'46%'}} src={Logo} alt="Chania" />
            </div>
            <p style={{textAlign:'center'}}>Login and join us now!</p>
            <div className='row' style={{justifyContent:'center'}}>
              <div className='col-12'>
                 <LoginForm />
              </div>
            </div>
            <br/>
          </ModalBody> 
        </Modal>
      </div>
    );
  }
}

export default ModalButton;