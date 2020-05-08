import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/layout/header';
import Todos from './components/Todos';
import './App.css';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import {v4 as uuidv4} from 'uuid'; 
import axios from 'axios';

class App extends Component {
  state={
    todos:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos: res.data}));
  }
 //Toggle Complete

  markComplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.completed=!todo.completed;
      }
      return todo;
    })})
  }
//Delete item
delTodo=(id)=>{
  this.setState({
    todos:[...this.state.todos.filter(todo=>todo.id!==id)]
    })
  }

  //Add item
  addTodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed:false
    })
    .then(res=>this.setState({
      todos:[...this.state.todos,res.data]
    }))
    
  }

  render(){
    console.log(this.state.todos);
    return (
      <Router>
          <div className="App">
          <Header/>
          <Route exact path='/' render={props=>(
              <React.Fragment>
                  <AddTodo addTodo={this.addTodo}/>
                  <Todos key={this.state.todos.id} todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
              </React.Fragment>
          )}/>
          <Route path='/about'component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
