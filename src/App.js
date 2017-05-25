import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';
class App extends Component {
  constructor(){
    super();
    this.state={
      todos: []

  }
}


    componentWillMount(){
        this.setState({todos: [

          { id: 'id1',
            name: 'Go to London',
            date: 'Today',
            category: ['Family', 'red'],
            completed: false
    },
          { id: 'id2',
            name: 'Wash plate',
            date: 'Tomorrow',
            category: ['Work', 'green'],
            completed: false
          },

          { id: 'id3',
            name: 'Start Uber',
            date: 'Next month',
            category: ['Target', 'blue'],
            completed: false
    }




  ]});
    }
    handleAddTodo(todo){
let todoos = this.state.todos
todoos.push(todo)
this.setState({todos:todoos})
    }

    handleDeleteTodo(id){
let todoos = this.state.todos
let index = todoos.findIndex(x => x.id === id)
todoos.splice(index, 1)
this.setState({todos:todoos})
    }

    handleCompleteTodo(id){
let todoos = this.state.todos
let index = todoos.findIndex(x => x.id === id)

if(todoos[index].completed === false){
  todoos[index].completed = true
}else {
  todoos[index].completed = false
}

this.setState({todos:todoos})

    }
      render() {

    return (
      <div className="App">
        <Header addTodo={this.handleAddTodo.bind(this)} />
        <Body Todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} onComplete={this.handleCompleteTodo.bind(this)} />
        <Footer />

      </div>
    );
  }
}

export default App;
