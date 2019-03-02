import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Button className='form-control' color='primary'>Login with facebook</Button>  
      <p style={{textAlign:'center'}}>OR</p>
      <InputGroup>
        <Input className='form-control' placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input className='form-control' placeholder="password" />
      </InputGroup>
      <br />
      <Button className='form-control' color='primary'>Login</Button>
    </div>
  );
};

export default Example;