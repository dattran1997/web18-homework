import React, { Component } from 'react'
import Card from './Card';

export default class Body extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
            <Card marginRight='5px' marginBottom='5px' />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    )
  }
}
