import React, { Component } from 'react';
import './body.css';
import uuid from 'uuid'
import MdAssignmentTurnedIn from 'react-icons/lib/md/assignment-turned-in'
import GoTrashcan from 'react-icons/lib/go/trashcan'



class Blockview extends Component {
  constructor(){
    super()
    this.state ={
       categorizedTodo:[]
    }
}
 componentWillMount(){
   this.setState({
     categorizedTodo: [
       {     id: uuid.v4(),
                name: 'Family',
                  categoryTodos:['gdkndkndo to djkbnkjdchurch', 'go to farm']        },
         {     id: uuid.v4(),
         name: 'School',
             categoryTodos:['djbcjkdgo to church', 'gdjkbkjo to farm']        },
     {     id: uuid.v4(),
     name: 'Work',
                 categoryTodos:['kd bdjrch', 'go to dhkdfarm']        }
     ]
 })
 let categoryArray=this.props.generateCategory();

 }

render() {


let catTodo = this.state.categorizedTodo.map(category=>{
  let catList =   category.categoryTodos.map(x=>{
    return(
      <li key={uuid.v4()}>{x}</li>
    )
  })
  return(
    <div key={uuid.v4()}>
    <h1 key={category.id}>{category.name}</h1>
    <ul key={uuid.v4()}>
{catList}
</ul>
    </div>
  )
});


    return (
      <div >

 <h3 > Blockview</h3>
{catTodo}
</div>
)
}
}
export default Blockview;
