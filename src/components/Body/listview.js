import React, { Component } from 'react';
import './body.css';

import MdAssignmentTurnedIn from 'react-icons/lib/md/assignment-turned-in'
import GoTrashcan from 'react-icons/lib/go/trashcan'


 class Listview extends Component {
   constructor(){
     super()
     this.state ={category:[]}
   }

 componentWillMount(){
let category=this.props.generateCategory();
this.setState({category:category})

  }



  deleteTodo(id){
this.props.onDelete(id)
  }


  completeTodo(id){
this.props.onComplete(id)
  }
getClass(id){
  let classs = [];
   ;


let index = this.props.Todos.findIndex(x => x.id === id)
if(this.props.Todos[index].completed){
  classs.push('completed')
}
return classs.join(' ');
}

render() {

  let todoList;


  if(this.props.Todos){
    todoList= this.props.Todos.map(Todo =>{
      return(
        <li key= {Todo.id} className={ this.getClass(Todo.id)}> {Todo.name}<span> <MdAssignmentTurnedIn  onClick={this.completeTodo.bind(this, Todo.id)}/> <GoTrashcan onClick={this.deleteTodo.bind(this, Todo.id)} /> </span> </li>
      )
    });

  };

  let categoryDisplay ;
  if(this.state.category){

    categoryDisplay= this.state.category.map(category =>{
      return(

        <li key= {category}  > {category} </li>
      )
    });

  };




    return (
      <div >

 <ul>
 {todoList}
</ul>
</div>
)
}
}
export default Listview;
/*<ul >
      <li > All </li>
      { categoryDisplay }
      </ul> */
