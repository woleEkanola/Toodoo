import React, { Component } from 'react';
import './css/style.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Blockview from './components/Body/blockview.js'
import Listview from './components/Body/listview.js'
import Taskview from './components/Body/taskview.js'

import TiThList from 'react-icons/lib/ti/th-list'
import TiThLarge from 'react-icons/lib/ti/th-large'
import GoSearch from 'react-icons/lib/go/search'
import GoGear from 'react-icons/lib/go/gear'



class Body extends Component {
  constructor(){
    super()
    this.state={
      sortedCategory : [],

    }
  }
  matchTodoArray(a){
a.map(category =>{
  this.props.Todos.filter(Todo =>{
  //  todoListArrayG.push(Todo.name)
      });

})
  }

  generateTodoList(){
    let todoListArrayG = []
    this.props.Todos.map(Todo =>{
      todoListArrayG.push(Todo.name)

        });
  }

  generateCategory(){
    let categoriesAll = []
    this.props.Todos.map(Todo =>{
      categoriesAll.push(Todo.category[0])
    });


    var uniq = categoriesAll
  .map((category) => {
    return {count: 1, category: category}
  })
  .reduce((a, b) => {
    a[b.category] = (a[b.category] || 0) + b.count
    return a
  }, {})

  var sorted = Object.keys(uniq).sort((a, b) => uniq[a] < uniq[b])


  this.setState({sortedCategory:sorted})

  }


  deleteTodo(id){
    this.props.onDelete(id)
  }
  completeTodo(id){
this.props.onComplete(id)
  }
render() {

    return (
      <div className='App-body'>
      <Router>
        <div>
          <ul>
          <li><Link to="/list"><TiThList  /></Link></li>
            <li><Link to="/"><TiThLarge  /></Link></li>
            <li><GoSearch  /></li>
            <li><GoGear  /></li>
          </ul>

          <hr/>

          <Route  path="/list" render={() => (
  <Listview Todos={this.props.Todos} onDelete={this.deleteTodo.bind(this)}  onComplete={this.completeTodo.bind(this) }    generateCategory={this.generateCategory.bind(this)}/>
)} />
          <Route exact path="/" render={() => (
  <Blockview Todos={this.props.Todos}   generateCategory={this.generateCategory.bind(this)}/>
  )} />
          <Route path="/task" component={Taskview}/>
        </div>
      </Router>

</div>
)
}
}
export default Body;
