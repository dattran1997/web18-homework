import React, { Component } from 'react'

class SubmitForm extends Component {
  state={
      input: "",
  }  

  handleInputChange = (event) =>{
    this.setState({
        input: event.target.value,
    });
  }
  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.getInput(this.state.input);
  }
  render() {
    return (
     <form onSubmit ={this.handleSubmit}>
        <input onChange={this.handleInputChange} className ='form-control' type='text' value={this.state.input} />
        <input className ='btn btn-primary form-control' type='submit' value='search' />
     </form>
    )
  }
}

export default SubmitForm
