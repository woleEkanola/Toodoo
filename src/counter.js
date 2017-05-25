import React, { Component } from 'react';
import './css/style.css';




class Counter extends Component {
render() {
    return (
      <div >

 <h3 >{this.props.message[0]} {this.props.num } {this.props.message[1]}</h3>

</div>
)
}
}
export default Counter;
