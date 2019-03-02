/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../NASA_LOGO.gif';

class ModalExample extends React.Component {
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
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <div className='nav-button'>
            
            </div>
            <img className="img-responsive" style={{width:'100%'}} src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Chania" />
            <div className='row'>
                <div className='col-3'>
                    <img className="img-responsive" style={{width:'115%'}} src={Logo} alt="Chania" />
                </div>
                <div className='col-9'>
                    <h3 style={{marginTop:'22px'}}>NAME-NASA</h3>
                </div>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fuga, nihil nesciunt quo delenit</p>
            <hr />
            <div className='row'>
                <div className='col-2'>
                    <img className="img-responsive" style={{width:'150%'}} src={Logo} alt="Chania" />
                </div>
                <div className='col-10'>
                    <h5>Name-NASA</h5>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur fuga, nihil nesciunt quo delenit</p>
                </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
