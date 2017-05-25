import React, { Component } from 'react';
import './css/style.css';
import uuid from 'uuid'

import TiPlus from 'react-icons/lib/ti/plus'



class Header extends Component {
  constructor(){
    super()
    this.state= {
      newTodo: {}
    }

  }

  handleSubmit(e){

  e.preventDefault()
  if(this.refs.todoName.value === ''){
    alert('Enter a Name')
  }else{
    this.setState({newTodo: {
      id: uuid.v4(),
       name: this.refs.todoName.value,
       date: this.refs.date.value,
       category: [this.refs.category.value, 'red'],
       completed: false

    }}, function() {
      this.props.addTodo(this.state.newTodo)
      this.refs.todoName.value =""

    })


  }

  }
render() {
    return (
      <div className='App-header' >
      <form onSubmit={this.handleSubmit.bind(this)}>

<input id="item" className="search" type="text" placeholder="Enter an Item"  ref='todoName'/>
          <button type='submit' className="plus"   value='submit'>
          <TiPlus  />
 </button>

<label>Choose a Category</label> <select name="Category" ref='category'>
<option value="">----</option>
   <option value="Family">Family</option>
   <option value="Work">Work</option>
   <option value="add more">add more</option>
 </select>

 <label>Date</label> <select name="Date" ref='date'>
 <option value="">----</option>
   <option value="Today">Today</option>
   <option value="Tomorrow">Tomorrow</option>
   <option value="Choose Date">Choose Date</option>
 </select>

</form>

</div>
)
}
}
export default Header;
